Feature: Move tiles
    Tiles should move when the player presses one 
    of the arrow keys on the keyboard

    Scenario: Move up
    Given there are possible moves left
    When player presses the 'up' arrow key
    Then all tiles on the playing field should move up

    Scenario: Move down
    Given there are possible moves left
    When player presses the 'down' arrow key
    Then all tiles on the playing field should move down

    Scenario: Move left
    Given there are possible moves left
    When player presses the 'left' arrow key
    Then all tiles on the playing field should move left

    Scenario: Move right
    Given there are possible moves left
    When player presses the 'right' arrow key
    Then all tiles on the playing field should move right