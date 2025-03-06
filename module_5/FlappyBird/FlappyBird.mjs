"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSound from "../../common/libs/libSound.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import THero from "./hero.mjs";
import TObstacle from "./obstacle.mjs";
import { TBait } from "./bait.mjs";  // Sørg for at Bait er riktig importert
import { TMenu } from "./menu.mjs";

//--------------- Objects and Variables ----------------------------------//
const chkMuteSound = document.getElementById("chkMuteSound");
const rbDayNight = document.getElementsByName("rbDayNight");
const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);

// prettier-ignore
export const SpriteInfoList = {
  hero1:        { x:    0, y: 545, width:   34, height:  24, count:  4 },
  hero2:        { x:    0, y: 569, width:   34, height:  24, count:  4 },
  hero3:        { x:    0, y: 593, width:   34, height:  24, count:  4 },
  obstacle:     { x:    0, y:   0, width:   52, height: 320, count:  4 },
  background:   { x:  246, y:   0, width:  576, height: 512, count:  2 },
  flappyBird:   { x:    0, y: 330, width:  178, height:  50, count:  1 },
  ground:       { x:  246, y: 512, width: 1152, height: 114, count:  1 },
  numberSmall:  { x:  681, y: 635, width:   14, height:  20, count: 10 },
  numberBig:    { x:  422, y: 635, width:   24, height:  36, count: 10 },
  buttonPlay:   { x: 1183, y: 635, width:  104, height:  58, count:  1 },
  gameOver:     { x:    0, y: 384, width:  226, height: 114, count:  1 },
  infoText:     { x:    0, y: 630, width:  200, height:  55, count:  2 },
  food:         { x:    0, y: 696, width:   70, height:  65, count: 34 },
  medal:        { x:  985, y: 635, width:   44, height:   44, count:  4 },
};

export const EGameStatus = { idle: 0, getReady: 1, playing: 2, gameOver: 3 };

export const GameProps = {
  soundMuted: false,
  dayTime: true,
  speed: 1,
  status: EGameStatus.idle,
  background: null,
  ground: null,
  hero: null,
  obstacles: [],
  baits: [],
  menu: null,
  score: 0,
  bestScore: 0,
  gameOverSoundPlayed: false, // Ny variabel for å hindre gjentatt lyd
  sounds: {
    food: null,
    gameOver: null,
    dead: null,
    running: null,
    flap: null,
    heroIsDead: null,
  },
};

//--------------- Functions ----------------------------------------------//

function playSound(aSound) {
  if (!GameProps.soundMuted && aSound) {
    aSound.stop();
    aSound.play();
  }
}

function loadGame() {
  console.log("Game ready to load");
  cvs.width = SpriteInfoList.background.width;
  cvs.height = SpriteInfoList.background.height;

  let pos = new lib2d.TPosition(0, 0);
  GameProps.background = new libSprite.TSprite(spcvs, SpriteInfoList.background, pos);
  pos.y = cvs.height - SpriteInfoList.ground.height;
  GameProps.ground = new libSprite.TSprite(spcvs, SpriteInfoList.ground, pos);
  pos.x = 100;
  pos.y = 100;
  GameProps.hero = new THero(spcvs, SpriteInfoList.hero1, pos);

  GameProps.menu = new TMenu(spcvs);

  GameProps.sounds.running = new libSound.TSoundFile("./Media/running.mp3");
  GameProps.sounds.flap = new libSound.TSoundFile("./Media/flap.mp3");
  GameProps.sounds.gameOver = new libSound.TSoundFile("./Media/gameOver.mp3");
  GameProps.sounds.heroIsDead = new libSound.TSoundFile("./Media/heroIsDead.mp3");

  requestAnimationFrame(drawGame);
  setInterval(animateGame, 10);
}

function drawGame() {
  spcvs.clearCanvas();
  GameProps.background.draw();
  drawBait();  // Tegn bait (mat)
  drawObstacles();
  GameProps.ground.draw();
  GameProps.hero.draw();
  GameProps.menu.draw();
  requestAnimationFrame(drawGame);
}

function drawObstacles() {
  for (let i = 0; i < GameProps.obstacles.length; i++) {
    const obstacle = GameProps.obstacles[i];
    obstacle.draw();
  }
}

function drawBait() {
  for (let i = 0; i < GameProps.baits.length; i++) {
    const bait = GameProps.baits[i];
    bait.draw(); // Tegn hver bait (sommerfugl)
  }
}

function animateGame() {
  switch (GameProps.status) {
    case EGameStatus.playing:
      if (GameProps.hero.isDead) {
        GameProps.hero.animateSpeed = 0;
        GameProps.hero.update();

        if (!GameProps.gameOverSoundPlayed) {
          playSound(GameProps.sounds.gameOver);
          playSound(GameProps.sounds.heroIsDead);
          GameProps.gameOverSoundPlayed = true;
        }
        return;
      }

      // Beveg bakgrunn og andre objekter
      GameProps.ground.translate(-GameProps.speed, 0);
      if (GameProps.ground.posX <= -SpriteInfoList.background.width) {
        GameProps.ground.posX = 0;
      }
      
      // Oppdater og tegn helten
      GameProps.hero.update();

      // Oppdater og tegn hindringene
      for (let i = 0; i < GameProps.obstacles.length; i++) {
        const obstacle = GameProps.obstacles[i];
        obstacle.update();
      }

      // Oppdater og tegn sommerfuglene (baits)
      for (let i = 0; i < GameProps.baits.length; i++) {
        const bait = GameProps.baits[i];
        bait.update();  // Hvis du har en update-metode på bait for å flytte det
      }

      break;

    // Andre spilltilstander
    case EGameStatus.gameOver:
      if (!GameProps.gameOverSoundPlayed) {
        playSound(GameProps.sounds.gameOver);
        playSound(GameProps.sounds.heroIsDead);
        GameProps.gameOverSoundPlayed = true;
      }
      break;

    case EGameStatus.idle:
      GameProps.hero.updateIdle();
      break;
  }
}

// Start bevegelsen til sommerfuglene etter at helten dør
function startMovingBaits() {
  for (let i = 0; i < GameProps.baits.length; i++) {
    const bait = GameProps.baits[i];
    bait.speed = 2; // Sett fart på sommerfuglene
  }
}

function spawnObstacle() {
  const obstacle = new TObstacle(spcvs, SpriteInfoList.obstacle);
  GameProps.obstacles.push(obstacle);
  // Spawn a new obstacle in 2-7 seconds
  if (GameProps.status === EGameStatus.playing) {
    const seconds = Math.ceil(Math.random() * 5) + 2;
    setTimeout(spawnObstacle, seconds * 1000);
  }
}

function spawnBait() {
  const pos = new lib2d.TPosition(SpriteInfoList.background.width, Math.random() * (cvs.height - SpriteInfoList.food.height));  // Random Y-posisjon
  const bait = new TBait(spcvs, SpriteInfoList.food, pos);
  GameProps.baits.push(bait);
  console.log("New bait spawned at position:", pos);

  // Spawn a new bait in 0.5-1.5 seconds
  if (GameProps.status === EGameStatus.playing) {
    const sec = Math.ceil(Math.random() * 5) / 10 + 0.5;
    setTimeout(spawnBait, sec * 1000);
  }
}


export function startGame() {
  GameProps.status = EGameStatus.playing;
  GameProps.hero = new THero(spcvs, SpriteInfoList.hero1, new lib2d.TPosition(100, 100));
  GameProps.obstacles = [];
  GameProps.baits = []; // Nullstiller baits slik at nye kan spawnes
  GameProps.menu.reset();
  GameProps.gameOverSoundPlayed = false; // Nullstiller lydstatus

  spawnObstacle();
  spawnBait(); // ✅ Sørger for at nye sommerfugler dukker opp
  GameProps.sounds.running.play();
}

//--------------- Event Handlers -----------------------------------------//

function setSoundOnOff() {
  GameProps.soundMuted = chkMuteSound.checked;
  console.log(GameProps.soundMuted ? "Sound muted" : "Sound on");
}

function setDayNight() {
  if (rbDayNight[0].checked) {
    GameProps.dayTime = true;
    console.log("Day time");
  } else {
    GameProps.dayTime = false;
    console.log("Night time");
  }
}

function onKeyDown(aEvent) {
  switch (aEvent.code) {
    case "Space":
      if (!GameProps.hero.isDead) {
        GameProps.hero.flap();
        playSound(GameProps.sounds.flap); // 🎵 Play flap sound
      }
      break;
  }
}

//--------------- Main Code ----------------------------------------------//
chkMuteSound.addEventListener("change", setSoundOnOff);
rbDayNight[0].addEventListener("change", setDayNight);
rbDayNight[0].addEventListener("change", setDayNight);

// Load the sprite sheet
spcvs.loadSpriteSheet("./Media/FlappyBirdSprites.png", loadGame);
document.addEventListener("keydown", onKeyDown);