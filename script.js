"use strict";
window.addEventListener("load", ready);

let lives = 3;

let points = 0;

function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", start);
  document
    .querySelector("#btn_go_to_start")
    .addEventListener("click", showStartScreen);
  document.querySelector("#btn_restart").addEventListener("click", start);

   document
     .querySelector("#hourglass")
     .addEventListener("animationend", timeIsUp);
}

function showStartScreen() {
  // fjern hidden fra startskærm og tilføj til game over og level complete
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function start() {
    restartTimer();
  resetLives();
  resetPoints();
  showGameScreen();
  startTimer();
  console.log("Javascript kører!");

  document.querySelector("#start").classList.add("hidden");

  document.querySelector("#kid1_container").classList.add("moveright");
  document.querySelector("#kid2_container").classList.add("moveright");
  document.querySelector("#kid3_container").classList.add("moveright");
  document.querySelector("#kid1_container").classList.add("position1");
  document.querySelector("#kid2_container").classList.add("position2");
  document.querySelector("#kid3_container").classList.add("position3");


     document
       .querySelector("#kid1_container")
       .addEventListener("animationiteration", kidRestart);
     document
       .querySelector("#kid2_container")
       .addEventListener("animationiteration", kidRestart);
     document
       .querySelector("#kid3_container")
       .addEventListener("animationiteration", kidRestart);

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
  document
    .querySelector("#timeboard_container")
    .addEventListener("animationend", gameOver);
}


function resetLives() {
  console.log("reset lives");
  // sæt lives til 3
  lives = 3;
  //nulstil visning af liv (hjerte vi ser)
  document.querySelector("#heart_container1").classList.remove("broken_heart");
  document.querySelector("#heart_container2").classList.remove("broken_heart");
  document.querySelector("#heart_container3").classList.remove("broken_heart");
  document.querySelector("#heart_container1").classList.add("active_heart");
  document.querySelector("#heart_container2").classList.add("active_heart");
  document.querySelector("#heart_container3").classList.add("active_heart");
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

function clickMåge() {
  let måge = this;
  console.log("Click måge");
  console.log(måge);
  console.log(this);

  måge.removeEventListener("click", clickMåge);

  måge.classList.add("paused");

  // sæt forsvind-animation på coin
  måge.querySelector("img").classList.add("zoom_in");

  måge.addEventListener("animationend", birdGone);

  incrementPointsSeagul();
}

function clickMåge2() {
  let måge2 = this;

  console.log("Click måge2");
  console.log(måge2);
  console.log(this);

  måge2.removeEventListener("click", clickMåge2);

  måge2.classList.add("paused");

  // sæt forsvmåge2ind-animation på coin
  måge2.querySelector("img").classList.add("zoom_in");
  måge2.addEventListener("animationend", birdGone2);

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
  points += 10;
  console.log(points);
  displayPoints();
}

function displayPoints() {
  console.log("displayPoints");
  document.querySelector("#point_count").textContent = points;

  if (points > 50) {
    levelComplete();
  }
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


  kidRestart.call(this);

  document
    .querySelector("#kid3_container")
    .addEventListener("click", clickKid3);
}

function kidRestart () {
    console.log("kid restart")
    const kid = this;

    kid.classList.remove("moveright")
     kid.offsetWidth;
     kid.classList.add("moveright");

     // fjern alle positioner
     kid.classList.remove(
       "position1",
       "position2",
       "position3",
     );

     // sæt position til en ny klasse
     const p = Math.ceil(Math.random() * 3);
     kid.classList.add(`position${p}`);
}


function gameOver() {
  console.log("Game over");
  document.querySelector("#game_over").classList.remove("hidden");
}


function startTimer() {
  // Sæt timer-animationen (shrink) i gang ved at tilføje klassen shrink til time_sprite
  document.querySelector("#hourglass").classList.add("shrink");

  // Tilføj en eventlistener som lytter efter at animationen er færdig (animationend) og kalder funktionen timeIsUp
  document.querySelector("#hourglass").addEventListener("animationend", timeIsUp);

}

function timeIsUp() {
  console.log("Tiden er gået!");

    document
      .querySelector("#hourglass")
      .removeEventListener("animationend", timeIsUp);

  if (points >= 50) {
    levelComplete();
  } else {
    gameOver();

  }
}

function restartTimer() {
    document.querySelector("#hourglass").classList.remove("shrink");
    document.querySelector("#hourglass").offsetWidth;
}

function levelComplete() {
  console.log("Level complete");
  document.querySelector("#level_complete").classList.remove("hidden");
}
