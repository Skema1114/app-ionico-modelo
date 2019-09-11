import { Pipe, PipeTransform } from '@angular/core';
// PIPE GERADO 10-09-19 JUNTO COM A PAGINA HOME-PIPE

@Pipe({
  name: 'formata'
})
export class RoundPipe implements PipeTransform {
  transform(value: number, ...args: any[]): any {
    if (value) {
      const casasDecimais = args[0];
      return value.toFixed(casasDecimais);
    }
  }
}
