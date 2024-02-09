using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinimalAPITeste.Data;
using MinimalAPITeste.Models;

namespace MinimalAPITeste.Controllers
{
    [ApiController]
    [Route(template: "v1")]
    public class MillController : ControllerBase
    {
        [HttpGet]
        [Route("mill")]
        public async Task<IActionResult> GetAllMills([FromServices] AppDbContext contexto)
        {
            var allMills = await contexto.Mills.ToListAsync();
            return Ok(allMills);
        }

        [HttpPost]
        [Route("mill")]
        public async Task<IActionResult> InsertMill([FromServices] AppDbContext db, [FromBody] Mill newMill)
        {
            Mill mill = new Mill();
            mill.MillId = newMill.MillId;
            mill.ShortName = newMill.ShortName;

            await db.Mills.AddAsync(mill);
            await db.SaveChangesAsync();
            return Ok(mill);

        }

        [HttpPut]
        [Route("mill/{id}")]
        public async Task<IActionResult> UpdateMill([FromServices] AppDbContext context, [FromBody] Mill updatedMill, [FromRoute] int id )
        {
            var originalMill = await context.Mills.FindAsync(id);

            if (originalMill == null)
            {
                return Problem("Mill Não Existe!");
            }
            else
            {
                originalMill.ShortName = updatedMill.ShortName;
                originalMill.Alterado = DateTime.Now;
                context.Mills.Update(originalMill);
                await context.SaveChangesAsync();
                return Ok(originalMill);

            }

        }



    }
}
