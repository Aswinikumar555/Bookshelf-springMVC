import axios from 'axios'

//promise
export const getAll = () => {
return new Promise((resolve, reject)=> {
fetch('http://172.16.18.240:8081/testapp/user/getUsers', { mode: 'no-cors' })
.then(res => ()=>{let a=res.json();resolve(a)})
.catch(data => reject(data))
})
}



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
