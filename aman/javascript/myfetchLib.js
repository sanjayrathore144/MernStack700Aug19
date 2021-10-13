const fetchsync = require('sync-fetch')
const fetch = require('node-fetch');

 
// const metadata = fetch('https://jsonplaceholder.typicode.com/users').json()
// var metadata = fetch('https://jsonplaceholder.typicode.com/photos').json()
// console.log(metadata);
//  metadata = fetch('https://jsonplaceholder.typicode.com/photos').json()
// console.log(metadata);
//  metadata = fetch('https://jsonplaceholder.typicode.com/photos').json()
// console.log(metadata);
//  metadata = fetch('https://jsonplaceholder.typicode.com/photos').json()
// console.log(metadata);
//  metadata = fetch('https://jsonplaceholder.typicode.com/photos').json()


// console.log(metadata);

function  fetchSync(url)
{
    var data = fetchsync(url).json();
    return data;
}

function fetchAsync(url,callback)
{
    fetch(url).then(response=>response.json()).then(json=>{ callback(json) });
}



module.exports={
    fetchSync,
    fetchAsync
}