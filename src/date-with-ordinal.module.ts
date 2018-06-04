import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateWithOrdinalPipe } from './date-with-ordinal.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DateWithOrdinalPipe
  ],
  exports: [
    DateWithOrdinalPipe
  ],
  providers: [
    DateWithOrdinalPipe
  ]
})
export class DateWithOrdinalModule { }
