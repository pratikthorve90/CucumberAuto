Feature: Stackoverflow Login from datadriven.feature
	As a stackoverflow user , with valid credentials i should be able to successfully login
	
Background: 
	Given  The user is on Stackoverflow homepage
	
Scenario Outline: Validate Stackoverflow login with correct credentials from datadriven.feature1
	When   User click on login home page buttong
	And    User enters correct "<username>" and "<password>"
	And    User clicks on login Button
	Then   User is successfully directed to the homepage
	Examples:
		| username | password |
		| pratik   | pass1    |
		| thorve   | pass2    |
	

