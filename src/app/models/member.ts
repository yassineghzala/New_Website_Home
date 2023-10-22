import { Depo } from "./Depo";
import { MonthScore } from "./month-score";
import { User } from "./user";

export class Member extends User{
    public override id!:number;
    public override fullname!: string;
    public override username!:string;
    public override password!:string;
    public override role!:string
    public override pdp!:string
    public score:number;
    public birthday:string;
    public cin:number;
    public phone:number;
    public Mscore:MonthScore[]
    public depos:Depo[]
    constructor(id:number,fullname:string,username:string,password:string,role:string,mail:string,birthday:string,cin:number,phone:number,pdp:string,score:number,Mscore:MonthScore[],depos:Depo[]){
        super(id,fullname,username,pdp,password,role);
        this.mail=mail;
        this.birthday=birthday;
        this.cin=cin;
        this.phone=phone;
        this.score=score;
        this.Mscore=Mscore
        this.depos=depos
    }

}
