import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHelpComponent } from './error-help/error-help.component';

@NgModule({
  declarations: [ErrorHelpComponent],
  imports: [CommonModule],
  exports: [ErrorHelpComponent]
})
export class ReusableModule {}
