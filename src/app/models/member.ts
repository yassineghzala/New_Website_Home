import { User } from "./user";

export class Member extends User{
    public override id!:number;
    public override fullname!: string;
    public override username!:string;
    public override password!:string;
    public override role!:string
    public mail:string;
    public score:number;
    public birthday:string;
    public cin:number;
    public phone:number;
    public idDep: number;
    public Mscore:number
    constructor(id:number,fullname:string,username:string,password:string,role:string,mail:string,birthday:string,cin:number,phone:number,idDep:number,score:number,Mscore:number){
        super(id,fullname,username,password,role);
        this.mail=mail;
        this.birthday=birthday;
        this.cin=cin;
        this.phone=phone;
        this.idDep=idDep;
        this.score=score;
        this.Mscore=Mscore
    }

}
