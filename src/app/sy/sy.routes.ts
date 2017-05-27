import { Ym2Component } from './ym2/ym2.component';
import { Ym1Component } from './ym1/ym1.component';

import { RouterModule } from '@angular/router';

export const syRoutes=[
    {
        path:'',
        redirectTo:'ym1',
        pathMatch:'full'
    },
    {
        path:'ym1',
        component:Ym1Component
    },
    {
        path:'ym2',
        component:Ym2Component
    }
];