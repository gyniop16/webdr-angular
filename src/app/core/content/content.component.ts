import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  bodyClasses:string = "skin-blue sidebar-mini";
  body = document.getElementsByTagName('body')[0];
  
  constructor() { }

  ngOnInit() {
    //add the the body classes
    this.body.classList.add("skin-blue");
    this.body.classList.add("sidebar-mini");
  }

   ngOnDestroy() {
    //remove the the body classes
    this.body.classList.remove("skin-blue");
    this.body.classList.remove("sidebar-mini");
  }

}
