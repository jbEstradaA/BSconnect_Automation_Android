package pages.menus;

import java.net.MalformedURLException;
import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;
import org.openqa.selenium.WebElement;

public class SideBarMenuApp 
{
	public static WebElement nameUser, mailUser, btnHomeOption, btnContactsOption, btnEventsOption, btnAboutOption, btnSettingsOption, btnLogoutOption, confirmationBtn;
	
	public static void getSideBarComponent() throws MalformedURLException
	{
		nameUser = BasicMethods.getComponnet(nameUser, typeIdSelenium.id, "com.belatrixsf.connect:id/full_name");
		mailUser = BasicMethods.getComponnet(mailUser, typeIdSelenium.id, "com.belatrixsf.connect:id/email");
		btnHomeOption = BasicMethods.getComponnet(btnHomeOption, typeIdSelenium.xpath, "//android.widget.CheckedTextView[@text='Home']");
		btnContactsOption = BasicMethods.getComponnet(btnContactsOption, typeIdSelenium.xpath, "//android.widget.CheckedTextView[@text='Contacts']");
		btnEventsOption = BasicMethods.getComponnet(btnEventsOption, typeIdSelenium.xpath, "//android.widget.CheckedTextView[@text='Events']");
		btnAboutOption = BasicMethods.getComponnet(btnAboutOption, typeIdSelenium.xpath, "//android.widget.CheckedTextView[@text='About']");
		btnSettingsOption = BasicMethods.getComponnet(btnSettingsOption, typeIdSelenium.xpath, "//android.widget.CheckedTextView[@text='Settings']");
		btnLogoutOption = BasicMethods.getComponnet(btnLogoutOption, typeIdSelenium.id, "com.belatrixsf.connect:id/menu_logout");
	}
	
	public static void logOutUserSesion() throws MalformedURLException
	{
		btnLogoutOption.click();
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.LinearLayout[@index='0']");
	}
	
	public static void clickContactsOption()
	{
		btnContactsOption.click();
	}

}
