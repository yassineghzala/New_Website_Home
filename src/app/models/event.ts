export class Event {
    public id:number;
    public nameEvent:string;
    public dateEvent:string;
    public description:string;
    public place:string;
    public active:boolean;
    constructor(id:number,nameE:string,dateE:string,description:string,place:string,statue:boolean){
        this.id=id;
        this.nameEvent=nameE;
        this.dateEvent=dateE;
        this.description=description;
        this.place=place;
        this.active=statue;
    }
}
