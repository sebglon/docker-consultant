/**
 * Created by sgl on 10/11/15.
 */
import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import { DockApp } from './dockApp.model';

@Component({
    selector: 'application-form',
    templateUrl:'app/application/application-form.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, DockApp]
})
export class ApplicationFormComponent {
//    model = new DockApp (
//        'My app'
/*        [new Service(
            'serviceName1',
            new Image('imageName1',
                'imageVersion1', 'imageRep1o')
), new Service(
            'serviceName2',
            new Image(
                'imageName2',
                'imageVersion1', 'imageRep1o')
        )]
//   );
 */   submitted = false;
    onSubmit() { this.submitted = true; }
}