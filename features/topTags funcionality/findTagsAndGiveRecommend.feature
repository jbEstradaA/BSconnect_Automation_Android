Feature: Find a Specific Top Tag 

	#Scenario 1
	Scenario Outline: The user requests find a any Contact
		Given I login with my "<username>" and my "<password>"
			And I'm on my profile page
		When I click on Top Tags tab
		Then  I see one list of all Top Tags used
		When I click on find a specific Tag
			And type the next Tag Name "<Tag>"
			And I click over the field of this tag
		Then I see one list of all contacts with points in this Tag 
			And I finally Logout of App

	Examples:

	|  username  | password | tagName | 
	| gvelasquez | belatrix | ANDROID |


#	#Scenario 2
#	Scenario Outline: The user requests find a specific Contact
#		Given I login with my "<username>" and my "<password>"
#			And I'm on my profile page
#		When I click on Side bar Menu
#			And I click on Contacts Option
#		Then  I see one list of all contacts
#		When I click on find a Contact
#			And type the next Contact "<contact>"
#			And click over the field of this Contact "<contact>"
#		Then I should see the Profile User finded
#			And I finally Logout of App
#
#	Examples:
#
#	|  username  | password | contact                   |
#	| gvelasquez | belatrix | Juan Bryan Estrada Acosta |
