export class Productos{
    constructor(public id:number, public nombre:string, public laboratorio:string,
        public elaboracion:Date, public caducidad:Date, public stock:number, public costo:number){

    }
}