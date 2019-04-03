import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import BookSearch from './components/BookSearch'
import BookList from './components/BookList'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (changebook,shelf) => {
   
    console.log(changebook)
    const index = this.state.books.findIndex((b) =>{
        return b.id === changebook.id;
      })
  
      const book= Object.assign({},this.state.books[index])
      book.shelf = shelf
      console.log(book.shelf)
  
      const books=Object.assign([],this.state.books)
      books[index]=book
  
      this.setState({books:books})


    BooksAPI.update(book).then(response => {
      console.log(response)
    })

   
  }



  render() {
    
    return (

      <div className="app">

          <Route exact path="/" render={() => (
            <BookList books={this.state.books} 
                      changeShelf={this.changeShelf}
            /> )} />
                      

          <Route exact path="/search" render={() => (
            <BookSearch books={this.state.books}
                        changeShelf={this.changeShelf}
              /> )} />
          
      </div>
    )
  }
}

export default BooksApp
