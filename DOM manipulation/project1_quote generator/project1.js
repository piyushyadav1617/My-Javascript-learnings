//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [

    {
        quote: "Life isn't about getting and having, it's about giving and being.", person: "Kevin Kruse"
    },
    {
        quote: "Whatever the mind of man can conceive and believe, it can achieve.", person: "Napoleon Hill"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.", person: "Albert Einstein"
    },
    
    {
        quote: "I attribute my success to this: I never gave or took any excuse.", person: "Florence Nightingale"
    },
    {
        quote: "You miss 100% of the shots you don't take.", "author": "Wayne Gretzky"
    },
    
    {
        quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", person: "Amelia Earhart"
    },
    {
        quote: "Every strike brings me closer to the next home run.", person: "Babe Ruth"
    },
    {
        quote: "Definiteness of purpose is the starting point of all achievement.", person: "W. Clement Stone"
    }
    
];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})