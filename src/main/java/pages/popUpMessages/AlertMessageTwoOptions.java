package pages.popUpMessages;

import java.net.MalformedURLException;

import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;
import org.openqa.selenium.WebElement;

public class AlertMessageTwoOptions {
	
	public static WebElement backGroundMessage, messageAlert, btnNotConfirmation, btnYesConfirmation;
	
	public static void getAlertMessageTwoOptionsComponents() throws MalformedURLException
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.TextView[@index='0']");
		backGroundMessage = BasicMethods.getComponnet(backGroundMessage, typeIdSelenium.xpath, "//android.widget.FrameLayout[@index='0']");
		messageAlert = BasicMethods.getComponnet(messageAlert, typeIdSelenium.xpath, "//android.widget.TextView[@index='0']");
		btnNotConfirmation = BasicMethods.getComponnet(btnNotConfirmation, typeIdSelenium.xpath, "//android.widget.Button[@index='0']");
		btnYesConfirmation = BasicMethods.getComponnet(btnYesConfirmation, typeIdSelenium.xpath, "//android.widget.Button[@index='1']");
	}
	
	public static void answerYes()
	{
		btnYesConfirmation.click();
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.ImageView[@index='0']");
	}
	
	public static void waitMessage()
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.TextView[@index='0']");
	}
	
	

}
