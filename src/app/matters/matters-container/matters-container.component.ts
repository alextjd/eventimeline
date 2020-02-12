import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-matters-container',
  templateUrl: './matters-container.component.html',
  styleUrls: ['./matters-container.component.scss']
})
export class MattersContainerComponent implements OnInit {
  matters$: Observable<any>;

  constructor() {}

  ngOnInit(): void {}
}
