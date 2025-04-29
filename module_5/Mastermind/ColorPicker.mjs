"use strict";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import MastermindBoard from "./MastermindBoard.mjs";
import { GameProps } from "./Mastermind.mjs";

const Positions = MastermindBoard.ColorPicker;


export class TColorPicker extends libSprite.TSpriteDraggable {
  #spcvs;
  #spi;
  #color;
  #snapPos;
  #snapIndex;
  #hasMoved;
  constructor(spcvs, spriteInfo, color, index){
    super(spcvs, spriteInfo,Positions[color]);
    this.index = index;
    this.snapTo = GameProps.snapTo;
    this.#spcvs = spcvs;
    this.#spi = spriteInfo;
    this.#color = color;
    this.#snapPos = null;
    this.#hasMoved = false;
    this.#snapIndex = -1;
  }

  onCanDrop(){
    return false;
  }

  clone(){
    return new TColorPicker(
      this.#spcvs,
      this.#spi,
      this.#color,
      this.index
    )
  }

  onDrop(aDropPosition) {
    const index = GameProps.snapTo.positions.indexOf(aDropPosition);
    if (index === -1 || GameProps.snapTo.positions[index] === null) return;
  
    // Lag en ny klone tilbake på fargekilden
    GameProps.colorPickers.push(this.clone());
  
    this.#snapIndex = index;
    this.#snapPos = new lib2D.TPoint();
    this.#snapPos.x = aDropPosition.x;
    this.#snapPos.y = aDropPosition.y;
  
    // Fjern snap-posisjon
    GameProps.snapTo.positions[index] = null;
    this.#hasMoved = true;
    GameProps.playerAnswers[index] = this;
  }
  
  

  onMouseDown(){
    super.onMouseDown();
    //Få denne knappen til å være i det øverste laget
    const index = GameProps.colorPickers.indexOf(this);
    GameProps.colorPickers.splice(index, 1);
    GameProps.colorPickers.push(this);
    if(this.#snapPos !== null){
      console.log("Pushing snapPos", this.#snapPos);
      GameProps.snapTo.positions[this.#snapIndex] = this.#snapPos;
      this.#snapPos = null;
      GameProps.playerAnswers[this.#snapIndex] = null;
    }
  }

  onCancelDrop(){
   
    if(this.#hasMoved){
      const index = GameProps.colorPickers.indexOf(this);
      GameProps.colorPickers.splice(index, 1);
      this.#spcvs.removeSpriteButton(this);

    }
  }

} 