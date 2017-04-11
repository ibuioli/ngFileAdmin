import { Component, OnInit } from '@angular/core';
import { FileAdminService } from './fileadmin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'FileAdminService';

  constructor(private fileAdmin: FileAdminService) {

  }

  ngOnInit(){}
}
