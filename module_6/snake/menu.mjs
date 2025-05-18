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
  #gameOverScoreNumber;
  #currentCountdown = false;

  constructor(aSpriteCanvas) {
    this.#spcvs = aSpriteCanvas;

    // Sett spillstatus til Idle
    GameProps.gameStatus = EGameStatus.Idle;

    // === KNAPPER ===

    // Play-knapp
    this.#spPlay = new libSprite.TSpriteButton(aSpriteCanvas, SheetData.Play, new lib2D.TPosition(350, 220));
    this.#spPlay.animateSpeed = 15;
    this.#spPlay.onClick = () => {
      if (this.#playTrigger) this.#playTrigger();
      console.log("Play-knappen ble trykket");
    };

    // Resume-knapp
    this.#spResume = new libSprite.TSpriteButton(aSpriteCanvas, SheetData.Resume, new lib2D.TPosition(350, 220));
    this.#spResume.animateSpeed = 15;
    this.#spResume.onClick = () => {
      if (this.#resumeTrigger) this.#resumeTrigger();
      console.log("Resume-knappen ble trykket");
    };

    // Menybrett (Game Over)
    this.#spMenuBoard = new libSprite.TSprite(aSpriteCanvas, SheetData.GameOver, new lib2D.TPosition(25, 50));

    // Hjem-knapp
    this.#buttonHome = new libSprite.TSpriteButton(aSpriteCanvas, SheetData.Home, new lib2D.TPoint(90, 400));
    this.#buttonHome.shape.width = 169;
    this.#buttonHome.shape.height = 167;
    this.#buttonHome.onClick = () => {
      if (this.#homeTrigger) this.#homeTrigger();
      console.log("Hjem-knappen ble trykket");
    };

    // Restart-knapp
    this.#buttonRestart = new libSprite.TSpriteButton(aSpriteCanvas, SheetData.Retry, new lib2D.TPoint(640, 400));
    this.#buttonRestart.shape.width = 169;
    this.#buttonRestart.shape.height = 167;
    this.#buttonRestart.onClick = () => {
      if (this.#restartTrigger) this.#restartTrigger();
      console.log("Restart-knappen ble trykket");
    };

    // === SCORE DISPLAY ===

    // Total poengsum (øverst)
    this.#totalScoreNumber = new libSprite.TSpriteNumber(aSpriteCanvas, SheetData.Number, new lib2D.TPoint(10, 80));
    this.#totalScoreNumber.scale = 0.9;
    this.#totalScoreNumber.spacing = 10;
    this.#totalScoreNumber.visible = true;
    this.#totalScoreNumber.value = 0;

    // Eple-teller / tidspoeng
    this.#timeScoreNumber = new libSprite.TSpriteNumber(aSpriteCanvas, SheetData.Number, new lib2D.TPoint(14, 10));
    this.#timeScoreNumber.scale = 0.8;
    this.#timeScoreNumber.spacing = 10;
    this.#timeScoreNumber.visible = true;
    this.#timeScoreNumber.value = 0;

    // Game Over score
    this.#gameOverScoreNumber = new libSprite.TSpriteNumber(aSpriteCanvas, SheetData.Number, new lib2D.TPoint(570, 255));
    this.#gameOverScoreNumber.scale = 1.0;
    this.#gameOverScoreNumber.spacing = 10;
    this.#gameOverScoreNumber.visible = false;
  }

  // === DRAW FUNKSJON ===
  draw() {
    switch (GameProps.gameStatus) {
      case EGameStatus.Idle:
        this.#drawIdle();
        break;
      case EGameStatus.Playing:
        this.#drawPlaying();
        break;
      case EGameStatus.Pause:
        this.#drawPaused();
        break;
      case EGameStatus.GameOver:
        this.#drawGameOver();
        break;
    }
  }

  #drawIdle() {
    this.#hideAllButtons();
    this.#spPlay.visible = true;
    this.#spPlay.draw();
  }

  #drawPlaying() {
    this.#hideAllButtons();
    this.#totalScoreNumber.visible = true;
    this.#totalScoreNumber.draw();
    this.#timeScoreNumber.visible = true;
    this.#timeScoreNumber.draw();
  }

  #drawPaused() {
    this.#hideAllButtons();
    this.#spResume.visible = true;
    this.#spResume.draw();
    this.#totalScoreNumber.draw();
    this.#timeScoreNumber.draw();
  }

  #drawGameOver() {
    this.#spMenuBoard.draw();
    this.#buttonHome.visible = true;
    this.#buttonHome.draw();
    this.#buttonRestart.visible = true;
    this.#buttonRestart.draw();
    this.#gameOverScoreNumber.value = GameProps.totalScore;
    this.#gameOverScoreNumber.visible = true;
    this.#gameOverScoreNumber.draw();
  }

  #hideAllButtons() {
    this.#spPlay.visible = false;
    this.#spResume.visible = false;
    this.#buttonHome.visible = false;
    this.#buttonRestart.visible = false;
  }

  showMenu() {
    this.#hideAllButtons();
    switch (GameProps.gameStatus) {
      case EGameStatus.Idle:
        this.#spPlay.visible = true;
        break;
      case EGameStatus.Pause:
        this.#spResume.visible = true;
        break;
      case EGameStatus.GameOver:
        this.#buttonHome.visible = true;
        this.#buttonRestart.visible = true;
        break;
    }
  }

  // === TRIGGERE ===
  setPlayTrigger(callBack) { this.#playTrigger = callBack; }
  setHomeTrigger(callBack) { this.#homeTrigger = callBack; }
  setRestartTrigger(callBack) { this.#restartTrigger = callBack; }
  setResumeTrigger(callBack) { this.#resumeTrigger = callBack; }

  // === SCORE-OPPDATERINGER ===
  updateTotalScore(value) {
    console.log("Oppdaterer total poengsum til:", value);
    this.#totalScoreNumber.value = value;
  }

  reduceTotalScore() {
    if (this.#totalScoreNumber.value > 1) {
      this.#totalScoreNumber.value--;
      console.log("Reduserer total poengsum");
    }
  }

  updateAppleCount(count) {
    console.log("Oppdaterer antall epler til:", count);
    this.#timeScoreNumber.value = count;
  }

  updateTimeScore(score) {
    this.#timeScoreNumber.value += score;
  }

  addRemainingSeconds() {
    return this.#timeScoreNumber.value;
  }

  showGameOverScore(score) {
    const scoreDisplay = new libSprite.TSpriteNumber(this.#spcvs, SheetData.Number, new lib2D.TPoint(400, 300));
    scoreDisplay.scale = 1.5;
    scoreDisplay.value = score;
    scoreDisplay.draw();
  }
}

export default TMenu;
