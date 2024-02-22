using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MinimalAPITeste.Migrations
{
    /// <inheritdoc />
    public partial class idPerfilIdPerfil : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "idPerfil",
                table: "Users",
                newName: "IdPerfil");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IdPerfil",
                table: "Users",
                newName: "idPerfil");
        }
    }
}
