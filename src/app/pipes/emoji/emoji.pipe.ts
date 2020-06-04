import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {

  transform(value: string, type, additionalText): string {
    if (type === 'smile') {
      return value + ' 	😀' + ' ' + additionalText;
    }
    if (type === 'sad') {
      return value + ' 😶' + ' ' + additionalText;
    }
  }

}
