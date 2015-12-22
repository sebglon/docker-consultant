/**
 * Created by sgl on 09/11/15.
 */
export class DockApp {
    public id:string;

    constructor(public name: string,
                public services: Service[]) {
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

export class Template {
    constructor(public id:string,
                public name:string,
                public description:string,
                public active:boolean,
                public app:DockApp,
                public query:Query[]) {
    }

    toApp() {
        return
    }
}

export class Query {
    constructor(public query:string,
                public answers:string) {
    }
}