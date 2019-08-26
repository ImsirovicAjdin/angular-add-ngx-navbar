import { Component } from '@angular/core';
 
@Component({
  selector: 'nav-bar',
  templateUrl: './navigation.component.html'
})
export class NavbarComponent {
  isCollapsed = true;

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
  }  
}