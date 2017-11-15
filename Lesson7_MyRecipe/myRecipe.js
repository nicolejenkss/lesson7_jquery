/*
    Program Name: Recipe Display Application
    Author: Nicole Jenks
    Date: November 14, 2017
    Filename: myRecipe.js
*/

/* global $ */

//displays the next element after the current target
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display

//attach event listeners to h3 elements to invoke display function when clicked 

    $("h3").click(display);
    

$("ul").children();

$("h3").next().clone().appendTo("article");

$("h1").after("<center>Best Cookies Ever!!</center>")