import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-logged-in-header',
  templateUrl: './logged-in-header.component.html',
  styleUrls: ['./logged-in-header.component.scss']
})
export class LoggedInHeaderComponent implements OnInit {
  showsidebar: any = true;
  @Output() toggleValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  logout(){

  }
  sideBarToggle() {
    this.showsidebar = !this.showsidebar
    this.toggleValue.emit(this.showsidebar);
  }
}

