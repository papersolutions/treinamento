namespace MinimalAPITeste.Models
{
    //informações das aplicações do sistema ex: Cadastro de Mill, consulta de usuário. Cada "Página" é uma aplicação. 
    public class Aplicacao
    {
        public int Id { get; set; }
        public int IdParent { get; set; } //em qual cabeçalho da árvore se encaixa essa app?
        public string Nome { get; set; } = ""; //Nome de exibição
        public string Icon { get; set; } = ""; //Icone de exibição
        public string Descricao { get; set; } = "";//Descrição/tooltip dessa appl. 
        public bool IsParent { get; set; } //Se é um item de cabeçalho da arvore de aplicações.  
        public string Command { get; set; } = ""; //routerlink/comando para abrir a página. 

    }
}
