import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatterType } from 'src/app/shared/interfaces/matter.interface';

@Component({
  selector: 'app-matters-filter',
  templateUrl: './matters-filter.component.html',
  styleUrls: ['./matters-filter.component.scss']
})
export class MattersFilterComponent implements OnInit {
  selectConfig = {
    options: [MatterType.Deaths, MatterType.Births, MatterType.Events],
    title: 'Type'
  };

  filterForm = new FormGroup({
    type: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  });

  constructor() {}

  ngOnInit(): void {
    this.onFilterChange();
  }

  onFilterChange() {
    this.filterForm.valueChanges.subscribe();
  }
}
