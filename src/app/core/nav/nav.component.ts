import { Component, OnInit } from '@angular/core';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuItems: MenuItem[];
  
  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { caption: 'Overview', link: ['/overview'] },
      { caption: 'My tasks', link: ['/my-tasks'] },
      { caption: 'Overdue tasks', link: ['/overdue-tasks'] },
      { caption: 'Open questions', link: ['/open-questions'] },
      { caption: 'Add new RFC', link: ['/add'] },
    ];
  }

}
