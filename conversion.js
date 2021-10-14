const binToBase = (base = 10) => {
    // Takes a base (defaults to 10), performs the conversion, and displays the result
    var binText = document.getElementById("bin").value;
    var dec = parseInt(binText, 2);
    document.getElementById("res").value = dec.toString(base);
}

const binreset = () => {
    // Reset the two fields
    document.getElementById("bin").value = "";
    document.getElementById("res").value = "";
}
