function entertodo(){
    var input = document.getElementById('input');
    var list = document.getElementById('list');
    var list_item = document.createElement('li');
    list_item.innerHTML =input.value;
    list.appendChild(list_item);
    if(list_item.innerHTML =='tooba');{
        alert("you enter my name");
    }
}
function cl(){
var a = document.getElementById('input');
a.value ="";
}


