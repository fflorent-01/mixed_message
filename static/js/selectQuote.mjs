// This would probably be better to do this process in the backend. I wanted to explore how I would do it on the client-side.

// This should probably have stayed private.
let quoteData
fetch("../data/data.json")
    .then(res => res.json())
    .then(data => {
        quoteData = data
    })

// Not sure if best option, but need a way to keep "permanency" of choice. I guess ideally some kind of local storage + associated date
const selectedQuote = {}


// Randomly select a quote in a given category and store it.
const selectQuote = (category, quoteObj, selectedQuoteObj) => {
    
    if ( !(category in selectedQuoteObj) ) {
        selectedQuoteObj[category] = quoteObj[category][Math.floor(Math.random() * quoteObj[category].length)]
    } 

    return selectedQuoteObj[category]
}

const onCategoryClick = (event) => {

    // Get the quote info
    const category = event.target.id
    const [citation, author] = selectQuote(category, quoteData, selectedQuote)

    const figure = document.getElementById("today_quote")
    figure.style.display = "block"   

    const blockquote = figure.querySelector("blockquote")
    blockquote.innerHTML = citation

    const figcaption = figure.querySelector("figcaption")
    figcaption.innerHTML = "- " + author

    // Toggle background-color of selected li item
    Object.values(event.target.parentNode.getElementsByTagName('li')).forEach(elem => {
        if (elem === event.target) {
            elem.style.backgroundColor = "lightgreen"
        } else {
            elem.style.backgroundColor = ""
        }
    })
 
}

document.getElementById("animal").addEventListener("click", onCategoryClick)
document.getElementById("feel_good").addEventListener("click", onCategoryClick)