Feature: Login Scenarios

	#Scenario 1
	Scenario Outline: Login with correct values
	Given I open the app
	When I login with this "<username>" and this "<password>" values
	Then I see my user profile page
	When I logout of the App
	And I confirm the message displayed 
	Then App login should appears 

	Examples:

	|  username  | password |
	| gvelasquez | belatrix |
	| rrashuaman | belatrix |
	
	
	
	#Scenario 2
	Scenario Outline: Login with incorrect username
	Given I open the app
	When I login with this "<username>" and this "<password>" values
	Then I see an error message for invalid login

	Examples:

	|   username  | password |
	| gvelasquess | belatrix |
	| rrashuamamm | belatrix |
	
	
	#Scenario 3
	Scenario Outline: Login with incorrect password
	Given I open the app
	When I login with this "<username>" and this "<password>" values
	Then I see an error message for invalid login

	Examples:

	|   username  | password  |
	| gvelasques  | belatrix1 |
	| rrashuamam  | belatrix1 |

