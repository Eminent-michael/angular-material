import { Component, OnInit } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormControl } from '@angular/forms';

interface Food{
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  title = "Angular Material"

  ngOnInit() {

  }

}
