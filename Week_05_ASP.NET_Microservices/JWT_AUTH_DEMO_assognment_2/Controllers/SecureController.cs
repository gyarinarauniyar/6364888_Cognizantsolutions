using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthDemo.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class SecureController : ControllerBase
    {
        [HttpGet("hello")]
        public IActionResult Hello()
        {
            var username = User.Identity?.Name ?? "Unknown";
            return Ok($"Hello, {username}. You are authorized!");
        }
    }
}
