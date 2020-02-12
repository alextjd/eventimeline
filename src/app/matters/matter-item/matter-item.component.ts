import { Component, OnInit, Input } from '@angular/core';
import { Matter } from 'src/app/shared/interfaces/matter.interface';

@Component({
  selector: 'app-matter-item',
  templateUrl: './matter-item.component.html',
  styleUrls: ['./matter-item.component.scss']
})
export class MatterItemComponent implements OnInit {
  @Input() matter: Matter[];

  constructor() {}

  ngOnInit(): void {}
}
