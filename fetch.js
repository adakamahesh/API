document.getElementById('gettext').addEventListener('click',text);
function text(){
    // fetch('sample.text')
    // .then(function(res){
    //     // console.log(res.text());
    //     return res.text();
    // })
    // .then(function(data){
    //     console.log(data);
    // })
    fetch('sample.text')
    .then((res) =>res.text())
    .then((data) =>{
    document.getElementById('output').innerHTML=data;
    })
    .catch((err) =>console.log(err))
}