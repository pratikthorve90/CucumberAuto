Feature: Stackoverflow Login (With data Table) from datatable.feature
	As a stackoverflow user , with valid credentials i should be able to successfully login

	
Scenario: Validate Stackoverflow login with correct credentials from datatable.feature1
	Given  The user is on Stackoverflow homepage
	When   User click on login home page buttong
	And    User enters following username and password
				 | username | password |
				 | 	pratik  | thorve   |
	
	And    User clicks on login Button
	Then   User is successfully directed to the homepage

