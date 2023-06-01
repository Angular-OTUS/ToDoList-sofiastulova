import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  id: number | undefined;

  private paramsSubscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, private router: Router) {
    this.paramsSubscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }

}
