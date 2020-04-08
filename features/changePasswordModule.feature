Feature: The User is able to change his salesmate login password
Description: To change password with appropriate validations

# 1.execute login
Scenario: Entering valid credentials in salesmate Login page
   Given I am on the salesmate login page
   When I enter the valid credentials it should be logged in
   Then Browser title should be matched with the page opened

# 2.go to my account
Scenario: Switching to MyAccount page
   When I clicked on MyAccount button
   Then MyAccount page should get opened

# 3.go to change password page
Scenario: Switching to change password page
   When I click on Security button
   Then Change password page should be opened

# 4.now change old password and enter new one 
 Scenario: Changing old password for salesmate account
    When I enter valid old,new and re-type password and click on update button
    Then Salesmate login password changed and succesful message displayed on change password page
   
# 5.sign out from salesmate
Scenario: User logouts from salesmate and salesmate login page should be opened
    When User clicks on profile picture and then on signout button
    Then Salesmate login page should be opened

# 6.do salesmate login with old password
Scenario: User login with old password
   When User enter valid email and old password
   Then Invalid password message shoulb be displayed

# 7.do salesmate login with new password
Scenario: User login with new password
   When User enter valid email and new password
   Then Default Dashboard should be opened
