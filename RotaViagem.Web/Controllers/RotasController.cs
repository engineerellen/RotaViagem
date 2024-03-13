using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RotaViagem.Domain.Interfaces;
using RotaViagem.Domain.Models;
using RotaViagem.Services;
using System.Text;

namespace RotaViagem.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RotasController : ControllerBase
    {
        private readonly IRepository<Rotas> _objRouteRepository;

        public RotasController(IRepository<Rotas> oRepository)
        {
            _objRouteRepository = oRepository;
        }

        [HttpGet("get")]
        public ActionResult GetAllTheRoutes()
        {
            try
            {
                var lstRoutes = _objRouteRepository.GetAll().ToList();
                return Ok(lstRoutes);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("getById")]
        public ActionResult<Rotas> GetByID(Guid id)
        {
            try
            {
                return Ok(_objRouteRepository.GetById(id));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("save")]
        public IActionResult Save(Rotas route)
        {
            try
            {
                var validadado = ValidateRoutes(route,"S");
                bool isOK = validadado.Item2;
                string badRequestMessage = validadado.Item1;

                if (isOK)
                {
                    _objRouteRepository.Save(route);

                    return Ok(route);
                }

                else
                    return BadRequest(badRequestMessage);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("findBestRoute")]
        public IActionResult FindBestRoute(string origem, string destino)
        {
            try
            {
                var melhorRota = new RotasServices(_objRouteRepository).EncontrarMelhorRota(origem, destino);
                var retorno = JsonConvert.SerializeObject(melhorRota);
                 return Ok(retorno);
              
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public IActionResult Update([FromBody] Rotas route)
        {
            try
            {
                var validadado = ValidateRoutes(route,"U");
                bool isOK = validadado.Item2;

                string badRequestMessage = validadado.Item1;

                if (isOK)
                {
                    _objRouteRepository.Update(route);
                    return Ok(route);
                }

                else
                    return BadRequest(badRequestMessage);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete")]
        public ActionResult Delete(Guid id)
        {
            try
            {
                _objRouteRepository.Delete(id);
                return Ok("Excluido com sucesso!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        protected Tuple<string, bool> ValidateRoutes(Rotas route,string command)
        {
            var retorno = true;
            var message = new StringBuilder();

            if (route is null)
            {
                message.Append($"Insira uma rota a ser salva!");
                retorno = false;
            }

            var routeGuid = _objRouteRepository.GetById(route.Id);

            if (routeGuid is not null && command == "S")
            {
                message.AppendLine($"Já existe uma rota com esse ID {route?.Id} .");
                retorno = false;
            }

            var lstRoutes = _objRouteRepository.GetAll().Where(r => r.Origem == route?.Origem && r.Destino == route?.Destino).ToList();

            if (lstRoutes.Count > 0 && command == "S")
            {
                message.AppendLine($"Já existe uma rota com essa Origem {route?.Origem} e Destino {route?.Destino}.");
                retorno = false;
            }

            return new Tuple<string, bool>(message.ToString(), retorno);
        }
    }
}