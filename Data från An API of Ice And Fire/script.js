// Bas-URL för API:t
const apiUrl = 'https://anapioficeandfire.com/api/books';

// Funktion för att hämta och visa data
async function fetchBooks() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Något gick fel med hämtningen');
        const books = await response.json();

        // Välj en div där vi kan visa resultaten
        const displayDiv = document.getElementById('dataDisplay');
        books.forEach(book => {
            const bookInfo = document.createElement('p');
            bookInfo.textContent = `Bok: ${book.name}, Sidor: ${book.numberOfPages}`;
            displayDiv.appendChild(bookInfo);
        });
    } catch (error) {
        console.error('Fel vid hämtning av data:', error);
    }
}

// Anropa funktionen
fetchBooks();
