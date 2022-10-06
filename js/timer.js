import Sounds from "./sounds.js"

export function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}){

let minutes = Number(minutesDisplay.textContent)
let timerOut

  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerOut)
  }

  function updateTimerDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function countdawn() {
    timerOut = setTimeout(() => {
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

      countdawn(secondsDisplay, minutesDisplay, resetControls)
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerOut)
  }

  return {
    resetTimer,
    countdawn,
    updateTimerDisplay,
    updateMinutes,
    hold
  }
}