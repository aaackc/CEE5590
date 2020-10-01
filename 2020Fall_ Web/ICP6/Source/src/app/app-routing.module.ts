import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/resturents',
    pathMatch: 'full',
  },
  //all the modules we are using after login
  {
    path: 'resturents',
    component: ContentLayoutComponent
  },
  {
    path: 'resturents',
    component: ContentLayoutComponent,
    loadChildren: () =>
      import('@modules/resturents/resturents.module').then(m => m.ResturentsModule)
  },
  {
    path: 'recipies',
    component: ContentLayoutComponent
  },
  {
    path: 'recipies',
    component: ContentLayoutComponent,
    loadChildren: () =>
      import('@modules/daily-recipies/recipies.module').then(m => m.RecipiesModule)
  },
  {
    path: 'wiki',
    component: ContentLayoutComponent
  },
  {
    path: 'wiki',
    component: ContentLayoutComponent,
    loadChildren: () =>
      import('@modules/wiki-list/wiki.module').then(m => m.WikiModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    , {
      relativeLinkResolution: 'corrected'
    }
    //  , { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
