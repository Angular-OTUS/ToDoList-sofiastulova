import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ToDoListComponent} from "./components/to-do-list/to-do-list.component";
import {DetailsComponent} from "./components/to-do-list/details/details.component";
import {BoardComponent} from "./components/board/board.component";

const routes: Routes = [
  {
    path: 'backlog', component: ToDoListComponent,
    children: [
      {path: ':id', component: DetailsComponent}
    ]
  },
  {path: 'board', component: BoardComponent},
  {path: '', redirectTo: '/backlog', pathMatch: 'full'},
  {path: '**', redirectTo: '/backlog', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

