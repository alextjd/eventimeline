import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { MattersModule } from '../matters/matters.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [CommonModule, LayoutModule, MattersModule],
  declarations: [PagesComponent],
  exports: [PagesComponent]
})
export class PagesModule {}
