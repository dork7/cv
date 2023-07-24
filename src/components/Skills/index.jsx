import { Badge } from '@chakra-ui/react'
import React from 'react'
import SkillCard from './SkillCard'

const SkillsComponent = ({ skills }) => {
    return (
        <div className='skills-container'>
            {skills.map((skill, idx, array) => {
                return (
                    <SkillCard {...{ skill }} />
                )
            })}
        </div >
    )
}

export default SkillsComponent