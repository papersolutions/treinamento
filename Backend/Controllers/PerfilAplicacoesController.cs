using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinimalAPITeste.Data;
using MinimalAPITeste.Models;
using System.Collections.Generic;
using System.Linq;

namespace MinimalAPITeste.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PerfilAplicacoesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PerfilAplicacoesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/PerfilAplicacoes 
        [HttpGet]
        [Route("acessos")]
        public ActionResult<IEnumerable<PefrilAplicacoes>> GetPerfisAplicacoes()
        {
            return _context.PerfilsAplicacoes.ToList();
        }

        [HttpGet]
        [Route("acessosByPerfil/{idPerfil}")]
        public async Task<IActionResult> GetAplicacoesByPerfil([FromRoute] int idPerfil)
        {
            var acessos = await _context.PerfilsAplicacoes.Include(nameof(PefrilAplicacoes.Aplicacao)).Where(perfilAplicacoes => perfilAplicacoes.IdPerfil == idPerfil).ToListAsync();
            var dto = acessos.Select(s => new { s.Aplicacao.IdParent, s.Aplicacao.Nome, s.Aplicacao.IsParent, s.Aplicacao.Command}).ToList();
            return Ok(dto.OrderBy(o => o.IdParent).ToList());
        }

        [HttpGet]
        [Route("perfisByApp/{idAplication}")]
        public async Task<IActionResult> GetPerfilByAplication([FromRoute] int idAplication)
        {
            var acessos = await _context.PerfilsAplicacoes.Where(perfilAplicacoes => perfilAplicacoes.IdAplicacao == idAplication).ToListAsync();
            return Ok(acessos);
        }

        [HttpPost]
        [Route("setAccess/{idPerfil}")]
        public async Task<IActionResult> SetAplicationAcess([FromRoute] int idPerfil, [FromBody] int[] acessos)
        {
            List<int> acessosAtuais = await _context.PerfilsAplicacoes.Where(perfilAplicacoes => perfilAplicacoes.IdPerfil == idPerfil).Select(perfilAplicacoes => perfilAplicacoes.IdAplicacao).ToListAsync();

            List<int> acessosNovos = acessos.Except(acessosAtuais).ToList();
            List<int> acessosExcluidos = acessosAtuais.Except(acessos).ToList();

            foreach (int aplicationId in acessosNovos)
            {
                PefrilAplicacoes novoAcesso = new PefrilAplicacoes(idPerfil, aplicationId);
                await _context.PerfilsAplicacoes.AddAsync(novoAcesso);
            }

            foreach (int aplicationId in acessosExcluidos)
            {
                var acessoADeletar = await _context.PerfilsAplicacoes.Where(w => w.IdAplicacao == aplicationId).FirstOrDefaultAsync();
                if (acessoADeletar == null)
                {
                    continue;
                }
                else
                {
                   _context.PerfilsAplicacoes.Remove(acessoADeletar);
                }
            }

            await _context.SaveChangesAsync();
            var resultado = await _context.PerfilsAplicacoes.Where(perfilAplicacoes => perfilAplicacoes.IdPerfil == idPerfil).ToArrayAsync();
            return Ok(resultado);
        }




    }
}
