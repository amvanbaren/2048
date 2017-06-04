Feature: Merge tiles
    Tiles should be merged when two tiles with the same 
    value collide during a move

    Scenario: Merge tiles
    Given a playingfield: [[0, 0, 0, 0],[256, 0, 256, 0],[0, 0, 0, 0],[0, 0, 0, 0]]
    Given the score is 0
    Given the player moves right
    Then the value of the merged tile at index 7 should be 512
    And there shouldn't be any tiles with value 256 on the playingfield
    And the score should be incremented by 512 as well

    Scenario: Merge only once (right)
    Given a playingfield: [[0, 0, 0, 0],[256, 256, 512, 1024],[0, 0, 0, 0],[0, 0, 0, 0]]
    Given the score is 0
    Given the player moves right
    Then the original 512 tile at index 6 shouldn't be merged
    And the original 1024 tile at index 7 shouldn't be merged
    And the value of the merged tile at index 5 should be 512
    And there shouldn't be any tiles with value 256 on the playingfield
    And the score should be incremented by 512 as well

    Scenario: Merge only once (left)
    Given a playingfield: [[0, 0, 0, 0],[1024, 512, 256, 256],[0, 0, 0, 0],[0, 0, 0, 0]]
    Given the score is 0
    Given the player moves left
    Then the original 1024 tile at index 4 shouldn't be merged
    And the original 512 tile at index 5 shouldn't be merged
    And the value of the merged tile at index 6 should be 512
    And there shouldn't be any tiles with value 256 on the playingfield
    And the score should be incremented by 512 as well

    Scenario: Merge only once (up)
    Given a playingfield: [[0, 1024, 0, 0],[0, 512, 0, 0],[0, 256, 0, 0],[0, 256, 0, 0]]
    Given the score is 0
    Given the player moves up
    Then the original 1024 tile at index 1 shouldn't be merged
    And the original 512 tile at index 5 shouldn't be merged
    And the value of the merged tile at index 9 should be 512
    And there shouldn't be any tiles with value 256 on the playingfield
    And the score should be incremented by 512 as well

    Scenario: Merge only once (down)
    Given a playingfield: [[0, 256, 0, 0],[0, 256, 0, 0],[0, 512, 0, 0],[0, 1024, 0, 0]]
    Given the score is 0
    Given the player moves down
    Then the original 512 tile at index 9 shouldn't be merged
    And the original 1024 tile at index 13 shouldn't be merged
    And the value of the merged tile at index 5 should be 512
    And there shouldn't be any tiles with value 256 on the playingfield
    And the score should be incremented by 512 as well

    