import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LinkcomponentComponent } from './linkcomponent/linkcomponent.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';

import { TodoListComponent } from './todo-list/todo-list.component';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkcomponentComponent,
    MaincomponentComponent,
    TodoListComponent,
    StockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }