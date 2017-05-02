Feature: Game over
    If there are no possible moves left then the game is over

    Scenario: Game over
    Given there are no possible moves left
    Then playing field should become greyed out
    And on top of the playing field 'Game over!' should be displayed
    And below the 'Game over!' text a 'Try again' button should be displayed
    