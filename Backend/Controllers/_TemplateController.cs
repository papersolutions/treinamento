//using MinimalAPITeste.Data;

//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using System.Threading.Tasks;
//using static System.Runtime.InteropServices.JavaScript.JSType;

//namespace MinimalAPITeste.Controllers
//{
//    [ApiController]
//    [Route(template: "v1")]
//    public class EntityController : ControllerBase
//    {
//        [HttpGet]
//        [Route("entity")]
//        public async Task<IActionResult> GetAsync([FromServices] AppDbContext context)
//        {
//            var entity = await context.entities.AsNoTracking().ToListAsync();
//            return Ok(entity);
//        }

//        [HttpGet]
//        [Route("entity/{id}")]
//        public async Task<IActionResult> GetByIDAsync([FromServices] AppDbContext context, int id)
//        {
//            var entity = await context.entities.Where(x => x.Id == id).AsNoTracking().FirstOrDefaultAsync();
//            return entity == null ? NotFound() : Ok(entity);
//        }

//        [HttpPost("entity")]
//        public async Task<IActionResult> PostAsync([FromServices] AppDbContext context, [FromBody] entity model)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest();
//            }

//            var entity = new entity()
//            {
//               //id
//            };

//            try
//            {
//                await context.entities.AddAsync(entity);
//                await context.SaveChangesAsync();
//                return Created("v1/entity/{eniity.Id}", entity);
//            }
//            catch (Exception)
//            {

//                return BadRequest();
//            }
//        }

//        [HttpPut("entity/{id}")]
//        public async Task<IActionResult> PutAsync([FromServices] AppDbContext context, [FromBody] Entity model, [FromRoute] int id)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest();
//            }

//            var entity = await context.entities.Where(w => w.Id == id).FirstOrDefaultAsync();

//            if (entity == null)
//            {
//                return NotFound();
//            }
//            else
//            {
//                try
//                {
//                    entity.Title = model.Title;
//                    context.entities.Update(entity);
//                    await context.SaveChangesAsync();
//                    return Ok(entity);
//                }
//                catch (Exception)
//                {

//                    return BadRequest();
//                }
//            }
//        }

//        [HttpDelete("entity/{id}")]
//        public async Task<IActionResult> DeleteAsync([FromServices] AppDbContext context, [FromRoute] int id)
//        {
//            var entity = await context.entities.FindAsync(id);

//            if (entity != null)
//            {
//                try
//                {
//                    context.entities.Remove(entity);
//                    await context.SaveChangesAsync();
//                    return Ok();
//                }
//                catch (Exception)
//                {
//                    return BadRequest();
//                }
//            }
//            else
//            {
//                return Ok();
//            }


//        }

//    }
//}
