import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Matter } from 'src/app/shared/interfaces/matter.interface';
import { MatterService } from 'src/app/shared/services/matter.service';

@Component({
  selector: 'app-matters-container',
  templateUrl: './matters-container.component.html',
  styleUrls: ['./matters-container.component.scss']
})
export class MattersContainerComponent implements OnInit {
  matters$: Observable<Matter[]> = this.matterService.matters$;

  constructor(private matterService: MatterService) {}

  ngOnInit(): void {}
}
