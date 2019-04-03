import React, { Component } from 'react'
import '../App.css'
import Total from './Total'

class CurrentlyReading extends Component {



	render () {

		const { books, changeShelf } = this.props

    return (


		<div className="bookshelf">
	      <h2 className="bookshelf-title">Currently Reading</h2>
	      <div className="bookshelf-books">
	        <ol className="books-grid">

						{books.filter(book => book.shelf === 'currentlyReading').map((book) => 
						
							<Total key={book.id} book={book} changeShelf={changeShelf} />
		        )}
		        
	        </ol>
	      </div>
	    </div>

	)}
}

export default CurrentlyReading