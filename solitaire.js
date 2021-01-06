const VALOR = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const NAIPE = ["♠", "♥", "♦", "♣"]

var stock = [];
var waste = [];
var cubs = [];
var diamonds = [];
var hearts = [];
var spades = [];
var tab1 = [];
var tab2 = [];
var tab3 = [];
var tab4 = [];
var tab5 = [];
var tab6 = [];
var tab7 = [];

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

function renderPile(pile) {

    
    var tab = document.querySelector("#tab6");

    for (let i=0; i<pile.length; i++) {

        newCard = document.createElement('div');
        if (pile[i].naipe == "♥" || pile[i].naipe == "♦") {
            newCard.className = 'card red';
        } else {
            newCard.className = 'card';
        }
        newCard.innerText = pile[i].valor + pile[i].naipe;
        tab.appendChild(newCard);
    }
    
    lastChild = tab.lastElementChild;
    lastChild.className += "flipped";
}

function fillPile(size,deck) {

    let pile = [];
    
    for (let i=0; i<size; i++) {
        card = deck.pop();
        pile.push(card)
    }
    return pile;
}

function startGame(deck) {

    tab1 = fillPile(1,deck);
    tab2 = fillPile(2,deck);
    tab3 = fillPile(3,deck);
    tab4 = fillPile(4,deck);
    tab5 = fillPile(5,deck);
    tab6 = fillPile(6,deck);
    console.log(tab6);
    renderPile(tab6);
    tab7 = fillPile(7,deck);
    stock = deck;
}

var deck = createDeck();
deck = shuffleDeck(deck);
startGame(deck);

