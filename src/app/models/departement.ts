import { Assignment } from "./assignment";
import { Member } from "./member";

export class Departement {
    public id:number;
    public nameDep:string;
    public tasks:Assignment[];
    public members:Member[];
    public events:Event[]
    constructor(id:number,namedep:string,tasks:Assignment[],members:Member[],events:Event[]){
        this.id=id;
        this.nameDep=namedep;
        this.tasks=tasks;
        this.members=members;
        this.events=events;
    }
}
