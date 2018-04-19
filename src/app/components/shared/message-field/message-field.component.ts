import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-field',
  templateUrl: './message-field.component.html',
  styleUrls: ['./message-field.component.css']
})
export class MessageFieldComponent implements OnInit {
  content: string;

  constructor() { }

  ngOnInit() {
    this.content = 'Sample message goes here such as JSON';
  }

}
