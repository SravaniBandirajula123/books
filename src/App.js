import { useState } from 'react';
import BookCreate from './components/BookCreate';
function App() {
    const [books,setBooks] = useState([]);

    const createBook =(title)=>{
        console.log('Need to add book with:',title);
        books.push({ id:123, title:title });
        console.log(books)
        setBooks(books);
    }
    return (
    <div>
        {books.length}
        <BookCreate onCreate={createBook}/>
    </div>
    )
}

export default App;