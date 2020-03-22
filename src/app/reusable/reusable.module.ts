import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHelpComponent } from './error-help/error-help.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MatterTypeComponent } from './matter-type/matter-type.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ErrorHelpComponent, PaginationComponent, MatterTypeComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ErrorHelpComponent, PaginationComponent, MatterTypeComponent]
})
export class ReusableModule {}
