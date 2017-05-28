Feature: Game won
    If the player manages to create a tile with value 2048
    then the player has won the game

    Scenario: Game won
    Given there are 2 tiles with value 1024 present on the playing field
    When the player merges the 2 1024 tiles
    Then game won overlay is shown