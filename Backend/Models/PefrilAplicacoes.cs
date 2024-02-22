using System.Security.Cryptography.X509Certificates;

namespace MinimalAPITeste.Models
{
    public class PefrilAplicacoes
    {
        public int Id { get; set; }
        public int IdPerfil { get; set; }
        public int IdAplicacao { get; set; }

        public PefrilAplicacoes()
        {
            Id = 0;
            IdPerfil = 0;
            IdAplicacao = 0;
        }
        public PefrilAplicacoes(int idPerfil, int idAplicacao)
        {
            Id = 0;
            IdPerfil = idPerfil;
            IdAplicacao = idAplicacao;
        }
    }

}
