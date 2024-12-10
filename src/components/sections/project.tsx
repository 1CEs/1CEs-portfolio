import React, { useEffect, useState } from 'react'
import Card from '../card/card'
import CardHeader from '../card/card-header'
import CardBody from '../card/card-body'
import useFetch from '../../hooks/use-fetch'
import Button from '../button'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

const ProjectSection: React.FC = () => {
    const { data, isLoading, error } = useFetch<UserResponse>('https://api.github.com/users/1CEs')
    const { data: repos, isLoading: reposLoading, error: reposError } = useFetch<UserRepository[]>(data?.repos_url!)
    const [md, setMD] = useState<string | null>(null)
    const [tabSelector, setTabSelector] = useState<string>("repository")
    const [repoSelector, setRepoSelector] = useState<string>('1CEs')

    useEffect(() => {
        const fetchMarkDown = async () => {
            try {
                const res = await fetch(`https://raw.githubusercontent.com/1CEs/${repoSelector}/refs/heads/main/README.md`)
                const markdown = await res.text()
                setMD(markdown)
            } catch (error) {
                console.log(error)
            }
        }
        fetchMarkDown()
    },[repoSelector])

    if (data && repos) {
        return (
            <div className='p-6 flex gap-x-6'>
                <div className='flex basis-2/6 flex-col gap-y-6'>
                    <Card className='w-full'>
                        <CardHeader>Github Profile</CardHeader>
                        <CardBody className='px-1 pb-6 flex flex-col gap-y-3'>
                            <div className='bg-primary-100 p-1 text-2xl text-white text-center'>
                                {data.login}
                            </div>
                            <div className='flex py-3 gap-x-1 justify-center'>
                                <img className='w-44 h-44' src={data.avatar_url} alt='avatar' />
                                <div className='border-2 hero-border-secondary bg-white-100 p-2 basis-1/2 max-h-44 overflow-y-scroll'>
                                    <p className='text-lg'>{data.bio}</p>
                                </div>
                            </div>
                            <ul className='flex flex-wrap px-6'>
                                <li><Button>{data.name}</Button></li>
                                <li><Button>{data.location}</Button></li>
                                <li><Button>{data.html_url}</Button></li>
                                <li><Button>Join: {data.created_at.split("T")[0]}</Button></li>
                            </ul>
                            <div className='flex flex-col items-center justify-center px-6'>
                                <div className='flex justify-center w-full'>
                                    <Button>Play</Button>
                                    <Button className='w-full'></Button>
                                </div>
                                <p>Name Song</p>
                            </div>
                        </CardBody>
                    </Card>
                    <div className='flex flex-col'>
                        <ul className='flex'>
                            <li onClick={() => setTabSelector('repository')}><Button className={`${tabSelector == "repository" && 'border-none bg-primary-100'}`}>Repositories</Button></li>
                            <li onClick={() => setTabSelector('followers')}><Button className={`${tabSelector == "followers" && 'border-none bg-primary-100'}`}>Followers({data.followers})</Button></li>
                            <li onClick={() => setTabSelector('following')}><Button className={`${tabSelector == "following" && 'border-none bg-primary-100'}`}>Following({data.following})</Button></li>
                        </ul>
                        <div className='flex w-full h-full hero-border-secondary border-t-[transparent!important] border-2 bg-white-100'>
                            <ul className='py-2 w-full'>
                                {
                                    repos.map((repo: UserRepository, idx: number) => (
                                        <li
                                            onClick={() => setRepoSelector(repo.name)}
                                            className={`px-3 cursor-pointer text-xl ${repoSelector == repo.name && 'bg-purple text-white'}`}
                                            key={idx}>
                                                {repo.name}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex basis-4/6'>
                    <Card>
                        <CardHeader>Preview Screen</CardHeader>
                        <CardBody className='p-6 max-h-[700px] h-fit overflow-y-scroll bg-white-100'>
                            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} children={md} />
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    } else {
        return <div>No content</div>
    }

}

export default ProjectSection