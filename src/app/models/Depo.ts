import { Assignment } from "./assignment";

export class Depo {
    public id:number;
    public work:string;
    public task:Assignment;
    public note:number
    public dateDepo:Date
    constructor(id:number,task:Assignment,work:string,note:number,dateDepo:Date){
        this.id=id;
        this.task=task;
        this.work=work;
        this.note=note
        this.dateDepo=dateDepo
    }
}
