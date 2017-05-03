Feature: Play new game
    The player should be able to start a new game

Scenario: Initial page load
    Given player has navigated to the game page
    Then score should be 0
    And an empty playing field of 4 by 4 tiles should be visible 
    And 2 tiles should be added at random to the playing field

Scenario: Play new game
    When player has clicked 'New game' button
    Then playing field should be cleared
    And score should be reset to 0
    And 2 tiles should be added at random to the playing field

Scenario: Try again
    Given game is over
    When player has clicked 'Try again' button
    Then playing field should be cleared
    And score should be reset to 0
    And 2 tiles should be added at random to the playing field


    