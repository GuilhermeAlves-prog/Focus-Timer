import { Timer } from './timer.js'
import { Controls } from './controls.js'
import { elements } from './config.js'
import Sounds from './sounds.js'


const { 
  Buttonplay,
  Buttonpause,
  Buttonstop,
  Buttonset,
  ButtonsoundOn,
  ButtonsoundOff,
  minutesDisplay,
  secondsDisplay } = elements

const controls = Controls({
  Buttonplay,
  Buttonpause,
  Buttonstop,
  Buttonset,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.resetControls
})

const sound = Sounds()

Buttonplay.addEventListener('click', () => {
  controls.play()
  timer.countdawn()
  sound.pressButton()
})

Buttonpause.addEventListener('click', () => {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

Buttonstop.addEventListener('click', () => {
  controls.resetControls()
  timer.resetTimer()
  sound.pressButton()
})

Buttonset.addEventListener('click', () => {
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.resetTimer()
    return false
  }

  timer.updateTimerDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

ButtonsoundOn.addEventListener('click', () => {
  ButtonsoundOn.classList.add('hide')
  ButtonsoundOff.classList.remove('hide')

  sound.bgAudio.pause()
})

ButtonsoundOff.addEventListener('click', () => {
  ButtonsoundOff.classList.add('hide')
  ButtonsoundOn.classList.remove('hide')

  sound.bgAudio.play()
})