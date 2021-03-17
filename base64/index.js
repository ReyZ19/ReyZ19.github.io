// Encode
function enCode() {
    var x = document.getElementById("enText").value;
    console.log("Encode Result: " + btoa(x))
    document.getElementById("deText").value = btoa(x);
    document.getElementById("deText").style = "background-color: cornflowerblue;"
    setTimeout(() => { document.getElementById("deText").style = "background-color: #cccccc;" }, 2000);
}

// Decode
function deCode() {
    var x = document.getElementById("deText").value;
    console.log("Decode Result: " + atob(x))
    document.getElementById("enText").value = atob(x);
    document.getElementById("enText").style = "background-color: cornflowerblue;" 
    setTimeout(() => { document.getElementById("enText").style = "background-color: #cccccc;" }, 2000);
}
