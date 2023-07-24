import React from 'react';
import ProjectCards from '../components/Projects/ProjectCards';
import { useUserDataSet } from '../hooks/useUserDataSet';
import useIntersectionObserver from './../hooks/useIntersectionObserver';
import MediaCard from '../components/Media';
import SkillsComponent from '../components/Skills';
const CVPage = () => {

    const userData = useUserDataSet()
    const { name, description, projects, skills } = userData
    const [setRef, setSectionRef] = useIntersectionObserver()

    return (
        <>
            <div className="main-section">
                <div data-section id="section-1"
                    className="top-main-section show" ref={setSectionRef(0)}>
                </div>
                <div data-section id="section-2" ref={setSectionRef(1)}>
                    <SkillsComponent  {...{ skills }} />
                </div>
                <div data-section id="section-3" ref={setSectionRef(2)}>
                    <ProjectCards  {...{ projects }} />
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
                <p>Never touch the command line, from provision to production.</p>
                <div data-section-to-show="section-1" ref={setRef(0)}>

                </div>
            </section>
            <section className="full-screen-section">
                <h1>Skills</h1>
                <p>
                    Never manage infrastructure again. One click gets you: a database, APIs,
                    deployments, hosting, etc.
                </p>
                <div data-section-to-show="section-2" ref={setRef(1)}>

                </div>
            </section>
            <section className="full-screen-section">
                <h1>Projects</h1>
                <p>Logical can get systems to market in minutes instead of weeks.</p>
                <div data-section-to-show="section-3" ref={setRef(3)}
                ></div>
            </section>
        </>
    )
}

export default CVPage