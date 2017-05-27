Feature: Play new game
    The player should be able to start a new game

Scenario: Initial page load
    Given player has navigated to the game page
    Then score should be 0
    And best score should be 0
    And an empty playing field of 4 by 4 tiles should be visible 
    And 2 tiles should be added at random to the playing field

Scenario: Play new game
    Given player made a move
    Given best score is 1200
    When player has clicked 'New game' button
    Then score should be 0
    And best score should be 1200
    And an empty playing field of 4 by 4 tiles should be visible 
    And 2 tiles should be added at random to the playing field

Scenario: Try again
    Given game is over
    Given best score is 1200
    When player has clicked 'Try again' button
    Then score should be 0
    And best score should be 1200
    And an empty playing field of 4 by 4 tiles should be visible 
    And 2 tiles should be added at random to the playing field


    