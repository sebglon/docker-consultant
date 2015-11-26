import {Injectable, Inject} from 'angular2/angular2';
/// <reference path="../pouchdb.d.ts" />
import PouchDB = pouchdb.callback.PouchDB;


@Injectable() export  class ConsultantService {

    constructor(@Inject('MyDB') private db: PouchDB) {

    }

    init() {
        Doc =  this.db.get(0)
    }
}