const generateQuoteBtn = document.getElementById('quoteBtn')
const quoteOutput = document.getElementById('quoteOutput')
const authorOutput = document.getElementById('authorOutput')

console.log(generateQuoteBtn);
console.log(quoteOutput);
console.log(authorOutput);

generateQuoteBtn.addEventListener("click",generateQuote)

const arrayOfQuotes = [
    {
        author:"Alexander the Great",
        quote :"There is nothing impossible to they who will try.",
    },
    
    {
        author:"Angela Bassett" ,
        quote:"Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.", 

    },
    {
        author:"Maya Angelou",
        quote:"Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
    },
    {
        author:"Steve Furtick",
        quote:"The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else’s highlight reel.",
    },
    {
        author:"Jay-Z",
        quote:"I will not lose, for even in defeat, there’s a valuable lesson learned, so it evens up for me.",
    },
];

function generateQuote() {

   let random = Number.parseInt(Math.random() * arrayOfQuotes. length +1)

   quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`
   authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`
}
