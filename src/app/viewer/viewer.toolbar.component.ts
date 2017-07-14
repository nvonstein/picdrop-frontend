import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MdButton, MdCheckboxChange} from "@angular/material";

@Component({
    selector: 'component-viewer-toolbar',
    templateUrl: './viewer.toolbar.component.html',
    styleUrls: ['../app.component.css']
})
export class ViewerToolbarComponent {
  private viewMode = 'view_module';
  viewModeLabel = 'list';

  @Output() onModeChange = new EventEmitter<string>();
  @Output() onSelect = new EventEmitter<boolean>();
  @Input() selectionState : boolean = false;

  constructor() {}

  toogleViewMode(viewModeBtn : MdButton) : void {
    var tmp = this.viewMode;
    this.viewMode = this.viewModeLabel;
    this.viewModeLabel = tmp;

    this.onModeChange.emit(this.viewMode);
  };

  onSelectAll() : void {
    this.onSelect.emit(true);
  }

  onDeselectAll() : void {
    this.onSelect.emit(false);
  }

  onSelectEvent(event : MdCheckboxChange) : void {
    this.onSelect.emit(event.checked);
  }
}
