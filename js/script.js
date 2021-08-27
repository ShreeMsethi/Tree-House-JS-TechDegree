/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
      quote: "Real knowledge is to know the extent of one's knowledge.",
      source: "Confucius"
  },
  {
      quote: "All know that drop merges into the ocean, but few know that the ocean merges into the drop.",
      source: "Kaibr"
  },
  {
      quote: "He who knows all the answers has not been asked all the questions.",
      source: "Confucius"
  },
  {
      quote: "You are not a drop in the ocean. You are the entire ocean, in a drop.",
      source: "Rumi"

  },
  {
      quote: "Stop acting so small, you are the universe in ecstatic motion.",
      source: "Rumi"
  },
  {
      quote: "It is not so much being all that you dream of becoming as it is un-becoming all that is covering your being.",
      source: "Sepi"
  },
  {
      quote: "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
      source: "Buddha"
  },
  {
      quote: "If you correct your mind, the rest of your life will fall in place.",
      source: "Lao Tzu"
  },
  {
      quote: "Happiness will never come to those who fail to appreciate what they already have.",
      source: "Buddha"
  },
  {
      quote: "All we have to decide is what to do with the time that is given to us.",
      source: "J.R.R Tolkien",
      citation: "The Fellowship of the Ring"
  },
  {   quote: "If you dont choose to create you, world will.",
      source: "Dain Heer"
  },
  {
      quote: "We can't change the direction of the wind, but we can adjust the sail.",
      source: "Indian proverb"
  },
  {
     quote: "Truth alone will endure, all the rest will be swept always in the tide of Time.",
     source: "Mahatma Gandhi",
     year: "Aug 8th, 1942"
  }
]
// console.log(quotes);
console.log(quotes.length);


/***
 * `getRandomQuote` function
***/
// Create the getRandomQuote function
// The getRandomQuote function should create a random number, 
// and use that random number to return a random quote object from the quotes array.



// In the function body, create a variable to store a random number ranging from zero 
// to the index of the last item in the quotes array.
// Lastly, the function should return a random quote object using the random number 
// variable above and bracket notation on the quotes array.


function getRandomQuote(array){
  // 1. Create a variable that generates a random number between zero and the last index in the `quotes` array
  let randomNumber = Math.floor(Math.random() * array.length) + 1;

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and store it in a variable
  let randQ = quotes[randomNumber];

  // 3. Return the variable storing the random quote object
  return randQ
}


// console.log(getRandomQuote(quotes));


/***
 * `printQuote` function
***/

function printQuote(){
  // 1. Create a variable that calls the getRandomQuote() function
  let randomQuote = getRandomQuote(quotes);

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  let quoteString = `<p class="quote"> ${randomQuote.quote} </p>` + `<p class="source"> ${randomQuote.source}`; 

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
  if (quotes.citation === true){
    quoteString + `<span class="citation"> ${randomQuote.citation} </span>`;
  };

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
  if (quotes.year === true){
    quoteString + `<span class="year"> ${randomQuote.year} </span>`;
  };

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
  quoteString += '</p>';

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
  document.getElementById('quote-box').innerHTML = quoteString; 
}

window.setInterval(printQuote(), 500);

function randomColor(){
  var randColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randColor;
  // body.innerHTML = "#" + randColor;
  return randColor
}





/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, randomColor(), false);