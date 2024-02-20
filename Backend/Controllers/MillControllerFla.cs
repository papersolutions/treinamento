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
            var allMills = await db.MillsFla.ToListAsync();
            return Ok(allMills);
        }

        [HttpPost]
        [Route("millFla")]
        public async Task<IActionResult> InsertMill([FromServices] AppDbContext db, [FromBody] MillFla newMill)
        {
            try
            {
                MillFla mill = new MillFla();
                mill.MillId = newMill.MillId;
                mill.ShortName = newMill.ShortName;
                mill.Criado = DateTime.Now;


                await db.MillsFla.AddAsync(mill);
                await db.SaveChangesAsync();
                return Ok(mill);
            }
            catch (Exception ex)
            {

                return Problem(ex.Message);
            }
 
        }

        [HttpPut]
        [Route("millFla/{id}")]
        public async Task<IActionResult> UpdateMill([FromServices] AppDbContext db, [FromBody] MillFla updatedMill, [FromRoute] int id)
        {
            var originalMill = await db.MillsFla.FindAsync(id);

            if (originalMill == null)
            {
                return Problem("Mill Não Existe!");
            }
            else
            {
                originalMill.ShortName = updatedMill.ShortName;
                originalMill.Alterado = DateTime.Now;
                db.MillsFla.Update(originalMill);
                await db.SaveChangesAsync();
                return Ok(originalMill);
            }
        }

        [HttpDelete]
        [Route("millFla/{id}")]
        public async Task<IActionResult> DeleteMill([FromServices] AppDbContext db, [FromRoute] int id)
        {
            var mill = await db.MillsFla.FindAsync(id);

            if (mill == null)
            {
                return Problem("Mill Não Existe!");
            }

            db.MillsFla.Remove(mill);
            await db.SaveChangesAsync();
            return Ok("Mill deletado com sucesso");
        }

        [HttpGet]
        [Route("millFla/{id}")]
        public async Task<IActionResult> GetMillByIDAsync([FromServices] AppDbContext context, int id)
        {
            var mill = await context.MillsFla.Where(x => x.Id == id).AsNoTracking().ToListAsync();
            return mill == null ? NotFound() : Ok(mill);
        }
    }
}