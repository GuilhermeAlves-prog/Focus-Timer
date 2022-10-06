export function Controls({
  Buttonplay,
  Buttonpause,
  Buttonstop,
  Buttonset
}) {

  function resetControls() {
    Buttonstop.classList.add('hide')
    Buttonset.classList.remove('hide')
    Buttonpause.classList.add('hide')
    Buttonplay.classList.remove('hide')
  }

  function play() {
    Buttonplay.classList.add('hide')
    Buttonpause.classList.remove('hide')
    Buttonset.classList.add('hide')
    Buttonstop.classList.remove('hide')  
  }

  function pause() {
    Buttonpause.classList.add('hide')
    Buttonplay.classList.remove('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('quantos minutos?')

    if(!newMinutes) {
      timer.resetTimer()
      return false
    }
    return newMinutes 
  }
  
  return {
    resetControls,
    play,
    pause,
    getMinutes
  }
}