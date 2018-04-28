import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuItems = [
    { title: 'Dashboard', link: 'dashboard' },
    { title: 'Manage Employees', link: 'employees' }
  ];
  ngOnInit() {}
  constructor() {}
  getLink(x) {
    return x;
  }
}
