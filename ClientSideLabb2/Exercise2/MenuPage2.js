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

var drinkWednesday = {
    name: "Champagne",
    size: "medium",
    price: 10.50,
    dayOfTheWeek: "wednesday"
};

var drinkthursday = {
    name: "milk",
    size: "medium",
    price: 10.50,
    dayOfTheWeek: "thursday"
};

var drinkfriday = {
    name: "water",
    size: "medium",
    price: 10.50,
    dayOfTheWeek: "friday"
};

var drinksaturday = {
    name: "coffee",
    size: "medium",
    price: 10.50,
    dayOfTheWeek: "saturday"
};

var drinksunday = {
    name: "au de toilet",
    size: "medium",
    price: 10.50,
    dayOfTheWeek: "sunday"
};

drinklist[0] = drinkMonday;
drinklist[1] = drinktuesday;
drinklist[2] = drinkWednesday;
drinklist[3] = drinkthursday;
drinklist[4] = drinkfriday;
drinklist[5] = drinksaturday;
drinklist[6] = drinksunday;

addFoodToPage(drinklist, "Images/Drink.png", "drinksPlace");

function addFoodToPage(listOfFood, imgPath, targetHtmlElement) {

    for (var i = 0; i < listOfFood.length; i++) {

        var targetElement = document.getElementById(targetHtmlElement);
        var articleElement = document.createElement("article");
        var fieldsetElement = document.createElement("fieldset");
        var legendElement = document.createElement("legend");
        var h3Element = document.createElement("h3");
        var spanElement = document.createElement("span");
        var imgElement = document.createElement("img");
        var divElement = document.createElement("div");

        legendElement.innerHTML = listOfFood[i].dayOfTheWeek + " " + listOfFood[i].name;
        h3Element.innerHTML = listOfFood[i].name;
        imgElement.setAttribute("src", imgPath);
        divElement.setAttribute("id", listOfFood[i].dayOfTheWeek);
        divElement.setAttribute("class", "price");
        divElement.innerHTML = listOfFood[i].price;

        fieldsetElement.appendChild(legendElement);
        fieldsetElement.appendChild(h3Element);
        spanElement.appendChild(imgElement);
        fieldsetElement.appendChild(spanElement);
        fieldsetElement.appendChild(divElement);
        articleElement.appendChild(fieldsetElement);
        targetElement.appendChild(articleElement);
    }
}



/*
4. add 7 pizzas to the page using Product.

*/

function product(name, size, price, dayOfTheWeek) {
    this.name = name; 
    this.size = size; 
    this.price = price;
    this.dayOfTheWeek = dayOfTheWeek;
}




var pizzaList = [
    new product( "Vesuvio", "Big", 5.55, "monday" ),
    new product("Calzone", "Big", 5.55, "tuesday"),
    new product("Msushi", "Big", 5.55, "wednesday"),
    new product("Hawaii", "Big", 5.55, "Thursday"),
    new product("Colonial", "Big", 5.55, "friday"),
    new product("HIF special", "Big", 5.55, "saturday"),
    new product("Pajas", "Big", 5.55, "sunday")

];

var pizzaList = [
    new product("Vesuvio", "Big", 5.55, "monday"),
    new product("Calzone", "Big", 5.55, "tuesday"),
    new product("Msushi", "Big", 5.55, "wednesday"),
    new product("Hawaii", "Big", 5.55, "Thursday"),
    new product("Colonial", "Big", 5.55, "friday"),
    new product("HIF special", "Big", 5.55, "saturday"),
    new product("Pajas", "Big", 5.55, "sunday")

];

addFoodToPage(pizzaList, "Images/Pizza.png", "pizzaPlace");

/*
5. add 7 subs to the page using Product.
*/

var subList = [
    new product("Vesuvio", "Big", 5.55, "monday"),
    new product("Calzone", "Big", 5.55, "tuesday"),
    new product("Msushi", "Big", 5.55, "wednesday"),
    new product("Hawaii", "Big", 5.55, "Thursday"),
    new product("Colonial", "Big", 5.55, "friday"),
    new product("HIF special", "Big", 5.55, "saturday"),
    new product("Pajas", "Big", 5.55, "sunday")

];

addFoodToPage(subList, "Images/Subs.png", "subsPlace");

var burgerList = [
    new product("Hamburger", "Big", 5.55, "monday"),
    new product("cheeseburger", "Big", 5.55, "tuesday"),
    new product("BaconBurger", "Big", 5.55, "wednesday"),
    new product("HawaiiBurger", "Big", 5.55, "Thursday"),
    new product("veggie", "Big", 5.55, "friday"),
    new product("special", "Big", 5.55, "saturday"),
    new product("Pajas burger", "Big", 5.55, "sunday")

];

addFoodToPage(burgerList, "Images/Hamburger.png", "burgersPlace");

/*

6. GO to file FixIt.html
*/
//DRINKS
//Subs