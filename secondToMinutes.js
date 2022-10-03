export const toMinutes = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds/60)
    const seconds = totalSeconds % 60

    const padTo2DigitsMinutes = minutes.toString().padStart(2, '0')
    const padTo2DigitsSeconds = seconds.toString().padStart(2, '0')
    const result = `${padTo2DigitsMinutes}:${padTo2DigitsSeconds}`

    return result
};
