Feature: View the Last Month Ranking

	#Scenario 1
	Scenario Outline: The user requests view the last month ranking
		Given I login with my "<username>" and my "<password>"
			And I'm on my profile page
		When I click on ranking Tab
			And I see the Currement Month rank deafult
		Then  I click on Last Month ranking
			And I check the last Month Rank
			And I finally Logout of App

	Examples:
	|  username  | password |
	| gvelasquez | belatrix |
	
	
	#Scenario 2
	Scenario Outline: The user requests view the current month ranking
		Given I login with my "<username>" and my "<password>"
			And I'm on my profile page
		When I click on ranking Tab
		Then  I see the Currement Month rank deafult
			And I check the current Month Rank
			And I finally Logout of App
		
	Examples:
	|  username  | password |
	| gvelasquez | belatrix |
	
	
	#Scenario 3
	Scenario Outline: The user requests view the all time rank
		Given I login with my "<username>" and my "<password>"
			And I'm on my profile page
		When I click on ranking Tab
			And I see the Currement Month rank deafult
		Then  I click on all time rank
			And I check the all time Rank
			And I finally Logout of App
		
	Examples:
	|  username  | password |
	| gvelasquez | belatrix |