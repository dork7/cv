import React, { useEffect } from 'react'
import useIntersectionObserver from './../hooks/useIntersectionObserver'
import { useState } from 'react';
import { useRef } from 'react';

const CVPage = () => {

    const [setRef] = useIntersectionObserver()


    // const [setRef, isIntersectingMap] = useIntersectionObserver({
    //     threshold: 0.5, // Adjust the threshold as needed
    //     root: null, // Use the viewport as the root
    //     rootMargin: '0px', // Set the rootMargin if needed
    // });

    // console.log('isIntersectingMap', isIntersectingMap)



    // const [isIntersecting, setIsIntersecting] = useState(false);
    // const targetRefs = useRef([]);
    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 console.log('entry', entry.target.dataset.imgToShow, entry.isIntersecting)
    //                 if (entry.isIntersecting) {
    //                     document.querySelectorAll("[data-img]").forEach(img => {
    //                         img.classList.remove("show")
    //                     })
    //                     const img = document.querySelector(entry.target.dataset.imgToShow)
    //                     img?.classList.add("show")
    //                     // break
    //                 }
    //             });
    //         },
    //         {}
    //     );

    //     if (targetRefs.current.length > 0) {
    //         targetRefs.current?.forEach((targetRef) => {
    //             if (targetRef) {
    //                 observer.observe(targetRef);
    //             }
    //         });
    //     }

    //     return () => {
    //         targetRefs.current?.forEach((targetRef) => {
    //             if (targetRef) {
    //                 observer.unobserve(targetRef);
    //             }
    //         });
    //     };
    // }, []);

    // const setRef = (index) => (ref) => {
    //     targetRefs.current[index] = ref;
    // };

    return (
        <>
            <div className="imgs">
                <img
                    src="./public/imgs/img-1.png"
                    data-img
                    id="img-1"
                    className="top-section-img show"
                />
                <img src="./public/imgs/img-2.png" data-img id="img-2" />
                <img src="./public/imgs/img-3.png" data-img id="img-3" />
            </div>
            <section className="top-section full-screen-section">
                <div className="left">
                    <h1>Build Better Backends</h1>
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
                {/* <div data-img-to-show="#img-1" ref={(element) => (targetRefs.current[0] = element)}
                ></div> */}
                <div data-img-to-show="#img-1" ref={setRef(0)}>

                </div>
            </section>
            <section className="full-screen-section">
                <h1>Full Stack</h1>
                <p>
                    Never manage infrastructure again. One click gets you: a database, APIs,
                    deployments, hosting, etc.
                </p>
                {/* <div data-img-to-show="#img-2" ref={setRef(2)} */}
                {/* <div data-img-to-show="#img-2" ref={(element) => {
                    targetRefs.current[1] = element
                }}
                ></div> */}
                <div data-img-to-show="#img-2" ref={setRef(1)}>

                </div>
            </section>
            <section className="full-screen-section">
                <h1>Launch Faster</h1>
                <p>Logical can get systems to market in minutes instead of weeks.</p>
                <div data-img-to-show="#img-3" ref={setRef(3)}
                ></div>
            </section>
        </>
    )
}

export default CVPage