import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResturentsListComponent } from './pages/resturents-list/resturents-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'resturents',
    pathMatch: 'full'
  },
  {
    path: 'resturents-list',
    component: ResturentsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResturentsRoutingModule { }
