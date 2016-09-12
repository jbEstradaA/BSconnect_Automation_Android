package steps;

import pages.menus.ToolBarMenuApp;
import pages.rankingTab.defaultRankingPage;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;


public class CheckRanking {

	@When("^I click on ranking Tab$")
	public void i_click_on_ranking_Tab() throws Throwable {
		ToolBarMenuApp.getToolBarComponent();
		ToolBarMenuApp.rankingTab();
		System.out.println("I see the ranking page of default");
	}

	@When("^I see the Currement Month rank deafult$")
	public void i_see_the_Currement_Month_rank_deafult() throws Throwable {
	    defaultRankingPage.getDefaulRankingPageComponent();
	    defaultRankingPage.checkRanking();
	}

	@Then("^I click on Last Month ranking$")
	public void i_click_on_Last_Month_ranking() throws Throwable {
	    defaultRankingPage.viewLastMonthRanking();
	    System.out.println("I see the Last Month Ranking");
	}

	@Then("^I check the last Month Rank$")
	public void i_check_the_last_Month_Rank() throws Throwable {
		defaultRankingPage.checkRanking();
		System.out.println("The Ranking Page is correct");
	}
	
	@Then("^I check the current Month Rank$")
	public void i_check_the_current_Month_Rank() throws Throwable {
		defaultRankingPage.checkRanking();
		System.out.println("The current Month Ranking Page is correct");
	}
	
	@Then("^I check the all time Rank$")
	public void i_check_the_all_time_Rank() throws Throwable {
		defaultRankingPage.checkRanking();
		System.out.println("The all time Ranking Page is correct");
	}
	
	@Then("^I click on all time rank$")
	public void i_click_on_all_time_rank() throws Throwable {
	    defaultRankingPage.viewAllTimeRanking();
	    System.out.println("I see the all time Ranking");
	}

	
}
