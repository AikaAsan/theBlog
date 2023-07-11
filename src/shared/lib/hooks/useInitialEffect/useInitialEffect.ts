import { useEffect } from 'react';

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        // checks if its not storybook or jest env
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            callback();
        }
        //eslint-disable-next-line
    }, []);
}
