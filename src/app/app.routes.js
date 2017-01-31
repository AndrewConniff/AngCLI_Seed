"use strict";
// Imports
var router_1 = require('@angular/router');
// Pages
var home_component_1 = require('./home/home.component');
// Route Configuration
var routes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: 'home', component: home_component_1.HomeComponent
    },
];
exports.ROUTING = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map