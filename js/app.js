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
const firstStar = document.querySelector('#first-star');
const secondStar = document.querySelector('#second-star');
const thirdStar = document.querySelector('#third-star');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
let checkClassCard = [];
let cardList = [];
let matches = 0;
let moves = 0;
let starRating = 0;
let seconds = 0;
let minutes = 0;
let firstClick = true;
let time;
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
//function to flip the cards
function flip() {
  let a = this;
  a.classList.toggle('open');
  a.classList.toggle('show');
  if(firstClick) {
    timer();
    firstClick = false;
  }
  openCards(a);
}
//function to set moves and stars
function moveStars() {
//adding and writing the move
  moves ++;
  spanMoves.textContent = moves;
  //check if the move is = to n, then changes the star to white and sets the n to a variable
  if(moves === 25){
    thirdStar.classList.toggle('fa-star');
    thirdStar.classList.toggle('fa-star-o');
    starRating = 2;
  }else if (moves === 30) {
    secondStar.classList.toggle('fa-star');
    secondStar.classList.toggle('fa-star-o');
    starRating = 1;
  }else if (moves === 36){
    firstStar.classList.toggle('fa-star');
    firstStar.classList.toggle('fa-star-o');
    starRating = 0;
  }
}
//Match function
function matched() {
  //toggling the card for the animation and the match
  cardList[0].classList.toggle('open');
  cardList[0].classList.toggle('match');
  cardList[1].classList.toggle('open');
  cardList[1].classList.toggle('match');
  cardList[0].classList.toggle('animated');
  cardList[0].classList.toggle('rubberBand');
  cardList[1].classList.toggle('animated');
  cardList[1].classList.toggle('rubberBand');
  //empties the lists
  checkClassCard = [];
  cardList = [];
}
//Effect when the cards are matched
function matchedEffect() {
  cardList[0].classList.toggle('animated');
  cardList[0].classList.toggle('rubberBand');
  cardList[1].classList.toggle('animated');
  cardList[1].classList.toggle('rubberBand');
}
//Unmatched function
function unmatch() {
  cardList[0].classList.toggle('open');
  cardList[0].classList.toggle('show');
  cardList[1].classList.toggle('open');
  cardList[1].classList.toggle('show');
  cardList[0].classList.toggle('unmatch');
  cardList[1].classList.toggle('unmatch');
  cardList[0].classList.toggle('animated');
  cardList[1].classList.toggle('animated');
  cardList[0].classList.toggle('tada');
  cardList[1].classList.toggle('tada');
  checkClassCard = [];
  cardList = [];
}
//Effect when the cards are not matched
function unMatchedEffect() {
  cardList[0].classList.toggle('unmatch');
  cardList[1].classList.toggle('unmatch');
  cardList[0].classList.toggle('animated');
  cardList[0].classList.toggle('tada');
  cardList[1].classList.toggle('animated');
  cardList[1].classList.toggle('tada');
}
//Timer function
function timer() {
  time = setInterval(function() {
      if(seconds < 60){
        sec.textContent = seconds;
        seconds ++;
      }else if(seconds === 60) {
        seconds = 0;
        minutes ++;
        seconds ++;
        sec.textContent = seconds;
        min.textContent = minutes;
      }
    },1000);
}
//Add modal for the end Game Congrats
function Won() {
  if(matches == 8){
    swal({
      title: "You WON, you're the BEST!",
      text: moves + " moves, " + starRating + " star/s! Your time: " + minutes + "m " + seconds + "s",
      icon: "success",
      button: "Like it? Play Again!",
    });
    startGame();
  }
}
//*list* "open" cards
function openCards(a) {
  //add card to the list
  cardList.push(a);
  //read class
  let openedCard = a.firstElementChild.className;
  //check classes and match or unmatch
  checkClassCard.push(openedCard);
  if(checkClassCard.length > 1) {
    if(checkClassCard[0] === openedCard){
      matchedEffect();
      matches ++;
      setTimeout(function() {
        matched();
      }, 500);
    }else{
      unMatchedEffect();
      setTimeout(function() {
          unmatch();
      }, 500);
    }
  }
  moveStars();
  Won();
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
  moves = 0;
  spanMoves.textContent = moves;
  firstStar.classList.remove('fa-star-o');
  firstStar.classList.add('fa-star');
  secondStar.classList.remove('fa-star-o');
  secondStar.classList.add('fa-star');
  thirdStar.classList.remove('fa-star-o');
  thirdStar.classList.add('fa-star');
  matches = 0;
  seconds = 0;
  minutes = 0;
  firstClick = true;
  clearInterval(time);
  sec.textContent = seconds;
  min.textContent = minutes;
}
startGame();
//Add the restart button to reset the game!
restart.addEventListener('click', startGame);
