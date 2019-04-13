import React,{Component} from 'react'
import Link from 'react-router-dom';
import  {books} from '../../data'
class BooksList extends Component{
    render() {
        return(

            <div>
                {books.map((book) => (
                    <div key={book.id} className="cat-item">
                        <Link to={`/cat/${book.id}`} className="cat-link">{book.name}</Link>
                    </div>
                ))}
            </div>
        )
    }
}
export default BooksList