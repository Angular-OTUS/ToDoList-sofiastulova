import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: string[] = [];

  showToast(toast: string) {
    this.toasts.push(toast);
  }

  getToasts(): string[] {
    return this.toasts;
  }
}
