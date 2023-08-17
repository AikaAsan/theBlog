import { useEffect, useState } from 'react';

import { TABLET_BREAKPOINT } from '../../../const/breakpoints';

/**
 * Custom hook that detects whether the current device is a mobile device based on the window's width.
 *
 * @returns - A boolean value indicating whether the current device is a mobile device.
 */
export const useDevice = (breakpoint: number = TABLET_BREAKPOINT) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // const handleResize = () => setIsMobile(window.matchMedia('(pointer:coarse)').matches);
        const handleResize = () => setIsMobile(window.innerWidth < breakpoint);

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // remove listener
    }, [breakpoint]);

    return isMobile;
};
