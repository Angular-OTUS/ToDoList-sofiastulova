import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive, ElementRef,
  HostListener,
  Injector,
  Input, OnDestroy
} from '@angular/core';
import {TooltipComponent} from "../components/tooltip/tooltip.component";

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy {

  @Input() tooltip: string = '';

  @HostListener('mouseenter') onMouseEnter(): void {
    if (this.componentRef === null) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
      this.componentRef = componentFactory.create(this.injector);
      this.appRef.attachView(this.componentRef.hostView);
      const domElem = (this.componentRef.hostView as any).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      this.setTooltipComponentProperties();
    }
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.destroy();
  }

  private componentRef: ComponentRef<any> | null = null;

  constructor(
    private ElementRef: ElementRef,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
  ) {
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {
      this.componentRef.instance.tooltip = this.tooltip;
      const {left, right, bottom} = this.ElementRef.nativeElement.getBoundingClientRect();
      this.componentRef.instance.left = (right - left) / 2 + left;
      this.componentRef.instance.top = bottom;
    }
  }

  destroy(): void {
    if (this.componentRef !== null) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
