import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { MatterType, Matter } from 'src/app/shared/interfaces/matter.interface';
import {
  faBirthdayCake,
  faSkull,
  faCalendarDay
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-matter-type',
  templateUrl: './matter-type.component.html',
  styleUrls: ['./matter-type.component.scss']
})
export class MatterTypeComponent implements OnInit {
  @Input() matter: Matter;
  constructor() {}

  ngOnInit(): void {}

  getTypeIcon(type: any): IconDefinition {
    return type === MatterType.Births
      ? faBirthdayCake
      : type === MatterType.Deaths
      ? faSkull
      : faCalendarDay;
  }

  getTypeColor(type: MatterType): { [x: string]: boolean } {
    return {
      'is-accent-yellow': type === MatterType.Births,
      'has-text-white': type === MatterType.Births,
      'is-black': type === MatterType.Deaths,
      'is-accent-teal': type === MatterType.Events
    };
  }
}
