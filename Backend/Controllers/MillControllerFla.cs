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
        [Route("millFla")]
        public async Task<IActionResult> GetAllMills([FromServices] AppDbContext db)
        {
            var allMills = await db.Mills.ToListAsync();
            return Ok(allMills);
        }

        [HttpPost]
        [Route("millFla")]
        public async Task<IActionResult> InsertMill([FromServices] AppDbContext db, [FromBody] MillFla newMill)
        {
            MillFla mill = new MillFla();
            mill.MillId = newMill.MillId;
            mill.ShortName = newMill.ShortName;

            await db.MillsFla.AddAsync(mill);
            await db.SaveChangesAsync();
            return Ok(mill);
        }

        [HttpPut]
        [Route("millFla/{id}")]
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