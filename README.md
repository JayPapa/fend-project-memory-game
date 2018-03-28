# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Memory Game](#memorygame)
* [Contributing](#contributing)

## Instructions

An HTML and a Css File were provided at the beginning as starter basic version of the Memory Game.

## Memory memory

The Memory Game is a card game with a deck of 16 cards at the center which are shuffled with a provided function.
First of all was created the flip function and an Event Listener to call this one.
The flip function shows the cards and then calls the openCards function to check if there was a card clicked before with the same className.
There is where two types of functions maybe called:
 - The matched functions wich count the matched openCard
 - The unmatched functions which makes the user play again and try with a different card

### Congratulations Popup

When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.

### Stars

The game displays a star rating (from 1-3) that reflects the player's performance. At the beginning of a game, it should display 3 stars. After some number of moves, it should change to a 2 star rating. After a few more moves, it should change to a 1 star rating.

The number of moves needed to change the rating is up to you, but it should happen at some point.

### Timer

When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.

### Restart Button

A restart button allows the player to reset the game board, the timer, and the star rating.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
