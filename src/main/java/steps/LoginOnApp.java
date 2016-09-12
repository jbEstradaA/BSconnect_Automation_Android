package steps;

import motor.MainClassDriver;
import pages.login.ForgotPasswordPage;
import pages.login.LogInPage;
import pages.menus.SideBarMenuApp;
import pages.menus.ToolBarMenuApp;
import pages.popUpMessages.AlertMessageOfConfirmation;
import pages.popUpMessages.AlertMessageTwoOptions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

public class LoginOnApp {

	@Given ("^I open the app$")
	public void i_open_the_app() throws Throwable
	{
		System.out.println("I open the app");
		MainClassDriver.getConnection();
	}
	
	@When ("^I login with this \"(.*?)\" and this \"(.*?)\" values$")
	public void i_login_with_this_and_this_values(String username , String password) throws Throwable
	{
		LogInPage.getLoginPageComponent();
		LogInPage.loginOnApp(username, password);
		System.out.println("I login with recorder credentials");
	}
	
	@Then ("^I see my user profile page$")
	public void i_see_my_user_profile_page() throws Throwable
	{
		System.out.println("I login sussesfully");
		ToolBarMenuApp.getToolBarComponent();
		ToolBarMenuApp.openMenuSideBar();
	}
	
	@When ("^I logout of the App$")
	public void i_logout_of_the_App() throws Throwable
	{
		SideBarMenuApp.getSideBarComponent();
		SideBarMenuApp.logOutUserSesion();
	}
	
	@And ("^I confirm the message displayed$")
	public void I_confirm_the_message_displayed() throws Throwable
	{
		AlertMessageTwoOptions.getAlertMessageTwoOptionsComponents();
		AlertMessageTwoOptions.answerYes();
	}
	
	@And ("^I confirm the message of password Recovery displayed$")
	public void I_confirm_the_message_of_password_Recovery_displayed() throws Throwable
	{
		AlertMessageOfConfirmation.getMessageOfConfirmationComponents();
		AlertMessageOfConfirmation.aceptConfirmationMessage();

	}
	
	@Then ("^App login should appears$")
	public void App_login_should_appears() throws Throwable
	{
		System.out.println("I logOut sussesfully");
		LogInPage.assertExistLoginPage();
		MainClassDriver.closeDriver();
	}
	
	@Then ("^I see an error message for invalid login$")
	public void I_see_an_error_message_for_invalid_login() throws Throwable
	{
		System.out.println("The system show me the Error message of Login");
		AlertMessageTwoOptions.waitMessage(); 
		MainClassDriver.closeDriver();
	}
	
	@And ("^App show me a message of error$")
	public void App_show_me_a_message_of_error() throws Throwable
	{
		System.out.println("The system show me the Error message of Login");
		AlertMessageTwoOptions.waitMessage();
		MainClassDriver.getAndroidBackButtom();
	}
	
	@Then ("^I go to Forgot Password option$")
	public void I_go_to_Forgot_Password_option() throws Throwable
	{
		LogInPage.forgotPasswordOption();
	}
	
	@When ("^I request my New Passowrd after input my Email \"(.*?)\"$")
	public void I_request_my_New_Passowrd_after_input_my_Email(String Email) throws Throwable
	{
		ForgotPasswordPage.getForgotPasswordComponent();
		ForgotPasswordPage.requestNewPassword(Email);
	}
	
	
}
