package utilities;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import utilities.Enums.typeExpectedCondition;
import utilities.Enums.typeIdSelenium;
import motor.MainClassDriver;

public class BasicMethods extends MainClassDriver{
	
	public static WebElement getComponnet(WebElement componentName, 
										  typeIdSelenium type, String identifyName)
	{
		if (type == typeIdSelenium.id)
		{
			componentName = driver.findElement(By.id(identifyName));
		} 
		else if (type == typeIdSelenium.className)
		{
			componentName = driver.findElement(By.className(identifyName));
		}
		else if (type == typeIdSelenium.name)
		{
			componentName = driver.findElement(By.name(identifyName));
		}
		else if (type == typeIdSelenium.tagName)
		{
			componentName = driver.findElement(By.tagName(identifyName));
		}
		else if (type == typeIdSelenium.linkText)
		{
			componentName = driver.findElement(By.linkText(identifyName));
		}
		else if (type == typeIdSelenium.xpath)
		{
			componentName = driver.findElement(By.xpath(identifyName));
		}
		return componentName;
	}
			
	public static Boolean getIsSelected(WebElement componentName)
	{
		Boolean content = componentName.getAttribute("checked").equals("true");
		return content;
	}
	
	public static String getContentOfComponent(WebElement componentName)
	{
		String content = componentName.getText();
		return content;
	}
	
			
	public static Boolean waitForAComponent(String componentSource)
	{
		WebDriverWait wait = new WebDriverWait(driver, 3);
		Boolean isPresent = wait.until(ExpectedConditions.elementSelectionStateToBe(By.xpath(componentSource),false));
		return isPresent; 
	}
			
	public static void handlingWaits(typeExpectedCondition type , String identifyName){
		
		WebDriverWait wait = new WebDriverWait(driver, 10);
		
		if (type == typeExpectedCondition.alertIsPresent)
		{
			wait.until(ExpectedConditions.alertIsPresent());
		} 
		else if (type == typeExpectedCondition.elementSelectionStateToBeTrue)
		{
			wait.until(ExpectedConditions.elementSelectionStateToBe(By.xpath(identifyName),true));
		}
		else if (type == typeExpectedCondition.elementSelectionStateToBeFalse)
		{
			wait.until(ExpectedConditions.elementSelectionStateToBe(By.xpath(identifyName),false));
		}
		else if (type == typeExpectedCondition.elementToBeClickable)
		{
			wait.until(ExpectedConditions.elementToBeClickable(By.xpath(identifyName)));
		}
		else if (type == typeExpectedCondition.elementToBeSelected)
		{
			wait.until(ExpectedConditions.elementToBeSelected(By.xpath(identifyName)));
		}
		else if (type == typeExpectedCondition.invisibilityOfElementLocated)
		{
			wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(identifyName)));
		}
		else if (type == typeExpectedCondition.presenceOfElementLocated)
		{
			wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(identifyName)));
		}
		else if (type == typeExpectedCondition.presenceOfAllElementsLocatedBy)
		{
			wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath(identifyName)));
		}
		else if (type == typeExpectedCondition.visibilityOfAllElementsLocatedBy)
		{
			wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath(identifyName)));
		}
		else if (type == typeExpectedCondition.visibilityOfElementLocated)
		{
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(identifyName)));
		}
	}
				
	public static void handlingWaitsForComponent(typeExpectedCondition type , 
												 WebElement identifyComponent){
		
		WebDriverWait wait = new WebDriverWait(driver, 10);
		
		if (type == typeExpectedCondition.alertIsPresent)
		{
			wait.until(ExpectedConditions.alertIsPresent());
		} 
		else if (type == typeExpectedCondition.elementSelectionStateToBeTrue)
		{
			wait.until(ExpectedConditions.elementSelectionStateToBe(identifyComponent,true));
		}
		else if (type == typeExpectedCondition.elementSelectionStateToBeFalse)
		{
			wait.until(ExpectedConditions.elementSelectionStateToBe(identifyComponent,false));
		}
		else if (type == typeExpectedCondition.elementToBeClickable)
		{
			wait.until(ExpectedConditions.elementToBeClickable(identifyComponent));
		}
		else if (type == typeExpectedCondition.elementToBeSelected)
		{
			wait.until(ExpectedConditions.elementToBeSelected(identifyComponent));
		}
		else if (type == typeExpectedCondition.invisibilityOfElementLocated)
		{
			wait.until(ExpectedConditions.invisibilityOfElementLocated((By) identifyComponent));
		}
		else if (type == typeExpectedCondition.presenceOfElementLocated)
		{
			wait.until(ExpectedConditions.presenceOfElementLocated((By) identifyComponent));
		}
		else if (type == typeExpectedCondition.presenceOfAllElementsLocatedBy)
		{
			wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy((By) identifyComponent));
		}
		else if (type == typeExpectedCondition.visibilityOfAllElementsLocatedBy)
		{
			wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy((By) identifyComponent));
		}
		else if (type == typeExpectedCondition.visibilityOfElementLocated)
		{
			wait.until(ExpectedConditions.visibilityOfElementLocated((By) identifyComponent));
		}
	}
	

}
