import { NgModule } from '@angular/core';

import { HighlightDirective } from './hide.directive';

@NgModule({
    declarations: [
        HighlightDirective
    ],
    exports: [
        HighlightDirective
    ]
})
export class SharedModule{}