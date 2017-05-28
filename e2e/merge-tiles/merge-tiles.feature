Feature: Merge tiles
    Tiles should be merged when two tiles with the same 
    value collide during a move

    Scenario: Merge tiles
    Given a playingfield with 2 tiles of value 256 on the same row
    Given the player moves right
    Then the 2 tiles should be merged into 1 tile
    And the merged tile value should be 512
    And the score should be incremented by 512 as well

    