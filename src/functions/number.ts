/**
 * Find a random number between min and max
 */
export function randomBetween(min: number, max: number) {
    return Math.round(
        (Math.random() * (max - min) + min) * 100
    ) / 100
}
