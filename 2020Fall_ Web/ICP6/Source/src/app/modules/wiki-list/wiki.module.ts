import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WikiRoutingModule } from './wiki.routing';
import { WikiListComponent } from './wiki-list/wiki-list.component';

//Module file that tell us which things are used in this module.
@NgModule({
    declarations: [WikiListComponent],
    imports: [
      CommonModule,
      FormsModule,
      WikiRoutingModule
    ],
    entryComponents:[]

  })
  export class WikiModule { }
