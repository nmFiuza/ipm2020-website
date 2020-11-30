var users =
  '{ "users" : [' +
  '{"id" : 1, "firstname" : "Hugo", "surname" : "Santiago", "email": "hugosantiago@gmail.com", "morada": "Rua Terceira, nº 17, 1º Esq., Telheiras", "points" : 100, "wishlist" : ["512278208", "681860960"], "available" : ["123456789", "987654321", "200738799"]},' +
  '{"id" : 2, "firstname" : "Nuno", "surname" : "Santos", "email": "nunosantos@gmail.com", "morada": "Avenida do Travesso, nº 22, 4º Esq., Olhão", "points" : 100, "wishlist" : ["987654321", "512278208", "934683429"], "available" : ["987654321", "709026838"]},' +
  '{"id" : 3, "firstname" : "João", "surname" : "Paulo", "email": "joaopaulo@gmail.com", "morada": "Praça António Vilelas, nº 2, 2º Dir., Caminha", "points" : 100, "wishlist" : ["987654321", "709026838"], "available" : ["123456789", "534321113"]},' +
  '{"id" : 4, "firstname" : "Pedro", "surname" : "Belinha", "email": "pedrobelinha@gmail.com", "morada": "Rua das Papoilas, nº 55, R/C Esq., Vila Nova de Milfontes", "points" : 100, "wishlist" : ["286061548", "512278208"], "available" : ["200738799", "878633222", "666532112", "987654321"]},' +
  '{"id" : 5, "firstname" : "Ana", "surname" : "Catarina", "email": "anacatarina@gmail.com", "morada": "Travessa do Alto do Mouro, nº 34, 1º Dir., Fátima", "points" : 100, "wishlist" : ["200738799", "286061548"], "available" : ["709026838", "934683429", "319026765"]},' +
  '{"id" : 6, "firstname" : "John", "surname" : "Hubbard", "email": "johnhubbard@gmail.com", "morada": "St. Dennis Street, 1224, Birmingham", "points" : 100, "wishlist" : ["709026838"], "available" : ["591171946", "512278208"]},' +
  '{"id" : 7, "firstname" : "Josefina", "surname" : "Silva", "email": "jos.silva@gmail.com", "morada": "Avenida das letras, nº38, 2º Dir., Lisboa", "points" : 100, "wishlist" : ["512278208"], "available" : ["123456789", "987654321", "200738799"]},' +
  '{"id" : 8, "firstname" : "Ricardo", "surname" : "Faria", "email": "ricardo.faria@gmail.com", "morada": "Rua Cesario Verde, nº7, 1º Dir., Porto", "points" : 100, "wishlist" : ["123456789", "987654321", "200738799"], "available" : ["512278208", "319026765"]},' +
  '{"id" : 9, "firstname" : "Artur", "surname" : "Carvalho", "email": "artur.car@gmail.com", "morada": "Rua da Grande Parede, nº40, 1º Esq., Lisboa", "points" : 100, "wishlist" : ["987654321", "200738799"], "available" : ["123456789"]},' +
  '{"id" : 10, "firstname" : "Andreia", "surname" : "Moura", "email": "andreia.moura@gmail.com", "morada": "Travessa das Laranjas, nº5, 4º Esq., Aveiro", "points" : 100, "wishlist" : ["987654321"], "available" : ["123456789", "200738799"]}' +
  "]}";

var books =
  '{ "books" : [' +
  '{"name" : "Harry Potter and the Philosopher\'s Stone", "author" : "J. K. Rowling", "year" : 1997, "genre" : ["Fantasia"], "isbn" : "123456789", "synopsis": "Órfão de pai e mãe, o pequeno Harry - o rapazinho de óculos cujas aventuras livrescas conseguiram encantar miúdos e graúdos em todo o mundo - vive com os tios \\"muggles\\", terrivelmente chatos, e com um primo que o odeia. <br><br> À beira de completar 11 anos, Potter estranha alguns dos seus poderes: há certas coisas que acontecem quando as deseja muito, muito. Tudo acaba por lhe ser explicado depois de receber uma misteriosa carta de um colégio de feitiços e magia chamado Hogwarts, do qual nunca ouviu falar. Afinal de contas, Potter tem sangue de feiticeiros e é conhecido em todo o mundo mágico por um feito lendário..."},' +
  '{"name" : "Rosas do Atacama", "author" : "Luís Sepúlveda", "year" : 2000, "genre" : ["Romance"], "isbn" : "987654321", "synopsis": "Um dia, no campo de concentração de Bergen Belsen, na Alemanha, Luis Sepúlveda encontrou gravada numa pedra uma frase de autor anónimo que dizia: «Eu estive aqui e ninguém contará a minha história.» Essa frase trouxe-lhe à memória toda uma galeria de personagens excecionais que havia conhecido e cujas histórias mereciam ser contadas. Assim nasceu o presente livro, As Rosas de Atacama. «Histórias marginais» (aliás, o título da edição original espanhola), e também histórias de marginais, os relatos que compõem esta obra têm todos os ingredientes a que Luis Sepúlveda habituou os seus leitores: a defesa da vida e da dignidade humana, a luta pela justiça, o elogio dos valores ecológicos, o exotismo como afirmação de que os sonhos são os mesmos em todos os lugares da Terra. Como em todos os livros de Sepúlveda, também neste a realidade supera a ficção."},' +
  '{"name" : "Tess dos D\'Ubervilles", "author" : "Thomas Hardy", "year" : 1891, "genre" : ["Romance"], "isbn" : "512278208", "synopsis": "Quando Tess Durbeyfield, instigada pela pobreza, se dirige à abastada família D’Urbervilles, o encontro com o seu \\"primo\\" Alec revela-se um momento perigoso. Um homem, Angel Clare, oferece-lhe o que parece ser amor e salvação o que força Tess a uma decisão. Revelar o seu passado ou manter o silêncio, na esperança de um futuro melhor? Tendo como personagem uma Tess crítica e vítima das convenções sociais, este é um dos romances mais comoventes de Thomas Hardy."},' +
  '{"name" : "The Girl With The Dragon Tattoo", "author" : "Stieg Larsson", "year" : 2005, "genre" : ["Mistério", "Crime", "Suspense", "Thriller", "Romance"], "isbn" : "591171946", "synopsis": "Após um grande golpe na sua carreira enquanto jornalista, Mikael Blomkvist, encontra uma oportunidade para redimir a sua honra após ser contratado por Henrik Vange: um sueco com bastante poder no mundo industrial com o fim de encontrar o culpado de um crime cometido 40 anos antes. Eventualmente, na perigosa busca pela verdade Lisbeth Salander, uma engenhosa investigadora junta-se a Michael apesar do seu carácter difícil que raramente permite depositar confiança nos outros."},' +
  '{"name" : "Percy Jackson & the Olympians: The Lightning Thief", "author" : "Rick Riordan", "year" : 2005, "genre" : ["Mitologia Grega", "Romance", "Ficção Jovem", "Fantasia"], "isbn" : "709026838", "synopsis": "Sempre propensa a problemas, a vida do adolescente Percy Jackson (Logan Lerman) fica muito mais complicada quando ele descobre que é filho do deus grego Poseidon. Num campo de treino para filhos de divindades, Percy aprende a aproveitar seus poderes divinos e a preparar-se para a aventura de sua vida: ele deve evitar que uma simples rivalidade se transforme numa guerra devastadora na Terra e resgatar a sua mãe das garras de Hades, Deus do submundo."},' +
  '{"name" : "Percy Jackson & the Olympians: Sea of Monsters", "author" : "Rick Riordan", "year" : 2006, "genre" : ["Mitologia Grega", "Romance", "Ficção Jovem", "Fantasia"], "isbn" : "319026765", "synopsis": "Embora Percy Jackson, o filho meio humano do deus grego Poseidon, tenha salvado o mundo uma vez, ultimamente sente-se menos que heróico. No entanto, ele não tem muito tempo para meditar - as fronteiras encantadas que protegem o Camp Half-Blood estão enfraquecidas e uma horda de criaturas míticas ameaça o santuário dos semideuses. Para salvar o Acampamento Meio-Sangue, Percy e seus amigos embarcam numa jornada para o Mar de Monstros - também conhecido como Triângulo das Bermudas - para encontrar o mágico Golden Fleece."},' +
  '{"name" : "The Design of Everyday Things", "author" : "Don Norman", "year" : 1988, "genre" : ["Dissertação"], "isbn" : "309998648", "synopsis": "The Design of Everyday Things é um livro sobre como o design serve de comunicação entre o objeto e o utilizador e como otimizar esse canal de comunicação para tornar a experiência de interação com o objeto agradável. Os melhores produtos nem sempre dão certo."},' +
  '{"name" : "Moby Dick", "author" : "Herman Melville", "year" : 1851, "genre" : ["Romance", "Banda Desenhada", "Alegoria", "Épico", "Aventura", "Ficção Náutica"], "isbn" : "200738799", "synopsis" : "Bastante presente está a reflexão sobre o mal, encarnado nos dois protagonistas: por um lado, a baleia, que representa o mal sem sentido, porque destrói o que encontra, e por outro, o Capitão Ahab, que demonstra um mal fundado na teimosia, já que é seu ódio pessoal e seu desejo de vingança que o move a persegui-la, mesmo que isso implique arricar a vida de seu povo."},' +
  '{"name" : "The Old Man and the Sea", "author" : "Ernest Hemingway", "year" : 1952, "genre" : ["Romance", "Alegoria", "Ficção Náutica"], "isbn" : "681860960", "synopsis" : "Santiago, um velho pescador cubano, está há quase três meses sem conseguir pescar um único peixe, quando o seu isco é finalmente mordido por um enorme espadarte. O peixe imponente resiste, arrasta a sua canoa cada vez mais para o alto mar, na corrente do Golfo, e obriga a uma luta agonizante."},' +
  '{"name" : "Brave New World", "author" : "Aldous Huxley", "year" : 1932, "genre" : ["Romance", "Ficção Científica", "Ficção Distópica"], "isbn" : "286061548", "synopsis": "O livro descreve uma sociedade futura em que as pessoas seriam condicionadas em termos genéticos e psicológicos, a fim de se conformarem com as regras sociais dominantes. Tal sociedade dividir-se-ia em castas e desconheceria os conceitos de família e de moral. Contudo, esse mundo quase irrespirável não deixa de gerar os seus anticorpos. Bernard Marx, o protagonista, sente-se descontente com ele, em parte por ser fisicamente diferente dos restantes membros da sua casta. Então, numa espécie de reserva histórica em que algumas pessoas continuam a viver de acordo com valores e regras do passado, Bernard encontra um jovem que irá apresentar à sociedade asséptica do seu tempo, como um exemplo de outra forma de ser e de viver. Sem imaginar sequer os problemas e os conflitos que essa sua decisão provocará. Admirável Mundo Novo é um aviso, um apelo à consciência dos homens. É uma denúncia do perigo que ameaça a humanidade, se a tempo não fechar os ouvidos ao canto da sereia de uma falsa noção de progresso."},' +
  '{"name" : "Harry Potter and the Chamber of Secrets", "author" : "J. K. Rowling", "year" : 1998, "genre" : ["Fantasia"], "isbn" : "772272548", "synopsis": "A segunda das aventuras de Harry Potter na Escola de Magia e Bruxaria de Hogwarts, baseada no romance de JK Rowling. Um elfo misterioso diz a Harry para estar preparado durante seu segundo ano em Hogwarts para enfrentar problemas, mas nada pode prepará-lo para árvores que lutam, carros voadores, aranhas que falam e avisos mortais escritos em sangue nas paredes da escola."},' +
  '{"name" : "Harry Potter and the Prisoner of Azkaban", "author" : "J. K. Rowling", "year" : 1999, "genre" : ["Fantasia"], "isbn" : "934683429", "synopsis": "É o início do terceiro ano de Harry Potter em Hogwarts quando este descobre que o assassino Sirius Black escapou da prisão de Azkaban e está decidido a matar o adolescente bruxo. Entretanto, enquanto o gato de Hermione atormenta o pequeno roedor de Ron, causando uma divisão entre o trio, um enxame de Dementors é enviado para proteger a escola de Black. Estará Harry preparado para os desafios à sua frente? E qual a ligação do seu novo mentor com Sirius Black?"},' +
  '{"name" : "Harry Potter and the Goblet of Fire", "author" : "J. K. Rowling", "year" : 2000, "genre" : ["Fantasia"], "isbn" : "666532112", "synopsis": "No decorrer do torneio mundial de Quidditch tudo muda quando Harry através dos fãs furiosos de Voldemort e a assustadora Dark Mar aparece no céu noturno, se apercebe que, longe de enfraquecer, Voldemort está cada vez mais forte. De volta a Hogwarts no seu quarto ano, Harry fica surpreendido ao ser escolhido para representar a escola no Torneio TriWizard. A competição é perigosa, as tarefas aterrorizantes e coragem não é sinónimo de sobrevivência - especialmente recentemente adquiridas forças do Lorde das Trevas"},' +
  '{"name" : "Os Lusíadas", "author" : "Luís de Camões", "year" : 1572, "genre" : ["Poesia épica", "Poesia"], "isbn" : "534321113", "synopsis": "A acção central da obra é a viagem de Vasco da Gama para a Índia. Dela se serve o poeta para nos oferecer a visão épica de toda a História de Portugal até à sua época, ora sendo ele o narrador, ora transferindo essa tarefa para figuras da viagem. Para outras figuras - as míticas - transfere os discursos que projectam a acção no futuro em forma profética."},' +
  '{"name" : "Mensagem", "author" : "Fernando Pessoa", "year" : 1934, "genre" : ["Poesia"], "isbn" : "878633222", "synopsis": "O título do livro «Mensagem» de quarenta e quatro poemas deriva da expressão latina Mens agitat molem (a mente comanda o corpo), frase retirada da Eneida de Virgílio. O livro está dividido em três partes que representam as três etapas do Império Português: Brasão, Mar Português e O Encoberto."}' +
  "]}";

var reviews =
  '{ "reviews" : [' +
  '{"isbn" : "123456789", "reviews": [{"user" : 3, "firstname" : "João", "surname" : "Paulo", "review" : "ADORO HOGWARTS! HP FAN!!!"},' +
  '{"user" : 7, "firstname" : "Josefina", "surname" : "Silva", "review" : "Muito giro! O Ron é super engraçado"},' +
  '{"user" : 2, "firstname" : "Nuno", "surname" : "Santos", "review" : "Top 10 melhor livro de sempre! Concordam?"},' +
  '{"user" : 9, "firstname" : "Artur", "surname" : "Carvalho", "review" : "Definitivamente!!!"},' +
  '{"user" : 10, "firstname" : "Andreia", "surname" : "Moura", "review" : "Claro que sim!"}' +
  "] }," +
  '{"isbn" : "987654321", "reviews": [{"user" : 7, "firstname" : "Josefina", "surname" : "Silva", "review" : "Brutal! Recomendo completamente."},' +
  '{"user" : 1, "firstname" : "Hugo", "surname" : "Santiago", "review" : "Muito interessante!!"},' +
  '{"user" : 4, "firstname" : "Pedro", "surname" : "Belinha", "review" : "Quase tão bom como GOT"}' +
  "] }," +
  '{"isbn" : "200738799", "reviews": [{"user" : 10, "firstname" : "Andreia", "surname" : "Moura", "review" : "É um clássico!! Vou ter sempre um especial carinho por este livro."}' +
  "] }" +
  "]}";

var ecorep =
  '{ "ecorep" : [' +
  '{ "isbn": "772272548", "author": "J. K. Rowling", "genre" : ["Fantasia"], "qtd" : 3},' +
  '{ "isbn": "878633222", "author": "Fernando Pessoa", "genre" : ["Poesia"], "qtd" : 3},' +
  '{ "isbn": "934683429", "author": "J. K. Rowling", "genre" : ["Fantasia"], "qtd" : 1},' +
  '{ "isbn": "512278208", "author": "Thomas Hardy", "genre" : ["Romance"], "qtd" : 2},' +
  '{ "isbn": "309998648", "author" : "Don Norman", "genre" : ["Dissertação"], "qtd" : 3},' +
  '{ "isbn": "286061548", "author" : "Aldous Huxley", "genre" : ["Romance", "Ficção Científica", "Ficção Distópica"], "qtd" : 2},' +
  '{ "isbn": "987654321", "author" : "Luís Sepúlveda", "genre" : ["Romance"], "qtd" : 5},' +
  '{ "isbn": "709026838", "author" : "Rick Riordan", "genre" : ["Mitologia Grega", "Romance", "Ficção Jovem", "Fantasia"], "qtd" : 4},' +
  '{ "isbn": "319026765", "author" : "Rick Riordan", "genre" : ["Mitologia Grega", "Romance", "Ficção Jovem", "Fantasia"], "qtd" : 5}' +
  "]}";

var catalog =
  '{ "catalog" : [' +
  '{ "isbn": "123456789", "ids": [1,2,3,7,9,10] },' +
  '{ "isbn": "987654321", "ids": [1,4,7] },' +
  '{ "isbn": "200738799", "ids": [1,4,7,10] },' +
  '{ "isbn": "709026838", "ids": [2,5] },' +
  '{ "isbn": "512278208", "ids": [6,8] },' +
  '{ "isbn": "591171946", "ids": [6] },' +
  '{ "isbn": "534321113", "ids": [3] },' +
  '{ "isbn": "878633222", "ids": [4] },' +
  '{ "isbn": "666532112", "ids": [4] },' +
  '{ "isbn": "934683429", "ids": [5] },' +
  '{ "isbn": "319026765", "ids": [5,8] }' +
  "]}";

var genres =
  '{ "genres" : [' +
  '"Alegoria",' +
  '"Aventura",' +
  '"Ação",' +
  '"Banda Desenhada",' +
  '"Biografia",' +
  '"Clássico",' +
  '"Crime",' +
  '"Dissertação",' +
  '"Drama",' +
  '"Épico",' +
  '"Fantasia",' +
  '"Ficção Distópica",' +
  '"Ficção Jovem",' +
  '"Ficção Náutica",' +
  '"Ficção",' +
  '"Literatura Infantil",' +
  '"Mistério",' +
  '"Mitologia Grega",' +
  '"Não Ficção",' +
  '"Poesia",' +
  '"Policial",' +
  '"Romance Histórico",' +
  '"Romance",' +
  '"Saúde e Bem-Estar",' +
  '"Suspense",' +
  '"Teatro",' +
  '"Thriller"' +
  "] }";

//local storage only accepts string variables
loadToStorage(booksConst, JSON.parse(books));
loadToStorage(usersConst, JSON.parse(users));
loadToStorage(genresConst, JSON.parse(genres));
loadToStorage(ecorepConst, JSON.parse(ecorep));
loadToStorage(catalogConst, JSON.parse(catalog));
loadToStorage(singleAuthorConst, "");
loadToStorage(singleGenreConst, "");
loadToStorage(selectedBookConst, "");
loadToStorage(reviewsConst, JSON.parse(reviews));
localStorage.setItem(loggedConst, getFromStorage(usersConst).users[6].id);
