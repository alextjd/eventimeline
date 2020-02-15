import { FormControl } from '@angular/forms';
import { isSameMonth } from 'date-fns';

export function DateValidator(): any {
  return (control: FormControl): { [key: string]: any } => {
    const start: string = control.get('startDate').value;
    const end: string = control.get('endDate').value;
    const today: Date = new Date();
    if (
      !isSameMonth(new Date(start), today) ||
      !isSameMonth(new Date(end), today)
    ) {
      return { startDate: 'Invalid date', endDate: 'Invalid date' };
    }
    return null;
  };
}
