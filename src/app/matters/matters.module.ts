import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MattersContainerComponent } from './matters-container/matters-container.component';
import { MatterItemComponent } from './matter-item/matter-item.component';
import { MattersFilterComponent } from './matters-filter/matters-filter.component';
import { ReusableModule } from '../reusable/reusable.module';

@NgModule({
  declarations: [
    MattersContainerComponent,
    MatterItemComponent,
    MattersFilterComponent
  ],
  imports: [CommonModule, ReusableModule],
  exports: [MattersContainerComponent]
})
export class MattersModule {}
