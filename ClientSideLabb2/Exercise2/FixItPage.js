/*

For each of the following aplicable exercise below you should present a box on the page 
with an alert that shows the result when the box is clicked!
*/

var paragraphs = document.getElementsByTagName("p");

for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", function (e) {
        alert("du klickade på en P tagg. " + this);
    }, false);
}


/*

###Window object at page 124:###
1. Link the script with FixIt.hmtl
2. Add som tags that doesn't change the visual part of the paragraph.
3.Play with the properties at page 124 in the book. 
  Use properties creatively to display things at the html page
4.Add a stylesheet that displays the changed words in fat font and in red. <-- vad menas med detta? vilka changed words? -->
5. PLay with the Methods 
### DOM page 126:###
6. Play with the DOM-properties

*/

var msg = '<h2>browser window</h2><p>width : ' + window.innerWidth + ' </p>';

msg += '<p>scrolled: ' + window.pageXOffset + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';
msg += ' <h2>history</h2><p>items : ' + window.history.length +  '</p>';
msg += ' <h2>screen</h2><p>width : ' +window.screen.width +  '</ p> ' ;
msg += ' <p>height : ' + window.screen.height + '</p>';
msg += '<p> last moified: ' + document.lastModified + ' </p>';

var el = document.getElementById('info' );
el.innerHTML = msg;

//window.open();
//window.print();
//alert('Current page : ' + window.location);

/*

### String objects page 128, 129: ###

7. Save the the text from the makeMeAnArray-paragraph into an array.
8. Use all the string methods and propertys allong with the array

*/

var targetElementText = document.getElementById("makeMeAnArray").innerHTML;
var stringArrayTarget = document.getElementById("stringArrayTarget");
//var textAsArray = targetElementText.split(' ');

var arrayMsg = '<h2>String array messages!</h2>';
arrayMsg += '<p><strong>Upper case: </strong>' + targetElementText.toUpperCase() + '</p>';

arrayMsg += '<p><strong>Lower case: </strong>' + targetElementText.toLowerCase() + '</p>';

arrayMsg += '<p><strong>trim: </strong>' + targetElementText.trim() + '</p>';

arrayMsg += '<p><strong>charAt 9: </strong>' + targetElementText.charAt(9) + '</p>';

arrayMsg += '<p><strong>indexOf i: </strong>' + targetElementText.indexOf('i') + '</p>';

arrayMsg += '<p><strong>lastIndexOf i: </strong>' + targetElementText.lastIndexOf('i') + '</p>';

arrayMsg += '<p><strong>subString between 10-20: </strong>' + targetElementText.substring(10, 20) + '</p>';

arrayMsg += '<p><strong>split at "o": </strong>' + targetElementText.split('o') + '</p>';

arrayMsg += '<p><strong>replace "o" with " TJENAMITTBENA ": </strong>' + targetElementText.replace('o', ' TJENAMITTBENA ') + '</p>';


/*

### String objects page 132: ###
9. check if the 4th element in the array is a number
*/

arrayMsg += '<p><strong>check if the 4th element in the array is a number: </strong></p>';
var array = ["masay", "hej", 1, "a", 4, 5, "muu"];
arrayMsg += '<p> Array: ' + array + '</p>';
arrayMsg += '<button id="arrayButton">Click to check 4:th number</button>';
var isNum = !isNaN(array[3]);







/*

### Math page 134: ###
10. Round one of the numbers in the paragraph up/down

*/
var number = 4.567;
var rounded = Math.round(number);


arrayMsg += '<p><strong>Round one of the numbers in the paragraph up/down: </strong></p>';
arrayMsg += '<p>4.567</p>';
arrayMsg += '<p>rounded = ' + rounded + '</p>';

/*
11. replace the 3rd word with PI then roud it to the nearest integer

*/

var wordArray = ["Good", "day", "to", "you", "dear", "sire"];

arrayMsg += '<p><strong>replace the 3rd word with PI then roud it to the nearest integer: </strong></p>';
arrayMsg += '<p>wordarray -> ' + wordArray + '</p>';


wordArray[2] = Math.PI;
wordArray[2] = Math.round(wordArray[2]);

arrayMsg += '<p>wordarray replaced -> ' + wordArray + '</p>';
/*

### Date object###
12. Calculate how many days it's until your birthday and present it.
13. Calculate how many minutes old you are and present it.

Bonus exercises:
### Demo page 141:###
-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
 and look at JS String, JS Number, JS Math and JS Date

*/

stringArrayTarget.innerHTML = arrayMsg;



var buttonElement = document.getElementById("arrayButton").addEventListener("click", function () {

    alert("is it a number? " + isNum);
});


