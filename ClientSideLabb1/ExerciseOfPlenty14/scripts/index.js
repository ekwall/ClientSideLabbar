// 14
// Rita en algoritm där alla jämna tal från 2 upp till och med 100 
// skrivs ut.

var targetDiv = document.getElementById('targetDiv');


var number = 101;

for (var i = 1; i < number; i++) {
    if (i % 2 === 0) {
        var createPara = document.createElement('p');
        createPara.textContent = '\u00A0' + i;
        createPara.style.display = "inline-block";
        targetDiv.appendChild(createPara);
    }
}
