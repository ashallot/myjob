import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const appRoutes=[
    {
        path:'',
        redirectTo:'sy',
        pathMatch:'full'
    },
    {
        path:'sy',
        loadChildren:'./sy/sy.module#SyModule'
    },
    {
		path:'**',//fallback router must in the last
		loadChildren:'./app.module#AppModule'
    }
];