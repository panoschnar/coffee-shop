import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutSring'
})
export class CutSringPipe implements PipeTransform {

  transform(text:string): string {
    return text.substring(0,4);
  }

}
