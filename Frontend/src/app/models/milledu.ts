export class MillEdu {
    id: any;
    millId: string;
    shortName: string;
    criado?: Date;
    alterado?: Date;
  

    constructor() {
        this.id = 0;
        this.millId = '';
        this.shortName = '';
        this.criado = new Date();
        this.alterado = new Date();
     
    }
}
