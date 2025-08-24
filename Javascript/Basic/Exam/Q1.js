//  Write an async function that fetches data from 
// https://jsonplaceholder.typicode.com/users and returns a list of only their 
// names.

const getData=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
}

getData()