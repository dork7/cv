import React from 'react'
const ProjectCardComponent = ({ project }) => {
    const { name, description, link } = project
    return (
        <>
            <div className="card">
                <div>
                    {name}
                    <p>
                        {description}
                    </p>
                </div>
                {link ? <a href={link} target='_blank'>LINK</a> : ''}
            </div>
        </>
    )
}

export default ProjectCardComponent