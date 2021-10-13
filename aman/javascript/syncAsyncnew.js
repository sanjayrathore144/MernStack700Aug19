function setup(){
    loadJSON("https://jsonplaceholder.typicode.com/posts/1",gotdata);
}
function gotdata(data){
    console.log(data);
}
setup();