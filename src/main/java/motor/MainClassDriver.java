package motor;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import java.net.MalformedURLException;
import java.net.URL;
import org.openqa.selenium.remote.DesiredCapabilities;
import utilities.Constants;

public class MainClassDriver
{
	public static AppiumDriver driver;
			
	public static void getConnection() throws MalformedURLException {
		/*Auto-generated method stub*/
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("deviceName",Constants.DEVICE_NAME);
	    capabilities.setCapability("platformVersion",Constants.PLATFORM_VERSION);
	    capabilities.setCapability("platformName",Constants.PLATFORM_NAME);
	    driver = new AndroidDriver(new URL(Constants.HOST_URL), capabilities);
	}
	
	public static void closeDriver()
	{
		driver.quit();
	}

	public static void getAndroidBackButtom()
	{
		driver.navigate().back(); 
	}
			
}
