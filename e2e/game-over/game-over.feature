Feature: Game over
    If there are no possible moves left then the game is over

    Scenario: Game over
    Given there are no possible moves left
    When user makes move
    Then game over overlay is shown
    