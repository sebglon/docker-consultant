/**
 * Created by sgl on 15/11/15.
 */
import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Routes} from './route.config';

@Component({
    selector: 'consultant-templates',
    templateUrl: 'app/templates.component.html',
    styleUrls: ['app/templates.component.css'],
    directives: [CORE_DIRECTIVES]
})
export class TemplatesComponent implements OnInit {

    constructor(private _router: Router) { }

    onInit() {
    }

    /**
     * Open select App detail.
     * @param dockApp
     */
    gotoDetail() {
        //this._router.navigate([Routes.detail.as, {id: dockApp.id}]);
    }

}