/**
 * Created by sgl on 15/11/15.
 */
import {Inject, Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Template} from '../app/dockApp.model';
import {Router} from 'angular2/router';
import {ConsultantService} from "../app/consultant.service";

@Component({
    selector: 'service-component',
    templateUrl: 'component/service.component.html',
    styleUrls: ['app/service.component.css'],
    directives: [CORE_DIRECTIVES]
})
export class TemplatesComponent implements OnInit {

    constructor(private _router:Router, @Inject(ConsultantService) private _consultService) {
    }

    public templates:Template[];
    public selectedTemplate:Template;

    ngOnInit() {
        this.templates = this.getTemplates();
    }

    getTemplates() {
        this.selectedTemplate = undefined;
        this.templates = [];
        this._consultService.getTemplates().then(data => this.templates = data);
        return this.templates;
    }

    /**
     * Open select App detail.
     * @param dockApp
     */
    gotoDetail() {
        // this._router.navigate([Routes.template.name, {id: this.selectedTemplate.name}]);
    }

    removeTemplate(template:Template) {

    }

}