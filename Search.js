const charactersList = document.getElementById('filteredCharacters');
const searchBar = document.getElementById('searchBar');
let books = [];


searchBar.addEventListener('keydown', (e) => {
    charactersList.innerHTML = '';
    if (e.key === 'Enter') {
        // code for enter


    const searchString = e.target.value.toLowerCase();
    const filteredCharacters = books.filter((books) => {
        return (
            books.name.toLowerCase().includes(searchString) ||
            books.author.toLowerCase().includes(searchString));

    });

    for (let i = 0; i < filteredCharacters.length; i++) {
        console.log(filteredCharacters[i].name)
        let entry = document.createElement('li');
        entry.appendChild(document.createTextNode(filteredCharacters[i].name + "\n"));
        charactersList.appendChild(entry);

    }
    }
    //document.getElementById("filteredCharacters").innerHTML = filteredCharacters[0].name;

    //console.log(filteredCharacters);
});

const loadBooks = async () => {
    try {
        const res = await fetch("https://6168d48e09e030001712c0e0.mockapi.io/Books");
        books = await res.json();
        console.log(books);
    } catch (err) {
        console.error(err);
    }

};

loadBooks();
