import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { MattersModule } from '../matters/matters.module';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, LayoutModule, MattersModule, SharedModule],
  declarations: [PagesComponent],
  exports: [PagesComponent]
})
export class PagesModule {}
