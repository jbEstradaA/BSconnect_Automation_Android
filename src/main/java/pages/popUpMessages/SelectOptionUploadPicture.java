package pages.popUpMessages;

import org.openqa.selenium.WebElement;

import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;

public class SelectOptionUploadPicture {

	public static WebElement messageAlert, btnTakeaPhoto, btnPickFromGallery, btnImagenes, btnFotos;
	
	public static void getUploadPictureOptionComponent()
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"android.widget.ListView[@index='1']");
		messageAlert = BasicMethods.getComponnet(messageAlert, typeIdSelenium.id, "com.belatrixsf.connect:id/action_bar_root");
		btnTakeaPhoto = BasicMethods.getComponnet(btnTakeaPhoto, typeIdSelenium.xpath, "//*[contains(text(),'Take a photo')]");
		btnPickFromGallery = BasicMethods.getComponnet(btnPickFromGallery, typeIdSelenium.xpath, "//*[contains(text(),'Pick from gallery')]");
		
	}
	
	public static void getSelectAnImageComponent()
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"android.widget.ListView[@index='1']");
		btnImagenes = BasicMethods.getComponnet(btnImagenes, typeIdSelenium.id, "//*[contains(text(),'Imágenes')]");
		btnFotos = BasicMethods.getComponnet(btnFotos, typeIdSelenium.id, "//*[contains(text(),'Fotos')]");
	}
	
	public static void selectPickFromGallery()
	{
		btnPickFromGallery.click();
		getSelectAnImageComponent();
		btnImagenes.click();
	}
	
	
}
