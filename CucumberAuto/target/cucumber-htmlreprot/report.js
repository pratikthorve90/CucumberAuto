$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureFiles/tags.feature");
formatter.feature({
  "line": 3,
  "name": "Stackoverflow Login from tags.feature",
  "description": "As a stackoverflow user , with valid credentials i should be able to successfully login",
  "id": "stackoverflow-login-from-tags.feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Important"
    }
  ]
});
formatter.before({
  "duration": 10902909511,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "The user is on Stackoverflow homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "feature1.the_user_is_on_Stackoverflow_homepage()"
});
formatter.result({
  "duration": 4116615144,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate Stackoverflow login with incorrect credentials from tags.feature2",
  "description": "",
  "id": "stackoverflow-login-from-tags.feature;validate-stackoverflow-login-with-incorrect-credentials-from-tags.feature2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters incorrect username and password",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User is displayed with error on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "feature1.user_click_on_login_home_page_buttong()"
});
formatter.result({
  "duration": 2746053214,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_enters_incorrect_username_and_password()"
});
formatter.result({
  "duration": 538996209,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 148989497,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_is_displayed_with_error_on_login_page()"
});
formatter.result({
  "duration": 2206022675,
  "status": "passed"
});
formatter.after({
  "duration": 43729,
  "status": "passed"
});
formatter.before({
  "duration": 11809655146,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "The user is on Stackoverflow homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "feature1.the_user_is_on_Stackoverflow_homepage()"
});
formatter.result({
  "duration": 4124061160,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate Stackoverflow login with incorrect credentials both smoke and regression",
  "description": "",
  "id": "stackoverflow-login-from-tags.feature;validate-stackoverflow-login-with-incorrect-credentials-both-smoke-and-regression",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Smoke"
    },
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enters incorrect username and password",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User is displayed with error on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "feature1.user_click_on_login_home_page_buttong()"
});
formatter.result({
  "duration": 4304323304,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_enters_incorrect_username_and_password()"
});
formatter.result({
  "duration": 1003231947,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 683026455,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_is_displayed_with_error_on_login_page()"
});
formatter.result({
  "duration": 1086626264,
  "status": "passed"
});
formatter.after({
  "duration": 450233,
  "status": "passed"
});
});