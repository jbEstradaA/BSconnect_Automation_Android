package pages.login;

import java.net.MalformedURLException;
import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;

import org.openqa.selenium.WebElement;

public class ForgotPasswordPage {
	
	public static WebElement btnBackPage, titlePage, descriptionPage, txtEmail, btnRequestNewPassword;
	
	public static void getForgotPasswordComponent() throws MalformedURLException
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.TextView[@index='1']");
		btnBackPage = BasicMethods.getComponnet(btnBackPage, typeIdSelenium.xpath, "//android.widget.ImageButton[@index='0']");
		titlePage = BasicMethods.getComponnet(titlePage, typeIdSelenium.xpath, "//android.widget.TextView[@index='1']");
		descriptionPage = BasicMethods.getComponnet(descriptionPage, typeIdSelenium.xpath, "//android.widget.TextView[@index='2']");
		txtEmail = BasicMethods.getComponnet(txtEmail, typeIdSelenium.id, "com.belatrixsf.connect:id/email");
		btnRequestNewPassword = BasicMethods.getComponnet(btnRequestNewPassword, typeIdSelenium.id, "com.belatrixsf.connect:id/new_password");
	}
	
	public static void requestNewPassword(String Email) throws Throwable
	{
		txtEmail.sendKeys(Email);
		BasicMethods.getAndroidBackButtom();
		btnRequestNewPassword.click();
		BasicMethods.getAndroidBackButtom();
		 
	}
	
	

}
