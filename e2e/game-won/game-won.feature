Feature: Game won
    If the player manages to create a tile with value 2048
    then the player has won the game

    Scenario: Game won
    When there is a tile with value 2048 present on the playing field
    Then a yellow overlay is displayed on top of the playing field
    And on top of the playing field 'You win!' should be displayed
    And below the 'You win!' text a 'New game' button should be displayed