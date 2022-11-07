Feature: Login Page Elements

  Scenario Outline: TO check if all the elements in login page are displayed as expected.

    Given I am on the login page
    Then I check if all the elements in the login page are displayed as expected

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
