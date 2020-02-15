import { FormControl } from '@angular/forms';
import { isSameMonth, isAfter } from 'date-fns';
import { ErrorMsgs } from 'src/app/shared/constants/error-messages.constants';

export function DateValidator(): any {
  return (control: FormControl): { [key: string]: any } => {
    const start: string = control.get('startDate').value;
    const end: string = control.get('endDate').value;
    const today: Date = new Date();
    const res: { [x: string]: string } = {};

    if (!isSameMonth(new Date(start), today)) {
      res.startDate = ErrorMsgs.outOfMonthDate;
    }
    if (!isSameMonth(new Date(end), today)) {
      res.endDate = ErrorMsgs.outOfMonthDate;
    }
    if (isAfter(new Date(start), new Date(end))) {
      res.startDate = ErrorMsgs.startAfterEnd;
      res.endDate = ErrorMsgs.startAfterEnd;
    }
    return Object.keys(res).length > 0 ? res : null;
  };
}
