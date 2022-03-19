Feature: Check homepage of bakeapp
  Scenario: Check for key elements
    When I scrap "https://bakeapp.pl"
    Then there should be a link "wycen-typeform" to "https://bakeapp.typeform.com/to/VC9cIz" labeled "Wyceń projekt"
    And there should be a paragraph "Tworzymy" inside a "div" element