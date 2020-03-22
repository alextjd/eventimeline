import { Component, OnInit, Input } from '@angular/core';
import { Matter } from 'src/app/shared/interfaces/matter.interface';

@Component({
  selector: 'app-matters-detail',
  templateUrl: './matters-detail.component.html',
  styleUrls: ['./matters-detail.component.scss']
})
export class MattersDetailComponent implements OnInit {
  @Input() show: boolean;
  @Input() matter: Matter;

  constructor() {}

  ngOnInit(): void {}
}
