import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHelpComponent } from './error-help/error-help.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [ErrorHelpComponent, PaginationComponent],
  imports: [CommonModule],
  exports: [ErrorHelpComponent, PaginationComponent]
})
export class ReusableModule {}
