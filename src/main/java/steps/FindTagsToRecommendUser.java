package steps;

import pages.menus.ToolBarMenuApp;
import pages.topTags.TopTagsPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FindTagsToRecommendUser {

	@When("^I click on Top Tags tab$")
	public void i_click_on_Top_Tags_tab() throws Throwable {
		ToolBarMenuApp.getToolBarComponent();
		ToolBarMenuApp.openTopTagsTab();
	}

	@Then("^I see one list of all Top Tags used$")
	public void i_see_one_list_of_all_Top_Tags_used() throws Throwable {
		TopTagsPage.getTopTagsPageComponents();
	}

	@When("^I click on find a specific Tag$")
	public void i_click_on_find_a_specific_Tag() throws Throwable {
		TopTagsPage.findTopTag();
	}

	@When("^type the next Tag Name \"(.*?)\"$")
	public void type_the_next_Tag_Name(String tagName) throws Throwable {
		TopTagsPage.findSpecificTopTag(tagName);
		
	}

	@When("^I click over the field of this tag$")
	public void i_click_over_the_field_of_this_tag() throws Throwable {
		TopTagsPage.selectTagSearch();
	}

	@Then("^I see one list of all contacts with points in this Tag$")
	public void i_see_one_list_of_all_contacts_with_points_in_this_Tag()
			throws Throwable {
		
		
	}

}
