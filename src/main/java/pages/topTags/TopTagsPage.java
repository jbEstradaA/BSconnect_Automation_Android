package pages.topTags;

import java.net.MalformedURLException;
import org.openqa.selenium.WebElement;
import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;

public class TopTagsPage {

	public static WebElement selectAutomationTag, selectAndroidTag,
			selectQATag, selectTeamSpiritTag, btnMore, btnFindTag,
			selectResultOfSearch, btnBackPageFindTopTag, txtFindTagName,
			btnBackPage, titlePage, selectFirstContact, txtNameFirstContact,
			btnBackPageFindContact, txtFindContactName;
	
	public static void getTopTagsPageComponents() throws MalformedURLException {
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.TextView[@index='1']");
		selectAutomationTag = BasicMethods.getComponnet(selectAutomationTag,typeIdSelenium.xpath,"//android.widget.FrameLayout/android.widget.TextView[@text='AUTOMATION']");
		selectAndroidTag = BasicMethods.getComponnet(selectAndroidTag, typeIdSelenium.xpath,"//android.widget.FrameLayout/android.widget.TextView[@text='ANDROID']");
		selectQATag = BasicMethods.getComponnet(selectQATag, typeIdSelenium.xpath,"//android.widget.FrameLayout/android.widget.TextView[@text='QA']");
		selectTeamSpiritTag = BasicMethods.getComponnet(selectTeamSpiritTag, typeIdSelenium.xpath,"//android.widget.FrameLayout/android.widget.TextView[@text='TEAM SPIRIT']");
		btnMore = BasicMethods.getComponnet(btnMore, typeIdSelenium.id,"com.belatrixsf.connect:id/start_recommendation");
		btnFindTag = BasicMethods.getComponnet(btnFindTag, typeIdSelenium.id,"com.belatrixsf.connect:id/action_search");
	}

	public static void getContactsTopTagPageComponents() throws MalformedURLException
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.TextView[@index='1']");
		btnBackPage = BasicMethods.getComponnet(btnBackPage, typeIdSelenium.xpath, "//android.widget.ImageButton[@index='0']");
		titlePage = BasicMethods.getComponnet(titlePage, typeIdSelenium.xpath, "//android.widget.TextView[@index='1']");
		selectFirstContact = BasicMethods.getComponnet(selectFirstContact, typeIdSelenium.xpath, "//android.support.v7.widget.RecyclerView[@index='0']//android.widget.LinearLayout[@index='0']");
		txtNameFirstContact = BasicMethods.getComponnet(txtNameFirstContact, typeIdSelenium.xpath, "//android.widget.LinearLayout[@index='0']/android.widget.LinearLayout[@index='1']/android.widget.TextView[@index='0']");
	}
	
	public static void getSearchTopTagComponents()throws MalformedURLException
	{
		btnBackPageFindTopTag = BasicMethods.getComponnet(btnBackPageFindTopTag, typeIdSelenium.id, "com.belatrixsf.connect:id/action_mode_close_button");
		txtFindTagName = BasicMethods.getComponnet(txtFindTagName, typeIdSelenium.id, "com.belatrixsf.connect:id/search_term");
	}
	
	public static void getResultOfSearchComponents() throws MalformedURLException
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.support.v7.widget.RecyclerView[@index='0']//android.widget.LinearLayout[@index='0']");
		selectResultOfSearch = BasicMethods.getComponnet(selectResultOfSearch, typeIdSelenium.xpath, "//android.support.v7.widget.RecyclerView[@index='0']//android.widget.LinearLayout[@index='0']");
	}
	
	
	public static void selectAndroidTagOption()
	{
		selectAndroidTag.click();
	}
	
	public static void findTopTag()
	{
		btnFindTag.click();
	}
	
	public static void findSpecificTopTag(String tagName) throws MalformedURLException
	{
		getSearchTopTagComponents();
		txtFindTagName.sendKeys(tagName);
		BasicMethods.getAndroidBackButtom();
	}
	
	public static void selectTagSearch() throws MalformedURLException
	{
		getResultOfSearchComponents();
	    selectResultOfSearch.click();
	}
	
	public static void viewTheResultSearch() throws MalformedURLException
	{
		getContactsTopTagPageComponents();
	}
	

}
