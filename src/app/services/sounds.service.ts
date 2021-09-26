import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SoundsService {
  files: any = [
    {
      url: "assets/sounds/letters/А.mp3",
      text: "А",
      isLetter: true
    },
    {
      url:"assets/sounds/letters/Б.mp3",
      text: "Б",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/В.mp3",
      text: "В",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Г.mp3",
      text: "Г",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Д.mp3",
      text: "Д",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Ѓ.mp3",
      text: "Ѓ",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Е.mp3",
      text: "Е",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Ж.mp3",
      text: "Ж",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/З.mp3",
      text: "З",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Ѕ.mp3",
      text: "Ѕ",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/И.mp3",
      text: "И",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Ј.mp3",
      text: "Ј",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/К.mp3",
      text: "К",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Л.mp3",
      text: "Л",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Љ.mp3",
      text: "Љ",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/М.mp3",
      text: "М",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Н.mp3",
      text: "Н",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Њ.mp3",
      text: "Њ",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/О.mp3",
      text: "О",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/П.mp3",
      text: "П",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Р.mp3",
      text: "Р",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/С.mp3",
      text: "С",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Т.mp3",
      text: "Т",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Ќ.mp3",
      text: "Ќ",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/У.mp3",
      text: "У",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Ф.mp3",
      text: "Ф",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Х.mp3",
      text: "Х",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Ц.mp3",
      text: "Ц",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Ч.mp3",
      text: "Ч",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Џ.mp3",
      text: "Џ",
      isLetter: true
    },
    {
      url: "assets/sounds/letters/Ш.mp3",
      text: "Ш",
      isLetter: true
    },
    {
      url: "assets/sounds/words/авион.mp3",
      text: "авион",
      isLetter: false
    },
    {
      url: "assets/sounds/words/балон.mp3",
      text: "балон",
      isLetter: false
    },
    {
      url: "assets/sounds/words/виножито.mp3",
      text: "виножито",
      isLetter: false
    },
    {
      url: "assets/sounds/words/готвач.mp3",
      text: "готвач",
      isLetter: false
    },
    {
      url: "assets/sounds/words/диносаурус.mp3",
      text: "диносаурус",
      isLetter: false
    },
    {
      url: "assets/sounds/words/ѓеврек.mp3",
      text: "ѓеврек",
      isLetter: false
    },
    {
      url: "assets/sounds/words/елка.mp3",
      text: "елка",
      isLetter: false
    },
    {
      url: "assets/sounds/words/жирафа.mp3",
      text: "жирафа",
      isLetter: false
    },
    {
      url: "assets/sounds/words/зајче.mp3",
      text: "зајче",
      isLetter: false
    },
    {
      url: "assets/sounds/words/ѕвонче.mp3",
      text: "ѕвонче",
      isLetter: false
    },
    {
      url: "assets/sounds/words/игла.mp3",
      text: "игла",
      isLetter: false
    },
    {
      url: "assets/sounds/words/јајце.mp3",
      text: "јајце",
      isLetter: false
    },
    {
      url: "assets/sounds/words/куќа.mp3",
      text: "куќа",
      isLetter: false
    },
    {
      url: "assets/sounds/words/лижавче.mp3",
      text: "лижавче",
      isLetter: false
    },
    {
      url: "assets/sounds/words/љубов.mp3",
      text: "љубов",
      isLetter: false
    },
    {
      url: "assets/sounds/words/маче.mp3",
      text: "маче",
      isLetter: false
    },
    {
      url: "assets/sounds/words/носорог.mp3",
      text: "носорог",
      isLetter: false
    },
    {
      url: "assets/sounds/words/њујорк.mp3",
      text: "њујорк",
      isLetter: false
    },
    {
      url: "assets/sounds/words/оган.mp3",
      text: "оган",
      isLetter: false
    },
    {
      url: "assets/sounds/words/паун.mp3",
      text: "паун",
      isLetter: false
    },
    {
      url: "assets/sounds/words/радио.mp3",
      text: "радио",
      isLetter: false
    },
    {
      url: "assets/sounds/words/сонце.mp3",
      text: "сонце",
      isLetter: false
    },
    {
      url: "assets/sounds/words/торта.mp3",
      text: "торта",
      isLetter: false
    },
    {
      url: "assets/sounds/words/ќуп.mp3",
      text: "ќуп",
      isLetter: false
    },
    {
      url: "assets/sounds/words/уста.mp3",
      text: "уста",
      isLetter: false
    },
    {
      url: "assets/sounds/words/фонтана.mp3",
      text: "фонтана",
      isLetter: false
    },
    {
      url: "assets/sounds/words/хеликоптер.mp3",
      text: "хеликоптер",
      isLetter: false
    },
    {
      url: "assets/sounds/words/цвекло.mp3",
      text: "цвекло",
      isLetter: false
    },
    {
      url: "assets/sounds/words/четка.mp3",
      text: "четка",
      isLetter: false
    },
    {
      url: "assets/sounds/words/џамлии.mp3",
      text: "џамлии",
      isLetter: false
    },
    {
      url: "assets/sounds/words/шах.mp3",
      text: "шах",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/бериќет.mp3",
      text: "бериќет",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/вашингтон.mp3",
      text: "вашингтон",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/ѓумбир.mp3",
      text: "ѓумбир",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/дизајнер.mp3",
      text: "дизајнер",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/дијабетичар.mp3",
      text: "дијабетичар",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/едноставно.mp3",
      text: "едноставно",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/жештина.mp3",
      text: "жештина",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/зелник.mp3",
      text: "зелник",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/јаболкница.mp3",
      text: "јаболкница",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/коњушница.mp3",
      text: "коњушница",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/кроасан.mp3",
      text: "кроасан",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/локум.mp3",
      text: "локум",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/љубомора.mp3",
      text: "љубомора",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/марионетка.mp3",
      text: "марионетка",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/оџачар.mp3",
      text: "оџачар",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/приморје.mp3",
      text: "приморје",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/соѕвездие.mp3",
      text: "соѕвездие",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/упатство.mp3",
      text: "упатство",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/фризерка.mp3",
      text: "фризерка",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/хулахоп.mp3",
      text: "хулахоп",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/царство.mp3",
      text: "царство",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/цитат.mp3",
      text: "цитат",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/чекан.mp3",
      text: "чекан",
      isLetter: false
    },
    {
      url: "assets/sounds/level-1/шпорет.mp3",
      text: "шпорет",
      isLetter: false
    }
  ];

  getFiles() {
    return of(this.files);
  }
}
