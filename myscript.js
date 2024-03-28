var stname=document.querySelector("#name")
var stage=document.getElementById("age")
var gen=document.getElementsByName("gender")
var course=document.querySelector("select")
var em=document.getElementById("stem")
//for result
var table=document.querySelector("#table")
//For radio field
var resultgen;
for(var i=0;i<gen.length;i++){
    if(gen[i].checked){
        resultgen=gen[i].value
    }
}
function add(){
    var resname=stname.value
    var resage=stage.value
    var resgender=resultgen
    var rescourse=course.value
    var resemail=em.value
    //check whether the input fields are null or not
    if(resname==''){
        alert("Enter the Name !!!")
    }else if(resage==''){
        alert("Enter the Age !!!")
    }else if(resgender==''){
        alert("Select the Gender !!!")
    }else if(rescourse=='None'){
        alert("Select the Course !!!")
    }else if(resemail==''){
        alert("Enter the Email !!!")
    }else{
    var tr=document.createElement("tr")
    tr.innerHTML="<tr><td>"+resname+"</td><td>"+resage+"</td><td>"+resgender+"</td><td>"+rescourse+"</td><td>"+resemail+"</td><td><button onclick='del(event)'>Delete</button></td>"
    table.append(tr)
    alert("Student Created !!!")
    }
}

function del(event){

    event.target.parentElement.parentElement.remove()  // since it delets ex-parent element   .parentElement or .parentNode both are same
}