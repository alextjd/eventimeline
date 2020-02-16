import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';
import { MatterFilter } from 'src/app/shared/interfaces/filter.interface';
import { Matter } from 'src/app/shared/interfaces/matter.interface';
import { MatterService } from 'src/app/shared/services/matter.service';

@Component({
  selector: 'app-matters-container',
  templateUrl: './matters-container.component.html',
  styleUrls: ['./matters-container.component.scss']
})
export class MattersContainerComponent implements OnInit {
  mattersRS: ReplaySubject<Matter[]>;
  subscriptions: Subscription;
  currentPage: number;
  filterData: MatterFilter;

  constructor(private matterService: MatterService) {}

  ngOnInit(): void {
    this.mattersRS = this.matterService.getAllMatters();
    this.changePage(0);
  }

  updateFilters(data: MatterFilter) {
    this.filterData = data;
    this.matterService.filterMatters(data).subscribe((matters: Matter[]) => {
      this.mattersRS.next(matters);
    });
  }

  changePage(page: number) {
    this.currentPage = page;
    this.matterService
      .changePage(page)
      .subscribe((matters: Matter[]) => this.mattersRS.next(matters));
  }
}
