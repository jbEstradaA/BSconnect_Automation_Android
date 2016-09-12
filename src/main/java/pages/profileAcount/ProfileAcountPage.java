package pages.profileAcount;

import java.net.MalformedURLException;
import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;
import org.testng.Assert;
import org.openqa.selenium.WebElement;

public class ProfileAcountPage 
{
	public static WebElement lblCompleteName, lblSkypeId, lblLocation,lblEmail, btnMore;
	
	public static void getMessageOfConfirmationComponents() throws MalformedURLException
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.ImageView[@index='0']");
		lblCompleteName = BasicMethods.getComponnet(lblCompleteName, typeIdSelenium.id, "com.belatrixsf.connect:id/profile_name");
		lblSkypeId = BasicMethods.getComponnet(lblSkypeId, typeIdSelenium.id, "com.belatrixsf.connect:id/skype_id");
		lblLocation = BasicMethods.getComponnet(lblLocation, typeIdSelenium.id, "com.belatrixsf.connect:id/location_name");
		lblEmail = BasicMethods.getComponnet(lblEmail, typeIdSelenium.id, "com.belatrixsf.connect:id/profile_email");
		btnMore = BasicMethods.getComponnet(btnMore, typeIdSelenium.id, "com.belatrixsf.connect:id/start_recommendation");
	}
	
	public static void editTheProfile (String firstName, String lastName, String skypeId, String location) throws Throwable 
	{
		Assert.assertEquals(BasicMethods.getContentOfComponent(lblCompleteName).equals(firstName + " "+ lastName), true);
		Assert.assertEquals(BasicMethods.getContentOfComponent(lblSkypeId).equals(skypeId), true);
		Assert.assertEquals(BasicMethods.getContentOfComponent(lblLocation).equals(location), true);
	}

}
