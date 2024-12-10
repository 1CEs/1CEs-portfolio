import { useContext } from 'react'
import HomeSection from './home'
import { SectionContext } from '../../contexts/use-section'
import AboutSection from './about'
import { OptionProvider } from '../../contexts/use-option'

const MatchSection = () => {
    const { section } = useContext(SectionContext)!
    if (section == "Home") return <HomeSection />
    if (section == "About") return <OptionProvider><AboutSection /></OptionProvider>
}

export default MatchSection