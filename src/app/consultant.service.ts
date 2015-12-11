import {Injectable, Inject} from 'angular2/angular2';
import {Template} from './dockApp.model';
/// <reference path="../pouchdb.d.ts" />
import PouchDB = pouchdb.thenable.PouchDB;

@Injectable() export  class ConsultantService {
    public ACTIVE_TEMPLATE_QUERY:string = 'template_index/activeTemplate';

    private db:PouchDB;

    constructor(@Inject('consulDB') db:PouchDB) {
        this.db = db;
    }

    init() {
        //Doc =  this.db.get(0)
    }
    getApps() {

    }

    getTemplates() {
        this.db.allDocs();
    }
}