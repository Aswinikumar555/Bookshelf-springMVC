import axios from 'axios'
export const getAll = () =>
  fetch('/testapp/book/getBooks')
    .then(res => res.json())
    .then(data => data)


        
export const update = (book) =>
axios.post('/testapp/book/updateBook',book)
.then(response => {
  console.log(response)
  
})
.catch(err => {
  console.log(err)
})


export const deleteBook = (book) =>
axios.post('/testapp/book/deleteBook',book)
.then(response => {
  console.log(response)
  
})
.catch(err => {
  console.log(err)
})