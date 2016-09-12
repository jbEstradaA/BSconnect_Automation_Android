package pages.popUpMessages;

import java.net.MalformedURLException;
import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;
import org.openqa.selenium.WebElement;

public class AlertToAllowPermitions {
	public static WebElement messageAlert, btnDenyPermition, btnAllowPermition;
	
	public static void getAlertAllowPermitionsComponents() throws MalformedURLException
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.LinearLayout[@index='1']");
		messageAlert = BasicMethods.getComponnet(messageAlert, typeIdSelenium.id, "com.android.packageinstaller:id/permission_message");
		btnDenyPermition = BasicMethods.getComponnet(btnDenyPermition, typeIdSelenium.id, "com.android.packageinstaller:id/permission_deny_button");
		btnAllowPermition = BasicMethods.getComponnet(btnAllowPermition, typeIdSelenium.id, "com.android.packageinstaller:id/permission_allow_button");
	}
	
	public static void clickAllow()
	{
		btnAllowPermition.click();
	}
	
	public static void waitPermitionsMessage()
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.LinearLayout[@index='1']");
	}

}
