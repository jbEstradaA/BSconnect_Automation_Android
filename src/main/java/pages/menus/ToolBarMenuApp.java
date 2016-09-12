package pages.menus;

import java.net.MalformedURLException;
import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;

import org.openqa.selenium.WebElement;

public class ToolBarMenuApp 
{
	public static WebElement menuSideBar, txtTittlePage, btnEditProfile, tabAccount, tabRanking, 
							 tabActivity, tabTopTags;
	
	public static void getToolBarComponent() throws MalformedURLException
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.ImageButton[@index='0']");
		menuSideBar = BasicMethods.getComponnet(menuSideBar, typeIdSelenium.xpath, ("//android.widget.ImageButton[@index='0']"));
		txtTittlePage = BasicMethods.getComponnet(txtTittlePage, typeIdSelenium.xpath, ("//android.widget.TextView[@index='1']"));
		btnEditProfile = BasicMethods.getComponnet(btnEditProfile, typeIdSelenium.xpath, "//android.support.v7.widget.LinearLayoutCompat[@index='2']/android.widget.TextView[@index='0']");
		tabAccount = BasicMethods.getComponnet(tabAccount, typeIdSelenium.xpath, "//android.widget.TextView[@text='Account']");
		tabRanking = BasicMethods.getComponnet(tabRanking, typeIdSelenium.xpath, "//android.widget.TextView[@text='Ranking']");
		tabActivity = BasicMethods.getComponnet(tabActivity, typeIdSelenium.xpath, "//android.widget.TextView[@text='Activity']");
		tabTopTags = BasicMethods.getComponnet(tabTopTags, typeIdSelenium.xpath, "//android.widget.TextView[@text='Top Tags']");
	}
	
	public static void openMenuSideBar() 
	{
		menuSideBar.click();
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.RelativeLayout[@index='1']");
	}
	
	public static void openEditProfile()
	{
		btnEditProfile.click();
	}
	
	

}
