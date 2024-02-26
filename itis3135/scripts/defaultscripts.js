window.onload = function() {
    displayDateTime();
};

function displayDateTime() {
    var now = new Date();
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
    var datetimeElement = document.getElementById("datetime");
    datetimeElement.textContent = "Today is " + now.toLocaleTimeString() + " on " + 
                                   dayOfWeek[now.getDay()] + ", " + 
                                   now.getDate() + " " + 
                                   monthNames[now.getMonth()] + ", " + 
                                   now.getFullYear();
}

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var userName = document.getElementById("userName").value;
    var mood = document.getElementById("mood").value;
    var favoriteNumber = Math.abs(Math.round(parseFloat(document.getElementById("favoriteNumber").value)));
    greetUser(userName, mood);
    alertFavoritePolygon(favoriteNumber);

});

function greetUser(name, mood) {
    var greetingElement = document.getElementById("greeting");
    greetingElement.textContent = "The Radiant Capybara welcomes you, " + name + "! We're glad you are doing " + mood + "!";
}

function alertFavoritePolygon(number) {
    var polygons = ["", "digon", "triangle", "quadrilateral", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
    if (number >= 0 && number <= 10) {
        alert("Your favorite polygon is: " + polygons[number]);
    } else {
        alert("Please enter a number between 0 and 10.");
    }
}

function getPolygon() {
    var number = Math.abs(Math.round(parseFloat(document.getElementById("favoriteNumber").value)));
    alertFavoritePolygon(number);
}

function advertiseCapybaraRenting() {
    alert("Rent a capybara today! They're cuddly, friendly, and great companions!");
}

function whatsMyCapybaraName() {
    var name = document.getElementById("userName").value;
    alert("Your name is Capy" + name + "!");
}

function howManyCapybaraRent(number) {
    var number = document.getElementById("favoriteNumber").value;
    alert("You should rent " + number + " Capybara(s)");
}

function capybaraFeelings(mood) {
    var mood = document.getElementById("mood").value;
    alert("The Capybaras are also feeling " + mood);
}

