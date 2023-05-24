import { gql} from "@apollo/client";

const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;

const GET_BOOKS = gql`
  query GetBooks {
    books {
      name
      id
    }
  }
`;

const ADD_AUTHORS = gql`
  mutation AddToAuthors($name: String!, $age: Number!){
    addAuthor(name: $name, age: $age){
        id
        name
        age
    }
  }
`

const ADD_BOOKS = gql`
mutation AddToBooks($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
    id
    name
    genre
  }
}
`;

const GET_BOOK = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export{GET_AUTHORS, GET_BOOKS, ADD_AUTHORS, ADD_BOOKS, GET_BOOK}