using MinimalAPITeste.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinimalAPITeste.Models;
using PaperSolutions.Security;
using Microsoft.AspNetCore.Authorization;

namespace MinimalAPITeste.Controllers
{
    [ApiController]
    [Route(template: "v1")]
    public class UserController : ControllerBase
    {
        [HttpGet]
        [Route("user")]
        public async Task<IActionResult> GetAsync([FromServices] AppDbContext context)
        {
            var entity = await context.Users.AsNoTracking().ToListAsync();
            return Ok(entity);
        }

        [HttpGet]
        [Route("user/{id}")]
        public async Task<IActionResult> GetByIDAsync([FromServices] AppDbContext context, int id)
        {
            var entity = await context.Users.Include("Perfil").Where(x => x.Id == id).AsNoTracking().ToListAsync();
            return entity == null ? NotFound() : Ok(entity);
        }

        [HttpGet]
        [Route("userByUsername/{username}")]
        public async Task<IActionResult> GetByUsernameAsync([FromServices] AppDbContext context, [FromRoute] string username)
        {
            var entity = await context.Users.Include("Perfil").Where(x => x.Login == username).FirstOrDefaultAsync();
            return entity == null ? NotFound() : Ok(entity);
        }

        [HttpPost("user")]
        public async Task<IActionResult> PostAsync([FromServices] AppDbContext context, [FromBody] User model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var entity = new User()
            {
                Nome = model.Nome,
                Login = model.Login,
                IdPerfil = model.IdPerfil,
                Criado = DateTime.Now
            };

            try
            {
                await context.Users.AddAsync(entity);
                await context.SaveChangesAsync();
                return Created("v1/user/{eniity.Id}", entity);
            }
            catch (Exception)
            {

                return BadRequest();
            }
        }

        [HttpPut("user/{id}")]
        public async Task<IActionResult> PutAsync([FromServices] AppDbContext context, [FromBody] User model, [FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var entity = await context.Users.Where(w => w.Id == id).FirstOrDefaultAsync();

            if (entity == null)
            {
                return NotFound();
            }
            else
            {
                try
                {
                    entity.Nome = model.Nome;
                    entity.Login = model.Login;
                    entity.IdPerfil = model.IdPerfil;
                    entity.Alterado = DateTime.Now;
                    context.Users.Update(entity);
                    await context.SaveChangesAsync();
                    return Ok(entity);
                }
                catch (Exception)
                {

                    return BadRequest();
                }
            }
        }

        [HttpDelete("users/{id}")]
        public async Task<IActionResult> DeleteAsync([FromServices] AppDbContext context, [FromRoute] int id)
        {
            var entity = await context.Users.FindAsync(id);

            if (entity != null)
            {
                try
                {
                    context.Users.Remove(entity);
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
