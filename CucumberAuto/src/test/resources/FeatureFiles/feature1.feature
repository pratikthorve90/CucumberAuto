Feature: Stackoverflow Login from feature1.feature
	As a stackoverflow user , with valid credentials i should be able to successfully login
	
Background: 
	Given  The user is on Stackoverflow homepage
	
Scenario: Validate Stackoverflow login with correct credentials from feature1.feature1
	When   User click on login home page buttong
	And    User enters correct username and password
	And    User clicks on login Button
	Then   User is successfully directed to the homepage

Scenario: Validate Stackoverflow login with incorrect credentials from feature1.feature2
	When   User click on login home page buttong
	And    User enters incorrect username and password
	And    User clicks on login Button
	Then   User is displayed with error on login page