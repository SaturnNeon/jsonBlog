// Blog Reading Code
var xhttp = new XMLHttpRequest(); 

xhttp.onreadystatechange = function() { 
  if (this.readyState == 4 && this.status == 200) { 
    var text = this.responseText; 
    document.getElementById("posttext").innerHTML = text;
    console.log(text)
  } 
}; 

xhttp.open("GET", "./posts/test.txt", true); 
xhttp.send(); 