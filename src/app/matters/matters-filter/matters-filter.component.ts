import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatterType } from 'src/app/shared/interfaces/matter.interface';

@Component({
  selector: 'app-matters-filter',
  templateUrl: './matters-filter.component.html',
  styleUrls: ['./matters-filter.component.scss']
})
export class MattersFilterComponent implements OnInit {
  @Output() filter: EventEmitter<{ [x: string]: string }> = new EventEmitter();

  selectConfig = {
    options: [MatterType.Deaths, MatterType.Births, MatterType.Events]
  };

  filterForm = new FormGroup({
    type: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.filter.emit(this.filterForm.value);
  }
}
