Feature: Add tile
    A new tile is added at random to an empty tile on the playing field
    so that the new tile can be used to create higher value tiles

    Scenario: Add tile
    Given there is an empty tile on the playing field
    When a player move has ended
    Then a new tile is added at random to an empty tile on the playing field
    And 80% of the time the new tile's value is 2
    And 20% of the time the new tile's value is 4