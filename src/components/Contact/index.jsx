import React from 'react'
import MediaCard from '../Media'
import './contact.styles.css'
import ContactForm from './ContactForm'
import Footer from '../Footer'
const ContactSection = ({ userData }) => {
    const { links, email, city, country, phone } = userData
    return (
        <>
            <div className='contact-container'>
                <div className='wrapper'>
                    <div>
                        <MediaCard {...{ links }} />
                        <span>
                            {email}
                        </span>
                        <span>
                            {phone}
                        </span>
                        <span>
                            {city} , {country}
                        </span>
                    </div>
                    <div className='left-arrow'>
                        {/* -> */}
                    </div>
                </div>
                <ContactForm />
            </div>

        </>
    )
}

export default ContactSection