import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReusableModule } from '../reusable/reusable.module';
import { MatterItemComponent } from './matter-item/matter-item.component';
import { MattersContainerComponent } from './matters-container/matters-container.component';
import { MattersFilterComponent } from './matters-filter/matters-filter.component';
import { MattersDetailComponent } from './matters-detail/matters-detail.component';

@NgModule({
  declarations: [
    MattersContainerComponent,
    MatterItemComponent,
    MattersFilterComponent,
    MattersDetailComponent
  ],
  imports: [
    CommonModule,
    ReusableModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [MattersContainerComponent]
})
export class MattersModule {}
