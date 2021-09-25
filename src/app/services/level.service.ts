import { Injectable } from "@angular/core";
import { Word } from "./types";

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  constructor() { }

  getLevelOneWords(): Word[] {
    return [
      new Word(1, 'ВАШИНГТОН'),
      new Word(2, 'ЖЕШТИНА'),
      new Word(3, 'МАРИОНЕТКА'),
      new Word(4, 'СОЅВЕЗДИЕ'),
      new Word(5, 'ХУЛАХОП'),
      new Word(6, 'ЦАРСТВО'),
      new Word(7, 'ЉУБОМОРА'),
      new Word(8, 'КОЊУШНИЦА'),
      new Word(9, 'БЕРИЌЕТ'),
      new Word(10, 'УПАТСТВО'),
      new Word(11, 'КРОАСАН'),
      new Word(12, 'ЦИТАТ'),
      new Word(13, 'ДИЈАБЕТИЧАР'),
      new Word(14, 'ЛОКУМ'),
      new Word(15, 'ЃУМБИР'),
      new Word(16, 'ШПОРЕТ'),
      new Word(17, 'ОЏАЧАР'),
      new Word(18, 'ЗЕЛНИК'),
      new Word(19, 'ЧЕКАН'),
      new Word(20, 'ФРИЗЕРКА'),
      new Word(21, 'ЈАБОЛКНИЦА'),
      new Word(22, 'ПРИМОРЈЕ'),
      new Word(23, 'ДИЗАЈНЕР'),
      new Word(24, 'ЕДНОСТАВНО')
    ];
  }
}
