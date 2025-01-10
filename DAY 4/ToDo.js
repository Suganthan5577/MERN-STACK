var listOfData=[]
//creating array to store the list
var input=document.getElementById("input");
//DOM Should collab with html form
var todo=document.getElementById("todo");
//creating ul list using DOM variable
document.getElementById("button").onclick=click;
function click(){
    if(input.value.trim()===""){
        alert("please enter a valid task.");
        return;
    }
    listOfData.push(input.value)
    console.log(listOfData);
    input.value="";
    showList();
}
function showList(){
    todo.innerHTML=" ";

listOfData.forEach(function(item,i){
    var li=document.createElement("li");
    li.innerHTML=`${item}<a  onclick ="edit(${i})" style="margin-left:10px;color:blue;cursor:pointer;">edit</a>
<a  onclick ="deleteLst(${i})" style="margin-left:10px;color:red;cursor:pointer;">Delete</a>`;
    todo.appendChild(li);
   
});
}
function edit(i){
    var newVal=prompt("please insert new value",listOfData[i]);
    if(newVal!==null&&newVal.trim()!==""){
        listOfData.splice(i,1,newVal);
        showList();
    }
}
function deleteLst(i){
    listOfData.splice(i,1);
      showList();
}