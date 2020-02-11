import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MattersContainerComponent } from './matters/matters-container/matters-container.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'matters' },
  {
    path: 'matters',
    component: MattersContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
