import { useCallback, useRef } from "react";

type Timer = NodeJS.Timeout | null;

const useDebounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number,
) => {
    const timer = useRef<Timer>(null)

    const debouncedCallback = useCallback(
        (...args: T) => {
            if (timer.current){
                clearTimeout(timer.current)
            }
            timer.current = setTimeout(()=> {
                callback(...args)
            }, delay)
        },
        [callback, delay]
    );
    return debouncedCallback;
}

export default useDebounce