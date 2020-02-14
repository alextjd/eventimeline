import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MattersContainerComponent } from './matters-container/matters-container.component';
import { MatterItemComponent } from './matter-item/matter-item.component';
import { MattersFilterComponent } from './matters-filter/matters-filter.component';

@NgModule({
  declarations: [MattersContainerComponent, MatterItemComponent, MattersFilterComponent],
  imports: [CommonModule],
  exports: [MattersContainerComponent]
})
export class MattersModule {}
