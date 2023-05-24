import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import "./index.css"

console.log(import.meta.env.DEV)
console.log(import.meta.env.PROD)
console.log(import.meta.env.VITE_HOST_URL)

const client = new ApolloClient({
  uri: import.meta.env.VITE_HOST_URL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="main">
          <h1>Ninja's Reading List </h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
