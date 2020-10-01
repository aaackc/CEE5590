import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WikiListComponent } from './wiki-list/wiki-list.component';

//Routing file that exlpin the routs/link/url of the module.
export const routes: Routes = [
  {
    //if not route found that will redirect at here.
    path: '',
    redirectTo: 'wiki',
    pathMatch: 'full'
  },
  {
    path: 'wiki-list',
    component: WikiListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiRoutingModule { }
