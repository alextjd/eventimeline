import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
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
  currentPage = 0;

  constructor(private matterService: MatterService) {}

  ngOnInit(): void {
    this.mattersRS = this.matterService.getAllMatters();
    this.changePage(this.currentPage);
  }

  updateFilters(data: MatterFilter) {
    this.matterService.filterMatters(data);
  }

  changePage(index: number) {
    this.matterService.changePage(index);
  }
}
