import {useEffect, useMemo} from "preact/hooks";
import {useSignal} from "@preact/signals";

/**
 * Make a number increment over time
 */
export function useIncrementalNumber (n: number, duration: number = 1000, delay: number = 0) {
    const start = useMemo(() => Date.now(), [])
    const count = useSignal(0)

   useEffect(() => {
       const updateValue = () => {
           const elapsedRatio = Math.max((Date.now() - start - delay) / duration, 0)
           if (elapsedRatio >= 1) {
               count.value = n
               return;
           }
           count.value = Math.floor(n * elapsedRatio)
           requestAnimationFrame(updateValue)
       }
       updateValue()
   }, [])

    return count
}
