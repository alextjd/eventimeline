import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matter-item',
  templateUrl: './matter-item.component.html',
  styleUrls: ['./matter-item.component.scss']
})
export class MatterItemComponent implements OnInit {
  @Input() matter: any;

  constructor() {}

  ngOnInit(): void {}
}
