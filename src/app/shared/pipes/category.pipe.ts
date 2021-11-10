import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Refrigerante (2L)': return 'liquor';
      case 'Arroz (1Kg)': return 'rice_bowl';
    }
    return 'local_dining';
  }

}
