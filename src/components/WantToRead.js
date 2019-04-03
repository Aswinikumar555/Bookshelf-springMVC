import React, { Component } from 'react'
import '../App.css'
import Total from './Total'

class WantToRead extends Component {


	render () {

    // destructuring props so can be called without 'this.props'
    const { books, changeShelf } = this.props

    return (


		<div className="bookshelf">
	      <h2 className="bookshelf-title">Want To Read</h2>
	      <div className="bookshelf-books">
	        <ol className="books-grid">

	        {books.filter(book => book.shelf === 'wantToRead').map((book) => <Total key={book.id} book={book} changeShelf={changeShelf} />)}
	        </ol>
	      </div>
	    </div>

	)}
}

export default WantToRead