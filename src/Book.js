import React, {Component} from 'react'
import PropTypes from 'prop-types'



class Book extends Component {
  state = {
  	selection : '',
  }

  static propTypes = {
  	book : PropTypes.object.isRequired,
  }

  updateSelection(newSelection){
  	if(newSelection !== this.state.selection){
    	this.setState({selection : newSelection});
      	this.props.update(this.props.book, newSelection);
    }
  }
  
  render(){
  const url = 'url(' + this.props.book.imageLinks.thumbnail.slice(0, 4) + "s" + this.props.book.imageLinks.thumbnail.slice(4) + ')';
  const cat = this.props.book.shelf
    return (
	<li>
		<div className="book">
			<div className="book-top">
				<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: url }}>
				</div>
				<div className="book-shelf-changer">
					<select id='1234' defaultValue={cat} onChange={(event) => this.updateSelection(event.target.value)}>
						<option value="move" disabled>Move to...</option>
						<option value="currentlyReading" >Currently Reading</option>
						<option value="wantToRead" >Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
                  
                    
				</div>
			</div>
			<div className="book-title">{this.props.book.title}</div>
			<div className="book-authors">{this.props.book.authors}</div>
		</div>
	</li>
	)
	}
}




export default Book;