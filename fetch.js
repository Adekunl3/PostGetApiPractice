document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);


function getText(){
    /* fetch('sample.txt')
    .then(function(res){  //promise
        return res.text(); //to see what is in the text, type of data. we can do .json too
    })
    .then(function(data){ //to see what is in the sample.txt, the actual content. 
        console.log(data);
    })*/
fetch('sample.txt')
.then((res) => res.text())
.then((data)=> {
document.getElementById('output').innerHTML = data;
})
.catch((err) => console.log(err) )
}

//getUserFunction
function getUsers(){
fetch('users.json')
.then((res) => res.json())
.then((data) => {
let output = '<h2>Users</h2>';
data.forEach(function(user){
output += `
        <ul>
        <li>ID: ${user.id}</li>
        <li>Name: ${user.name}</li>
        <li>Email: ${user.email}</li>
        </ul>
`
})
document.getElementById('output').innerHTML = output;
})
}

//get API
function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
    let output = '<h2>Posts</h2>';
    data.forEach(function(post){
    output += `
            <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </div> 
    `
    })
    document.getElementById('output').innerHTML = output;
    })
    }

    //form, addPost
    function addPost(e){
        e.preventDefault();

        let title = document.getElementById('title').value
        let body = document.getElementById('body').value

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'Accept': 'application, text/plain, */*',
                'content-type': 'application/json' 
            },
            body:JSON.stringify({title:title, body:body})
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    
    }