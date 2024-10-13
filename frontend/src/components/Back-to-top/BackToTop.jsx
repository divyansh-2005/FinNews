import { useState, useEffect } from 'react';
import './backToTop.css'; // Import the CSS file

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setShouldRender(true);
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) {
            const timeout = setTimeout(() => setShouldRender(false), 500);
            return () => clearTimeout(timeout);
        }
    }, [isVisible]);

    return (
        <>
            {shouldRender && (
                <button
                    onClick={scrollToTop}
                    className={`back-to-top-button ${isVisible ? 'animate-fadeInBounce' : 'animate-fadeOutBounce'}`}
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default BackToTop;
