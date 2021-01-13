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
        let random = Math.floor(Math.random() * deck.length)
        aux = deck[i]
        deck[i] = deck[random]
        deck[random] = aux
    }
    return deck;
}

function fillPile(pileSize,deck) {

    let pile = [];
    
    for (let i=0; i<pileSize; i++) {
        card = deck.pop();
        pile.push(card)
    }
    return pile;
}

function renderPile(pile,pileName,flipLast) {

    var tab = document.querySelector("#"+pileName);
    
    if (pile.length > 0) {

        for (let i=0; i<pile.length; i++) {

        newCard = document.createElement('div');
        newCard.classList.add('card');
            if (isRed(pile[i])) {
                newCard.classList.add('red');
            }
        tab.appendChild(newCard);
        }
        
        if (flipLast == true) {
            lastChild = tab.lastElementChild;
            lastChild.innerText = pile[pile.length-1].nome;
            lastChild.className += " flipped";
        } 
    } else {
        tab.innerHTML = "";
    }
}

// Função que inicia as pilhas de cartas de forma padrão
function startGame(deck) {

    tab1 = fillPile(1,deck);
    renderPile(tab1,"tab1",true);
    tab2 = fillPile(2,deck);
    renderPile(tab2,"tab2",true);
    tab3 = fillPile(3,deck);
    renderPile(tab3,"tab3",true);
    tab4 = fillPile(4,deck);
    renderPile(tab4,"tab4",true);
    tab5 = fillPile(5,deck);
    renderPile(tab5,"tab5",true);
    tab6 = fillPile(6,deck);
    renderPile(tab6,"tab6",true);
    tab7 = fillPile(7,deck);
    renderPile(tab7,"tab7",true);
    stock = fillPile(deck.length,deck);
    renderPile(stock,"stock",false);
}

function isRed(card) {
    
    if (card.naipe == "♥" || card.naipe == "♦") {
        return true;
    }
    return false;
}

var deck = createDeck();
deck = shuffleDeck(deck);
startGame(deck);


$('#stock').click(function() {
    if (stock.length > 0) {
        var card = stock.pop();
        waste.push(card);
    }

    else {
        stock = fillPile(waste.length,waste);
        stock = shuffleDeck(stock);
    }
    renderPile(stock,"stock",false);
    renderPile(waste,"waste",true);
});
