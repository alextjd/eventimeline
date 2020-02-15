import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatterType } from 'src/app/shared/interfaces/matter.interface';
import { MatterFilter } from 'src/app/shared/interfaces/filter.interface';
import { Validators } from '@angular/forms';
import { DateValidator } from 'src/app/core/validators/date.validator';
import { format } from 'date-fns';

@Component({
  selector: 'app-matters-filter',
  templateUrl: './matters-filter.component.html',
  styleUrls: ['./matters-filter.component.scss']
})
export class MattersFilterComponent implements OnInit {
  @Output() filter: EventEmitter<MatterFilter> = new EventEmitter();

  selectConfig = {
    options: [MatterType.Deaths, MatterType.Births, MatterType.Events]
  };

  filterForm = new FormGroup(
    {
      type: new FormControl(''),
      startDate: new FormControl(format(new Date(), 'yyyy-MM-dd')),
      endDate: new FormControl(format(new Date(), 'yyyy-MM-dd'))
    },
    DateValidator()
  );

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.filter.emit(this.filterForm.value);
  }
}
