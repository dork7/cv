import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = () => {
    const targetRefs = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log('entry', entry.target.dataset.imgToShow, entry.isIntersecting)
                    if (entry.isIntersecting) {
                        document.querySelectorAll("[data-img]").forEach(img => {
                            img.classList.remove("show")
                        })
                        const img = document.querySelector(entry.target.dataset.imgToShow)
                        img?.classList.add("show")
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
