import { Component, OnInit } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { Matter } from 'src/app/shared/interfaces/matter.interface';
import { MatterService } from 'src/app/shared/services/matter.service';

@Component({
  selector: 'app-matters-container',
  templateUrl: './matters-container.component.html',
  styleUrls: ['./matters-container.component.scss']
})
export class MattersContainerComponent implements OnInit {
  matters$: ReplaySubject<Matter[]>;

  constructor(private matterService: MatterService) {}

  ngOnInit(): void {
    this.matters$ = this.matterService.getAllMatters();
  }
}
