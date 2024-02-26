  export class Aplicacoes {
    id: number;
    idParent: number;
    nome: string;
    descricao: string;
    isParent: boolean;
    command: string;

    constructor() {
        this.id = 0;
        this.idParent = 0;
        this.nome = '';
        this.descricao  = '';
        this.isParent =false;
        this.command  = '';
    }
}
