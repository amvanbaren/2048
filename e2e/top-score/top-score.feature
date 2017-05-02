Feature: Top score
    Top score is the highest score of all played games
    Top score should not be reset when the player starts a new game

    Scenario: Score exceeds top score
    When the current game score is higher than the top score
    Then the top score value should become the current game score value