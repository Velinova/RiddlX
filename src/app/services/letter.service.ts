import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LetterService {
  constructor() { }

  getLetters(): any[] {
    return [
      { Id: 1, Letter: 'А', IsVowel: true },
      { Id: 2, Letter: 'Б', IsVowel: false },
      { Id: 3, Letter: 'В', IsVowel: false },
      { Id: 4, Letter: 'Г', IsVowel: false },
      { Id: 5, Letter: 'Д', IsVowel: false },
      { Id: 6, Letter: 'Ѓ', IsVowel: false },
      { Id: 7, Letter: 'Е', IsVowel: true },
      { Id: 8, Letter: 'Ж', IsVowel: false },
      { Id: 9, Letter: 'З', IsVowel: false },
      { Id: 10, Letter: 'Ѕ', IsVowel: false },
      { Id: 11, Letter: 'И', IsVowel: true },
      { Id: 12, Letter: 'Ј', IsVowel: false },
      { Id: 13, Letter: 'К', IsVowel: false },
      { Id: 14, Letter: 'Л', IsVowel: false },
      { Id: 15, Letter: 'Љ', IsVowel: false },
      { Id: 16, Letter: 'М', IsVowel: false },
      { Id: 17, Letter: 'Н', IsVowel: false },
      { Id: 18, Letter: 'Њ', IsVowel: false },
      { Id: 19, Letter: 'О', IsVowel: true },
      { Id: 20, Letter: 'П', IsVowel: false },
      { Id: 21, Letter: 'Р', IsVowel: false },
      { Id: 22, Letter: 'С', IsVowel: false },
      { Id: 23, Letter: 'Т', IsVowel: false },
      { Id: 24, Letter: 'Ќ', IsVowel: false },
      { Id: 25, Letter: 'У', IsVowel: true },
      { Id: 26, Letter: 'Ф', IsVowel: false },
      { Id: 27, Letter: 'Х', IsVowel: false },
      { Id: 28, Letter: 'Ц', IsVowel: false },
      { Id: 29, Letter: 'Ч', IsVowel: false },
      { Id: 30, Letter: 'Џ', IsVowel: false },
      { Id: 31, Letter: 'Ш', IsVowel: false }
    ];
  }

  getLetterImage(letter: string): string {
    let images: any[];
    images = [
      { Letter: 'А', Image: 'авион.png' },
      { Letter: 'Б', Image: 'балон.png' },
      { Letter: 'В', Image: 'виножито.png' },
      { Letter: 'Г', Image: 'готвач.png' },
      { Letter: 'Д', Image: 'диносаурус.png' },
      { Letter: 'Ѓ', Image: 'ѓеврек.png' },
      { Letter: 'Е', Image: 'елка.png' },
      { Letter: 'Ж', Image: 'жирафа.png' },
      { Letter: 'З', Image: 'зајче.png' },
      { Letter: 'Ѕ', Image: 'ѕвонче.png' },
      { Letter: 'И', Image: 'игла.png' },
      { Letter: 'Ј', Image: 'јајце.png' },
      { Letter: 'К', Image: 'куќа.png' },
      { Letter: 'Л', Image: 'лижавче.png' },
      { Letter: 'Љ', Image: 'љубов.png' },
      { Letter: 'М', Image: 'маче.png' },
      { Letter: 'Н', Image: 'носорог.png' },
      { Letter: 'Њ', Image: 'њујорк.png' },
      { Letter: 'О', Image: 'оган.png' },
      { Letter: 'П', Image: 'паун.png' },
      { Letter: 'Р', Image: 'радио.png' },
      { Letter: 'С', Image: 'сонце.png' },
      { Letter: 'Т', Image: 'торта.png' },
      { Letter: 'Ќ', Image: 'ќуп.png' },
      { Letter: 'У', Image: 'уста.png' },
      { Letter: 'Ф', Image: 'фонтана.png' },
      { Letter: 'Х', Image: 'хеликоптер.png' },
      { Letter: 'Ц', Image: 'цвекло.png' },
      { Letter: 'Ч', Image: 'четка.png' },
      { Letter: 'Џ', Image: 'џамлии.png' },
      { Letter: 'Ш', Image: 'шах.png' }
    ]

    return images.find((item) => { return item.Letter === letter; }).Image;
  }
}
