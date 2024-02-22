using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinimalAPITeste.Data;
using MinimalAPITeste.Models;

namespace MinimalAPITeste.Controllers
{
    [ApiController]
    [Route(template: "v1")]
    public class MillEduardoController : ControllerBase
    {
        [HttpGet]
        [Route("milleduardo")]
        public async Task<IActionResult> GetAllMillEduardos([FromServices] AppDbContext contexto)
        {
            var allMillEduardos = await contexto.MillEduardos.ToListAsync();
            return Ok(allMillEduardos);
        }

        [HttpPost]
        [Route("milleduardo")]
        public async Task<IActionResult> InsertMillEduardo([FromServices] AppDbContext db, [FromBody] MillEduardo newMillEduardo)
        {
            MillEduardo millEduardo = new MillEduardo();
            millEduardo.MillId = newMillEduardo.MillId;
            millEduardo.ShortName = newMillEduardo.ShortName;

            await db.MillEduardos.AddAsync(millEduardo);
            await db.SaveChangesAsync();
            return Ok(millEduardo);

        }

        [HttpGet]
        [Route("milleduardo/{id}")]
        public async Task<IActionResult> GetByIDAsync([FromServices] AppDbContext context, int id)
        {
            var entity = await context.MillEduardos.Where(x => x.Id == id).AsNoTracking().ToListAsync();
            return entity == null ? NotFound() : Ok(entity);
        }


        [HttpPut]
        [Route("milleduardo/{id}")]
        public async Task<IActionResult> UpdateMillEduardo([FromServices] AppDbContext context, [FromBody] MillEduardo updatedMillEduardos, [FromRoute] int id)
        {
            var originalMillEduardo = await context.MillEduardos.FindAsync(id);

            if (originalMillEduardo == null)
            {
                return Problem("Mill Não Existe!");
            }
            else
            {
                originalMillEduardo.ShortName = updatedMillEduardos.ShortName;
                originalMillEduardo.MillId = updatedMillEduardos.MillId;
                originalMillEduardo.Criado = DateTime.Now;
                context.MillEduardos.Update(originalMillEduardo);
                await context.SaveChangesAsync();
                return Ok(originalMillEduardo);

            }

        }

        [HttpDelete("milleduardo/{id}")]
        public async Task<IActionResult> DeleteAsync([FromServices] AppDbContext context, [FromRoute] int id)
        {
            var entity = await context.MillEduardos.FindAsync(id);

            if (entity != null)
            {
                try
                {
                    context.MillEduardos.Remove(entity);
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
