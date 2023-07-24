import React from 'react'
import './about.styles.css'
const AboutComponent = ({ userData }) => {
    const { aboutMe, experience } = userData
    return (
        <div className='about-container'>
            <div className="section">
                <div>
                    {aboutMe}
                </div>
                <div className='experience-section'>
                    {
                        experience.map(({
                            designation,
                            company,
                            place,
                            description,
                            year
                        }) => {
                            return (<div key={company} className="card">
                                <div>
                                    {company}
                                    <p>
                                        {designation}
                                    </p>
                                    <p>
                                        {place}
                                    </p>
                                    <p>
                                        {year}
                                    </p>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default AboutComponent