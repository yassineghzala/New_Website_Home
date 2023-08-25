export class User {
    public id:number;
    public fullname:string;
    public username:string;
    public password:string;
    public role:string
    public name: any;
    public mail: any;
    constructor(id:number,fullname:string,username:string,password:string,role:string){
        this.id=id
        this.fullname=fullname;
        this.username=username;
        this.password=password;
        this.role=role;
    }
}
