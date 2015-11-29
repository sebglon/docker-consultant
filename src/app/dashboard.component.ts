/**
 * Created by sgl on 15/11/15.
 */
import {Inject} from 'angular2/angular2';
import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Routes} from './route.config';
import {DockApp} from './dockApp.model';
import {DockerService} from './docker.service';
import {Settings} from './settings.model';

@Component({
    selector: 'consultant-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css'],
    directives: [CORE_DIRECTIVES],
})
export class DashboardComponent implements OnInit {
    // Active application
    public dockApps:DockApp[];
    public hostVersion:Object;
    public ping: boolean;

    constructor(private _router:Router, @Inject(DockerService) private _dockerService, @Inject("DockerServiceConfig") private config:Settings) {
    }

    onInit() {
        this.dockApps = this.getActiveApps();
        this.getHostVersion();
        this.pingHost();
    }

    /**
     * Open select App detail.
     * @param dockApp
     */
    gotoDetail(dockApp:DockApp) {
        // this._router.navigate([Routes.detail.as, {id: dockApp.id}]);
    }

    /**
     * Get actual active App on known hosts.
     */
    getActiveApps() {
        // TODO call service
        var result:DockApp[];
        return result;
    }

    getHostVersion() {
        this._dockerService.getHostVersion()
            .map(res => res.json())
            .subscribe(
                hostVersion => this.hostVersion = hostVersion
            );

    }
    pingHost() {
        this._dockerService.pingHost().subscribe(data => this.ping=true, err => this.ping=false)
    }
}