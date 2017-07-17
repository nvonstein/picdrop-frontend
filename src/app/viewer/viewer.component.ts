import {Component, EventEmitter} from '@angular/core';
import {MdButton, MdCheckboxChange} from "@angular/material";


class Resource {
  public id : string;
  public img : number;
  public selected : boolean;
}

class ResourceService {
  static getResources() : Resource[] {
    let nums = [1,2,3,1,2,3,2,3,1,2,3,1,1,2,3,2,2,1,3,2];
    let data : Resource[] = [];
    for (let i in nums) {
      data = data.concat({id : i, img : nums[i], selected : false } as Resource);
    }
    return data;
  }
}


@Component({
  selector: 'component-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['../app.component.css']
})
export class ViewerComponent {

  protected viewMode = 'view_module';
  protected resources: Resource[] = ResourceService.getResources();

  onViewModeChange(mode : string) {
    this.viewMode = mode;
  }

  selectElement(event : MdCheckboxChange, index : number) : void {
    this.resources[index].selected = event.checked;
  }

  onGlobalSelect(toogle : boolean) {
    this.resources.forEach(x => x.selected = toogle);
  }

  allSelected() : boolean {
    return this.resources.every(_ => _.selected);
  }
}
