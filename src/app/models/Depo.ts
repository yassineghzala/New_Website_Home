import { Assignment } from "./assignment";
import { Member } from "./member";

export class Depo {
    public id:number;
    public idMember:Member;
    public task:Assignment;
    public work:string;
    constructor(id:number,idMember:Member,task:Assignment,work:string){
        this.id=id;
        this.idMember=idMember;
        this.task=task;
        this.work=work;
    }
}
