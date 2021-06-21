import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'
import BookShelf from './BookShelf'
import Search from './Search'


class BooksApp extends React.Component {
  state = { 
    books : [],      
  }
  componentDidMount(){
  	BooksAPI.getAll().then((books) => this.setState({
    	books
    }))  
  }

  updateBook = (book, shelf) => {
	    BooksAPI.update(book, shelf);
    	book.shelf = shelf
    	this.setState(state=>({  
	  		books: (state.books.filter((b) => b.id !== book.id).concat([book]))
        }))		
}

  searchBooks(){
	//BooksAPI.search(this.state.query, 20).then((newBooks) => this.setState({books: newBooks}));
  }

  render() {
    return (
      <div className="app">
       <Route path='/search' render={()=>(
      	 <Search books={this.state.books} update={this.updateBook}/>
    	)}/> 

        <Route exact path='/' render={()=>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
	          	<BookShelf books={this.state.books.filter((book) => book.shelf === 'currentlyReading')} cat='Currently Reading'update={this.updateBook}/>
	          	<BookShelf books={this.state.books.filter((book) => book.shelf === 'wantToRead')} cat='Want to Read'update={this.updateBook}/>
	          	<BookShelf books={this.state.books.filter((book) => book.shelf === 'read')} cat='Read'update={this.updateBook}/>
	          </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Search a book</Link>
            </div>
          </div>  
        )}/>		
   
      </div>
	 );
	}
}

export default BooksApp
