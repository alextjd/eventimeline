import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MattersContainerComponent } from './matters-container/matters-container.component';
import { MatterItemComponent } from './matter-item/matter-item.component';

@NgModule({
  declarations: [MattersContainerComponent, MatterItemComponent],
  imports: [CommonModule],
  exports: [MattersContainerComponent]
})
export class MattersModule {}
