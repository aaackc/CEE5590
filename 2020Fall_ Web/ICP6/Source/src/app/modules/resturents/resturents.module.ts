import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResturentsRoutingModule } from './resturents.routing';
import { ResturentsListComponent } from './pages/resturents-list/resturents-list.component';

@NgModule({
    declarations: [ResturentsListComponent],
    imports: [
      CommonModule,
      FormsModule,
      ResturentsRoutingModule
    ],
    entryComponents:[]
    
  })
  export class ResturentsModule { }