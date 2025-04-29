"use strict";

//--------------------------------------------------------------------------------------------------------------------
//------ Imports
//--------------------------------------------------------------------------------------------------------------------
import lib2D from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { TColorPicker } from "./ColorPicker.mjs";
import MastermindBoard from "./MastermindBoard.mjs";
import { TMenu } from "./menu.mjs";


//--------------------------------------------------------------------------------------------------------------------
//------ Variables, Constants and Objects
//--------------------------------------------------------------------------------------------------------------------

// prettier-ignore
export const SpriteInfoList = {
  Board:              { x: 640, y:   0, width: 441, height: 640, count: 1 },
  ButtonNewGame:      { x:   0, y:  45, width: 160, height:  45, count: 4 },
  ButtonCheckAnswer:  { x:   0, y:   0, width: 160, height:  45, count: 4 },
  ButtonCheat:        { x:   0, y: 139, width:  75, height:  49, count: 4 },
  PanelHideAnswer:    { x:   0, y:  90, width: 186, height:  49, count: 1 },
  ColorPicker:        { x:   0, y: 200, width:  34, height:  34, count: 8 },
  ColorHint:          { x:   0, y: 250, width:  19, height:  18, count: 3 },
};

const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);

//Add all you game objects here
export const GameProps = {
  board: null,
  colorPickers:[],
  snapTo:{
    positions: MastermindBoard.ColorAnswer.Row1,
    distance: 20
  },
  computerAnswers: [],
  roundIndicator: null,
  menu: null,
  playerAnswers: [null, null, null, null],
  answerHintRow: MastermindBoard.AnswerHint.Row1,
  panelHideAnswer: null,

}


//--------------------------------------------------------------------------------------------------------------------
//------ Functions
//--------------------------------------------------------------------------------------------------------------------

export function newGame() {
  //Vi må fjerne alle farger fra colorPickers, her ligger også player answers
  for(let i = 0; i < GameProps.colorPickers.length; i++){
    const colorPicker = GameProps.colorPickers[i];
    spcvs.removeSpriteButton(colorPicker);
  }
  GameProps.colorPickers = [];
  const ColorKeys = Object.keys(MastermindBoard.ColorPicker);
  
  GameProps.snapTo.positions = MastermindBoard.ColorAnswer.Row1;
  moveRoundIndicator();

  for(let i = 0; i < ColorKeys.length; i++){
    const colorName = ColorKeys[i]; //Color name
    const colorPicker = new TColorPicker(spcvs, SpriteInfoList.ColorPicker, colorName, i);
    GameProps.colorPickers.push(colorPicker);
  }
  GameProps.computerAnswers = [];

  generateComputerAnswer();
  GameProps.panelHideAnswer.draw();

}

function drawGame(){
  spcvs.clearCanvas();
  //Draw all game objects here, remember to think about the draw order (layers in PhotoShop for example!)
  GameProps.board.draw();
  if (GameProps.panelHideAnswer.visible) {
    GameProps.panelHideAnswer.draw();
  }
  

  for(let i = 0; i < GameProps.computerAnswers.length; i++){
    const computerAnswer = GameProps.computerAnswers[i];
    computerAnswer.draw();
  }
  
  GameProps.roundIndicator.draw();

  GameProps.menu.draw();

  for(let i = 0; i < GameProps.colorPickers.length; i++){
    const colorPicker = GameProps.colorPickers[i];
    colorPicker.draw();
  }

  requestAnimationFrame(drawGame);
}

function generateComputerAnswer(){
  for(let i = 0; i < 4 ; i++){
    const colorIndex = Math.floor(Math.random() * SpriteInfoList.ColorPicker.count);
    const pos = MastermindBoard.ComputerAnswer[i];
    const sprite = new libSprite.TSprite(spcvs, SpriteInfoList.ColorPicker,pos);
    sprite.index = colorIndex;
    GameProps.computerAnswers.push(sprite);
  }

}

export function moveRoundIndicator(){
  const pos = GameProps.snapTo.positions[0];
  GameProps.roundIndicator.x = pos.x - 84;
  GameProps.roundIndicator.y = pos.y + 7;
}
export function toggleCheat() {
  GameProps.panelHideAnswer.visible = !GameProps.panelHideAnswer.visible;
}

//--------------------------------------------------------------------------------------------------------------------
//------ Event Handlers
//--------------------------------------------------------------------------------------------------------------------

//loadGame runs once when the sprite sheet is loaded
function loadGame() {
  //Set canvas with and height to match the sprite sheet
  cvs.width = SpriteInfoList.Board.width;
  cvs.height = SpriteInfoList.Board.height;
  spcvs.updateBoundsRect();
  let pos = new lib2D.TPoint(0, 0);
  GameProps.board = new libSprite.TSprite(spcvs, SpriteInfoList.Board, pos);

  pos = GameProps.snapTo.positions[0];
  GameProps.roundIndicator = new libSprite.TSprite(spcvs, SpriteInfoList.ColorHint, pos);
  GameProps.roundIndicator.index = 2;
  moveRoundIndicator();
  GameProps.panelHideAnswer = new libSprite.TSprite(spcvs, SpriteInfoList.PanelHideAnswer, new lib2D.TPoint(127, 7));
GameProps.panelHideAnswer.visible = true;


  GameProps.menu = new TMenu(spcvs);

  newGame();
  requestAnimationFrame(drawGame); // Start the animation loop
}
function checkAnswer() {
  const guess = GameProps.playerAnswers.map(p => p.index);
  const solution = GameProps.computerAnswers.map(p => p.index);

  const usedGuess = [false, false, false, false];
  const usedSolution = [false, false, false, false];
  let black = 0, white = 0;

  // Først: svarte hint (riktig farge og plass)
  for (let i = 0; i < 4; i++) {
    if (guess[i] === solution[i]) {
      black++;
      usedGuess[i] = usedSolution[i] = true;
    }
  }

  // Deretter: hvite hint (riktig farge, feil plass)
  for (let i = 0; i < 4; i++) {
    if (!usedGuess[i]) {
      for (let j = 0; j < 4; j++) {
        if (!usedSolution[j] && guess[i] === solution[j]) {
          white++;
          usedSolution[j] = true;
          break;
        }
      }
    }
  }

  // Vis hintpinner
  const posList = GameProps.answerHintRow;
  const hintPins = [];
  for (let i = 0; i < black; i++) {
    const pin = new libSprite.TSprite(spcvs, SpriteInfoList.ColorHint, posList[i]);
    pin.index = 1; // black
    hintPins.push(pin);
  }
  for (let i = 0; i < white; i++) {
    const pin = new libSprite.TSprite(spcvs, SpriteInfoList.ColorHint, posList[black + i]);
    pin.index = 0; // white
    hintPins.push(pin);
  }

  hintPins.forEach(pin => pin.draw());

  // Vinn?
  if (black === 4) {
    GameProps.panelHideAnswer.visible = false;
    // Vis "You win" melding evt. via en egen sprite
    disableGame();
    if (GameProps.playerAnswers.includes(null)) {
      console.warn("Du må velge 4 farger før du kan sjekke svaret.");
      return;
    }
    
   
  }

  // Neste runde
  advanceRound();
}
let currentRound = 1;

function advanceRound() {
  currentRound++;
  if (currentRound > 10) {
    GameProps.panelHideAnswer.visible = false;
    // Tap
    disableGame();
    return;
  }

  // Flytt til neste rad
  GameProps.snapTo.positions = MastermindBoard.ColorAnswer["Row" + currentRound];
  GameProps.answerHintRow = MastermindBoard.AnswerHint["Row" + currentRound];
  GameProps.playerAnswers = [null, null, null, null];
  moveRoundIndicator();
}

function disableGame() {
  // Deaktiver interaksjon, evt. ved å sette en flag
  GameProps.gameOver = true;
}


//--------------------------------------------------------------------------------------------------------------------
//------ Main Code
//--------------------------------------------------------------------------------------------------------------------


spcvs.loadSpriteSheet("./Media/SpriteSheet.png", loadGame);
window.addEventListener("resize", spcvs.updateBoundsRect.bind(spcvs));