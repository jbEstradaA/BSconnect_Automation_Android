package pages.rankingTab;

import org.openqa.selenium.WebElement;
import org.testng.Assert;

import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;

public class defaultRankingPage {
	public static WebElement btnLastMonth, btnCurrentMonth, btnAllTime, lViewRanking, rvRankingShowed;
	
	public static void getDefaulRankingPageComponent()
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.ScrollView[@index='0']");
		btnLastMonth = BasicMethods.getComponnet(btnLastMonth, typeIdSelenium.xpath, "//android.widget.TextView[@text='Last Month']");
		btnCurrentMonth = BasicMethods.getComponnet(btnCurrentMonth, typeIdSelenium.xpath, "//android.widget.TextView[@text='Current Month']");
		btnAllTime = BasicMethods.getComponnet(btnAllTime, typeIdSelenium.xpath, "//android.widget.TextView[@text='All Time']");
		rvRankingShowed = BasicMethods.getComponnet(rvRankingShowed, typeIdSelenium.id, "com.belatrixsf.connect:id/ranking");
	}
	
	public static void viewLastMonthRanking()
	{
		btnLastMonth.click();
	}
	
	public static void viewAllTimeRanking()
	{
		btnAllTime.click();
	}
	
	public static void checkRanking()
	{
		Assert.assertNotSame(rvRankingShowed, null, "Page Login is found");
	}

}
