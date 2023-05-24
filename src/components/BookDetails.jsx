import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../queries/queries";


// eslint-disable-next-line react/prop-types
function BookDetails({bookId}) {
    const { loading, error, data } = useQuery(GET_BOOK, {
        variables: { id: bookId }, // Pass the bookId as a variable to the query
      });
    // console.log(bookId)

    function displayBookDetails(){
        if(data){
            return(
                <div>
                    <h2>Name: {data.book.name}</h2>
                    <p><strong>Genre: </strong>  {data.book.genre}</p>
                    <p> <strong>Author: </strong> {data.book.author.name}</p>
                    <p>All Books by this author: </p>
                    <ul className="other-books">
                        {data.book.author.books.map(item => {
                            return <li key={item.id}>
                                {item.name}
                            </li>
                        })}
                    </ul>
                </div>
            )
        }
        else{
            return(
                <div> No Book Selected...</div>
            )
        }
    }
  if (loading) {
    return <div>Loading Books.....</div>;
  } else {
      return (
        <div id="book-details">
          {displayBookDetails()}
        </div>
      );

  }
}

export default BookDetails