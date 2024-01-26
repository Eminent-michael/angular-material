import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  constructor() {

  }

  senderName = new FormControl("");
  senderEmail = new FormControl("");
  senderMessage = new FormControl("");

  ngOnInit() {
  }

  submitForm() {
    alert(this.senderName.value)
  }

}
