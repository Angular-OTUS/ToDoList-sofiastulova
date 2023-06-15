import {Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public url: string = 'backlog';

  getUrl() {
    this.url = window.location.href;
    if (this.url.includes('backlog')) {
      this.url = 'backlog';
    } else if (this.url.includes('board')) {
      this.url = 'board';
    }
  }
}
