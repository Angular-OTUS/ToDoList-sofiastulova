import {Component, OnInit} from '@angular/core';
import {ToastService} from '../../service/toast.service';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-toasts',
  template: `
    <div class="toast-container">
      <div *ngFor="let toast of toasts" class="toast">{{toast}}</div>
    </div>
  `,
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {
  toasts: string[] = [];

  constructor(private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.toasts = this.toastService.getToasts();
  }
}
