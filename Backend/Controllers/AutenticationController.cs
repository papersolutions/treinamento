using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinimalAPITeste.Data;
using MinimalAPITeste.Models;
using PaperSolutions.Security;

namespace MinimalAPITeste.Controllers
{
    [ApiController]
    [Route(template: "v1")] 
    public class AutenticationController : ControllerBase
    {
        [HttpPost]
        [Route("auth")]
        public async Task<IActionResult> Auth([FromServices] AppDbContext context, [FromBody] AuthEntity authEntity){
            var user = await context.Users.Where(w => w.Login == authEntity.login).FirstOrDefaultAsync();
            string senhaCriptografada = "";

            if (user == null)
            {
                return NotFound("Usuário não Encontrado");
            }
            else
            {
                senhaCriptografada = Criptografia.Criptografar(authEntity.password);
                if(user.Senha == senhaCriptografada)
                {
                    return Ok(user);
                }
                else
                {
                    return Problem("Senha Incorreta");
                }
            }
        }
    }
}
 