﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MinimalAPITeste.Data;

#nullable disable

namespace MinimalAPITeste.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20240222140217_User-RmvSenha-AdcIdPerfil")]
    partial class UserRmvSenhaAdcIdPerfil
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("MinimalAPITeste.Models.Mill", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("Alterado")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("Criado")
                        .HasColumnType("datetime2");

                    b.Property<string>("MillId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ShortName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Mills");
                });

            modelBuilder.Entity("MinimalAPITeste.Models.MillEduardo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("Alterado")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("Criado")
                        .HasColumnType("datetime2");

                    b.Property<string>("MillId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ShortName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("MillEduardos");
                });

            modelBuilder.Entity("MinimalAPITeste.Models.MillFla", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime?>("Alterado")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("Criado")
                        .HasColumnType("datetime2");

                    b.Property<string>("MillId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ShortName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("MillsFla");
                });

            modelBuilder.Entity("MinimalAPITeste.Models.PefrilAplicacoes", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("IdAplicacao")
                        .HasColumnType("int");

                    b.Property<int>("IdPerfil")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("PerfilsAplicacoes");
                });

            modelBuilder.Entity("MinimalAPITeste.Models.Perfil", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("isAdmin")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("Perfils");
                });

            modelBuilder.Entity("MinimalAPITeste.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("Alterado")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("Criado")
                        .HasColumnType("datetime2");

                    b.Property<string>("Login")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("idPerfil")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
