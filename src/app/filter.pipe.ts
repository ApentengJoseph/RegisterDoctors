import { Pipe, PipeTransform } from '@angular/core';
import { DoctorsList } from './doctors.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(doctorsList: DoctorsList[], filterText: string): any {
    if (!filterText) {
      return doctorsList;
    } else {
      if (filterText) {
        doctorsList = doctorsList.filter(
          (x) => x.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
        );
      }
    }
    return doctorsList;
  }
}
