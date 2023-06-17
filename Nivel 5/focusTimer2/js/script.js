import { buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonLess,
    minutesDisplay,
    secondsDisplay,
    buttonSoundTree,
    buttonSoundRain,
    buttonSoundFire,
    buttonSoundCoffe} from "./elements.js"

import {soundTree,
    soundRain,
    soundFire,
    soundCoffe,
    kitchenTimer} from "./sound.js"

// buttons controls timer
buttonPlay.addEventListener('click', function () {
    buttonPause.classList.remove('hide')
    buttonPlay.classList.add('hide')
    countDown()
})

buttonPause.addEventListener('click', function () {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    resetTimer()
})

buttonPlus.addEventListener('click', function () {
     plusTimer()
})

buttonLess.addEventListener('click', function () {
     lessTimer()
})

// buttons sounds
buttonSoundTree.addEventListener('click', function() {
    buttonSoundRain.classList.remove('on') 
    buttonSoundFire.classList.remove('on')
    buttonSoundCoffe.classList.remove('on')
    buttonSoundTree.classList.add('on')
    soundTree.play()
    soundCoffe.pause()
    soundFire.pause()
    soundRain.pause()
})

buttonSoundRain.addEventListener('click', function() {
    buttonSoundTree.classList.remove('on')
    buttonSoundFire.classList.remove('on')
    buttonSoundCoffe.classList.remove('on')
    buttonSoundRain.classList.add('on')

    soundTree.pause()
    soundCoffe.pause()
    soundFire.pause()
    soundRain.play()
})

buttonSoundFire.addEventListener('click', function() {
    buttonSoundTree.classList.remove('on')
    buttonSoundRain.classList.remove('on')
    buttonSoundCoffe.classList.remove('on')
    buttonSoundFire.classList.add('on')

    soundTree.pause()
    soundCoffe.pause()
    soundFire.play()
    soundRain.pause()
})

buttonSoundCoffe.addEventListener('click', function() {
    buttonSoundTree.classList.remove('on')
    buttonSoundRain.classList.remove('on')
    buttonSoundFire.classList.remove('on')
    buttonSoundCoffe.classList.add('on')

    soundTree.pause()
    soundCoffe.play()
    soundFire.pause()
    soundRain.pause()
})

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

function updateTimerDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countDown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        updateTimerDisplay(minutes, 0)

        if (isFinished) {
            // resetControls()
            updateTimerDisplay()
            kitchenTimer.play()
            // Sounds().timeEnd()
            return
        }

        if (seconds <= 0) {
            seconds = 6
            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))

        countDown()
    }, 1000)

   

}

function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function plusTimer() {
    minutes = minutes + 5
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

function lessTimer() {
    if (minutes > 0) {
        minutes = minutes - 5
    }
    
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

