using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RotaViagem.Infra.Migrations
{
    public partial class Migrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Rotas",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Origem = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: false),
                    Destino = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: false),
                    Valor = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rotas", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Rotas");
        }
    }
}
