import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ButtonComponent} from '../components/button/button.component';
import {TooltipDirective} from '../directives/tooltip.directive';
import {LoadingComponent} from '../components/loading/loading.component';

@NgModule({
  declarations: [
    ButtonComponent,
    TooltipDirective,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonComponent,
    TooltipDirective,
    LoadingComponent,
  ]
})
export class SharedModule {
}
