export class Assignment {
    public id:number;
    public title:string;
    public description:string;
    public deadline:string;
    public score:number
    public statue:boolean
    constructor(id:number,title:string,description:string,deadline:string,score:number,statue:boolean){
        this.id=id;
        this.title=title;
        this.description=description;
        this.deadline=deadline;
        this.score=score;
        this.statue=statue;
    }
}
