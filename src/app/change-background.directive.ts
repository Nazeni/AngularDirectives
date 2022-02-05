import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective implements OnInit{
    @Input('appChangeBackground') color = " ";

    constructor(private elementRef: ElementRef<HTMLHeadingElement>) { }

    ngOnInit(): void {
        console.log("SETCOLOR:", this.color);
        this.elementRef.nativeElement.style.backgroundColor = this.color;
    }
}
