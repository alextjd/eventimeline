import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';
import { MatterFilter } from 'src/app/shared/interfaces/filter.interface';
import { Matter } from 'src/app/shared/interfaces/matter.interface';
import { MatterService } from 'src/app/shared/services/matter.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-matters-container',
  templateUrl: './matters-container.component.html',
  styleUrls: ['./matters-container.component.scss']
})
export class MattersContainerComponent implements OnInit {
  mattersRS: ReplaySubject<Matter[]>;
  subscriptions: Subscription;
  currentPage: number;
  showDetail = false;
  selectedMatter: Matter;
  filterData: MatterFilter = {
    type: '',
    startDate: format(new Date(), 'yyyy-MM-dd'),
    endDate: format(new Date(), 'yyyy-MM-dd')
  };

  constructor(private matterService: MatterService) {}

  ngOnInit(): void {
    this.mattersRS = this.matterService.getMattersRS();
    this.changePage(0);
  }

  updateFilters(data: MatterFilter) {
    this.filterData = data;
    this.getMatters();
    this.filterMatters();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.filterMatters();
  }

  filterMatters() {
    this.matterService
      .updateMatters(this.filterData, this.currentPage)
      .subscribe((matters: Matter[]) => {
        this.mattersRS.next(matters);
      });
  }

  getMatters() {
    this.matterService.retrieveMatters(
      this.filterData.startDate,
      this.filterData.endDate
    );
  }

  toggleDetail(matter: Matter) {
    console.log('ye');

    this.showDetail = !this.showDetail;
    this.selectedMatter = matter;
  }
}
