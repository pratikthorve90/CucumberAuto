Feature: Stackoverflow Login from hooks.feature
	As a stackoverflow user , with valid credentials i should be able to successfully login 
	
	
Scenario: Validate Stackoverflow login with correct credentials from hooks.feature1
	When   User click on login home page buttong
	And    User enters correct username and password
	And    User clicks on login Button
	Then   User is successfully directed to the homepage

Scenario: Validate Stackoverflow login with incorrect credentials from hooks.feature2
	When   User click on login home page buttong
	And    User enters incorrect username and password
	And    User clicks on login Button
	Then   User is displayed with error on login page