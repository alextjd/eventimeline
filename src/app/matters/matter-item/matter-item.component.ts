import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Matter, MatterType } from 'src/app/shared/interfaces/matter.interface';

@Component({
  selector: 'app-matter-item',
  templateUrl: './matter-item.component.html',
  styleUrls: ['./matter-item.component.scss']
})
export class MatterItemComponent implements OnInit {
  @Input() matter: Matter;

  constructor() {}

  ngOnInit(): void {}

  getTypeColor(type: MatterType): { [x: string]: boolean } {
    return {
      'is-accent-teal': type === MatterType.Births,
      'is-black': type === MatterType.Deaths,
      'is-accent-lightgrey': type === MatterType.Events
    };
  }
}
