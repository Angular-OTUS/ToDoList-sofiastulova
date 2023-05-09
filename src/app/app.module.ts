import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToDoListComponent} from './components/to-do-list/to-do-list.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {SharedModule} from './modules/shared.module';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ToastsComponent } from './components/toasts/toasts.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemComponent,
    TooltipComponent,
    LoadingComponent,
    AddTaskComponent,
    ToastsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
