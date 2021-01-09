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
    constructor(valor, naipe, nome) {
        this.valor = valor
        this.naipe = naipe
        this.nome = nome
    }
}

function createDeck() {

    var cards = []

    for (let i=0; i<NAIPE.length; i++) {
        for (let j=0; j<VALOR.length; j++) {
            cards.push(new Card(VALOR[j], NAIPE[i], VALOR[j] + NAIPE[i]))
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

function renderTab(pile) {

    
    var tab = document.querySelector("#tab"+pile.length);

    for (let i=0; i<pile.length; i++) {

        newCard = document.createElement('div');
        if (pile[i].naipe == "♥" || pile[i].naipe == "♦") {
            newCard.className = 'card red';
        } else {
            newCard.className = 'card';
        }
        tab.appendChild(newCard);
    }
    lastChild = tab.lastElementChild;
    lastChild.innerText = pile[pile.length-1].valor + pile[pile.length-1].naipe;
    lastChild.className += " flipped";
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
    renderTab(tab1);
    tab2 = fillPile(2,deck);
    renderTab(tab2);
    tab3 = fillPile(3,deck);
    renderTab(tab3);
    tab4 = fillPile(4,deck);
    renderTab(tab4);
    tab5 = fillPile(5,deck);
    renderTab(tab5);
    tab6 = fillPile(6,deck);
    renderTab(tab6);
    tab7 = fillPile(7,deck);
    renderTab(tab7);
    stock = fillPile(deck.length,deck)
}

var deck = createDeck();
deck = shuffleDeck(deck);
startGame(deck);
console.log(tab6);


$('.card').click(function() {
    parent = $(this).parent().attr('id');
    card = $(this).html();
    console.log(parent);
    console.log(card);
})

//const cards = document.querySelectorAll(".lower .card.flipped");
//console.log(cards);
//cards.forEach(cards => cards.addEventListener('click', clickFunc));
//
//function selectCard(e) {
//    value = e;
//    value.style.border = 'yellow 2px solid';
//}

//function clickFunc(e) {
//   var value = e;
//    console.log(value);
//}