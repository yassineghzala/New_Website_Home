export class Waiting {
    public id:number;
    public idMember:number;
    public idAssignment:number;
    public work:string;
    constructor(id:number,idMember:number,idAssignment:number,work:string){
        this.id=id;
        this.idMember=idMember;
        this.idAssignment=idAssignment;
        this.work=work;
    }
}
