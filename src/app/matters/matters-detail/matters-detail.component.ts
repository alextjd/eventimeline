import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Matter } from 'src/app/shared/interfaces/matter.interface';

@Component({
  selector: 'app-matters-detail',
  templateUrl: './matters-detail.component.html',
  styleUrls: ['./matters-detail.component.scss']
})
export class MattersDetailComponent implements OnInit {
  @Input() show: boolean;
  @Input() matter: Matter;
  @Output() closeDetail: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closeDetail.emit();
  }
}
