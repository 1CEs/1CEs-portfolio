import React, { useContext } from "react"
import { OptionContext } from "../../../contexts/use-option"
import MyselfOption from "./myself"
import SkillOption from "./skill"
import EducationOption from "./education"


const MatchOption: React.FC = () => {
    const { option } = useContext(OptionContext)!
    if(option == 'myself') return <MyselfOption />
    if(option == 'skills & tools') return <SkillOption />
    if(option == 'education') return <EducationOption />
}

export default MatchOption