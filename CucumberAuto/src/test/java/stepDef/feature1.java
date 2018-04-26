package stepDef;



import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class feature1 {
	
	WebDriver d = new ChromeDriver();
	
	@Before(order=1)
	public void setup()
	{
		 System.setProperty("webdriver.chrome.driver", "C://Users//x173479//Desktop//My stuff//Selenium//Final//driver//chromedriver.exe");
		 
		 d.get("https://stackoverflow.com/");
	}
	
	@After(order=1)
	public void closing()
	{
		System.out.println("Closing completed");
	}
	
	@Given("^user is on Stackoverflow homepage$")
	public void user_is_on_Stackoverflow_homepage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		


	}
	
	@Given("^The user is on Stackoverflow homepage$")
	public void the_user_is_on_Stackoverflow_homepage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 System.setProperty("webdriver.chrome.driver", "C://Users//x173479//Desktop//My stuff//Selenium//Final//driver//chromedriver.exe");
		 
		 d.get("https://stackoverflow.com/");
	}

	


	@When("^User click on login home page buttong$")
	public void user_click_on_login_home_page_buttong() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		d.findElement(By.xpath("//a[@class='login-link btn-clear']")).click();
		
	   
	}

	@When("^User enters correct username and password$")
	public void user_enters_correct_username_and_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		d.findElement(By.id("email")).sendKeys("username@gmail.com");
		d.findElement(By.id("password")).sendKeys("password");
	   
	}

	@When("^User clicks on login Button$")
	public void user_clicks_on_login_Button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
		d.findElement(By.id("submit-button")).click();
		
	}

	@Then("^User is successfully directed to the homepage$")
	public void user_is_successfully_directed_to_the_homepage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		d.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	//	Assert.assertTrue(d.findElement(By.xpath("//*[@id=\"sidebar\"]/div[1]/a")).isDisplayed());
	//	Assert.assertTrue(d.findElement(By.xpath("//a[contains(@text(),'Ask Question')]")).isDisplayed());
		d.close();
		
		
	   
	}

	@When("^User enters incorrect username and password$")
	public void user_enters_incorrect_username_and_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		d.findElement(By.id("email")).sendKeys("username@gmail.com");
		d.findElement(By.id("password")).sendKeys("password");
	  
	}

	@Then("^User is displayed with error on login page$")
	public void user_is_displayed_with_error_on_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		d.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	//	Assert.assertFalse(d.findElement(By.xpath("//a[contains(@text(),'Ask Question')]")).isDisplayed());
		d.close();
	   
	}
	
	@When("^User enters username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_enters_username_and_password(String username, String password) throws Throwable {
	  
		d.findElement(By.id("email")).sendKeys(username);
		d.findElement(By.id("password")).sendKeys(password);
	    
	}
	
	// Data table
	
	@When("^User enters following username and password$")
	public void user_enters_following_username_and_password(DataTable table) throws Throwable {
		
		List<List<String>> data = table.raw();
		
		// Now the data is stored in row and colum , we need to fetch value from 1st row
		
		String username = data.get(1).get(0); //getting first row colum zero
		String password = data.get(1).get(1); // getting first row column one
		System.out.println(username + "  "  + password);		
	}
	
	// Data Driver
	
	@When("^User enters correct \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_correct_and(String username, String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		d.findElement(By.id("email")).sendKeys(username);
		d.findElement(By.id("password")).sendKeys(password);
	}




}
