// Encode
function enCode() {
    var x = document.getElementById("enText").value;
    var result = btoa(x)
    alert(`Encode Result: ` + result)
    console.log("Encode Result: " + result)
}

// Decode
function deCode() {
    var x = document.getElementById("deText").value;
    var result = atob(x)
    alert(`Decode Result: ` + result)
    console.log("Decode Result: " + result)
}
