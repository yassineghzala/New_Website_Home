export class Event {
    public id:number;
    public nameE:string;
    public dateE:string;
    public description:string;
    public place:string;
    public statue:boolean;
    constructor(id:number,nameE:string,dateE:string,description:string,place:string,statue:boolean){
        this.id=id;
        this.nameE=nameE;
        this.dateE=dateE;
        this.description=description;
        this.place=place;
        this.statue=statue;
    }
}
