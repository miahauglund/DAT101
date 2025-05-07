"use strict";

import lib2D from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { EGameStatus, GameProps, SheetData } from "./game.mjs";

export class TMenu {
  #spMenuBoard;
  #spcvs;
  #spPlay;
  #spPause;
  #buttonHome;
  #buttonRestart;
  #spResume;
  #playTrigger = null;
  #homeTrigger = null;
  #restartTrigger = null;
  #resumeTrigger = null;
  #totalScoreNumber;
  #timeScoreNumber;
  #currentCountdown = false;

  constructor(aSpriteCanvas) {
    this.#spcvs = aSpriteCanvas;

    // Sett spillstatus til Idle
    GameProps.gameStatus = EGameStatus.Idle;

    // Play-knapp
    const playPos = new lib2D.TPosition(350, 220);
    this.#spPlay = new libSprite.TSpriteButton(aSpriteCanvas, SheetData.Play, playPos);
    this.#spPlay.animateSpeed = 15; // Start blinkingen
    this.#spPlay.onClick = () => {
      if (this.#playTrigger) this.#playTrigger();
      console.log("Play button clicked");
    };

    // Resume-knapp
    const resumePos = new lib2D.TPosition(350, 220);
    this.#spResume = new libSprite.TSpriteButton(aSpriteCanvas, SheetData.Resume, resumePos);
    this.#spResume.animateSpeed = 15; // Start blinkingen
    this.#spResume.onClick = () => {
      if (this.#resumeTrigger) this.#resumeTrigger();
      console.log("Resume button clicked");
    };

    // Menybrett
    const menuBoardPos = new lib2D.TPosition(25, 50);
    this.#spMenuBoard = new libSprite.TSprite(aSpriteCanvas, SheetData.GameOver, menuBoardPos);

    // Hjem-knapp
    const homePos = new lib2D.TPoint(90, 400);
    const homeShapeSize = { width: 169, height: 167 };
    this.#buttonHome = new libSprite.TSpriteButton(aSpriteCanvas, SheetData.Home, homePos);
    this.#buttonHome.shape.width = homeShapeSize.width;
    this.#buttonHome.shape.height = homeShapeSize.height;
    this.#buttonHome.onClick = () => {
      if (this.#homeTrigger) this.#homeTrigger();
      console.log("Home button clicked");
    };

    // Restart-knapp
    const restartPos = new lib2D.TPoint(640, 400);
    const restartShapeSize = { width: 169, height: 167 };
    this.#buttonRestart = new libSprite.TSpriteButton(aSpriteCanvas, SheetData.Retry, restartPos);
    this.#buttonRestart.shape.width = restartShapeSize.width;
    this.#buttonRestart.shape.height = restartShapeSize.height;
    this.#buttonRestart.onClick = () => {
      if (this.#restartTrigger) this.#restartTrigger();
      console.log("Restart button clicked");
    };

    // Total score
    const totalScorePos = new lib2D.TPoint(10, 30); // Plasseringen på poeng på skjermen
    this.#totalScoreNumber = new libSprite.TSpriteNumber(aSpriteCanvas, SheetData.Number, totalScorePos);
    this.#totalScoreNumber.scale = 0.9;
    this.#totalScoreNumber.visible = true;
    this.#totalScoreNumber.value = 0;

    // Tidspoeng (hvis du ønsker å bruke tidspoeng i fremtiden)
    const timeScorePos = new lib2D.TPoint(14, 10);
    this.#timeScoreNumber = new libSprite.TSpriteNumber(aSpriteCanvas, SheetData.Number, timeScorePos);
    this.#timeScoreNumber.scale = 0.6;
    this.#timeScoreNumber.visible = true;
    this.#timeScoreNumber.value = 0;
  }

  updateScoreOnBaitEaten(points) {
    GameProps.totalScore += points;  // Oppdater total poeng i GameProps
    this.#totalScoreNumber.value = GameProps.totalScore;  // Oppdater poeng i menyen
    console.log(`Poeng oppdatert: ${this.#totalScoreNumber.value}`);  // Debugging
  }
  

  // Funksjon som håndterer kollisjon med eple (bait)
  handleBaitCollision(bait) {
    const pointsFromBait = 10;  // Poeng slangen får ved å spise et eple
    this.updateScoreOnBaitEaten(pointsFromBait);  // Oppdater poeng i menyen
    this.removeBait(bait);  // Fjern eplet fra skjermen
  }

  // Funksjon som sjekker kollisjon mellom slange og eple
  checkSnakeAndBaitCollision(snakeHead, baitList) {
    for (let bait of baitList) {
      if (this.isSnakeCollidingWithBait(snakeHead, bait)) {
        this.handleBaitCollision(bait);  // Håndter kollisjonen
      }
    }
  }

  // Funksjon for å sjekke kollisjon mellom slange og eple
  isSnakeCollidingWithBait(snakeHead, bait) {
    // Sjekk om slangen er på samme posisjon som eplet
    return snakeHead.x === bait.x && snakeHead.y === bait.y;
  }

  // Funksjon for å fjerne eplet fra skjermen
  removeBait(bait) {
    // Logikk for å fjerne eplet fra skjermen eller merke det som spist
    bait.visible = false;  // Eksempel på hvordan eplet kan fjernes
  }

  // Tegning av meny og score
  draw() {
    switch (GameProps.gameStatus) {
      case EGameStatus.Idle:
        this.#buttonHome.visible = false;
        this.#buttonRestart.visible = false;
        this.#spResume.visible = false;
        this.#spPlay.visible = true;
        this.#spPlay.draw();
        break;
      case EGameStatus.Playing:
        this.#spPlay.visible = false;
        this.#spResume.visible = false;
        this.#totalScoreNumber.visible = true;
        this.#totalScoreNumber.draw();  // Tegn totalpoeng
        this.#timeScoreNumber.visible = false;  // Skjul tidspoeng, hvis de ikke brukes nå
        break;
      case EGameStatus.Pause:
        this.#spPlay.visible = false;
        this.#spResume.visible = true;
        this.#spResume.draw();
        this.#totalScoreNumber.visible = true;
        this.#totalScoreNumber.draw();
        this.#timeScoreNumber.visible = false;  // Skjul tidspoeng under pause
        break;
        case EGameStatus.GameOver:
            this.#spPlay.visible = false;
            this.#spResume.visible = false;
            this.#totalScoreNumber.visible = true;  // Sørg for at poengsummen vises på Game Over-skjermen
            this.#totalScoreNumber.value = GameProps.totalScore;  // Oppdater poengsummen med verdien fra GameProps
            this.#totalScoreNumber.draw();  // Tegn poengsummen på skjermen
            this.#spMenuBoard.draw();
            this.#buttonHome.draw();
            this.#buttonHome.visible = true;
            this.#buttonRestart.visible = true;
            this.#buttonRestart.draw();
            break;
    }          
}

  showMenu() {
    switch (GameProps.gameStatus) {
      case EGameStatus.Idle:
        this.#spPlay.visible = true;
        this.#spResume.visible = false;
        this.#buttonHome.visible = false;
        this.#buttonRestart.visible = false;
        break;
      case EGameStatus.Playing:
        this.#spPlay.visible = false;
        this.#spResume.visible = false;
        this.#buttonHome.visible = false;
        this.#buttonRestart.visible = false;
        break;
      case EGameStatus.Pause:
        this.#spPlay.visible = false;
        this.#spResume.visible = true;
        this.#buttonHome.visible = false;
        this.#buttonRestart.visible = false;
        break;
      case EGameStatus.GameOver:
        this.#spPlay.visible = false;
        this.#spResume.visible = false;
        this.#buttonHome.visible = true;
        this.#buttonRestart.visible = true;
        break;
    }
  }

  // Setter callbacks for knappene
  setPlayTrigger(callBack) {
    this.#playTrigger = callBack;
  }

  setHomeTrigger(callBack) {
    this.#homeTrigger = callBack;
  }

  setRestartTrigger(callBack) {
    this.#restartTrigger = callBack;
  }

  setResumeTrigger(callBack) {
    this.#resumeTrigger = callBack;
  }

  // Oppdater totalpoeng
  updateTotalScore(value) {
    this.#totalScoreNumber.value = value;
  }

  // Hent total poeng (både tid og samlet poeng)
  getTotalPoints() {
    return this.#totalScoreNumber.value;
  }
}

export default TMenu;
