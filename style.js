
let list1 =[];
let list2 =[];
let list3 =[];
let list4 =[];
let row=1;
let x=0;
function AddRow(){
   

    let display=document.getElementById("display");
      let newRow=display.insertRow(row);
    
   
    let name=document.getElementById('name').value;
    let email=document.getElementById("email").value;
let mobile=document.getElementById("mobile").value;
    let date=document.getElementById("date").value;
 

  alert(`${name} ${email}  ${mobile} ${date}`)
  let cell1=newRow.insertCell(0);
  let cell2=newRow.insertCell(1);
  let cell3=newRow.insertCell(2);
  let cell4=newRow.insertCell(3);


  cell1.innerHtml=name;
   cell2.innerHtml=email;
  cell3.innerHtml=mobile;
  cell4.innerHtml=date;
  row++;
  x++;
 }




 