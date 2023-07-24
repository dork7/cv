import React from 'react'
import './skill-card.styles.css'
const SkillCard = ({ skill }) => {
    return (
        <button class="ui-btn">
            <span>
                {skill}
            </span>
        </button>
    )
}

export default SkillCard