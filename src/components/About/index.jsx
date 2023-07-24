import React from 'react'
import './about.styles.css'
const AboutComponent = ({ userData }) => {
    const { aboutMe } = userData
    return (
        <div className='about-container'>
            <div className="section">
                <div>

                    {aboutMe}
                </div>
                <div>
                    education
                </div>
            </div>
        </div>
    )
}

export default AboutComponent