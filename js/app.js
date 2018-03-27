/*
 * Create a list that holds all of your cards
 */
let beginCards = [
  "fa fa-diamond",
  "fa fa-paper-plane-o",
  "fa fa-anchor",
  "fa fa-bolt",
  "fa fa-cube",
  "fa fa-anchor",
  "fa fa-leaf",
  "fa fa-bicycle",
  "fa fa-diamond",
  "fa fa-bomb",
  "fa fa-leaf",
  "fa fa-bomb",
  "fa fa-bolt",
  "fa fa-bicycle",
  "fa fa-paper-plane-o",
  "fa fa-cube"];
/**
* Creating Variables
*/
const restart = document.querySelector('.restart');
const deck = document.querySelector('.deck');
const spanMoves = document.querySelector('.moves');
let checkClassCard = [];
let cardList = [];
let matches = 0;
let moves = 0;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//Match function
function matched() {
  cardList[0].classList.toggle('open');
  cardList[0].classList.toggle('match');
  cardList[1].classList.toggle('open');
  cardList[1].classList.toggle('match');
  matches ++;
  checkClassCard = [];
  cardList = [];
}
//Unmatched function
function unmatch() {
  cardList[0].classList.toggle('open');
  cardList[0].classList.toggle('show');
  cardList[1].classList.toggle('open');
  cardList[1].classList.toggle('show');
  checkClassCard = [];
  cardList = [];
}
//TODO:*list* "open" cards
function openCards(a) {
  moves ++;
  spanMoves.textContent = moves;
  cardList.push(a);
  let openedCard = a.firstElementChild.className;
  checkClassCard.push(openedCard);
  if(checkClassCard.length > 1) {
    if(checkClassCard[0] === openedCard){
        matched();
    }else{
    //TODO:negative/red effect adding a class and then removing it on dalay
        setTimeout(function() {
          unmatch();
      }, 600);
    }
  }
  if(matches === 8){
    swal({
      title: "You're the Best, you're AWESOME!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
  }
}
//function to flip the cards
function flip() {
  let a = this;
  a.classList.toggle('open');
  a.classList.toggle('show');
  openCards(a);
}
function startGame() {
  //Using shuffle function to Create newDeck
  let cards = shuffle(beginCards);
  //Using for loop to create the new li + i cards and append to desk
  for(let card of cards) {
    deck.removeChild(deck.firstElementChild);
    let li = document.createElement('li');
    li.className = "card";
    let i = document.createElement('i');
    i.className = card;
    li.appendChild(i);
    deck.appendChild(li);
    li.addEventListener('click', flip);
  };
  matches = 0;
  moves = 0;
  spanMoves.textContent = moves;
}
startGame();
//Add the restart button to reset the game!
restart.addEventListener('click', startGame);
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
