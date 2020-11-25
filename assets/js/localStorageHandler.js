
const usersConst = "users";
const booksConst = "books";
const authorsConst = "authors";
const genresConst = "genres";
const catalogConst = "catalog";
const ecorepConst = "ecorep";
const loggedConst = "logged";
const donationWorth = 100;

/**
 * Gets the content of the entry stored in browser local storage
 * 
 * @param {string} entry Name of the entry
 */
function getFromStorage(entry){
    return JSON.parse(localStorage.getItem(entry));
}

/**
 * Load the JSON object to the browser local storage on the entry with the name given
 * 
 * @param {string} entry Name of the entry
 * @param {JSON} object JSON object to be stored
 */
function loadToStorage(entry, object){
    localStorage.setItem(entry, JSON.stringify(object));
}

/**
 * Returns the currently logged user
 * 
 * @return Returns the user currently logged in
 */
function getLogged(){
    var users = getFromStorage(usersConst).users;
    var logged = parseInt(localStorage.getItem(loggedConst));
    for (var x of users){
        if(x.id == logged)
            return x;
    }
}

/**
 * Returns the wishlisted and also available books of the user with the given id
 * 
 * @param id ID of the user.
 * @return {array} Returns an array with 2 positions, the first for wishlisted items, the second for the available items.
 */
function getUserBooks(id){
    var userList = getFromStorage(usersConst).users;
    var bookList = getFromStorage(booksConst).books;
    var userInfo;
    for (var user of userList)
        if(user.id == id){
            userInfo = user;
            break;
        }
    var wishlist = userInfo.wishlist;
    var listed = userInfo.available;
    return [bookList.filter(b => wishlist.includes(b.isbn)),bookList.filter(b => listed.includes(b.isbn))];
}

/**
 * Returns the ids of the users that have the book with the given isbn
 * 
 * @param isbn Isbn of the book.
 * @return {array} Returns an array with all ids of the users that possess the book.
 */
function getUsersWithGivenIsbn(isbn){
    var bookList = getFromStorage(catalogConst).catalog;
    for (var book of bookList)
        if(book.isbn == isbn){
            return book.ids;
        }
}