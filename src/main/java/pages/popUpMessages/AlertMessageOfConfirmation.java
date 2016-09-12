package pages.popUpMessages;

import java.net.MalformedURLException;
import org.openqa.selenium.WebElement;
import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;

public class AlertMessageOfConfirmation 
{
	public static WebElement  messageAlert, btnAceptConfirmation;
	
	public static void getMessageOfConfirmationComponents() throws MalformedURLException
	{
		messageAlert = BasicMethods.getComponnet(messageAlert, typeIdSelenium.xpath, "//android.widget.FrameLayout[@index='0']");
		btnAceptConfirmation = BasicMethods.getComponnet(btnAceptConfirmation, typeIdSelenium.xpath, "//android.widget.LinearLayout[@index='2']/android.widget.Button[@index='0']");
	}
	
	public static void aceptConfirmationMessage()
	{
		btnAceptConfirmation.click();
	}
	
	public static void waitMessageConfirmation()
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.FrameLayout[@index='0']");
	}
	
	
}
