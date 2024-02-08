export class User {
    id?: number;
    nome: string;
    login: string;
    senha: string;
    criado?: Date;
    alterado?: Date

    constructor() {
        this.id = 0,
        this.nome = '',
        this.login = '',
        this.senha = ''
    }
}