import React, { useRef, useState } from 'react'
import './contactform.styles.css'
import Loader from './../Loader'
const ContactForm = () => {

    const emailRef = useRef()
    const messageRef = useRef()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        setIsLoading(true)
        const sendMail = await fetch('https://node-app-tau.vercel.app/v1/mail', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                email: 'hamzameh122@gmail.com',
                mailBody: `Email :${emailRef.current.value} Message: ${messageRef.current.value}`
            })
        })
        setIsLoading(false)
    }
    return (
        <div><div className="form-container">
            <form className="form" onSubmit={onSubmitHandler} id="form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input ref={emailRef} type="text" id="email" name="email" placeholder="Enter your email" required="" />
                </div>
                <div className="form-group">
                    <textarea ref={messageRef} type="text" id="message" name="message" rows="4" placeholder="Message here" required="" />
                </div>

                <button className="form-submit-btn" type="submit">   {isLoading ? <Loader /> : "Send Mail"}</button>
            </form>


        </div></div>
    )
}

export default ContactForm