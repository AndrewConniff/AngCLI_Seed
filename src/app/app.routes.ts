// Imports
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomeComponent } from './home/home.component';

 // Route Configuration
const routes: Routes =  [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home', component: HomeComponent
    },
];

export const ROUTING = RouterModule.forRoot(routes);
