import { Timer } from './timer.js'
import { Controls } from './controls.js'

const Buttonplay = document.querySelector('.play')
const Buttonpause = document.querySelector('.pause')
const Buttonstop = document.querySelector('.stop')
const Buttonset = document.querySelector('.set')
const ButtonsoundOn = document.querySelector('.sound-on')
const ButtonsoundOff = document.querySelector('.sound-off')
let timerOut
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

const controls = Controls({
  Buttonplay,
  Buttonpause,
  Buttonstop,
  Buttonset
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerOut,
  resetControls: controls.resetControls
})


Buttonplay.addEventListener('click', () => {
  controls.play()
  timer.countdawn()
})

Buttonpause.addEventListener('click', () => {
  controls.pause()
  clearTimeout(timerOut)
})

Buttonstop.addEventListener('click', () => {
  controls.resetControls
  timer.resetTimer()
})

Buttonset.addEventListener('click', () => {
  let newMinutes = controls.getMinutes()

  if(!newMinutes) {
    timer.resetTimer()
    return false
  }

  minutes = newMinutes

  timer.updateTimerDisplay(minutes, 0)
})

ButtonsoundOn.addEventListener('click', () => {
  ButtonsoundOn.classList.add('hide')
  ButtonsoundOff.classList.remove('hide')
})

ButtonsoundOff.addEventListener('click', () => {
  ButtonsoundOff.classList.add('hide')
  ButtonsoundOn.classList.remove('hide')
})