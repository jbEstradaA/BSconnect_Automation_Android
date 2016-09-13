package pages.topTags;

import java.net.MalformedURLException;
import org.openqa.selenium.WebElement;
import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;

public class TopUserWithTag {
	
	public static WebElement btnBackPage, titlePage, selectTopContact, txtNameTopContact;

	public static void getContactsPageComponents() throws MalformedURLException
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.TextView[@index='1']");
		btnBackPage = BasicMethods.getComponnet(btnBackPage, typeIdSelenium.xpath, "//android.widget.ImageButton[@index='0']");
		titlePage = BasicMethods.getComponnet(titlePage, typeIdSelenium.xpath, "//android.widget.TextView[@index='1']");
		selectTopContact = BasicMethods.getComponnet(selectTopContact, typeIdSelenium.xpath, "//android.support.v7.widget.RecyclerView[@index='0']//android.widget.LinearLayout[@index='0']");
		txtNameTopContact = BasicMethods.getComponnet(txtNameTopContact, typeIdSelenium.xpath, "//android.widget.LinearLayout[@index='0']/android.widget.LinearLayout[@index='1']/android.widget.TextView[@index='0']");
	}
	
	public static void selectTopContact()
	{
		selectTopContact.click();
	}
	
	
	

}
