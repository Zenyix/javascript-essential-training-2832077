class Book {
  constructor(title, author, publisher, hardcover, price, isbn) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.hardcover = hardcover;
    this.price = price;
    this.isbn = isbn;
  }
  setPrice(newPrice) {
    this.price = newPrice;
  }
}

export default Book;
