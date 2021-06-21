import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'
import escapeRegExp from 'escape-string-regexp'
import {Link} from 'react-router-dom'

class Search extends Component{
	static propTypes = {
    	books : PropTypes.object.isRequired,
      	update: PropTypes.func.isRequired,
    }
  	state = {
    	query : "",
    }

	updateQuery = (query) => {
    	this.setState({query : query.trim()})
    }
	
	render(){
      
      let showingBooks
      const {query} = this.state
      if (query) {
        const match = new RegExp(escapeRegExp(query), 'i')
		showingBooks = this.props.books.filter((book) => match.test(book.title) || match.test(book.authors))
	  } else {
  		showingBooks = this.props.books
	  }
    	return (
      	<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                	<input type="text"
          				   placeholder="Search by title or author" 
						   onChange={(event) =>this.updateQuery(event.target.value)}
					/>
  			  </div>
            </div>					
			<div className="search-books-results">
				<BookList books={showingBooks} update={this.props.update}/>
			</div>
          </div>
      	)
    }

}




export default Search;