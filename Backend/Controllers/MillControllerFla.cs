using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinimalAPITeste.Data;
using MinimalAPITeste.Models;

namespace MinimalAPITeste.Controllers
{
    [ApiController]
    [Route(template: "v1")]
    public class MillControllerFla : ControllerBase
    {
        [HttpGet]
        [Route("mill")]
        public async Task<IActionResult> GetAllMills([FromServices] AppDbContext db)
        {
            var allMills = await db.Mills.ToListAsync();
            return Ok(allMills);
        }

        [HttpPost]
        [Route("mill")]
        public async Task<IActionResult> InsertMill([FromServices] AppDbContext db, [FromBody] MillFla newMill)
        {
            var mill = new MillFla();
            mill.MillId = newMill.MillId;
            mill.ShortName = newMill.ShortName;

            await db.Mills.AddAsync(mill);
            await db.SaveChangesAsync();
            return Ok(mill);
        }

        [HttpPut]
        [Route("mill/{id}")]
        public async Task<IActionResult> UpdateMill([FromServices] AppDbContext db, [FromBody] MillFla updatedMill, [FromRoute] int id)
        {
            var originalMill = await db.Mills.FindAsync(id);

            if (originalMill == null)
            {
                return Problem("Mill Não Existe!");
            }
            else
            {
                originalMill.ShortName = updatedMill.ShortName;
                originalMill.Alterado = DateTime.Now;
                db.Mills.Update(originalMill);
                await db.SaveChangesAsync();
                return Ok(originalMill);
            }
        }
    }
}
