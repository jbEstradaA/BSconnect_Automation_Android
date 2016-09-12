package pages.menus;

import java.net.MalformedURLException;
import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;
import org.openqa.selenium.WebElement;

public class SideBarMenuApp 
{
	public static WebElement nameUser, mailUser, homeOption, contactsOption, eventsOption, aboutOption, settingsOption, logoutOption, confirmationBtn;
	
	public static void getSideBarComponent() throws MalformedURLException
	{
		nameUser = BasicMethods.getComponnet(nameUser, typeIdSelenium.xpath, "//android.widget.TextView[@index='1']");
		mailUser = BasicMethods.getComponnet(mailUser, typeIdSelenium.xpath, "//android.widget.TextView[@index='2']");
		homeOption = BasicMethods.getComponnet(homeOption, typeIdSelenium.xpath, "//android.support.v7.widget.LinearLayoutCompat[@index='1']");
		contactsOption = BasicMethods.getComponnet(contactsOption, typeIdSelenium.xpath, "//android.support.v7.widget.LinearLayoutCompat[@index='2']");
		eventsOption = BasicMethods.getComponnet(eventsOption, typeIdSelenium.xpath, "//android.support.v7.widget.LinearLayoutCompat[@index='3']");
		aboutOption = BasicMethods.getComponnet(aboutOption, typeIdSelenium.xpath, "//android.support.v7.widget.LinearLayoutCompat[@index='4']");
		settingsOption = BasicMethods.getComponnet(settingsOption, typeIdSelenium.xpath, "//android.support.v7.widget.LinearLayoutCompat[@index='5']");
		logoutOption = BasicMethods.getComponnet(logoutOption, typeIdSelenium.xpath, "//android.widget.RelativeLayout[@index='1']/android.widget.LinearLayout[@index='1']/android.widget.TextView[@index='1']");
	}
	
	
	public static void logOutUserSesion() throws MalformedURLException
	{
		logoutOption.click();
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.LinearLayout[@index='0']");
	}

}
