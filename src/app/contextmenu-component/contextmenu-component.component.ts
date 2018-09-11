import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu-component.component.html',
  styleUrls: ['./contextmenu-component.component.css']
})
export class ContextmenuComponentComponent implements OnInit {

@Input() x=0;
  @Input() y=0;


  constructor() { }

  ngOnInit() {
  }

}
