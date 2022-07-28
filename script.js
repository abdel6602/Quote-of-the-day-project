const quotePlaceholder = document.querySelector(".quote-placeholder");

showQuote();

function showQuote(){
    fetch('https://the-dune-api.herokuapp.com/quotes')
    .then(res => res.json())
    .then(data =>{
        console.log(data[0].quote);
        quotePlaceholder.innerHTML = `<p class="text">${data[0].quote}</p>`
    })

}