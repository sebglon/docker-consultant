/**
 * Created by sgl on 15/11/15.
 */
import {Route, Router} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import {TemplatesComponent} from './templates.component';

export var Routes = {
    dashboard: new Route({path: '/', as: 'Dashboard', component: DashboardComponent}),
    templates: new Route({path: '/templates', as: 'Templates', component: TemplatesComponent})
}
export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);