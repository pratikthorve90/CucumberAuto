Feature: Stackoverflow Login  (Paramaterzied TC) from featureParameterized.feature
	As a stackoverflow user , with valid credentials i should be able to successfully login
	
Scenario: Validate Stackoverflow login with correct credentials (Paramaterzied TC) from featureParameterized.feature1
	Given  The user is on Stackoverflow homepage
	When   User click on login home page buttong
	And    User enters username "pratikthorve90@gmail.com" and password "99609960asd"
	And    User clicks on login Button
	Then   User is successfully directed to the homepage

Scenario: Validate Stackoverflow login with incorrect credentials  (Paramaterzied TC) from featureParameterized.feature2
	Given  The user is on Stackoverflow homepage
	When   User click on login home page buttong
	And    User enters username "pratik@gmail.com" and password "qwe"
	And    User clicks on login Button
	Then   User is displayed with error on login page