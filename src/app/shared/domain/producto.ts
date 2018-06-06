export class Producto {

    id: Number;
    nombre: String;
    precioRef: Number;
    createdAt:String;
    constructor(id?: Number, nombre?: string, precio?: Number,createdAt?:String) { }
}

export class Address {
    constructor(
      public firstname?: string,
      public lastname?: string,
      public address?: string,
      public city?: string,
      public state?: string,
      public postalcode?: string
    ) {}
  }