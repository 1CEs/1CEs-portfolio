import { useContext } from 'react'
import HomeSection from './home'
import { SectionContext } from '../../contexts/use-section'
import AboutSection from './about'

const MatchSection = () => {
    const { section } = useContext(SectionContext)!
    if (section == "Home") return <HomeSection />
    if (section == "About") return <AboutSection />
}

export default MatchSection