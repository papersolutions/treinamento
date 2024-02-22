using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MinimalAPITeste.Migrations
{
    /// <inheritdoc />
    public partial class UserRmvSenhaAdcIdPerfil : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Senha",
                table: "Users");

            migrationBuilder.AddColumn<int>(
                name: "idPerfil",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "idPerfil",
                table: "Users");

            migrationBuilder.AddColumn<string>(
                name: "Senha",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
