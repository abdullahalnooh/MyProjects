
// defining the elements 
var txtPlace = document.getElementById("textplace");
var inMesege = document.getElementById("input");
var getInBtn = document.getElementById("inputbtn");

// funcation 
function txtchng() {   
    // get vaule from input
    var inputVaule = inMesege.value;
    // wirte the vaule inside the text place
    txtPlace.innerText = inputVaule;
}


// events 
getInBtn.onclick = function(){txtchng()}
inMesege.onkeypress = function() {txtchng()};