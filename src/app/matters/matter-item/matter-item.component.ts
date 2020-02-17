import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Matter, MatterType } from 'src/app/shared/interfaces/matter.interface';
import {
  faBirthdayCake,
  faSkull,
  faCalendarDay,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

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
      'is-accent-yellow': type === MatterType.Births,
      'has-text-white': type === MatterType.Births,
      'is-black': type === MatterType.Deaths,
      'is-accent-teal': type === MatterType.Events
    };
  }

  getTypeIcon(type: any): IconDefinition {
    return type === MatterType.Births
      ? faBirthdayCake
      : type === MatterType.Deaths
      ? faSkull
      : faCalendarDay;
  }
}
