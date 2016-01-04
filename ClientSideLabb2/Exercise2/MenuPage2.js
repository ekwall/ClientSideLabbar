/*
1. create 7 hamburger objects using literal notation 
   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
   Please use the same html syntax of an article as in exercise1.


*/

var hamburger = {
    name: "Biggie",
    size: "xl",
    dayOfWeek: "monday",
    price: "19:95"
};

var cheesburger = {
    name: "Biggie with cheese",
    size: "xl",
    dayOfWeek: "tuesday",
    price: "19:95"
};

var baconBurger = {
    name: "Biggie with bacon",
    size: "xl",
    dayOfWeek: "wednesday",
    price: "19:95"
};

var baconCheseBurger = {
    name: "Biggie with bacon and cheese",
    size: "xl",
    dayOfWeek: "thursday",
    price: "19:95"
};

var veggieBurger = {
    name: "Veggie Biggie Burger",
    size: "xl",
    dayOfWeek: "friday",
    price: "19:95"
};

var veggieBurgerBacon = {
    name: "Veggie Burger with bacon",
    size: "xl",
    dayOfWeek: "saturday",
    price: "19:95"
};

var veggieBurgerCheese = {
    name: "Veggie Burger with cheese",
    size: "xl",
    dayOfWeek: "sunday",
    price: "19:95"
};

/*

2. create Product objects with constructor notation, 
   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
*/

var sub = new Object();

sub.name = "BigSub";
sub.size = "xl";
sub.price = 15.55;
sub.dayOfTheWeek = "monday"

var sandwish = new Object();

sandwish.name = "BigSub";
sandwish.size = "xl";
sandwish.price = 15.55;
sandwish.dayOfTheWeek = "monday"


/*
3. add 7 drinks to the page using Product.

*/

var drinklist = [];

var drinkMonday = {
    name: "coke",
    size: "large",
    price: 10.99,
    dayOfTheWeek:"monday"
};



var drinktuesday = {
    name: "beer",
    size: "medium",
    price: 10.50,
    dayOfTheWeek: "tuesday"
};

drinklist[0] = drinkMonday;
drinklist[1] = drinktuesday;

for (var i = 0; i < drinklist.length; i++) {
    var drinkElement = document.getElementById("drinksPlace");
    var articleElement = document.createElement("article");
    var fieldsetElement = document.createElement("fieldset");
    var legendElement = document.createElement("legend");
    var h3Element = document.createElement("h3");
    var spanElement = document.createElement("span");
    var imgElement = document.createElement("img");
    var divElement = document.createElement("div");

    legendElement.innerHTML = drinklist[i].dayOfTheWeek + " " + drinklist[i].name;
    h3Element.innerHTML = drinklist[i].name;
    imgElement.setAttribute("src", "Images/Drink.png");
    divElement.setAttribute("id", drinklist[i].dayOfTheWeek);
    divElement.setAttribute("class", "price");
    divElement.innerHTML = drinklist[i].price;


    fieldsetElement.appendChild(legendElement);
    fieldsetElement.appendChild(h3Element);
    spanElement.appendChild(imgElement);
    fieldsetElement.appendChild(spanElement);
    fieldsetElement.appendChild(divElement);
    articleElement.appendChild(fieldsetElement);
    drinkElement.appendChild(articleElement);
}

//var drinkElement = document.getElementById("drinksPlace");
//var articleElement = document.createElement("article");
//var fieldsetElement = document.createElement("fieldset");
//var legendElement = document.createElement("legend");
//var h3Element = document.createElement("h3");
//var spanElement = document.createElement("span");
//var imgElement = document.createElement("img");
//var divElement = document.createElement("div");

//legendElement.innerHTML = drink.dayOfTheWeek + " " + drink.name;
//h3Element.innerHTML = drink.name;
//imgElement.setAttribute("src", "Images/Drink.png");
//divElement.setAttribute("id", drink.dayOfTheWeek);
//divElement.setAttribute("class", "price");
//divElement.innerHTML = drink.price;


//fieldsetElement.appendChild(legendElement);
//fieldsetElement.appendChild(h3Element);
//spanElement.appendChild(imgElement);
//fieldsetElement.appendChild(spanElement);
//fieldsetElement.appendChild(divElement);
//articleElement.appendChild(fieldsetElement);
//drinkElement.appendChild(articleElement);






function addDrinks() {

}

/*
    <article>
        <fieldset>
            <legend>Tuesday Burger</legend>
            <h3>Jum burger</h3>
            <span>No image loaded</span>
            <div class="price" id="tuseday">19.90</div>
        </fieldset>
    </article>
*/

/*
4. add 7 pizzas to the page using Product.
5. add 7 subs to the page using Product.
6. GO to file FixIt.html
*/
//DRINKS
//Subs