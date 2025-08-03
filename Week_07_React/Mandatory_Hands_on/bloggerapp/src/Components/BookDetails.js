import React from "react";

const BookDetails = () => {
  const books = [
    { id: 1, title: "React Basics", author: "John Doe" },
    { id: 2, title: "Learning JavaScript", author: "Jane Smith" },
    { id: 3, title: "Advanced React", author: "Alex King" }
  ];

  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
