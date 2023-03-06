"use strict";
window.addEventListener("load", ready);

let lives = 3;

let points = 0;

const kid1 = document.querySelector("#kid1_container");
const kid2 = document.querySelector("#kid2_container");
const kid3 = document.querySelector("#kid3_container");
const bird1 = document.querySelector("#bird_container");
const bird2 = document.querySelector("#bird_container2");
const bird3 = document.querySelector("#bird_container3");
const shit1 = document.querySelector("#birdshit_container");
const shit2 = document.querySelector("#birdshit_container2");
const timeboard = document.querySelector("#timeboard_container");
const hourglass = document.querySelector("#hourglass");
const heart1 = document.querySelector("#heart_container1");
const heart2 = document.querySelector("#heart_container2");
const heart3 = document.querySelector("#heart_container3");

function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", start);
  document
    .querySelector("#btn_go_to_start")
    .addEventListener("click", showStartScreen);
  document.querySelector("#btn_restart").addEventListener("click", start);

  hourglass.addEventListener("animationend", timeIsUp);
}

function showStartScreen() {
  // fjern hidden fra startskærm og tilføj til game over og level complete
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function start() {
  // spil baggrundsmusik
  document.querySelector("#background_sound").play();
  document.querySelector("#background_sound").currentTime=0
  restartTimer();
  resetLives();
  resetPoints();
  showGameScreen();
  startTimer();
  console.log("Javascript kører!");

  startAllAnimations();

  document.querySelector("#start").classList.add("hidden");

  kid1.addEventListener("animationiteration", restart);
  kid2.addEventListener("animationiteration", restart);
  kid3.addEventListener("animationiteration", restart);

  bird1.addEventListener("click", click);

  bird2.addEventListener("click", click);

  bird3.addEventListener("click", click);

  shit1.addEventListener("click", click);

  shit2.addEventListener("click", click);

  kid1.addEventListener("click", click);

  kid2.addEventListener("click", click);

  kid3.addEventListener("click", click);

  timeboard.addEventListener("animationend", gameOver);
}

function stopGame() {
  console.log ("stop game");
  bird1.classList.remove("falling");
  bird2.classList.remove("falling");
  bird3.classList.remove("falling");
  shit1.classList.remove("falling");
  shit2.classList.remove("falling");
  kid1.classList.remove("moveright");
  kid2.classList.remove("moveright");
  kid3.classList.remove("moveright");
  kid1.classList.remove("position1,postion2,position3");
  kid2.classList.remove("position2,postion3,position1");
  kid3.classList.remove("position3,postion2,position1");
  document.querySelector("#background_sound").pause();
  document.querySelector("#levelcomplete_sound").pause();
  document.querySelector("#gameover_sound").pause();

  kid1.removeEventListener("animationiteration", restart);
  kid2.removeEventListener("animationiteration", restart);
  kid3.addEventListener("animationiteration", restart);

  bird1.removeEventListener("click", click);

  bird2.removeEventListener("click", click);

  bird3.removeEventListener("click", click);

  shit1.removeEventListener("click", click);

  shit2.removeEventListener("click", click);

  kid1.removeEventListener("click", click);

  kid2.removeEventListener("click", click);

  kid3.removeEventListener("click", click);

  timeboard.removeEventListener("animationend", gameOver);
  document.querySelector("#levelcomplete_sound").pause();
}
function startAllAnimations() {
  bird1.classList.add("falling");
  bird2.classList.add("falling");
  bird3.classList.add("falling");
  shit1.classList.add("falling");
  shit2.classList.add("falling");
  kid1.classList.add("moveright");
  kid2.classList.add("moveright");
  kid3.classList.add("moveright");
  kid1.classList.add("position1");
  kid2.classList.add("position2");
  kid3.classList.add("position3");
}

function resetLives() {
  console.log("reset lives");
  // sæt lives til 3
  lives = 3;
  //nulstil visning af liv (hjerte vi ser)
  heart1.classList.remove("broken_heart");
  heart2.classList.remove("broken_heart");
  heart3.classList.remove("broken_heart");
  heart1.classList.add("active_heart");
  heart2.classList.add("active_heart");
  heart3.classList.add("active_heart");
}

function click() {
  let container = this;
  console.log("Click måge");
  console.log(this);

  container.removeEventListener("click", click);

  container.classList.add("paused");

  // sæt forsvind-animation
  if (container === bird1 || container === bird2 || container === bird3) {
    container.querySelector("img").classList.add("zoom_in");
  } else if (container === kid1 || container === kid2 || container === kid3) {
    container.querySelector("img").classList.add("fade_out");
  } else {
    container.querySelector("img").classList.add("zoom_out");
  }

  container.addEventListener("animationend", restart);

  if (container === kid1 || container === kid2 || container === kid3) {
    decrementLives();
  } else if (
    container === bird1 ||
    container === bird2 ||
    container === bird3
  ) {
    incrementPointsSeagul();
  } else {
    incrementPointsShit();
  }
}

function showGameScreen() {
  console.log("SHOW GAME");
  // Skjul startskærm, game over og level complete
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function resetPoints() {
  console.log("reset point");
  // nulstil point
  points = 0;
  // nulstil vising af point
  displayPoints();
}

function restart() {
  console.log("restart");
  const container = this;

  // fjern alle positioner
  container.classList.remove("position1", "position2", "position3");
  container
    .querySelector("img")
    .classList.remove("zoom_out", "zoom_in", "fade_out");
  container.classList.remove("paused");

  container.classList.remove("moveright", "falling");
  container.offsetWidth;

  if (container === kid1 || container === kid2 || container === kid3) {
    container.classList.add("moveright");
    // sæt position til en ny klasse
    const p = Math.ceil(Math.random() * 3);
    container.classList.add(`position${p}`);
  } else {
    container.classList.add("falling");
  }

  container.addEventListener("click", click);
}

function incrementPointsShit() {
  points += 10;
  console.log(points);
  displayPoints();
}

function incrementPointsSeagul() {
  points += 5;
  console.log(points);
  displayPoints();
}

function displayPoints() {
  console.log("displayPoints");
  document.querySelector("#point_count").textContent = points;
  document.querySelector("#point_sound").play();

  if (points > 50) {
    levelComplete();
  }
}

function decrementLives() {
  console.log("decrementLives");
  console.log(lives);

  document.querySelector("#kid_sound").play();
  document.querySelector("#kid_sound").currentTime = 0;

  if (lives <= 1) {
    gameOver();
  } else {
    displayDecrementedLives();
  }
  lives--;
}
function displayDecrementedLives() {
  console.log("heart + lives");
  document
    .querySelector("#heart_container" + lives)
    .classList.remove("active_heart");
  document
    .querySelector("#heart_container" + lives)
    .classList.add("broken_heart");
}
function startTimer() {
  // Sæt timer-animationen (shrink) i gang ved at tilføje klassen shrink til time_sprite
  hourglass.classList.add("shrink");

  // Tilføj en eventlistener som lytter efter at animationen er færdig (animationend) og kalder funktionen timeIsUp
  hourglass.addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  console.log("Tiden er gået!");

  hourglass.removeEventListener("animationend", timeIsUp);

  if (points >= 50) {
    levelComplete();
  } else {
    gameOver();
  }
}
function restartTimer() {
  hourglass.classList.remove("shrink");
  hourglass.offsetWidth;
}
function levelComplete() {
  console.log("Level complete");
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#background_sound").pause();
  document.querySelector("#levelcomplete_sound").play();

  stopGame();
}
function gameOver() {
  console.log("Game over");
  stopGame();
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("blur_to_grey");
  document.querySelector("#background_sound").pause();
  document.querySelector("#gameover_sound").play();
}
