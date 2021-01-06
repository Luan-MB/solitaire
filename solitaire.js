const VALOR = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const NAIPE = ["♠", "♥", "♦", "♣"]

class Card {
    constructor(valor, naipe) {
        this.valor = valor
        this.naipe = naipe
    }
}

function createDeck() {

    var cards = []

    for (let i=0; i<NAIPE.length; i++) {
        for (let j=0; j<VALOR.length; j++) {
            cards.push(new Card(VALOR[j], NAIPE[i]))
        }
    }
    return cards
}

function shuffleDeck(deck) {

    let aux = new Card

    for (let i=0; i<deck.length; i++) {
        let random = Math.floor(Math.random() * 52)
        aux = deck[i]
        deck[i] = deck[random]
        deck[random] = aux
    }
    return deck
}

function renderTable(deck) {

    for (let i=1; i<=7; i++) {
        tab = document.querySelector("#tab" +i);
        
        for (let j=1; j<=i; j++) {
            newCard = document.createElement('div');
            if (deck[i].naipe == "♥" || deck[i].naipe == "♦") {
                newCard.className = 'card red';
            } else {
                newCard.className = 'card';
            }
            newCard.innerText = deck[i].valor + deck[i].naipe;
            tab.appendChild(newCard)
        }
    }
}

var deck = createDeck();
deck = shuffleDeck(deck);
console.log(deck)
renderTable(deck);