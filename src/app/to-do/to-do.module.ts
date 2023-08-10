import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ToDolistComponent } from '../to-dolist/to-dolist.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ToDolistComponent],
  providers: [],
})
export class ToDoModule {}
