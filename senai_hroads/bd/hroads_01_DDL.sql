-- Criar o banco de dados chamado

CREATE DATABASE SENAI_HROADS_TARDE;

USE SENAI_HROADS_TARDE;
-- Criar as tabelas no banco de dados

CREATE TABLE Personagem
(
	idPersonagem INT PRIMARY KEY IDENTITY
	,Nome VARCHAR(200)NOT NULL
	,Classe VARCHAR(200)NOT NULL
	,Vida VARCHAR(200)NOT NULL
	,Mana VARCHAR(200)NOT NULL
	,DataAtual VARCHAR(200)NOT NULL
	,DataDeCriacao VARCHAR(200)NOT NULL
);

CREATE TABLE TiposDeHabilidades
(
	idTipoHabilidades INT PRIMARY KEY IDENTITY
	,Descricao VARCHAR(250)NOT NULL
);

CREATE TABLE Habilidades
(
	idHabilidades INT PRIMARY KEY IDENTITY
	,idTipoHabilidades INT FOREIGN KEY REFERENCES TiposDeHabilidades (idTipoHabilidades)
	,Descricao VARCHAR(250)
);

CREATE TABLE Classes
(
	idClasses INT PRIMARY KEY IDENTITY
	,Descricao VARCHAR(250)NOT NULL
);

CREATE TABLE HabiliClasses
(
	idClasses INT FOREIGN KEY REFERENCES Classes (idClasses)
	,idHabilidades INT FOREIGN KEY REFERENCES Habilidades (idHabilidades)
	,Descricao VARCHAR(250)NOT NULL
);