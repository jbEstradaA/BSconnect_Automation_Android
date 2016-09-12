package motor;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "features/Login functionality",
				 glue = "Steps",
				 plugin={"html:target/testcases-execution-report"})

public class TestEngine extends AbstractTestNGCucumberTests {
	

}
