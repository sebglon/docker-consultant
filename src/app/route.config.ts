/**
 * Created by sgl on 15/11/15.
 */
import {Route, Router} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import {TemplatesComponent} from './template-list.component';
import {ApplicationsListComponent} from './applications-list.component';

export var Routes = {
    dashboard: new Route({path: '/', component: DashboardComponent, name: 'Dashboard'}),
    templates: new Route({path: '/templates', component: TemplatesComponent, name: 'Templates'}),
    template: new Route({path: '/template', component: TemplatesComponent, name: 'Template'}),
    applications: new Route({path: '/applications', component: ApplicationsListComponent, name: 'Applications'})
}
export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);