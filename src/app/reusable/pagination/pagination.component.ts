import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { itemsPerPage } from '../../shared/constants/pagination.constants';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  pageSize = itemsPerPage;

  constructor() {}

  ngOnInit(): void {}

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }
}
