"use strict";
window.addEventListener("load", start);

let lives = 3;

let points = 0;

function start() {
  console.log("Javascript kører!");

  document.querySelector("#hourglass").classList.add("move_up");
  document.querySelector("#kid1_container").classList.add("moveright");
    document.querySelector("#kid2_container").classList.add("moveright");
  document.querySelector("#kid3_container").classList.add("moveright");


  document
    .querySelector("#bird_container")
    .addEventListener("click", clickMåge);

  document
    .querySelector("#bird_container2")
    .addEventListener("click", clickMåge2);

  document
    .querySelector("#bird_container3")
    .addEventListener("click", clickMåge3);

  document
    .querySelector("#birdshit_container")
    .addEventListener("click", clickShit);

  document
    .querySelector("#birdshit_container2")
    .addEventListener("click", clickShit2);

  document.querySelector("#kid1_container").addEventListener("click", clickKid);

  document
    .querySelector("#kid2_container")
    .addEventListener("click", clickKid2);

  document
    .querySelector("#kid3_container")
    .addEventListener("click", clickKid3);
}

function clickMåge() {
  console.log("Click måge");

  document
    .querySelector("#bird_container")
    .removeEventListener("click", clickMåge);

  document.querySelector("#bird_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#seagul1").classList.add("zoom_in");

  document
    .querySelector("#bird_container")
    .addEventListener("animationend", birdGone);
    incrementPointsSeagul();

}

function clickMåge2() {
  console.log("Click måge2");

  document
    .querySelector("#bird_container2")
    .removeEventListener("click", clickMåge2);

  document.querySelector("#bird_container2").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#seagul2").classList.add("zoom_in");

  document
    .querySelector("#bird_container2")
    .addEventListener("animationend", birdGone2);

    incrementPointsSeagul();
}

function clickMåge3() {
  console.log("Click måge3");

  document
    .querySelector("#bird_container3")
    .removeEventListener("click", clickMåge3);

  document.querySelector("#bird_container3").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#seagul3").classList.add("zoom_in");

  document
    .querySelector("#bird_container3")
    .addEventListener("animationend", birdGone3);

    incrementPointsSeagul();
}

function clickShit() {
  console.log("Click shit");

  document
    .querySelector("#birdshit_container")
    .removeEventListener("click", clickShit);

  document.querySelector("#birdshit_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#birdshit").classList.add("zoom_out");

  document
    .querySelector("#birdshit_container")
    .addEventListener("animationend", shitGone);

    incrementPointsShit();
}

function clickShit2() {
  console.log("Click shi2t");

  document
    .querySelector("#birdshit_container2")
    .removeEventListener("click", clickShit2);

  document.querySelector("#birdshit_container2").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#birdshit2").classList.add("zoom_out");

  document
    .querySelector("#birdshit_container2")
    .addEventListener("animationend", shitGone2);
    incrementPointsShit();
}

function clickKid() {
  console.log("Click kid");

  document
    .querySelector("#kid1_container")
    .removeEventListener("click", clickKid);

  document.querySelector("#kid1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#dreng1").classList.add("fade_out");

  document
    .querySelector("#kid1_container")
    .addEventListener("animationend", kidGone);

  decrementLives();
}

function decrementLives() {
  console.log("decrementLives");
  console.log(lives);
  displayDecrementedLives();
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
function clickKid2() {
  console.log("Click kid2");
  document
    .querySelector("#kid2_container")
    .removeEventListener("click", clickKid2);
  document.querySelector("#kid2_container").classList.add("paused");
  document.querySelector("#dreng2").classList.add("fade_out");
  document
    .querySelector("#kid2_container")
    .addEventListener("animationend", kidGone2);

  decrementLives();
}

function clickKid3() {
  console.log("Click kid3");
  document
    .querySelector("#kid3_container")
    .removeEventListener("click", clickKid3);
  document.querySelector("#kid3_container").classList.add("paused");
  document.querySelector("#dreng3").classList.add("fade_out");
  document
    .querySelector("#kid3_container")
    .addEventListener("animationend", kidGone3);

  decrementLives();
}
function incrementPointsShit() {
  (points+= 10);
  console.log(points);
  displayPoints();
}


function displayPoints () {
    console.log("displayPoints");
    document.querySelector("#coin_count").textContent = points;

}


function incrementPointsSeagul() {
  points += 5;
  console.log(points);
  displayPoints();
}


function birdGone() {
  console.log("test");
  // fjern event der bringer os herind
  document
    .querySelector("#bird_container")
    .removeEventListener("animationend", birdGone);

  // fjern forsvind-animation
  document.querySelector("#seagul1").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#bird_container").classList.remove("paused");

  //   restart af af falling animation "reset af måge"
  document.querySelector("#bird_container").classList.remove("falling");
  document.querySelector("#bird_container").offsetWidth;
  document.querySelector("#bird_container").classList.add("falling");

  //   gør det muligt at klikke på mågen igen
  document
    .querySelector("#bird_container")
    .addEventListener("click", clickMåge);
}

function birdGone2() {
  console.log("test");
  // fjern event der bringer os herind
  document
    .querySelector("#bird_container2")
    .removeEventListener("animationend", birdGone2);

  // fjern forsvind-animation
  document.querySelector("#seagul2").classList.remove("zoom_in");

  //   restart af animation falling
  document.querySelector("#bird_container2").classList.remove("falling");
  document.querySelector("#bird_container2").offsetWidth;
  document.querySelector("#bird_container2").classList.add("falling");

  // fjern pause
  document.querySelector("#bird_container2").classList.remove("paused");

  document
    .querySelector("#bird_container2")
    .addEventListener("click", clickMåge2);
}

function birdGone3() {
  console.log("test");
  // fjern event der bringer os herind
  document
    .querySelector("#bird_container3")
    .removeEventListener("animationend", birdGone3);

  // fjern forsvind-animation
  document.querySelector("#seagul3").classList.remove("zoom_in");

  //   restart af animation
  document.querySelector("#bird_container3").classList.remove("falling");
  document.querySelector("#bird_container3").offsetWidth;
  document.querySelector("#bird_container3").classList.add("falling");

  // fjern pause
  document.querySelector("#bird_container3").classList.remove("paused");

  document
    .querySelector("#bird_container3")
    .addEventListener("click", clickMåge3);
}

function shitGone() {
  console.log("test");
  // fjern event der bringer os herind
  document
    .querySelector("#birdshit_container")
    .removeEventListener("animationend", shitGone);

  // fjern forsvind-animation
  document.querySelector("#birdshit").classList.remove("zoom_out");

  //   restart af animation
  document.querySelector("#birdshit_container").classList.remove("falling");
  document.querySelector("#birdshit_container").offsetWidth;
  document.querySelector("#birdshit_container").classList.add("falling");

  // fjern pause
  document.querySelector("#birdshit_container").classList.remove("paused");

  document
    .querySelector("#birdshit_container")
    .addEventListener("click", clickShit);
}

function shitGone2() {
  console.log("test");
  // fjern event der bringer os herind
  document
    .querySelector("#birdshit_container2")
    .removeEventListener("animationend", shitGone2);

  // fjern forsvind-animation
  document.querySelector("#birdshit2").classList.remove("zoom_out");

  document.querySelector("#birdshit_container2").classList.remove("falling");
  document.querySelector("#birdshit_container2").offsetWidth;
  document.querySelector("#birdshit_container2").classList.add("falling");

  // fjern pause
  document.querySelector("#birdshit_container2").classList.remove("paused");

  document
    .querySelector("#birdshit_container2")
    .addEventListener("click", clickShit2);
}

function kidGone() {
  console.log("test1");
  // fjern event der bringer os herind
  document
    .querySelector("#kid1_container")
    .removeEventListener("animationend", kidGone);

  // fjern forsvind-animation
  document.querySelector("#dreng1").classList.remove("fade_out");

  document.querySelector("#kid1_container").classList.remove("moveright");
  document.querySelector("#kid1_container").offsetWidth;
  document.querySelector("#kid1_container").classList.add("moveright");

  // fjern pause
  document.querySelector("#kid1_container").classList.remove("paused");

  document.querySelector("#kid1_container").addEventListener("click", clickKid);
}

function kidGone2() {
  console.log("kidgone test");

  document
    .querySelector("#kid2_container")
    .removeEventListener("animationend", kidGone2);

  document.querySelector("#dreng2").classList.remove("fade_out");

  document.querySelector("#kid2_container").classList.remove("moveright");
  document.querySelector("#kid2_container").offsetWidth;
  document.querySelector("#kid2_container").classList.add("moveright");

  // fjerner pause
  document.querySelector("#kid2_container").classList.remove("paused");
  document
    .querySelector("#kid2_container")
    .addEventListener("click", clickKid2);
}

function kidGone3() {
  console.log("kidgone3 test");

  document
    .querySelector("#kid3_container")
    .removeEventListener("animationend", kidGone3);
  document.querySelector("#dreng3").classList.remove("fade_out");

  document.querySelector("#kid3_container").classList.remove("moveright");
  document.querySelector("#kid3_container").offsetWidth;
  document.querySelector("#kid3_container").classList.add("moveright");

  document.querySelector("#kid3_container").classList.remove("paused");

  document
    .querySelector("#kid3_container")
    .addEventListener("click", clickKid3);
}