var table = "./blogList.json"

var xhttp = new XMLHttpRequest(); 
xhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
        var blogs = this.responseText; 
        
        console.log(JSON.parse(blogs))
    } 
  }; 

xhttp.open("GET", table, true); 
xhttp.send(); 