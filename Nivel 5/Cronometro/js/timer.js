import Sounds from "./sounds.js"

const sound = Sounds()

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
}) {

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateTimerDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
        
    }

    function reset() {
        updateTimerDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function contDown() {
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0

            updateTimerDisplay(minutes, 0)

            if (isFinished) {
                resetControls()
                updateTimerDisplay()
                Sounds().timeEnd()
                return
            }

            if (seconds <= 0) {
                seconds = 60
                --minutes
            }

            updateTimerDisplay(minutes, String(seconds - 1))

            contDown()
        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    return {
        contDown,
        reset,
        updateTimerDisplay,
        updateMinutes,
        hold
    }
}
