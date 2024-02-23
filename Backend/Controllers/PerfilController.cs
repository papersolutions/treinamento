using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinimalAPITeste.Data;
using MinimalAPITeste.Models;

namespace MinimalAPITeste.Controllers
{
    [ApiController]
    [Route(template: "v1")]
    public class PerfilController : ControllerBase
    {
        [HttpGet]
        [Route("perfil")]
        public async Task<IActionResult> GetAllPerfil([FromServices] AppDbContext contexto)
        {
            var allPerfils = await contexto.Perfils.ToListAsync();
            return Ok(allPerfils);
        }

        [HttpGet]
        [Route("perfil/{id}")]
        public async Task<IActionResult> GetByIDPerfil([FromServices] AppDbContext context, int id)
        {
            var entity = await context.Perfils.Where(x => x.Id == id).AsNoTracking().ToListAsync();
            return entity == null ? NotFound() : Ok(entity);
        }

        [HttpPost]
        [Route("perfil")]
        public async Task<IActionResult> InsertPerfil([FromServices] AppDbContext db, [FromBody] Perfil newPerfil)
        {
            Perfil perfil = new Perfil();
            perfil.Nome = newPerfil.Nome;
            perfil.Descricao = newPerfil.Descricao;
            perfil.isAdmin = newPerfil.isAdmin;
            await db.Perfils.AddAsync(perfil);
            await db.SaveChangesAsync();
            return Ok(perfil);

        }

        [HttpPost]
        [Route("perfilByUser")]
        public async Task<IActionResult> GetPerfilByUser([FromServices] AppDbContext context, [FromBody] User usuario)
        {
            var perfil = await context.Perfils.FindAsync(usuario.IdPerfil);
            if (perfil == null)
            {
                return Problem("Perfil não encontrado");
            }
            else
            {
                return Ok(perfil);
            }
        }

        [HttpGet]
        [Route("perfilByUserId")]
        public async Task<IActionResult> GetPerfilByUser([FromServices] AppDbContext context, [FromRoute] int userId)
        {
            var user = await context.Users.FindAsync(userId);
            if (user == null)
            {
                return Problem("Usuario não encontrado");
            }
            else
            {
            var perfil = await context.Perfils.FindAsync(user.IdPerfil);
                if (perfil == null)
                {
                    return Problem("Perfil não encontrado");
                }
                else
                {
                    return Ok(perfil);
                }
            }
        }

        [HttpPut]
        [Route("perfil/{id}")]
        public async Task<IActionResult> UpdatePerfil([FromServices] AppDbContext context, [FromBody] Perfil updatedPerfil, [FromRoute] int id )
        {
            var originalPerfil = await context.Perfils.FindAsync(id);

            if (originalPerfil == null)
            {
                return Problem("Perfil Não Existe!");
            }
            else
            {
                originalPerfil.Nome = updatedPerfil.Nome;
                originalPerfil.Descricao = updatedPerfil.Descricao;
                originalPerfil.isAdmin = updatedPerfil.isAdmin;
                
                context.Perfils.Update(originalPerfil);
                await context.SaveChangesAsync();
                return Ok(originalPerfil);

            }

        }
        [HttpDelete("perfil/{id}")]
        public async Task<IActionResult> DeleteAsync([FromServices] AppDbContext context, [FromRoute] int id)
        {
            var entity = await context.Perfils.FindAsync(id);

            if (entity != null)
            {
                try
                {
                    context.Perfils.Remove(entity);
                    await context.SaveChangesAsync();
                    return Ok();
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            else
            {
                return Ok();
            }


        }
    }
}
