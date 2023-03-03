
export const Sound = () => {

  const forest = new Audio("./assets/sounds/Floresta.wav")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const rain = new Audio("./assets/sounds/Chuva.wav")

  const coffee = new Audio("./assets/sounds/Cafeteria.wav")

  const fire = new Audio("./assets/sounds/Lareira.wav")

  function TimesUp() {
    kitchenTimer.play();
  }

  function forestPlay() {
    forest.play()
    forest.loop = true;
  }

  function forestPause() {
    forest.pause();
  }

  function rainPlay() {
    rain.play();
    rain.loop = true;
  }

  function rainPause() {
    rain.pause();
  }

  function coffeePlay() {
    coffee.play();
    coffee.loop = true;
  }

  function coffeePause() {
    coffee.pause();
  }

  function firePlay() {
    fire.play();
    fire.loop = true
  }

  function firePause() {
    fire.pause();
  }


  return {
    forest,
    forestPlay,
    forestPause,
    kitchenTimer,
    TimesUp,
    rain,
    rainPlay,
    rainPause,
    coffeePlay,
    coffeePause,
    coffee,
    fire,
    firePlay,
    firePause
  }
}