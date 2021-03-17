// Encode
function enCode() {
    var x = document.getElementById("enText").value;
    alert(`Encode Result: ` + btoa(x))
    console.log("Encode Result: " + btoa(x))
}

// Decode
function deCode() {
    var x = document.getElementById("deText").value;
    alert(`Decode Result: ` + atob(x))
    console.log("Decode Result: " + atob(x))
}
