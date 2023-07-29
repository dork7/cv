import React from 'react';
import ProjectCards from '../components/Projects/ProjectCards';
import { useUserDataSet } from '../hooks/useUserDataSet';
import useIntersectionObserver from './../hooks/useIntersectionObserver';
import MediaCard from '../components/Media';
import SkillsComponent from '../components/Skills';
import AboutComponent from '../components/About';
import Footer from '../components/Footer';
import ContactSection from '../components/Contact';
const CVPage = () => {

    const userData = useUserDataSet()
    const { name, description, projects, skills, aboutMeSubHeading, skillsSubHeading, projectSubHeading, contactSubHeading } = userData
    const [setRef, setSectionRef] = useIntersectionObserver()

    return (
        <>
            <div className="main-section">
                <div data-section id="section-1"
                    className="top-main-section show" ref={setSectionRef(0)}>
                    <AboutComponent {...{ userData }} />
                </div>
                <div data-section id="section-2" ref={setSectionRef(1)}>
                    <SkillsComponent  {...{ skills }} />
                </div>
                <div data-section id="section-3" ref={setSectionRef(2)}>
                    <ProjectCards  {...{ projects }} />
                </div>
                <div data-section className='contact-section' id="section-4" ref={setSectionRef(3)}>
                    <ContactSection {...{ userData }} />
                    <Footer />

                </div>
            </div>


            <section className="top-section full-screen-section">
                <div className="left">
                    <h1>{name}</h1>
                    <p>
                        {description}
                    </p>
                </div>
                <div className="right"></div>
            </section>
            <section className="full-screen-section first-main-section">
                <h1>About me</h1>
                <p>{aboutMeSubHeading}</p>
                <div data-section-to-show="section-1" ref={setRef(0)}>

                </div>
            </section>
            <section className="full-screen-section">
                <h1>Skills</h1>
                <p>
                    {skillsSubHeading}
                </p>
                <div data-section-to-show="section-2" ref={setRef(1)}>

                </div>
            </section>
            <section className="full-screen-section">
                <h1>My Work</h1>
                <p>{projectSubHeading}</p>
                <div data-section-to-show="section-3" ref={setRef(3)}
                ></div>
            </section>
            <section className="full-screen-section">
                <h1>Contact</h1>
                <p>{contactSubHeading}</p>
                <div data-section-to-show="section-4" ref={setRef(4)}></div>
            </section>
        </>
    )
}

export default CVPage