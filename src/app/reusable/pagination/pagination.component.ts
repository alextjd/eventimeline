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

  changePage(amount: number) {
    this.currentPage += amount;
    if (this.currentPage < 0) {
      this.currentPage = 0;
    }
    if (this.currentPage > this.pageSize - 1) {
      this.currentPage = this.pageSize - 1;
    }
    this.onPageChange(this.currentPage);
  }

  isCurrentPage(page: number): boolean {
    return page === this.currentPage;
  }
}
