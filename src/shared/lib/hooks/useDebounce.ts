import { useCallback, useRef } from 'react';

// eslint-disable-next-line
export const useDebounce = (callback: (...args:any[])=>void, delay:number) => {
    // eslint-disable-next-line
    const timer = useRef<any>();
    return useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
};
