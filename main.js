var quotes = [
    {q: "“Be yourself; everyone else is already taken.”" , author: "― Oscar Wilde"},
    {q: "“So many books, so little time.”" , author: "― Frank Zappa"},
    {q: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" , author: "― Albert Einstein"},
    {q: "“A room without books is like a body without a soul.”" , author: "― Marcus Tullius Cicero"},
    {q: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" , author: "― Bernard M. Baruch"},
    {q: "“You only live once, but if you do it right, once is enough.”" , author: "― Mae West"},
    {q: "“Be the change that you wish to see in the world.”" , author: "― Mahatma Gandhi"}
]

var lastIndex = -1;

function generateQuote(){
    var randomIndex

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex)

    lastIndex=randomIndex
   
    document.getElementById("quote").innerHTML= quotes[randomIndex].q
    document.getElementById("author").innerHTML= quotes[randomIndex].author
}