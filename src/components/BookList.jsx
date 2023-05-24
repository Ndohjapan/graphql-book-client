import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries/queries";
import BookDetails from "./BookDetails";
import { useState } from "react";

function BookList() {
  // eslint-disable-next-line no-unused-vars
  const { loading, error, data } = useQuery(GET_BOOKS);

  const [selected, setSelected] = useState([])

  if (loading) {
    return <div>Loading Books.....</div>;
  } else {
    return (
      <div>
        <ul id="book-list">
          {data.books.map((book) => (
            <li key={book.id} onClick={(e) => {setSelected(book.id)}}>{book.name}</li>
          ))}
        </ul>
        <BookDetails bookId={selected}/>
      </div>
    );
  }
}

export default BookList;
