import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {ToDoListComponent} from "./components/to-do-list/to-do-list.component";

const routes: Routes = [


  {path: 'tasks', component: ToDoListComponent},
  {path: 'tasks/:id', component: ToDoListComponent},
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: '**', redirectTo: '/tasks', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

