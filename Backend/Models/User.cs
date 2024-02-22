using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MinimalAPITeste.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string? Nome { get; set; }
        public string? Login { get; set; }
        public int IdPerfil { get; set; }
        public DateTime Criado { get; set; }
        public DateTime Alterado { get; set; }
        [ForeignKey(nameof(IdPerfil))]
        public Perfil? Perfil { get; set; }
    }
}
