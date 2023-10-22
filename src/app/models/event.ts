
export class Event {
    public id:number;
    public nameEvent:string;
    public dateEvent:string;
    public description:string;
    public place:string;
    public statue:boolean;
    constructor(id:number,nameEvent:string,dateEvent:string,description:string,place:string,active:boolean){
        this.id=id;
        this.nameEvent=nameEvent;
        this.dateEvent=dateEvent;
        this.description=description;
        this.place=place;
        this.statue=active;
    }
}
