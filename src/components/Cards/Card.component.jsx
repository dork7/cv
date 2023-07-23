import React from 'react'
import './card.styles.css'
const CardComponent = ({ project }) => {
    const { name, description, link } = project
    return (
        <>

            <div class="card">
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

export default CardComponent