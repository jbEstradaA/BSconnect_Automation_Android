package pages.contacts;

import java.net.MalformedURLException;
import org.openqa.selenium.WebElement;
import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;

public class ProfileOfContactPage {
	
public static WebElement btnBackPage, titlePage, btnRecommend, txtCompleteName, 
						 txtEmail, txtIdSkype, txtLocation, txtMonthScore, txtScore, txtLevel;
	
	public static void getProfileOfContactComponents() throws MalformedURLException
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.TextView[@index='1']");
		btnBackPage = BasicMethods.getComponnet(btnBackPage, typeIdSelenium.xpath, "//android.widget.ImageButton[@index='0']");
		titlePage = BasicMethods.getComponnet(titlePage, typeIdSelenium.xpath, "//android.widget.TextView[@index='1']");
		btnRecommend = BasicMethods.getComponnet(btnRecommend, typeIdSelenium.id, "com.belatrixsf.connect:id/action_recommend");
		txtCompleteName = BasicMethods.getComponnet(txtCompleteName, typeIdSelenium.id, "com.belatrixsf.connect:id/profile_name");
		txtEmail = BasicMethods.getComponnet(txtEmail, typeIdSelenium.id, "com.belatrixsf.connect:id/profile_email");
		txtIdSkype = BasicMethods.getComponnet(txtIdSkype, typeIdSelenium.id, "com.belatrixsf.connect:id/skype_id");
		txtLocation = BasicMethods.getComponnet(txtLocation, typeIdSelenium.id, "com.belatrixsf.connect:id/location_name");
		txtMonthScore = BasicMethods.getComponnet(txtMonthScore, typeIdSelenium.id, "com.belatrixsf.connect:id/current_month_score");
		txtScore = BasicMethods.getComponnet(txtScore, typeIdSelenium.id, "com.belatrixsf.connect:id/score");
		txtLevel = BasicMethods.getComponnet(txtLevel, typeIdSelenium.id, "com.belatrixsf.connect:id/level");
	}
	
	public static void backPage()
	{
		btnBackPage.click();
	}

}
