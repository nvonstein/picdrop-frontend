import {Component} from '@angular/core';
import {MdButton} from "@angular/material";

@Component({
  selector: 'component-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['../app.component.css']
})
export class ViewerComponent {
  protected viewMode = 'view_module';
  nums = [1,2,3,1,2,3,2,3,1,2,3,1,1,2,3,2,2,1,3,2];

  onViewModeChange(mode : string) {
    this.viewMode = mode;
  }
}
