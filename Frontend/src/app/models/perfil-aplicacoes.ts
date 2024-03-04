import { Aplicacoes } from "./aplicacoes";
export class PerfilAplicacoes {
  id: number;
  idPerfil: number;
  idAplicacao?: number;
  aplicacao: Aplicacoes;

  constructor() {
    this.id = 0;
    this.idPerfil = 0;
    this.idAplicacao = 0;
    this.aplicacao = new Aplicacoes();
  }
}