import { useState, useEffect } from "react"

interface UseFetchResult<T> {
    data: T | null
    isLoading: boolean
    error: string | null
}

const useFetch = <T>(url: string, options?: RequestInit): UseFetchResult<T> => {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let isMounted = true

        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url, options)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                // Determine how to parse the response based on content type
                const contentType = response.headers.get('Content-Type')
                let result: T
                if (contentType?.includes('application/json')) {
                    result = (await response.json()) as T
                } else {
                    result = (await response.text()) as unknown as T
                }

                if (isMounted) {
                    setData(result)
                    setError(null)
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : 'An unknown error occurred')
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false)
                }
            }
        }

        fetchData()

        return () => {
            isMounted = false
        }
    }, [url, options])

    return { data, isLoading, error }
}

export default useFetch