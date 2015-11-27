/**
 * Created by sgl on 10/11/15.
 */
import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, Inject} from 'angular2/angular2';
import {Router} from 'angular2/router';
import { DockApp, Service, Image } from './dockApp.model';
import { ConsultantService} from './consultant.service';

@Component({
    selector: 'applications-list',
    templateUrl:'app/applications-list.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ApplicationsListComponent {
    public selectedApp: DockApp[];
    public apps: DockApp[];

    constructor(private _router:Router, @Inject(ConsultantService) private _consultService) {
    }

    init() {
        this.selectedApp = [];
        this.apps = this._consultService.getApps()
    }

}