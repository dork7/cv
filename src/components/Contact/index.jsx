import React from 'react'
import MediaCard from '../Media'
import './contact.styles.css'
import ContactForm from './ContactForm'
import Footer from '../Footer'
const ContactSection = ({ userData }) => {
    const { links, email, city, country, phone } = userData
    const CopyToClipBoard = (val) => {
        navigator.clipboard.writeText(val.trim())
    }
    return (
        <>
            <div className='contact-container'>
                <div className='wrapper'>
                    <div>
                        <MediaCard {...{ links }} />
                        <span onClick={() => CopyToClipBoard(email)}>
                            Email: {email}&nbsp;
                            <span onClick={() => CopyToClipBoard(email)}>
                                <svg width="18px" height="18px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="#ffffff" stroke-width="1.512"></path> <path opacity="0.5" d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#ffffff" stroke-width="1.512"></path> </g></svg>
                            </span>
                        </span>
                        <span>
                            Phone:  {phone}&nbsp;
                            <span onClick={() => CopyToClipBoard(phone)}>
                                <svg width="18px" height="18px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="#ffffff" stroke-width="1.512"></path> <path opacity="0.5" d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#ffffff" stroke-width="1.512"></path> </g></svg>
                            </span>

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