import { useMutation, useQuery } from "@apollo/client";
import { ADD_BOOKS, GET_AUTHORS, GET_BOOKS } from "../queries/queries";
import { useState } from "react";

function AddBook() {
  const { loading: queryLoading, error: queryError, data: queryData } = useQuery(GET_AUTHORS);

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  let [addBook, { loading: mutationLoading, error: mutationError, data: mutationData }] = useMutation(ADD_BOOKS, {
    refetchQueries: [{ query: GET_BOOKS }], // Refresh the GET_BOOKS query after mutation
  });

  function displayAuthors() {
    if (queryLoading) {
      return (
        <option value="" disabled>
          Loading Authors
        </option>
      );
    } else {
      return queryData.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  function submitForm(e) {
    e.preventDefault();

    addBook({
      variables: {
        name: name,
        genre: genre,
        authorId: authorId,
      },
    })

    // Clear form fields
    setName("");
    setGenre("");
    setAuthorId("");
  }

  return (
    <form action="" id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name: </label>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Genre: </label>
        <input
          type="text"
          name=""
          id=""
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Author</label>
        <select name="" id="" value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option value="">Select Author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default AddBook;
