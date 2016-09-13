package steps;

import pages.contacts.ContactsPage;
import pages.contacts.ProfileOfContactPage;
import pages.menus.SideBarMenuApp;
import pages.menus.ToolBarMenuApp;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FindContactProfile {

	@When("^I click on Side bar Menu$")
	public void i_click_on_Side_bar_Menu() throws Throwable {
		ToolBarMenuApp.getToolBarComponent();
		ToolBarMenuApp.openMenuSideBar();
		System.out.println("I open the Side Bar menu");
	}

	@When("^I click on Contacts Option$")
	public void i_click_on_Contacts_Option() throws Throwable {
		SideBarMenuApp.getSideBarComponent();
		SideBarMenuApp.clickContactsOption();
		System.out.println("I click on contacts option");
	}

	@Then("^I see one list of all contacts$")
	public void i_see_one_list_of_all_contacts() throws Throwable {
		ContactsPage.getContactsPageComponents();
		System.out.println("I see the list of all contacts correctly");
	}

	@When("^I click over one user of the list$")
	public void i_click_over_one_user_of_the_list() throws Throwable {
		ContactsPage.selectFirstUser();
		System.out.println("I select a first user of the list of contacts");
	}

	@Then("^I should see the Profile User selected$")
	public void i_should_see_the_Profile_User_selected() throws Throwable {
		ProfileOfContactPage.getProfileOfContactComponents();
		System.out.println("The profile of user selected load successfully");
		ProfileOfContactPage.backPage();
		System.out.println("I back on pages to main Page");
		ContactsPage.backPage();
	}
	
	@When("^I click on find a Contact$")
	public void i_click_on_find_a_Contact() throws Throwable {
	    ContactsPage.findContact();
	    System.out.println("I click on Find a specific contact");
	}

	@When("^type the next Contact \"(.*?)\"$")
	public void type_the_next_Contact(String contactName) throws Throwable {
	    ContactsPage.findSpecificContact(contactName);
	    System.out.println("I find a contact by name: " + contactName);
	}

	@When("^click over the field of this Contact \"(.*?)\"$")
	public void click_over_the_field_of_this_Contact(String contactName) throws Throwable {
		ContactsPage.selectUserSearch(contactName);
		System.out.println("i select the contact finded");
	}
	
	@Then("^I should see the Profile User finded$")
	public void i_should_see_the_Profile_User_finded() throws Throwable {
		ProfileOfContactPage.getProfileOfContactComponents();
		System.out.println("The profile of user selected load successfully");
		ProfileOfContactPage.backPage();
		System.out.println("I back on pages to main Page");
		ContactsPage.backSearchPage();
		ContactsPage.backPage();
	}

}
