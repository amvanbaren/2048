Feature: Merge tiles
    Tiles should be merged when two tiles with the same 
    value collide during a move

    Scenario: Merge tiles
    Given the player started a move
    When two tiles with the same value collide during a move
    Then the two tiles should be merged into one tile
    And the merged tile value should be the sum of the two collided tile values
    And the score should be incremented by the value of the merged tile 

    