import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyAccordionComponent } from './my-accordion.component';
import { AccordionElementComponent } from './accordion-element/accordion-element.component';

@NgModule({
  imports: [
  BrowserModule
  ],
  declarations: [MyAccordionComponent, AccordionElementComponent],
  exports: [MyAccordionComponent, AccordionElementComponent]
})
export class MyAccordionModule { }
