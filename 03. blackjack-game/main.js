
let cards = [];
let sum = 0
let isAlive = false;
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " :$" + player.chips


function getrandomCard() {
    let number = Math.floor(Math.random() * 13) + 1;
    console.log(number);

    if (number === 1) {
        return 11;
    }
    else if (number > 10) {
        return 10;
    } else {
        return number;
    }


}

function startGame() {

    isAlive = true;
    let firstCard = getrandomCard();
    let secondCard = getrandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";

    }
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {

        message = "Whoo!You're got a blackjack";
        hasBlackJack = true;
    } else {
        message = "You're out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
    console.log(message);
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    if (isAlive === true && hasBlackJack === false) {
        let card = getrandomCard();
        sum = sum + card;
        cards.push(card);
        renderGame();
    }

}
