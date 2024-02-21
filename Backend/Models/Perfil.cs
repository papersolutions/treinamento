namespace MinimalAPITeste.Models
{
    public class Perfil
    {
        public int Id { get; set; }
        public string Nome { get; set; } //Nome do perfil, por exemplo: admin, clientes, auditores
        public bool isAdmin { get; set; } //Se ele tem acesso especial

    }
}
