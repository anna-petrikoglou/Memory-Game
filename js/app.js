/*
 * Create a list that holds all of your cards
 */

const cards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle",
               "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


const fragment = document.createDocumentFragment();

for (let i = 0; i < cards.length; i++) {
    const newElement = document.createElement('li');
    newElement.innerHTML = '<i class="' + cards[i] + '"></i>';
    newElement.classList.add('card');

    fragment.appendChild(newElement);
}

const panel = document.querySelector('.deck');
while (panel.firstChild) {                  //https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    panel.removeChild(panel.firstChild);
}
panel.appendChild(fragment);

const restart = document.querySelector(".restart");
restart.addEventListener('click', closeAllAndShuffle);

/*
const startingTime = performance.now();
const endingTime = performance.now();
const time = (endingTime - startingTime) * 1000;
*/

function closeAllAndShuffle() {
  const pieces = document.querySelectorAll('.card');
  for (let i = 0; i <= pieces.length; i++) {
    let piece = pieces[i];
    piece.className = 'card';
  }
  shuffle(cards);
}

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

const playCards = document.getElementsByClassName('card');

for (let i = 0; i < playCards.length; i++) {
  let playCard = playCards[i];
  playCard.addEventListener('click', displayCard);
}

  function displayCard(e) {
    let playCard = e.target;
    playCard.classList.add('open');
    playCard.classList.add('show');
}

