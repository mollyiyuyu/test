import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-accordion-element',
  templateUrl: './accordion-element.component.html',
  styleUrls: ['./accordion-element.component.scss']
})
export class AccordionElementComponent implements OnInit {

  @Input() title: String;

  @Input() visible: Boolean;

  @Output() toggle = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  this.visible = false;
  }

}
