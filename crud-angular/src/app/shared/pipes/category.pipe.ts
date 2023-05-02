import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

    transform(value: string): string {
        switch (value) {
            case 'front-end': return 'code';
            case 'back-end': return 'data_object';
            case 'mobile': return 'ad_units'

       }
    return 'terminal';
  }

}
