var response;
    //Creating an XHR Object
var xhttp = new XMLHttpRequest();
//Event Listener
xhttp.onreadystatechange = function(){
    //condition
    if(this.readyState == 4 && this.status == 200){
         response = JSON.parse(this.responseText);
 
    }
}

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();



function display()
{   

    // Create a table.
    var table = document.createElement("table");

    // Create table header row using the extracted headers above.
    var tr = table.insertRow(-1);                   // table row.

    // for (var i = 0; i < col.length; i++) {
    //     var th = document.createElement("th");      // table header.
    //     th.innerHTML = col[i];
    //     tr.appendChild(th);
    // }
    var th1 = document.createElement("th");      // table header.
    var th2 = document.createElement("th");      // table header.
    var th3 = document.createElement("th");      // table header.
    th1.innerHTML = "Id";
    th2.innerHTML = "Title";
    th3.innerHTML ="Task Completed";
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);

    var ChkCount = 0;
    // add json data to the table as rows.
    for (var i = 0; i < response.length; i++) 
    {

         tr = table.insertRow(-1);
        var chk = document.createElement('input');
        var x ;
        x = response[i].completed;
        // console.log(x);
        chk.setAttribute('type', 'checkbox');
        chk.setAttribute('name', 'box');
       
        chk.setAttribute('id', i);
        // chk.setAttribute('onclick', chkboxclick());
        if(x == true){
            chk.setAttribute('checked','');  
            chk.setAttribute('disabled','');      
    // ********  write code to store count of checked boxes in a variable e.g. ChkCount
            // ChkCount = ChkCount + 1;
    }
        // chk.setAttribute('checked',x);
        var tabCell1 = tr.insertCell(-1);
        var tabCell2 = tr.insertCell(-1);
        var tabCell3 = tr.insertCell(-1);
        tabCell1.innerHTML = response[i].id;
        tabCell2.innerHTML = response[i].title;
        tabCell3.appendChild(chk);

        // for (var j = 0; j < col.length; j++) {
        //     var tabCell = tr.insertCell(-1);
        //     tabCell.innerHTML = response[i][col[j].title];
        // }
        //Trigger function when checkbox is clicked
       

       
    }

    // Now, add the newly created table with json data, to a container.
    var divhead = document.getElementById("heading");
    divhead.innerHTML = "Todo List";
    var divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
//    divShowData.click = function(){
//        if (chk.checked != false) {
//             alert("Checkbox checked")
//         }else{
//             alert("Not Checked")
//         }

//    }
// Select all checkboxes with the name 'settings' using querySelectorAll.
var checkboxes = document.querySelectorAll("input[type=checkbox][name=box]");
let enabledSettings = []

/*
For IE11 support, replace arrow functions with normal functions and
use a polyfill for Array.forEach:
https://vanillajstoolkit.com/polyfills/arrayforeach/
*/

// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    enabledSettings = 
      Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
      .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
    //   .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
      .length;
    console.log(enabledSettings);
    if(enabledSettings == 95){
        setTimeout(function()
        {alert("hi")},300);
    }
  })
  
});  
   

}