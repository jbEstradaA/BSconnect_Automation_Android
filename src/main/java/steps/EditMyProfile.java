package steps;

import pages.login.LogInPage;
import pages.menus.ToolBarMenuApp;
import pages.profileAcount.EditProfilePage;
import pages.profileAcount.ProfileAcountPage;
import motor.MainClassDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

public class EditMyProfile {
	
	@Given("^I login with my \"(.*?)\" and my \"(.*?)\"$")
	public void i_login_with_my_and_my(String username, String password) throws Throwable {
		MainClassDriver.getConnection();
		System.out.println("I opened the App bellatrix");
		LogInPage.getLoginPageComponent();
		LogInPage.loginOnApp(username, password);
		System.out.println("I login with recorder credentials");
	}

	@Given("^I'm on my profile page$")
	public void i_m_on_my_profile_page() throws Throwable {
		LogInPage.assertExistLoginPage();
		System.out.println("Session was started successfully");
	}

	@When("^I click on edit my profile$")
	public void i_click_on_edit_my_profile() throws Throwable {
		ToolBarMenuApp.getToolBarComponent();
		ToolBarMenuApp.openEditProfile();
		System.out.println("Entering the option Edit Profile");
	}

	@When("^I'm on my edit profile page$")
	public void i_m_on_my_edit_profile_page() throws Throwable {
		EditProfilePage.getEditProfileComponents();
		EditProfilePage.assertExistEditProfilePage();
		System.out.println("Was entered correctly to form Edit Profile");
	}

	@When("^I edit my \"(.*?)\" and my \"(.*?)\" and my \"(.*?)\" and Select one \"(.*?)\"$")
	public void i_edit_my_and_my_and_my_and_Select_one(String firstName, String lastName, String skypeId, String location) throws Throwable {
		EditProfilePage.editTheProfile(firstName, lastName, skypeId, location);
		System.out.println("Profile data is properly edited");
	}

	@When("^I select one Custom Picture$")
	public void i_select_one_Custom_Picture() throws Throwable {
		System.out.println("...");
	}

	@Then("^I click on done buton$")
	public void i_click_on_done_buton() throws Throwable {
		EditProfilePage.finishTheEditionProfile();
		System.out.println("Was finished with the Edit Profile");
	}

	@Then("^I check my \"(.*?)\" and my \"(.*?)\" and my \"(.*?)\" and my \"(.*?)\"$")
	public void i_check_my_and_my_and_my_and_my(String firstName, String lastName, String skypeId, String location) throws Throwable {
		ProfileAcountPage.getMessageOfConfirmationComponents();
		ProfileAcountPage.editTheProfile(firstName, lastName, skypeId, location);
		System.out.println("Fields were edited correctly");
	}
	
	@Then("^I finally Logout of App$")
	public void i_finally_Logout_of_App() throws Throwable {
		LogInPage.logOutApp();
		MainClassDriver.closeDriver();
		System.out.println("Successfully Test was completed");
	}

}
