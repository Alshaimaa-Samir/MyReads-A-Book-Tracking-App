import React from 'react'
import BookList from './BookList'
import PropTypes from 'prop-types'

const BookShelf = (props) => {
	
  return (      
    <div className="bookshelf">
    	<h2 className="bookshelf-title">{props.cat}</h2>
    	<div className="bookshelf-books">
    		<BookList books={props.books} update={props.update}/>
    	</div>
    </div>
    )
}

BookShelf.props = {
	books: PropTypes.array.isRequired,
  	cat: PropTypes.string.isRequired,
  	update: PropTypes.func.isRequired,
}


export default BookShelf;