package pages.login;

import java.net.MalformedURLException;
import motor.MainClassDriver;
import utilities.BasicMethods;
import utilities.Enums.typeIdSelenium;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pages.menus.SideBarMenuApp;
import pages.menus.ToolBarMenuApp;
import pages.popUpMessages.AlertMessageTwoOptions;

public class LogInPage {
	public static WebElement lblTitlePage, txtUserName, txtPassword, btnLogin, hlnkForgotPassword, hlnkSignUp;
	
	public static void getLoginPageComponent() throws MalformedURLException
	{
		lblTitlePage = BasicMethods.getComponnet(lblTitlePage, typeIdSelenium.xpath, "//android.widget.TextView[@index='1']");
		txtUserName = BasicMethods.getComponnet(txtUserName, typeIdSelenium.id, "com.belatrixsf.connect:id/username");
		txtPassword = BasicMethods.getComponnet(txtPassword, typeIdSelenium.id, "com.belatrixsf.connect:id/password");
		btnLogin = BasicMethods.getComponnet(btnLogin, typeIdSelenium.id, "com.belatrixsf.connect:id/log_in");
		hlnkForgotPassword = BasicMethods.getComponnet(hlnkForgotPassword, typeIdSelenium.id, "com.belatrixsf.connect:id/forgot_password");
		hlnkSignUp = BasicMethods.getComponnet(hlnkSignUp, typeIdSelenium.id, "com.belatrixsf.connect:id/sign_up");
	}
	
	public static void loginOnApp (String userName, String passWord) throws Throwable 
	{
		txtUserName.sendKeys(userName);
		txtPassword.sendKeys(passWord);
		MainClassDriver.getAndroidBackButtom();
		btnLogin.click();
	}
	
	public static void forgotPasswordOption()
	{
		hlnkForgotPassword.click();
	}
	
	public static void assertExistLoginPage()
	{
		Assert.assertNotSame(lblTitlePage, null, "Page Login is found");
	} 
	
	public static void assertNotExistLoginPage()
	{
		Assert.assertEquals(lblTitlePage, null, "Page Login is not found");
	} 
	
	public static void logOutApp() throws Throwable
	{
		//ToolBarMenuApp.getToolBarComponent();
		ToolBarMenuApp.openMenuSideBar();
		SideBarMenuApp.getSideBarComponent();
		SideBarMenuApp.logOutUserSesion();
		AlertMessageTwoOptions.getAlertMessageTwoOptionsComponents();
		AlertMessageTwoOptions.answerYes();
		System.out.println("I left the session successfully");
		LogInPage.assertExistLoginPage();
	}
	
}
