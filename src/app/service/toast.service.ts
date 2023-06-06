import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  // private toasts: string[] = [];
  private toasts = new BehaviorSubject<string[]>([]);
  toasts$ = this.toasts.asObservable();

  get currentToasts(): any {
    return this.toasts.value;
  }

  set currentToasts(value: string[]) {
    this.toasts.next(value);
  }

  showToast(toast: string) {
    this.toasts.value.push(toast);
    this.toasts.next(this.toasts.value);
    setTimeout(() => {
      this.toasts.value.shift();
      this.toasts.next(this.toasts.value);
    }, 3000);
  }

  getToasts(): string[] {
    return this.toasts.value;
  }
}
