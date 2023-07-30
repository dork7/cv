import React from 'react'
import BtnPrimary from '../Button/btn-primary'
import './skills.styles.css'
const SkillsComponent = ({ skills }) => {
    return (
        <div className='skills-container'>
            {skills.map((skill, idx, array) => {
                return (
                    <BtnPrimary className={"ui-btn skills-btns"} key={idx} title={skill} />
                )
            })}
        </div >
    )
}

export default SkillsComponent