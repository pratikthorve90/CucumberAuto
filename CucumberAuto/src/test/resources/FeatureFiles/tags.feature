
@Important
Feature: Stackoverflow Login from tags.feature
	As a stackoverflow user , with valid credentials i should be able to successfully login
	
Background: 
	Given  The user is on Stackoverflow homepage

@Regression	
Scenario: Validate Stackoverflow login with correct credentials from tags.feature1
	When   User click on login home page buttong
	And    User enters correct username and password
	And    User clicks on login Button
	Then   User is successfully directed to the homepage

@Smoke
Scenario: Validate Stackoverflow login with incorrect credentials from tags.feature2
	When   User click on login home page buttong
	And    User enters incorrect username and password
	And    User clicks on login Button
	Then   User is displayed with error on login page

@Smoke @Regression	
Scenario: Validate Stackoverflow login with incorrect credentials both smoke and regression
	When   User click on login home page buttong
	And    User enters incorrect username and password
	And    User clicks on login Button
	Then   User is displayed with error on login page