export class MyApp {
   private _msessage: string = "prova";

 get message(): string {
    return this._msessage;
  }

  set message(valore: string) {
    
    this._msessage = valore;
  }
  nome: string = "Aurelia";
}
