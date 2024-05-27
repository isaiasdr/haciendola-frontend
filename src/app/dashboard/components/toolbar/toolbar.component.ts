import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  public openCreateModal: boolean = false;

  public showDialog() {
    this.openCreateModal = true;
  }

  public hideDialog() {
    this.openCreateModal = false;
  }
}
