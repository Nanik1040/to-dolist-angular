import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoInputComponent } from './to-do/to-do.component';
import { ToDolistComponent } from './to-dolist/to-dolist.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ToDoInputComponent, ToDolistComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
