export class IvaTipo {
id:string;
desc:string;
fchDesde:string;
fchHasta:string;

//constructor(id?:string,desc?:string,fchDesde?:string,fchHasta?:string){}
constructor(e:IvaTipo){
    this.id=e.id;
    this.desc=e.desc;
}
}


