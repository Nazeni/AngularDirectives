import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowElement]'
})
export class ShowElementDirective implements OnInit{
    @Input('appShowElement') show!:number;

    constructor(private viewContainerRef: ViewContainerRef,
                private templateRef: TemplateRef<any>) { }


    ngOnInit(): void {
        console.log("TemplateRef", this.templateRef, this.viewContainerRef);
        setTimeout(()=>{
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }, this.show);
    }
}
