import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems = [
    { linkId: 1, linkName: 'Home',linkedUrl:'../home' },
    { linkId: 2, linkName: 'Contact' },
    { linkId: 3, linkName: 'test' ,linkedUrl:'test'},
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
