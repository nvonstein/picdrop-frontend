import {Component, EventEmitter, Output} from '@angular/core';
import {MdButton} from "@angular/material";

@Component({
    selector: 'component-viewer-toolbar',
    templateUrl: './viewer.toolbar.component.html',
    styleUrls: ['../app.component.css']
})
export class ViewerToolbarComponent {
  private viewMode = 'view_module';
  viewModeLabel = 'list';

  @Output() onModeChange = new EventEmitter<string>();

  constructor() {}

  toogleViewMode(viewModeBtn : MdButton) : void {
    var tmp = this.viewMode;
    this.viewMode = this.viewModeLabel;
    this.viewModeLabel = tmp;

    this.onModeChange.emit(this.viewMode);
  };
}
