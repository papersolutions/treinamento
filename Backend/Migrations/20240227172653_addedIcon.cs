using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MinimalAPITeste.Migrations
{
    /// <inheritdoc />
    public partial class addedIcon : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.AddColumn<string>(
                name: "Icon",
                table: "Aplicacoes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Users_IdPerfil",
                table: "Users",
                column: "IdPerfil");

            migrationBuilder.CreateIndex(
                name: "IX_PerfilsAplicacoes_IdAplicacao",
                table: "PerfilsAplicacoes",
                column: "IdAplicacao");

            migrationBuilder.CreateIndex(
                name: "IX_PerfilsAplicacoes_IdPerfil",
                table: "PerfilsAplicacoes",
                column: "IdPerfil");

            migrationBuilder.AddForeignKey(
                name: "FK_PerfilsAplicacoes_Aplicacoes_IdAplicacao",
                table: "PerfilsAplicacoes",
                column: "IdAplicacao",
                principalTable: "Aplicacoes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PerfilsAplicacoes_Perfils_IdPerfil",
                table: "PerfilsAplicacoes",
                column: "IdPerfil",
                principalTable: "Perfils",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Perfils_IdPerfil",
                table: "Users",
                column: "IdPerfil",
                principalTable: "Perfils",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PerfilsAplicacoes_Aplicacoes_IdAplicacao",
                table: "PerfilsAplicacoes");

            migrationBuilder.DropForeignKey(
                name: "FK_PerfilsAplicacoes_Perfils_IdPerfil",
                table: "PerfilsAplicacoes");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Perfils_IdPerfil",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_IdPerfil",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_PerfilsAplicacoes_IdAplicacao",
                table: "PerfilsAplicacoes");

            migrationBuilder.DropIndex(
                name: "IX_PerfilsAplicacoes_IdPerfil",
                table: "PerfilsAplicacoes");

            migrationBuilder.DropColumn(
                name: "IdPerfil",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Icon",
                table: "Aplicacoes");

            migrationBuilder.AddColumn<string>(
                name: "Senha",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
