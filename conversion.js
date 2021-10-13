const binToDec = () => {
    // Takes value from text input and performs conversion, then replaces decimal value
    var binText = document.getElementById("bin").value;
    var dec = parseInt(binText, 2);
    document.getElementById("dec").value = dec.toString();
}
const bintoHexa = () =>{
     var x= document.getElementById("bin").value;
      var dec = parseInt(x, 2);
        document.getElementById("dec").value = dec.toString(16).toUpperCase();
}
const binreset = () => {
    // Reset the two fields
    document.getElementById("bin").value = "";
    document.getElementById("dec").value = "";
}
