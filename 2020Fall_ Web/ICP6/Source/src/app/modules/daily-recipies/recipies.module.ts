import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipiesRoutingModule } from './recipies.routing';
import { RecipiesListComponent } from './recipies-list/recipies-list.component';

@NgModule({
    declarations: [RecipiesListComponent],
    imports: [
      CommonModule,
      FormsModule,
      RecipiesRoutingModule
    ],
    entryComponents:[]
    
  })
  export class RecipiesModule { }