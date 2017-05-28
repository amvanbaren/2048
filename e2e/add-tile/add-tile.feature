Feature: Add tile
    A new tile is added at random to an empty tile on the playing field
    so that the new tile can be used to create higher value tiles

    Scenario: Add tile
    Given the playing field is empty
    When a player move has ended
    Then 1 tile should be added at random to the playing field
    And the new tile's value is either 2 or 4