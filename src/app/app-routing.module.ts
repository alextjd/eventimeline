import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages/pages.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pages' },
  {
    path: 'pages',
    component: PagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
