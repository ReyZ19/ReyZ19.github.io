/*

 ██▀███     ▓█████    ▓██   ██▓   ▒███████▒
▓██ ▒ ██▒   ▓█   ▀     ▒██  ██▒   ▒ ▒ ▒ ▄▀░
▓██ ░▄█ ▒   ▒███        ▒██ ██░   ░ ▒ ▄▀▒░ 
▒██▀▀█▄     ▒▓█  ▄      ░ ▐██▓░     ▄▀▒   ░
░██▓ ▒██▒   ░▒████▒     ░ ██▒▓░   ▒███████▒
░ ▒▓ ░▒▓░   ░░ ▒░ ░      ██▒▒▒    ░▒▒ ▓░▒░▒
  ░▒ ░ ▒░    ░ ░  ░    ▓██ ░▒░    ░░▒ ▒ ░ ▒
  ░░   ░       ░       ▒ ▒ ░░     ░ ░ ░ ░ ░
   ░           ░  ░    ░ ░          ░ ░    
                       ░ ░        ░        
*/
// Encode
function enCode() {
    var x = document.getElementById("enText").value;
    try {
     document.getElementById("deText").style = "background-color: cornflowerblue;";
     document.getElementById("deText").value = btoa(x);
    }
    catch(err) {
     document.getElementById("deText").style = "background-color: brown;";
     document.getElementById("deText").value = "Error!";
    }
    setTimeout(() => { document.getElementById("deText").style = "background-color: #cccccc;" }, 2000);
}
// Decode
function deCode() {
    var x = document.getElementById("deText").value;
    try {
     document.getElementById("enText").style = "background-color: cornflowerblue;";
     document.getElementById("enText").value = atob(x);
    }
    catch(err) {
     document.getElementById("enText").style = "background-color: brown;";
     document.getElementById("enText").value = "Error!";
    }
    setTimeout(() => { document.getElementById("enText").style = "background-color: #cccccc;" }, 2000);
}
