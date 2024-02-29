export class User {
    id?: number;
    nome: string;
    login: string;
    idPerfil: number;
    criado?: Date;
    alterado?: Date

    constructor() {
        this.id = 0,
        this.nome = '',
        this.login = '',
        this.idPerfil = 0
    }
}