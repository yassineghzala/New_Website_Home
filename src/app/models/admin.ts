import { User } from "./user";

export class Admin extends User{
    public override id!:number;
    public override fullname!: string;
    public override username!:string;
    public override password!:string;
    public override role!:string
    constructor(id:number,fullname:string,username:string,password:string,role:string){
        super(id,fullname,username,password,role);
    }
}
