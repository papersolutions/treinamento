namespace MinimalAPITeste.Models
{
    public class Perfil
    {
        public int Id { get; set; }
        public string Nome { get; set; } //Nome do perfil, por exemplo: admin, clientes, auditores
        public string Descricao { get; set; } 
        public bool isAdmin { get; set; } //Se ele tem acesso especial

    public Perfil()
    {
        Id = 0;
        Nome = "";
        Descricao = "";
        isAdmin = isAdmin;
    } 

    public Perfil(int Id, string Nome, string Descricao, bool isAdmin)
    {
        Id = 0;
        Nome = Nome;
        Descricao = Descricao;
        isAdmin = isAdmin;
    } 

    }
}
