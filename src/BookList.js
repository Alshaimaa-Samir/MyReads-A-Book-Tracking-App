import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BookList = (props) => {
	return(
      <ol className="books-grid">
    	{ props.books.map((book)=> 
			<Book key={book.id} book={book} update={props.update}
		/>)}
	  </ol>
    )
}

BookList.props = {
	books: PropTypes.array.isRequired,
  	uodate: PropTypes.func.isRequired,
}



export default BookList;