Feature: Edit My Profile

	#Scenario 1
	Scenario Outline: The user requests edit his profile 
		Given I login with my "<username>" and my "<password>"
			And I'm on my profile page
		When I click on edit my profile 
			And I'm on my edit profile page
			And I edit my "<firstName>" and my "<lastName>" and my "<skypeId>" and Select one "<location>"
			And I select one Custom Picture 
		Then  I click on done buton
			And I check my "<firstName>" and my "<lastName>" and my "<skypeId>" and my "<location>"
			And I finally Logout of App

	Examples:

	|  username  | password | firstName  | lastName   | skypeId      |location    | 
	| gvelasquez | belatrix | GuillermoO | VelasquezZ | guille-glpx1 |USA         |
	| gvelasquez | belatrix | Guillermo  | Velasquez  | guille-glpx  |Lima        | 


