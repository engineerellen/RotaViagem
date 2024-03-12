
using System.ComponentModel.DataAnnotations;

namespace RotaViagem.Domain.Models
{
    public class Rotas : BaseEntity
    {
        [Required]
        [StringLength(3, MinimumLength = 3)]
        public string? Origem { get; set; }

        [Required]
        [StringLength(3, MinimumLength = 3)]
        public string? Destino { get; set; }

        [Required]
        [Range(0.01, 9999999999999999.99)]
        public decimal Valor { get; set; }
    }
}