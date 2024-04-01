var table = "./blogList.json"

var parsedTable = null

var xhttp = new XMLHttpRequest(); 
xhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
        var blogs = this.responseText; 
        
        parsedTable = JSON.parse(blogs)

        for (var i in parsedTable) {
            print(parsedTable[i])
        };
    } 
  }; 

xhttp.open("GET", table, true); 
xhttp.send(); 