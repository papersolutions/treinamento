using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinimalAPITeste.Data;
using MinimalAPITeste.Models;

namespace MinimalAPITeste.Controllers
{
    [ApiController]
    [Route(template: "v1")]
    public class AplicacoesController : ControllerBase
    {
        [HttpGet]
        [Route("aplicacoes")]
        public async Task<IActionResult> GetAllApp([FromServices] AppDbContext contexto)
        {
            var allApps = await contexto.Aplicacoes.ToListAsync();
            return Ok(allApps);
        }

        [HttpGet]
        [Route("appParent")]
        public async Task<IActionResult> GetAllParentApp([FromServices] AppDbContext contexto)
        {
            var allApps = await contexto.Aplicacoes.Where(w => w.IsParent).ToListAsync();
            return Ok(allApps);
        }

        [HttpGet]
        [Route("aplicacoes/{id}")]
        public async Task<IActionResult> GetByIDApp([FromServices] AppDbContext context, int id)
        {
            var entity = await context.Aplicacoes.Where(x => x.Id == id).AsNoTracking().ToListAsync();
            return entity == null ? NotFound() : Ok(entity);
        }

        [HttpPost]
        [Route("aplicacoes")]
        public async Task<IActionResult> InsertApp([FromServices] AppDbContext db, [FromBody] Aplicacao newApp)
        {
            Aplicacao app = new Aplicacao();
            app.Nome = newApp.Nome;
            app.Descricao = newApp.Descricao;
            app.IsParent = newApp.IsParent;
            app.IdParent = newApp.IdParent;
            app.Command = newApp.Command;
            app.Id = newApp.Id;

            await db.Aplicacoes.AddAsync(app);
            await db.SaveChangesAsync();
            return Ok(app);

        }

        [HttpPut]
        [Route("aplicacoes/{id}")]
        public async Task<IActionResult> UpdateApp([FromServices] AppDbContext context, [FromBody] Aplicacao updatedApp, [FromRoute] int id)
        {
            var originalApp = await context.Aplicacoes.FindAsync(id);

            if (originalApp == null)
            {
                return Problem("Aplicação Não Existe!");
            }
            else
            {
                originalApp.Nome = updatedApp.Nome;
                originalApp.Descricao = updatedApp.Descricao;
                originalApp.IsParent = updatedApp.IsParent;
                originalApp.IdParent = updatedApp.IdParent;
                originalApp.Id = updatedApp.Id;
                originalApp.Command = updatedApp.Command;

                context.Aplicacoes.Update(originalApp);
                await context.SaveChangesAsync();
                return Ok(originalApp);

            }
        }

        [HttpDelete("aplicacoes/{id}")]
        public async Task<IActionResult> DeleteAsyncApp([FromServices] AppDbContext context, [FromRoute] int id)
        {
            var entity = await context.Aplicacoes.FindAsync(id);

            if (entity != null)
            {
                try
                {
                    context.Aplicacoes.Remove(entity);
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
                return NotFound();
            }
        }
    }
}
