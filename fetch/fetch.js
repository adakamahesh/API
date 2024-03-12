document.getElementById('gettext').addEventListener('click',text);
document.getElementById('getusers').addEventListener('click',user);
document.getElementById('getposts').addEventListener('click',posts);
document.getElementById('addpost').addEventListener('submit',addpost);
function text(){
    // fetch('sample.text')
    // .then(function(res){
    //     // console.log(res.text());
    //     return res.text();
    // })
    // .then(function(data){
    //     console.log(data);
    // })
    fetch('sample.text')//it is used to acces url and files
    .then((res) =>res.text())
    .then((data) =>{
    document.getElementById('output').innerHTML=data;//it is used for disply output in innerhtml
    })
    .catch((err) =>console.log(err))//it is used to catch the error
}//this is function for user text
function user(){
    fetch('fetch.json')
    .then((res)=> res.json())
    .then((data)=>{
        let output='<h2>Users</h2>';
        data.forEach(function(user){
            output+= `
             <ul class="list-group mb-3">
               <li class="list-group-item">ID:${user.id}</li>
               <li class="list-group-item">Name:${user.name}</li>
               <li class="list-group-item">Email:${user.email}</li>
             </ul>
            `;
        })//it is used to read the all outputs one by one and store the output
        document.getElementById('output').innerHTML=output;
    })
}//this is function for user information
function posts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((data)=>{
        let output='<h2>posts</h2>';
        data.forEach(function(post){
            output+= `
             <div class="card card-body mb-3">
               <h3>${post.title}</h3>
               <p>${post.body}</p>
             </div>
            `;
        })
        document.getElementById('output').innerHTML=output;
    })
}//this is function for user posts
function addpost(e){
    e.preventDefault();//it is used to don't refresh the page
    let title=document.getElementById('title').value;
    let body=document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'post',
        headers:{
            'Accept':`application/json,text/plain,*/*`,
            'content-type':`application/json`
        },
        body:JSON.stringify({title:title,body:body})
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}//this is function for user add posts