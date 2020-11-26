var users = '{ "users" : [' +
    '{"id" : 1, "firstname" : "Hugo", "surname" : "Santiago", "email": "hugosantiago@gmail.com", "morada": "Rua Terceira, nº 17, 1º Esq., Telheiras", "points" : 100, "wishlist" : [512278208, 681860960], "available" : [123456789, 987654321, 200738799]},' +
    '{"id" : 2, "firstname" : "Nuno", "surname" : "Santos", "email": "nunosantos@gmail.com", "morada": "Avenida do Travesso, nº 22, 4º Esq., Olhão", "points" : 100, "wishlist" : [987654321, 512278208], "available" : [709026838]},' +
    '{"id" : 3, "firstname" : "João", "surname" : "Paulo", "email": "joaopaulo@gmail.com", "morada": "Praça António Vilelas, nº 2, 2º Dir., Caminha", "points" : 100, "wishlist" : [987654321, 709026838], "available" : [123456789]},' +
    '{"id" : 4, "firstname" : "Pedro", "surname" : "Belinha", "email": "pedrobelinha@gmail.com", "morada": "Rua das Papoilas, nº 55, R/C Esq., Vila Nova de Milfontes", "points" : 100, "wishlist" : [286061548, 512278208], "available" : [200738799, 512278208]},' +
    '{"id" : 5, "firstname" : "Ana", "surname" : "Catarina", "email": "anacatarina@gmail.com", "morada": "Travessa do Alto do Mouro, nº 34, 1º Dir., Fátima", "points" : 100, "wishlist" : [200738799, 286061548], "available" : [709026838]},' +
    '{"id" : 6, "firstname" : "John", "surname" : "Hubbard", "email": "johnhubbard@gmail.com", "morada": "St. Dennis Street, 1224, Birmingham", "points" : 100, "wishlist" : [709026838], "available" : [591171946, 512278208]}' +
']}';

var books = '{ "books" : [' +
    '{"name" : "Harry Potter and the Philosopher\'s Stone", "author" : "J. K. Rowling", "year" : 1997, "genre" : ["Fantasia"], "isbn" : 123456789},' +
    '{"name" : "Rosas do Atacama", "author" : "Luís Sepúlveda", "year" : 2000, "genre" : ["Romance"], "isbn" : 987654321},' +
    '{"name" : "Tess dos D\'Ubervilles", "author" : "Thomas Hardy", "year" : 1891, "genre" : ["Romance"], "isbn" : 512278208},' +
    '{"name" : "The Girl With The Dragon Tattoo", "author" : "Stieg Larsson", "year" : 2005, "genre" : ["Mistério, Crime", "Suspense", "Thriller", "Romance"], "isbn" : 591171946},' +
    '{"name" : "Percy Jackson & the Olympians: The Lightning Thief", "author" : "Rick Riordan", "year" : 2005, "genre" : ["Mitologia Grega", "Romance", "Ficção Jovem", "Fantasia"], "isbn" : 709026838},' +
    '{"name" : "The Design of Everyday Things", "author" : "Don Norman", "year" : 1988, "genre" : ["Dissertação"], "isbn" : 309998648},' +
    '{"name" : "Moby Dick", "author" : "Herman Melville", "year" : 1851, "genre" : ["Romance", "Banda Desenhada", "Alegoria", "Épico", "Aventura", "Ficção Náutica"], "isbn" : 200738799},' +
    '{"name" : "The Old Man and the Sea", "author" : "Ernest Hemingway", "year" : 1952, "genre" : ["Romance", "Alegoria", "Ficção Náutica"], "isbn" : 681860960},' +
    '{"name" : "Brave New World", "author" : "Aldous Huxley", "year" : 1932, "genre" : ["Romance", "Ficção Científica", "Ficção Distópica"], "isbn" : 286061548},' +
    '{"name" : "Harry Potter and the Chamber of Secrets", "author" : "J. K. Rowling", "year" : 1998, "genre" : ["Fantasia"], "isbn" : 772272548},' +
    '{"name" : "Harry Potter and the Prisoner of Azkaban", "author" : "J. K. Rowling", "year" : 1999, "genre" : ["Fantasia"], "isbn" : 934683429},' +
    '{"name" : "Harry Potter and the Goblet of Fire", "author" : "J. K. Rowling", "year" : 2000, "genre" : ["Fantasia"], "isbn" : 666532112},' +
    '{"name" : "Os Lusíadas", "author" : "Luís de Camões", "year" : 1572, "genre" : ["Poesia épica", "Poesia"], "isbn" : 534321113},' +
    '{"name" : "Mensagem", "author" : "Fernando Pessoa", "year" : 1934, "genre" : ["Poesia"], "isbn" : 878633222}' +
']}';

var ecorep = '{ "ecorep" : [' +
    '{ "isbn": 772272548, "author": "J. K. Rowling", "genre" : ["Fantasia"], "qtd" : 3},' +
    '{ "isbn": 878633222, "author": "Fernando Pessoa", "genre" : ["Poesia"], "qtd" : 3},' +
    '{ "isbn": 934683429, "author": "J. K. Rowling", "genre" : ["Fantasia"], "qtd" : 1},' +
    '{ "isbn": 512278208, "author": "Thomas Hardy", "genre" : ["Romance"], "qtd" : 2},' +
    '{ "isbn": 309998648, "author" : "Don Norman", "genre" : ["Dissertação"], "qtd" : 3},' +
    '{ "isbn": 286061548, "author" : "Aldous Huxley", "genre" : ["Romance", "Ficção Científica", "Ficção Distópica"], "qtd" : 2},' +
    '{ "isbn": 987654321, "author" : "Luís Sepúlveda", "genre" : ["Romance"], "qtd" : 5},' +
    '{ "isbn": 709026838, "author" : "Rick Riordan", "genre" : ["Mitologia Grega", "Romance", "Ficção Jovem", "Fantasia"], "qtd" : 4}' +
']}';

var catalog = '{ "catalog" : [' +
    '{ "isbn": 123456789, "ids": [1,3] },' +
    '{ "isbn": 987654321, "ids": [1] },' +
    '{ "isbn": 200738799, "ids": [1,4] },' +
    '{ "isbn": 709026838, "ids": [2,5] },' +
    '{ "isbn": 512278208, "ids": [4,6] },' +
    '{ "isbn": 591171946, "ids": [6] }' +
']}';

var authors = '{"authors" : [' +
    '"J. K. Rowling",' +
    '"Luís Sepúlveda",' +
    '"Thomas Hardy",' +
    '"Stieg Larsson",' +
    '"Rick Riordan",' +
    '"Don Norman",' +
    '"Herman Melville",' +
    '"Ernest Hemingway",' +
    '"Aldous Huxley"' +
']}';

var genres = '{ "genres" : [' +
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
'] }'

//local storage only accepts string variables
loadToStorage(booksConst, JSON.parse(books));
loadToStorage(usersConst, JSON.parse(users));
loadToStorage(authorsConst, JSON.parse(authors));
loadToStorage(genresConst, JSON.parse(genres));
loadToStorage(ecorepConst, JSON.parse(ecorep));
loadToStorage(catalogConst, JSON.parse(catalog));
loadToStorage(singleAuthorConst, "");
loadToStorage(singleGenreConst, "");
loadToStorage(selectedBookConst, "");
localStorage.setItem(loggedConst, getFromStorage(usersConst).users[0].id);

