export class Assignment {
    public id:number;
    public title:string;
    public description:string;
    public ddl:string;
    public score:number
    public statue:boolean
    constructor(id:number,title:string,description:string,ddl:string,score:number,statue:boolean){
        this.id=id;
        this.title=title;
        this.description=description;
        this.ddl=ddl;
        this.score=score;
        this.statue=statue;
    }
}
