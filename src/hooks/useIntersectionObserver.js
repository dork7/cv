import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = () => {
    const targetRefs = useRef([]);
    const sectionRefs = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // remove the show class from every section, when intersect is true
                        sectionRefs.current.forEach((section) => {
                            section.classList.remove('show')
                        })
                        // match the section ID with sectionRef id and add show class to it
                        const [sectionToShow] = sectionRefs.current.filter(item => item.id === entry.target.dataset.sectionToShow)
                        sectionToShow?.classList.add("show")
                    }
                });
            },
            {}
        );

        if (targetRefs.current.length > 0) {
            targetRefs?.current?.forEach((targetRef) => {
                if (targetRef) {
                    observer.observe(targetRef);
                }
            });
        }

        return () => {
            targetRefs?.current?.forEach((targetRef) => {
                if (targetRef) {
                    observer.unobserve(targetRef);
                }
            });
        };
    }, []);

    const setRef = (index) => (ref) => {
        targetRefs.current[index] = ref;
    };

    const setSectionRef = (index) => (ref) => {
        sectionRefs.current[index] = ref;
    }
    return [setRef, setSectionRef]
};

export default useIntersectionObserver;
