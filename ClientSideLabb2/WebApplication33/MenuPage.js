//happy hour logic:
var today;
//Method calls:
getTodaysDay();
removeInnerHTMLToElementsByTagName("span");
addPicturesToSpan();
adjustPrice();
getTodaysDay();
displayTodaysOffer();

//Adjust price function: (add .toFixed(2) for 2 decimals)
function adjustPrice() {
    var priceElements = document.getElementsByClassName("price");
    var rawNumber;
   
    for (var i = 0; i < priceElements.length; i++) {

        rawNumber = Number(priceElements[i].innerHTML);
        priceElements[i].innerHTML = rawNumber.toFixed(2);
    }
}

/*Add pictures function to span:*/
function removeInnerHTMLToElementsByTagName(tagName) {
    var element = document.getElementsByTagName(tagName);
    for (var i = 0; i < element.length; i++) {
        element[i].innerHTML = "";
    }
    
}

function addPicturesToSpan() {
    var spanElement = document.getElementsByTagName("span");
    
    for (var i = 0; i < spanElement.length; i++) {
        var newImgElement = document.createElement("img");
        newImgElement.setAttribute("src", "/Images/Hamburger.png")
        spanElement[i].appendChild(newImgElement);
    }
   
}
/*Add todays offer function. 
Make price background red. 
Reduce price by another 20%:*/

function getTodaysDay() {
    var d = new Date();
    var todaysDay = d.getDay()-1;

    if(todaysDay===-1){
        today = 6
    }
    else {
        today = todaysDay;
    }
    
}

function displayTodaysOffer() {
    var fieldsetElements = document.getElementsByTagName("fieldset");
    var todaysOfferParentFieldset = fieldsetElements[today];
    
    var todaysOfferDivs = todaysOfferParentFieldset.getElementsByTagName("div");
    var todaysOfferDiv = todaysOfferDivs[0];
    var todaysOfferPrice = Number(todaysOfferDiv.innerHTML);

    todaysOfferDiv.style.backgroundColor = "red";
    todaysOfferDiv.innerHTML = todaysOfferPrice * 0.80;
    
 }



/*Stretch exercises: (increasing tuffness for each number!)

 1. Automate todays offer to be dependent of the day of the week
 2. Create an HTML page with an empty body and then fill it with help from JS.
    -use array with names and price of the burgers seperated by a simple "space"
    -use a loop to add all the html with different burgers
    -Add more pictures on a creative way...
 3. Add arrays for all in point 3 and show the products.
    Add a simulair menu under the burgers with a new <h2> for:
    -subs
    -sausages
    -pizza
    -drinks
    
 5. Add a Birthday function for the restaurant so that the entire week 
    the restaurant has its birthday the price is set to 14.99 per default.
    
*/