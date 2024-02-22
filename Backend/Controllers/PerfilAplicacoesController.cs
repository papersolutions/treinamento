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
        public ActionResult<IEnumerable<PefrilAplicacoes>> GetPerfisAplicacoes()
        {
            return _context.PerfilsAplicacoes.ToList();
        }
        
    }
}
