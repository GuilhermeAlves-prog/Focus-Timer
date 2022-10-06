export function Timer({
  minutesDisplay,
  secondsDisplay,
  timerOut,
  resetControls,
}){

  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerOut)
  }

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function countdawn() {
    timerOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      updateTimerDisplay(minutes, 0)

      if (minutes <= 0) {
        resetControls()
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

  return {
    resetTimer,
    countdawn,
    updateTimerDisplay
  }
}