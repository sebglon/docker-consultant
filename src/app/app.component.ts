import {Component, Inject} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';
import {DockerService} from './docker.service';
import {Settings} from './settings.model';
import {DashboardComponent} from "./dashboard.component";
import {TemplatesComponent} from "./template-list.component";
import {ApplicationsListComponent} from "./applications-list.component";

@Component({
    selector: 'docker-consultant',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES]

})
@RouteConfig(APP_ROUTES)
export class AppComponent {
    public title = 'Docker consultant';
    public routes = Routes;

    constructor(@Inject("DockerServiceConfig") private config:Settings) {
        config.hostUrl = 'http://localhost:2375';

    }
}