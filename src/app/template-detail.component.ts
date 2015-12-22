/**
 * Created by sgl on 15/11/15.
 */
import {Inject, Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Template} from './dockApp.model';
import {ConsultantService} from "./consultant.service";

@Component({
    selector: 'consultant-templates',
    templateUrl: 'app/template-list.component.html',
    styleUrls: ['app/template-list.component.css'],
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