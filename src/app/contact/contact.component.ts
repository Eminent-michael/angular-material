import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({

    senderName: new FormControl("", Validators.required),
    senderEmail: new FormControl("", [Validators.required, Validators.email]),
    senderMessage: new FormControl("", [Validators.required, Validators.minLength(10)]),
  })


  ngOnInit(): void {

  }

  submitForm() {

  }
}
