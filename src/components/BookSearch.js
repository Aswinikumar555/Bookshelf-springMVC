import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Total from './Total'



class BookSearch extends React.Component {
	constructor() {
		super();
		this.state = {
				 val : '' 
				};
		this.searchBook = this.searchBook.bind(this)
		
}
searchBook(event){
	this.setState({
			val: event.target.value.trim()
	})
	}

	render () {

	    const { books, changeShelf } = this.props
	   


return (
	<div>

<div className="search-books">
		            <div className="search-books-bar">
		            	<Link to="/" className="close-search">Close</Link>
		            	
			          	<form className="search-books-input" >
                        <input type="text" name="val"
                          placeholder="Search Book"
                          value={this.state.value}  onChange={this.searchBook}
                            />
				         		
			          	</form>
                 </div>
                   
		      </div>
					{this.state.val ?
											<div className="bookshelf">
											<h2 className="bookshelf-title">Currently Reading</h2>
											<div className="bookshelf-books">
												<ol className="books-grid">
													
													{books.filter(book => book.title.toLowerCase().indexOf(this.state.val.toLowerCase()) >-1).map((book) => 
														<Total key={book.id} book={book} changeShelf={changeShelf} />
													)}
													
												</ol>
											</div>
										</div>
									: null
					}
		</div>
			
     )
	}
}

export default BookSearch

