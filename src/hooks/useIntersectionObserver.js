import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = () => {
    const targetRefs = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // console.log('entry', entry.target.dataset.imgToShow)
                        document.querySelectorAll("[data-section]").forEach(img => {
                            console.log('img', img)
                            img.classList.remove("show")
                        })
                        console.log('entry.target.dataset', entry.target.dataset)
                        const img = document.querySelector(entry.target.dataset.sectionToShow)
                        img?.classList.add("show")

                        // entry.target.current.classList.add("show")
                        // break
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

    return [setRef]
};

export default useIntersectionObserver;
