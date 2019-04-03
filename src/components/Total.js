import React, { Component } from 'react'
import '../App.css'
//import { deleteBook } from '../BooksLinks';

class Total extends Component {

 
	render(){

	    const { book, changeShelf } = this.props
		return(
	      <li key={book.id}>
	         <div className="book">
	            <div className="book-top">
							<div className="book-cover" key={book.thumbnail} style={{ backgroundImage: `url(${book.thumbnail})`}} alt="book cover"></div>
							{/* <div className="book-delete" onClick={() => deleteBook(book)}></div> */}
							<div className="book-delete"></div>
								<div className="book-shelf-changer">
	                <select onChange={(event) => changeShelf(book, event.target.value)} defaultValue={book.shelf}>
	                  <option value="none" disabled>Move to...</option>
	                  <option value="currentlyReading">Currently Reading</option>
	                  <option value="wantToRead">Want to Read</option>
	                  <option value="read">Read</option>
	                  <option value="none">None</option>
	                </select>
	              </div>
	            </div>
	            <div className="book-title" key={book.title}>{book.title}</div>
	            <div className="book-authors" key={book.author}>{book.author}</div>
	          </div>
	        
	        </li>
	      
		)
	}
}


export default Total