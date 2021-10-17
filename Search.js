const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let books = [];
console.log(searchString);

searchBar.addEventListener('keydown', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = books.filter((charactersList) => {
        return (
            books.name.toLowerCase().includes(searchString) ||
            books.author.toLowerCase().includes(searchString));
    });

});

const loadBooks = async () => {
    try {
        const res = await fetch('https://6168d48e09e030001712c0e0.mockapi.io/Books');
        books = await res.json();
        console.log(books);
    } catch (err) {
        console.error(err);
    }

};

loadBooks();
