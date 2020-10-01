import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipiesListComponent } from './recipies-list/recipies-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipies',
    pathMatch: 'full'
  },
  {
    path: 'recipies-list',
    component: RecipiesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipiesRoutingModule { }
