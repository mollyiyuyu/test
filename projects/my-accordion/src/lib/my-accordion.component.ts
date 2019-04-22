import { Component, AfterContentInit, ContentChildren, QueryList} from '@angular/core';
import { AccordionElementComponent } from './accordion-element/accordion-element.component';

@Component({
  selector: 'lib-my-accordion',
  templateUrl: './my-accordion.component.html',
  styleUrls: ['./my-accordion.component.scss']
})
export class MyAccordionComponent implements AfterContentInit {

  @ContentChildren(AccordionElementComponent)
  elements: QueryList<AccordionElementComponent>

  constructor() { }

  ngAfterContentInit() {

    this.elements.toArray()[0].visible = true;

    this.elements.toArray().forEach((element) => {
      element.toggle.subscribe(() => {
        this.fold(element);
      });
    });
  }

  fold(element: AccordionElementComponent) {
     if(element.visible == false){
       this.elements.toArray().forEach((e)=>e.visible = false);
       element.visible = true;
     } else {
       element.visible =  false;
     }
  }
}
