import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToDoListComponent} from './components/to-do-list/to-do-list.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './modules/shared.module';
import {ToDoItemComponent} from './components/to-do-item/to-do-item.component';
import {TooltipComponent} from './components/tooltip/tooltip.component';
import {TodoCreateItemComponent} from './components/todo-create-item/todo-create-item.component';
import {ToastsComponent} from './components/toasts/toasts.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/to-do-list/details/details.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BoardComponent } from './components/board/board.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemComponent,
    TooltipComponent,
    TodoCreateItemComponent,
    ToastsComponent,
    DetailsComponent,
    SidebarComponent,
    BoardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
