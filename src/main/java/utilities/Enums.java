package utilities;

public class Enums {
	
	public static enum typeIdSelenium
	{
		id,
		className,
		name,
		tagName,
		linkText,
		xpath
	}
	
	public static enum typeExpectedCondition
	{
		alertIsPresent,
		elementSelectionStateToBeTrue,
		elementSelectionStateToBeFalse,
		elementToBeClickable,
		elementToBeSelected,
		invisibilityOfElementLocated,
		presenceOfElementLocated,
		presenceOfAllElementsLocatedBy,
		visibilityOfAllElementsLocatedBy,
		visibilityOfElementLocated,
		invisibilityOfElementWithText,
		textToBePresentInElementLocated,
		textToBePresentInElementValue,
		titleContains
	}

}
