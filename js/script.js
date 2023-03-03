import { Sound } from "./sounds.js"

const body = document.querySelector("body")
const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector(".stop");
const btnPlus = document.querySelector(".plus");
const btnMinus = document.querySelector(".minus");
const btnForest = document.querySelector(".forestbtn");
const btnCloudy = document.querySelector(".cloudybtn");
const btnMarket = document.querySelector(".marketbtn");
const btnFire = document.querySelector(".firebtn");
let timer
const min = document.querySelector(".hour")
const secs = document.querySelector(".secs")
const sound = Sound();
let minutes = Number(min.textContent)
const buttonLightTheme = document.querySelector('.light-theme')
const buttonDarkTheme = document.querySelector('.dark-theme')

function changeTheme() {
  buttonLightTheme.classList.toggle('hide')
  buttonDarkTheme.classList.toggle('hide')
  body.classList.toggle('dark-mode')
}


function updateTimerDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  min.textContent = String(newMinutes).padStart(2, "0")
  secs.textContent = String(seconds).padStart(2, "0")
}

function handlePlay() {
  btnPlay.classList.toggle('hide');
  btnPause.classList.toggle('hide')
}

function handleStop() {
  btnPlay.classList.remove('hide');
  btnPause.classList.add('hide')
}

function reset() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timer)
}
function plusTime() {
  minutes += 5;
  reset();
}

function minusTime() {
  minutes -= 5;
  reset();
}

function timeout() {
  timer = setTimeout(() => {
    let seconds = Number(secs.textContent)
    let minutes = Number(min.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      handlePlay();
      updateTimerDisplay();
      sound.TimesUp();
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))
    timeout();
  }, 1000)
}


btnPlay.addEventListener('click', () => {
  handlePlay();
  timeout();

})

btnPause.addEventListener(
  "click", () => {
    clearTimeout(timer)
    handlePlay();
  }
)

btnStop.addEventListener("click", () => {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timer)
  handleStop()
})

btnPlus.addEventListener("click", () => {
  btnPlay.classList.remove('hide');
  btnPause.classList.add('hide')
  plusTime();
})

btnMinus.addEventListener("click", () => {
  if (minutes >= 5) {
    btnPlay.classList.remove('hide');
    btnPause.classList.add('hide')
    minusTime()
  }

})

btnForest.addEventListener("click", () => {
  btnForest.classList.toggle("active")
    ;
  btnForest.classList.contains("active") ? sound.forestPlay() : sound.forestPause();
})

btnCloudy.addEventListener("click", () => {
  btnCloudy.classList.toggle("active")
    ;
  btnCloudy.classList.contains("active") ? sound.rainPlay() : sound.rainPause();
})

btnMarket.addEventListener("click", () => {
  btnMarket.classList.toggle("active")
    ;
  btnMarket.classList.contains("active") ? sound.coffeePlay() : sound.coffeePause();
})

btnFire.addEventListener("click", () => {
  btnFire.classList.toggle("active")
    ;
  btnFire.classList.contains("active") ? sound.firePlay() : sound.firePause();
})

buttonDarkTheme.addEventListener("click", () => {
  changeTheme();
})

buttonLightTheme.addEventListener("click", () => {
  changeTheme();
})