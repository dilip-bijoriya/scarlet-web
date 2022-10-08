import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {

    toggle = true;
    colourChange = false;
  
    getData(data: any) {
      if (!this.toggle) {
        this.toggle = true;
      }
      else {
        this.toggle = false;
      }
    }
    getColourChange(data: any) {
      if (data) {
        this.colourChange = false
      } else {
        this.colourChange = true
  
      }
  
    }
  }
  