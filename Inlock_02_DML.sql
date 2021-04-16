USE inlock_games_tarde;

INSERT INTO Usuario(email, senha, IdTipoUsuario)
VALUES			   ('admin@admin.com', 'admin', 1)
				  ,('cliente@cliente.com', 'cliente', 2);

INSERT INTO TiposDeUsuario(titulo)
VALUES					  ('Administrador'),
						  ('Cliente');

INSERT INTO Estudios(nomeEstudio)
VALUES				('Blizzard'),
					('Rockstar Studios'),
					('Square Enix');

INSERT INTO Jogos(nomeJogo, descricao, dataLancamento, valor, IdEstudio)
VALUES			 ('Diablo 3', 'é um jogo que contém bastante ação e é viciante, seja você um novato ou um fã', '15/05/2012', 'R$ 99,00', 1),
				 ('Red Dead Redemption II', 'jogo eletrônico de ação-aventura western', '26/10/2018', 'R$ 120,00', 2);