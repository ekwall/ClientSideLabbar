// 13:
// Skapa ett program som läser in 
// ett antal tal och skriver ut dem. 
// Inläsning ska ske tills siffran 0 har matats in.


var targetDiv = document.getElementById('numberTargetDiv');
var button = document.getElementById('btnReadNumber');
var inputField = document.getElementById('readNumber');

button.addEventListener("click", checkNumber, false);



function checkNumber() {
    var addPara = document.createElement("p");

    if (inputField.value == "0") {
        addPara.textContent = "You , sire, entered zero. Program is terminated.";
        button.removeEventListener('click', checkNumber, false);
    } else {
        addPara.textContent = inputField.value;
    }
    
    addPara.setAttribute('class','testclass');
    addPara.style.backgroundColor = "white";

    targetDiv.appendChild(addPara);
    resetGui();

}

function resetGui() {

    inputField.value = "";
    
}




