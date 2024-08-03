import {useEffect, useMemo} from "preact/hooks";
import {useSignal} from "@preact/signals";

const duration = 1000

/**
 * Make a number increment over time
 */
export function useIncrementalNumber (n: number) {
    const start = useMemo(() => Date.now())
    const count = useSignal(0)

   useEffect(() => {
       const updateValue = () => {
           const elapsedRatio = (Date.now() - start) / duration
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
