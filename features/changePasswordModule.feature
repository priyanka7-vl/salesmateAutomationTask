Feature: salesmate change Password Module
         To change password with appropriate validations

# execute login
Scenario: Entering valid credentials in salesmate Login page
   Given I am on the salesmate login page
   When I enter the valid credentials it should be logged in
   Then the browser title should be matched with the page opened
   
# go to my account
Scenario: Switching to MyAccount page
   When I clicked on MyAccount button
   Then MyAccount page should get opened