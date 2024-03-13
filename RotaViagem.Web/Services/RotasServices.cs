
using RotaViagem.Domain.Interfaces;
using RotaViagem.Domain.Models;

namespace RotaViagem.Services
{
    public class RotasServices
    {
        private List<Rotas> rotas;


        private readonly IRepository<Rotas> _objRouteRepository;
        public RotasServices(IRepository<Rotas> oRepository)
        {
            _objRouteRepository = oRepository;
        }
        public string EncontrarMelhorRota(string origem, string destino)
        {
            rotas = _objRouteRepository.GetAll().ToList();

            var melhorRota = CalcularMelhorRota(rotas, origem, destino);

            // Exibindo o resultado
            if (melhorRota == null)
                return $"Não foi possível encontrar uma rota de {origem} para {destino}.";
            else
                return $"A melhor rota de {origem} para {destino} é: {melhorRota} ao custo de ${CalcularCustoRota(rotas, melhorRota)}";
        }


        private static string CalcularMelhorRota(List<Rotas> rotas, string origem, string destino)
        {
            var caminhos = new Dictionary<string, string>();
            caminhos[origem] = origem;

            while (true)
            {
                bool atualizado = false;

                foreach (var rota in rotas)
                {
                    if (caminhos.ContainsKey(rota.Origem))
                    {
                        if (!caminhos.ContainsKey(rota.Destino))
                        {
                            caminhos[rota.Destino] = caminhos[rota.Origem] + " - " + rota.Destino;
                            atualizado = true;
                        }
                    }
                }

                if (!atualizado)
                    break;
            }

            if (!caminhos.ContainsKey(destino))
                return "Rota não encontrada";

            return caminhos[destino];
        }

        private static decimal CalcularCustoRota(List<Rotas> rotas, string rota)
        {
            var cidades = rota.Split(" - ");
            decimal custoTotal = 0;

            for (int i = 0; i < cidades.Length - 1; i++)
            {
                var rotaAtual = rotas.FirstOrDefault(r => r.Origem == cidades[i] && r.Destino == cidades[i + 1]);
                if (rotaAtual != null)
                    custoTotal += rotaAtual.Valor;
            }

            return custoTotal;
        }
    }
}