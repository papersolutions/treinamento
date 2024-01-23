using System.ComponentModel.DataAnnotations;

namespace MeuTodo.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string? Nome { get; set; }
        public string? Login { get; set; }
        public string? Senha { get; set; }
        public DateTime Criado { get; set; }
        public DateTime Alterado { get; set; }
    }
}
