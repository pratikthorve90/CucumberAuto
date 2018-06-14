package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		
		monochrome=true,
		
		features= {"src/test/resources/FeatureFiles/feature1.feature"},
		
		dryRun=false,
		
		glue= {"stepDef"},
		
		plugin= {"pretty",
				 "html:target/cucumber-htmlreprot",
				 "json:target/cucumber-report-RunnerTest.json",
				 "com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport_RunnerTest.html"
		}
		
		)

public class RunnerTest {


}
