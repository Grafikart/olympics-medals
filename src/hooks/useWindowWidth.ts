import {useSignal} from "@preact/signals";
import {useEffect} from "preact/hooks";

export function useWindowWidth () {
    const width = useSignal(window.innerWidth)
    useEffect(() => {
        const listener = () => {
            width.value = window.innerWidth
        }
        window.addEventListener('resize', listener)
        return () => {
            window.removeEventListener('resize', listener)
        }
    }, []);
    return width
}
