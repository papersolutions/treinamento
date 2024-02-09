using System.ComponentModel.DataAnnotations;

namespace MinimalAPITeste.Models
{
    public class Mill
    {
        public int Id { get; set; }
        [Required]
        public string? MillId { get; set; }
        [Required]
        public string? ShortName { get; set;}
        public DateTime Criado { get; set; }
        public DateTime Alterado { get; set; }

        public Mill()
        {
            Id = 0;
            MillId = "";
            ShortName = "";
            Criado = DateTime.Now;
        }

        public Mill(string millId, string shortName)
        {
            Id = 0;
            MillId = millId;
            ShortName = shortName;
            Criado = DateTime.Now;
        }
    }
}
