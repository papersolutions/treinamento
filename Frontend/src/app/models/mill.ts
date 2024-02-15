export class Mill {
    id: number;
    millID?: string;
    shortName: string;
    criado?: Date;
    alterado?: Date;

    constructor() {
        this.id = 0;
        this.millID = '';
        this.shortName = '';
        this.criado = new Date();
        this.alterado = new Date();
    }
}
