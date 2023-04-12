import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ButtonComponent} from "../components/button/button.component";
import {TooltipDirective} from "../directives/tooltip.directive";

@NgModule({
  declarations: [
    ButtonComponent,
    TooltipDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonComponent,
    TooltipDirective,
  ]
})
export class SharedModule {
}
