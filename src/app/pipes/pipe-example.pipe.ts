import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeExample'
})
export class PipeExamplePipe implements PipeTransform {

  transform(value: number, pow: number = 2): number {

    const result = value * pow;
    return result;
  }

}
