let quoteData

fetch("../data/data.json")
    .then(res => res.json())
    .then(data => {
        quoteData = data
    })

const selectedQuote = {}

const selectQuote = (event) => {
    const category = event.target.id
    const quotesInCategory = quoteData[category]

    // Quote Selection
    if ( !(category in selectedQuote) ) {
        selectedQuote[category] = quotesInCategory[Math.floor(Math.random() * quotesInCategory.length)]
    }
    
    // Set the quote to <blockquote>
    
    const [citation, author] = selectedQuote[category]
    console.log(citation, author)
    const figure = document.getElementById("today_quote")
    const blockquote = figure.querySelector("blockquote")
    const figcaption = figure.querySelector("figcaption")

    blockquote.innerHTML = citation
    figcaption.innerHTML = "- " + author

    figure.style.display = "block"

    // Toggle background-color of selected li item
    const liList = event.target.parentNode.getElementsByTagName('li')
    Object.values(liList).forEach(elem => {
        if (elem === event.target) {
            elem.style.backgroundColor = "lightgreen"
        } else {
            elem.style.backgroundColor = ""
        }
    })
 
}

document.getElementById("animal").addEventListener("click", selectQuote)
document.getElementById("feel_good").addEventListener("click", selectQuote)