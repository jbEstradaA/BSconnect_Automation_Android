package pages.popUpMessages;

import org.openqa.selenium.WebElement;

import utilities.BasicMethods;
import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;

public class SelectOptionUploadPicture {

	public static WebElement messageAlert, btnTakeaPhoto, btnPickFromGallery, btnImages, btnPhotos, 
							 btnCameraFrontal, btnCameraPhoto, btnCrop;
	
	public static void getUploadPictureOptionComponent()
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.ListView[@index='0']");
		messageAlert = BasicMethods.getComponnet(messageAlert, typeIdSelenium.id, "com.belatrixsf.connect:id/action_bar_root");
		btnTakeaPhoto = BasicMethods.getComponnet(btnTakeaPhoto, typeIdSelenium.xpath, "//android.widget.TextView[@text='Take a photo']");
		btnPickFromGallery = BasicMethods.getComponnet(btnPickFromGallery, typeIdSelenium.xpath, "//android.widget.TextView[@text='Pick from gallery']");
		
	}
	
	public static void getSelectAnImageComponent()
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.ListView[@index='1']");
		btnImages = BasicMethods.getComponnet(btnImages, typeIdSelenium.xpath, "//android.widget.TextView[@text='Imágenes']");
		btnPhotos = BasicMethods.getComponnet(btnPhotos, typeIdSelenium.xpath, "//android.widget.TextView[@text='Fotos']");
	}
	
	public static void getCameraComponent()
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.widget.FrameLayout[@index='5']");
		btnCameraFrontal = BasicMethods.getComponnet(btnCameraFrontal, typeIdSelenium.id, "com.sonyericsson.android.camera:id/primary_shortcut_facing");
		btnCameraPhoto = BasicMethods.getComponnet(btnCameraPhoto, typeIdSelenium.id, "com.sonyericsson.android.camera:id/main_button");
	}
	
	public static void getEditionCameraComponent()
	{
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.support.v7.widget.LinearLayoutCompat[@index='1']");
		btnCrop = BasicMethods.getComponnet(btnCrop, typeIdSelenium.id, "com.belatrixsf.connect:id/crop_image_menu_crop");
	}
	
	
	public static void selectPickFromGallery()
	{
		btnPickFromGallery.click();
		getSelectAnImageComponent();
		btnImages.click();
	}
	
	public static void takePhoto()
	{
		btnTakeaPhoto.click();
		getCameraComponent();
		btnCameraFrontal.click();
		btnCameraPhoto.click();
		getEditionCameraComponent();
		btnCrop.click();
		BasicMethods.handlingWaits(typeExpectedCondition.presenceOfElementLocated,"//android.view.ViewGroup[@index='0']/android.widget.TextView[@index='1']");
	}
}
