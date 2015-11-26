/**
 * Created by sgl on 16/11/15.
 */
import {Injectable, Inject} from 'angular2/angular2';
import {DockApp} from './dockApp.model';
import {Settings} from './settings.model';
import {Http} from "angular2/http";

@Injectable() export  class DockerService {

    constructor( @Inject(Http) private http: Http, @Inject("DockerServiceConfig") private config: Settings) {
    }


    /**
     * lists volumes from all volume drivers.
     * all: true, false, default false;
     * filters: a JSON encoded value of the filters (a map[string][]string) to process on the images list. Available filters:
     dangling=true
     label=key or label="key=value" of an image label
     filter: only return images with the specified name
     */
    getVolumes(all: boolean, filters: string, filter: string ) {
        const param = "?=";
        return this.http.get(this.config.hostUrl + '/images/json'+ param);
    }

    /**
     * to create a volume.
     */
    createVolume() {

    }

    getVolume(nate: string) {

    }
    getHostVersion() : Object {
        return this.http.get(this.config.hostUrl + '/version');
    }

    pingHost() {
        return this.http.get(this.config.hostUrl +'/_ping');
    }

}