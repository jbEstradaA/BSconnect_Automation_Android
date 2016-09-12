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
		txtUserName = BasicMethods.getComponnet(txtUserName, typeIdSelenium.xpath, "//TextInputLayout[@index='2']/android.widget.EditText[@index='0']");
		txtPassword = BasicMethods.getComponnet(txtPassword, typeIdSelenium.xpath, "//TextInputLayout[@index='3']/android.widget.EditText[@index='0']");
		btnLogin = BasicMethods.getComponnet(btnLogin, typeIdSelenium.xpath, "//android.widget.Button[@index='4']");
		hlnkForgotPassword = BasicMethods.getComponnet(hlnkForgotPassword, typeIdSelenium.xpath, "//android.widget.TextView[@index='5']");
		hlnkSignUp = BasicMethods.getComponnet(hlnkSignUp, typeIdSelenium.xpath, "//android.widget.TextView[@index='6']");
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
