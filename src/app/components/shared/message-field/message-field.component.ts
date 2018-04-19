import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-field',
  templateUrl: './message-field.component.html',
  styleUrls: ['./message-field.component.css']
})
export class MessageFieldComponent implements OnInit {
  @Input() content: string;

  constructor() { }

  ngOnInit() {
    // this.content = 'Sample message goes here such as JSON';
  }

}
