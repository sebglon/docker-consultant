import {bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS } from 'angular2/http';
import {AppComponent} from './app.component';
import {DockerService} from "./docker.service";
import {Settings} from "./settings.model";
//import {PouchDB} from '../pouchdb.d';
import PouchDB = pouchdb.callback.PouchDB;
import {ConsultantService} from "./consultant.service";

let config = new Settings('http://localhost:9999');
let db = new PouchDB('consulDB');
bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, DockerService,
    provide('DockerServiceConfig', {useValue: config}),
    provide('PouchDB', db),
    ConsultantService]);
