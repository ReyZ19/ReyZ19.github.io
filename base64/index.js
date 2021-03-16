function enCode() {
    var x = document.getElementById("enText").value;
    var result = btoa(x)
    alert(`Encode Result: ` + result)
}
function deCode() {
    var x = document.getElementById("deText").value;
    var result = atob(x)
    alert(`Decode Result: ` + result)
}