Feature: Password Recovery Option and Login

	#Scenario 1
	Scenario Outline: Login after Password Recovered
	Given I open the app
	When I login with this "<username>" and this "<password>" values
	And App show me a message of error
	Then I go to Forgot Password option
	When I request my New Passowrd after input my Email "<Email>"
	And I confirm the message of password Recovery displayed 
	Then App login should appears 

	Examples:

	|  username  | password | Email                  |
	| bestrada   | rb751    | bestrada@belatrixsf.com| 

	
	
