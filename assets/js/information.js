var users = '{ "users" : [' +
    '{"id" : 1, "firstname" : "Hugo", "surname" : "Santiago", "points" : 100, "wishlist" : [512278208, 681860960], "available" : [123456789, 987654321, 200738799]},' +
    '{"id" : 2, "firstname" : "Nuno", "surname" : "Santos", "points" : 0, "wishlist" : [987654321, 512278208], "available" : [709026838]},' +
    '{"id" : 3, "firstname" : "João", "surname" : "Paulo", "points" : 0, "wishlist" : [987654321, 709026838], "available" : [123456789]},' +
    '{"id" : 4, "firstname" : "Pedro", "surname" : "Belinha", "points" : 0, "wishlist" : [286061548, 512278208], "available" : [200738799, 512278208]},' +
    '{"id" : 5, "firstname" : "Ana", "surname" : "Catarina", "points" : 0, "wishlist" : [200738799, 286061548], "available" : [709026838]},' +
    '{"id" : 6, "firstname" : "John", "surname" : "Hubbard", "points" : 0, "wishlist" : [709026838], "available" : [591171946, 512278208]}' +
']}';

var books = '{ "books" : [' +
    '{"name" : "Harry Potter and the Philosopher\'s Stone", "author" : "J. K. Rowling", "year" : 1997, "genre" : ["fantasy"], "isbn" : 123456789},' +
    '{"name" : "Rosas do Atacama", "author" : "Luís Sepúlveda", "year" : 2000, "genre" : ["romance"], "isbn" : 987654321},' +
    '{"name" : "Tess dos D\'Ubervilles", "author" : "Thomas Hardy", "year" : 1891, "genre" : ["romance"], "isbn" : 512278208},' +
    '{"name" : "The Girl With The Dragon Tattoo", "author" : "Stieg Larsson", "year" : 2005, "genre" : ["Mystery, Crime Fiction, Suspense, Thriller, Crime novel, Nordic noir"], "isbn" : 591171946},' +
    '{"name" : "Percy Jackson & the Olympians: The Lightning Thief", "author" : "Rick Riordan", "year" : 2005, "genre" : ["Greek mythology, Novel, Young adult fiction, Fantasy Fiction, High fantasy"], "isbn" : 709026838},' +
    '{"name" : "The Design of Everyday Things", "author" : "Don Norman", "year" : 1988, "genre" : ["Dissertation"], "isbn" : 309998648},' +
    '{"name" : "Moby Dick", "author" : "Herman Melville", "year" : 1851, "genre" : ["Novel, Comics, Allegory, Graphic novel, Epic, Adventure fiction, Nautical fiction"], "isbn" : 200738799},' +
    '{"name" : "The Old Man and the Sea", "author" : "Ernest Hemingway", "year" : 1952, "genre" : ["Novel, Allegory, Bildungsroman, Nautical fiction"], "isbn" : 681860960},' +
    '{"name" : "Brave New World", "author" : "Aldous Huxley", "year" : 1932, "genre" : ["Novel, Science Fiction, Dystopian Fiction"], "isbn" : 286061548}' +
']}';

//local storage only accepts string variables
loadToStorage(booksConst, JSON.parse(books));
loadToStorage(usersConst, JSON.parse(users));
localStorage.setItem(loggedConst, getFromStorage(usersConst).users[0].id);

