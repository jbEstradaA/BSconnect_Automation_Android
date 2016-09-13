package pages.profileAcount;

import java.net.MalformedURLException;
import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;
import motor.MainClassDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pages.popUpMessages.AlertToAllowPermitions;

public class EditProfilePage{
	
	public static WebElement titlePage, txtFirstName, txtLastName, 
		txtSkypeId, rbtnLocationBA, rbtnLocationL, rbtnLocationM, rbtnLocationUSA, tabDone, tabAtras, btnPicture;
	
	public static void getEditProfileComponents() throws MalformedURLException
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.view.ViewGroup[@index='0']/android.widget.TextView[@index='1']");
		titlePage = BasicMethods.getComponnet(titlePage, typeIdSelenium.xpath, "//android.view.ViewGroup[@index='0']/android.widget.TextView[@index='1']");
		txtFirstName = BasicMethods.getComponnet(txtFirstName, typeIdSelenium.id, "com.belatrixsf.connect:id/firstName");
		txtLastName = BasicMethods.getComponnet(txtLastName, typeIdSelenium.id, "com.belatrixsf.connect:id/lastName");
		txtSkypeId = BasicMethods.getComponnet(txtSkypeId, typeIdSelenium.id, "com.belatrixsf.connect:id/skypeId");
		rbtnLocationBA = BasicMethods.getComponnet(rbtnLocationBA, typeIdSelenium.xpath, "//android.widget.RadioGroup[@index='4']/android.widget.RadioButton[@index='0']");
		rbtnLocationL = BasicMethods.getComponnet(rbtnLocationL, typeIdSelenium.xpath, "//android.widget.RadioGroup[@index='4']/android.widget.RadioButton[@index='1']");
		rbtnLocationM = BasicMethods.getComponnet(rbtnLocationM, typeIdSelenium.xpath, "//android.widget.RadioGroup[@index='4']/android.widget.RadioButton[@index='2']");
		rbtnLocationUSA = BasicMethods.getComponnet(rbtnLocationUSA, typeIdSelenium.xpath, "//android.widget.RadioGroup[@index='4']/android.widget.RadioButton[@index='3']");
		tabDone = BasicMethods.getComponnet(tabDone, typeIdSelenium.id, "com.belatrixsf.connect:id/action_done");
		tabAtras = BasicMethods.getComponnet(tabAtras, typeIdSelenium.xpath, "//android.view.ViewGroup[@index='0']/android.widget.ImageButton[@index='0']");
		btnPicture = BasicMethods.getComponnet(btnPicture, typeIdSelenium.xpath, "//android.widget.LinearLayout[@index='1']/android.widget.ImageView[@index='0']");
	}
	
	public static void editTheProfile(String firstName, String lastName, String skypeId, String location) throws Throwable 
	{
		txtFirstName.clear();
		txtFirstName.sendKeys(firstName);
		MainClassDriver.getAndroidBackButtom();
		txtLastName.clear();
		txtLastName.sendKeys(lastName);
		MainClassDriver.getAndroidBackButtom();
		txtSkypeId.clear();
		txtSkypeId.sendKeys(skypeId);
		MainClassDriver.getAndroidBackButtom();
		
		String locationBuenosAirestxt = BasicMethods.getContentOfComponent(rbtnLocationBA);
		String locationLimatxt = BasicMethods.getContentOfComponent(rbtnLocationL);
		String locationMendozatxt = BasicMethods.getContentOfComponent(rbtnLocationM);
		String locationUSAtxt = BasicMethods.getContentOfComponent(rbtnLocationUSA);

		if(locationBuenosAirestxt.equals(location))
			rbtnLocationBA.click();
		else if (locationLimatxt.equals(location))
			rbtnLocationL.click();
		else if (locationMendozatxt.equals(location))
			rbtnLocationM.click();
		else if (locationUSAtxt.equals(location))
			rbtnLocationUSA.click();
		
		
		Boolean existe = false;
		if (existe.equals(true))
		{
			AlertToAllowPermitions.getAlertAllowPermitionsComponents();
			AlertToAllowPermitions.clickAllow();
			AlertToAllowPermitions.waitPermitionsMessage();
			AlertToAllowPermitions.clickAllow();
			btnPicture.click();
		}
		else
		{
//			btnPicture.click();
//			try 
//			{
//				existe = BasicMethods.waitForAComponent("com.android.packageinstaller:id/dialog_container");
//			} 
//			catch (Exception e){}
//			System.out.println("se encontro el mensaje de primer aceptacion " + existe);
//			SelectOptionUploadPicture.getUploadPictureOptionComponent();
//			SelectOptionUploadPicture.takePhoto();
		}
		
	}
	
	public static void assertExistEditProfilePage()
	{
		Assert.assertNotSame(titlePage, null, "Page Login is found");
	} 
	
	public static void finishTheEditionProfile()
	{
		tabDone.click();
	}

}
