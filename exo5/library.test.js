const library = require('./library')

test('get books should return a valid array', () => {
   // When
   const books = library.getBooks()

   // Then
    expect(books).toHaveLength(3)
    const book1 = books[0]
    expect(book1.title).toBe("Le seigneur des anneaux")
});

test('get book by id should return the book matched', () => {
   // When
   const book = library.getBookById(1)

   // Then
   expect(book.title).toBe("Le seigneur des anneaux")
});

test('add book add an entry on the array', () => {
    // When
    library.addBook(4, "Test", 10)
    const books = library.getBooks()

    // Then
    expect(books).toHaveLength(4)
})

test('delete book should remove the entry from the array', () => {
    // When
    library.deleteBookById(1)
    const books = library.getBooks()

    // Then
    expect(books).toHaveLength(2)
})