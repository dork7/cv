import React, { useEffect } from 'react'
import useIntersectionObserver from './../hooks/useIntersectionObserver'
import { useState } from 'react';
import { useRef } from 'react';
import Hamster from '../components/Hamster';
import Loader from '../components/Loader'
const CVPage = () => {

    const [setRef, setSectionRef] = useIntersectionObserver()

    return (
        <>
            <div className="main-section">
                <div data-section id="section-1"
                    className="top-main-section show" ref={setSectionRef(0)}>
                </div>
                <div data-section id="section-2" ref={setSectionRef(1)}>
                    this is a section2
                </div>
                <div data-section id="section-3" ref={setSectionRef(2)}>
                    this is a section 3
                </div>
            </div>


            <section className="top-section full-screen-section">
                <div className="left">
                    <h1>Hamza Mehmood</h1>
                    <p>
                        The only platform that gives AI the ability to autonomously build web
                        services.
                    </p>
                </div>
                <div className="right"></div>
            </section>
            <section className="full-screen-section first-main-section">
                <h1>Completely Visual</h1>
                <p>Never touch the command line, from provision to production.</p>
                <div data-section-to-show="section-1" ref={setRef(0)}>

                </div>
            </section>
            <section className="full-screen-section">
                <h1>Full Stack</h1>
                <p>
                    Never manage infrastructure again. One click gets you: a database, APIs,
                    deployments, hosting, etc.
                </p>
                <div data-section-to-show="section-2" ref={setRef(1)}>

                </div>
            </section>
            <section className="full-screen-section">
                <h1>Launch Faster</h1>
                <p>Logical can get systems to market in minutes instead of weeks.</p>
                <div data-section-to-show="section-3" ref={setRef(3)}
                ></div>
            </section>
        </>
    )
}

export default CVPage