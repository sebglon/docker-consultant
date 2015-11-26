/**
 * Created by sgl on 09/11/15.
 */
export class DockApp {
    name:string;
    services:Service[];

    constructor(name,
                services) {
        this.name = name;
        this.services = services;
    }
}

export class Service {
    constructor(public name:string,
                public image:Image) {
    }
}
export class Image {
    constructor(public name:string,

                public version?:string,
                public repo?:string) {
    }

    get fullname() {
        return this.repo ? this.repo + '/' + this.name + ":" + this.version : this.name + ":" + this.version;
    }
}