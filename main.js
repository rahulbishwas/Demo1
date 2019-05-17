       function  clickFunction(){



       

    //     var myDiv = document.getElementById("myDiv");

    //     //Create array of options to be added
    //     var array = ["Volvo","Saab","Mercades","Audi"];
        
    //     //Create and append select list
    //     var selectList = document.createElement("select");
    //     selectList.setAttribute("id", "mySelect");
    //     myDiv.appendChild(selectList);
        
    //     //Create and append the options
    //     for (var i = 0; i < array.length; i++) {
    //         var option = document.createElement("option");
    //         option.setAttribute("value", array[i]);
    //         option.text = array[i];
    //         selectList.appendChild(option);
    //     }
    // // function init(){
        
      var xhttp=new XMLHttpRequest();
      xhttp.onreadystatechange=function(){

      if(this.readyState==4  &&  this.status==200){

        
        var tables= "<tr><th>City</th><th>ZipCode</th><th>Population</th><th>VoterId</th></tr>"
        console.log(this.responseText+ "this is response")

        var lines=this.responseText.split("\n");
        console.log(lines);
        var results = [];
        var headers=lines[0].split(",");
        console.log(headers);

    //     for(var i=1;i<lines.length;i++){

    //         var obj = {};
    //         var currentline=lines[i].split(",");

    //         for(var j=0;j<headers.length;j++){
    //             obj[headers[j]] = currentline[j];
    //             console.log(  obj[headers[j]]);
    //         }

        
    //   }
     count=0;
    for(var i=1;i<lines.length;i++){

        
        var obj = {};
        var currentline=lines[i].split(",");

        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
            // console.log(obj[headers[j]]);
        }

        results.push(obj);
        count++;
        console.log(count);
       
     

    }
    var cityArray = [];
    console.log(results);
    var data = JSON.stringify(results);
    var jsonArray = JSON.parse(data);


    
    for( i=0; i<jsonArray.length;i++)
    {
   
        var city = jsonArray[i].City;
        var zip = parseInt(jsonArray[i].ZipCode);
        var pop = parseInt(jsonArray[i].Population);
        var vote = parseInt(jsonArray[i].VoterId);

        console.log( vote);
        // var vote = parseInt(jsonArray[i].VoterId);
        // var zip = jsonArray[i].VoterId;
        // var kms = jsonArray[i].Squarekms;
        // var myr = jsonArray[i].Mayor;
        // console.log("city is"  + city) ;
        
        

        // for(i=0; i<jsonArray.length;i++){
            cityArray.push(city);
            console.log(cityArray);
            // }
        
        tables+= "<tr><td>" + city + "</td><td>" + zip + "</td><td>" + pop + "</td><td>" + vote + "</td></tr>";
        document.getElementById("csvTabel").innerHTML = tables;
        
        // document.getElementById("tot").innerHTML = count;
        
        // console.log(jsonArray.length);
       
    }

    console.log(cityArray);


    function getUnique(array){
        var uniqueArray = [];
        
        // Loop through array values
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }

    var uniqueNames = getUnique(cityArray);
    console.log(uniqueNames);
    
    var myDiv = document.getElementById("myDiv");

    //Create array of options to be added
    // var array = ["Volvo","Saab","Mercades","Audi"];
    
    //Create and append select list
    var selectList = document.createElement("select");
    selectList.setAttribute("id", "mySelect");
    myDiv.appendChild(selectList);
    
    //Create and append the options
    for (var i = 0; i < uniqueNames.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", uniqueNames[i]);
        option.text = uniqueNames[i];
        selectList.appendChild(option);
    }
// function init(){

    

    // console.log(jsonArray.length);
   

      


      }
    }
    //   window.onload=init;
    xhttp.open("GET" ," main.csv" ,true)
      xhttp.send();



    }



// }

function myFunction() {
   
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("csvTabel");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {

      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }



}



function myFunctions() {
  
   
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("mySelect");
    filter = input.value.toUpperCase();
    table = document.getElementById("csvTabel");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }



}






//  function  callDrop(){

    // alert("dropdown change");

    // var input, filter, table, tr, td, i, txtValue;
    // input = document.getElementById("myDiv");
    // filter = input.value.toUpperCase();
    // table = document.getElementById("csvTabel");
    // tr = table.getElementsByTagName("tr");
    // for (i = 0; i < tr.length; i++) {
    //   td = tr[i].getElementsByTagName("td")[0];
    //   if (td) {
    //     txtValue = td.textContent || td.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //       tr[i].style.display = "";
    //     } else {
    //       tr[i].style.display = "none";
    //     }
    //   }       
    // }



// }
