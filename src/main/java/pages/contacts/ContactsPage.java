package pages.contacts;

import java.net.MalformedURLException;
import org.openqa.selenium.WebElement;
import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;

public class ContactsPage {

	public static WebElement btnBackPage, titlePage, btnFindContact, selectFirstContact, txtNameFirstContact,
							 btnBackPageFindContact, txtFindContactName, selectResultOfSearch;
	
	public static void getContactsPageComponents() throws MalformedURLException
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.TextView[@index='1']");
		btnBackPage = BasicMethods.getComponnet(btnBackPage, typeIdSelenium.xpath, "//android.widget.ImageButton[@index='0']");
		titlePage = BasicMethods.getComponnet(titlePage, typeIdSelenium.xpath, "//android.widget.TextView[@index='1']");
		selectFirstContact = BasicMethods.getComponnet(selectFirstContact, typeIdSelenium.xpath, "//android.support.v7.widget.RecyclerView[@index='0']//android.widget.LinearLayout[@index='0']");
		txtNameFirstContact = BasicMethods.getComponnet(txtNameFirstContact, typeIdSelenium.xpath, "//android.widget.LinearLayout[@index='0']/android.widget.LinearLayout[@index='1']/android.widget.TextView[@index='0']");
		btnFindContact = BasicMethods.getComponnet(btnFindContact, typeIdSelenium.id, "com.belatrixsf.connect:id/action_search");
	}
	
	public static void getFindContactComponents()throws MalformedURLException
	{
		btnBackPageFindContact = BasicMethods.getComponnet(btnBackPageFindContact, typeIdSelenium.id, "com.belatrixsf.connect:id/action_mode_close_button");
		txtFindContactName = BasicMethods.getComponnet(txtFindContactName, typeIdSelenium.id, "com.belatrixsf.connect:id/search_term");
	}
	
	public static void getResultOfSearchComponents(String contactName) throws MalformedURLException
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.support.v7.widget.RecyclerView[@index='0']//android.widget.LinearLayout[@index='0']");
		selectResultOfSearch = BasicMethods.getComponnet(selectResultOfSearch, typeIdSelenium.xpath, "//android.support.v7.widget.RecyclerView[@index='0']//android.widget.LinearLayout[@index='0']");
	}
	
	public static void selectFirstUser()
	{
		selectFirstContact.click();
	}
	
	public static void backPage()
	{
		btnBackPage.click();
	}
	
	public static void findContact()
	{
		btnFindContact.click();
	}
	
	public static void findSpecificContact( String contactName) throws MalformedURLException
	{
		getFindContactComponents();
	    txtFindContactName.sendKeys(contactName);
	    BasicMethods.getAndroidBackButtom();
	}
	
	public static void selectUserSearch(String contactName) throws MalformedURLException
	{
		getResultOfSearchComponents(contactName);
	    selectResultOfSearch.click();
	}
	
	public static void backSearchPage()
	{
		btnBackPageFindContact.click();
	}
	
	
}
