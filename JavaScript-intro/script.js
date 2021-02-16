// Skapa två funktioner som båda tar en paramater med ett namn
// och sen skriver ut till konsolen "Hej *namnet".
// En funktion ska använda nyckelordet function och den andra 
// Ska vara en så kallad arrow function.

function erik(namn) {
    console.log('Hej ' + namn)
}
const erik2 = (namn) => {
    console.log('Hej ' + namn)
}

// Skapa två funktioner som båda tar en paramater med en lista (array) på namn.
// Logga ut varje namn till konsolen som inte börjar med bokstaven "A".
// En funktion ska använda nyckelordet function och den andra 
// Ska vara en så kallad arrow function.
const list = ['Anna', 'Pelle', 'Linus']

const writeNames = (nameList) => {
    nameList.forEach(namn => {
        if (!namn.startsWith('A')) {
            console.log(namn)
        } 
    });
}

// Lägg till en div i HTML-filen med valfritt Id.
// Hämta upp diven i en JavaScript-funktion och lägg till
// en <p>-tag med texten "Det funkar!"

const addPTag = () => {
    const div = document.getElementById('ett-id')
    const paragraph = document.createElement('p')
    //const textNode = document.createTextNode('Det funkar!')
    //paragraph.appendChild(textNode)
    paragraph.innerHTML = 'Det funkar!'
    div.appendChild(paragraph)
}

// Skapa upp ett enkelt formulär i HTML-filen som tar två inputs:
// Förnamn och efternamn, samt en submit-knapp.
// Logga ut förnamn och efternamn till konsolen när man klickar på 
// skicka.

// Gör ett rest-anrop mot GET https://jsonplaceholder.typicode.com/comments/1
// ta emot svaret och skriv ut namn, email och body i en div.
const getComments = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/comments/'+ id)
    .then((response) => { return response.json() })
    .then((json) => {
        return json
    })
}

const doABunchOfThings = (json) => {
    getComments(1).then((json) => {
        console.log(json)
    })
}

doABunchOfThings()

// Skapa en knapp med texten "Click me!"
// Skapa en CSS-klass där du ändrar färg på knappen
// Lägg på CSS-klassen med hjälp av JavaScript

