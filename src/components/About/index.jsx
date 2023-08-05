import React from 'react'
import './about.styles.css'
const AboutComponent = ({ userData }) => {
    const { aboutMe, aboutMe2, experience } = userData
    return (
        <div className='about-container'>
            <div className="section">
                <p>
                    {aboutMe}
                </p>
                <p style={{
                    textAlign: "center"
                }}>
                    Experience
                </p>
                <div className='experience-section'>
                    {
                        experience.map(({
                            designation,
                            company,
                            place,
                            description,
                            year
                        }) => {
                            return (<div key={company} className="exp-card">
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