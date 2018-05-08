$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("datadriven.feature");
formatter.feature({
  "line": 1,
  "name": "Stackoverflow Login from datadriven.feature",
  "description": "As a stackoverflow user , with valid credentials i should be able to successfully login",
  "id": "stackoverflow-login-from-datadriven.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Validate Stackoverflow login with correct credentials from datadriven.feature1",
  "description": "",
  "id": "stackoverflow-login-from-datadriven.feature;validate-stackoverflow-login-with-correct-credentials-from-datadriven.feature1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters correct \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User is successfully directed to the homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "stackoverflow-login-from-datadriven.feature;validate-stackoverflow-login-with-correct-credentials-from-datadriven.feature1;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "stackoverflow-login-from-datadriven.feature;validate-stackoverflow-login-with-correct-credentials-from-datadriven.feature1;;1"
    },
    {
      "cells": [
        "pratik",
        "pass1"
      ],
      "line": 14,
      "id": "stackoverflow-login-from-datadriven.feature;validate-stackoverflow-login-with-correct-credentials-from-datadriven.feature1;;2"
    },
    {
      "cells": [
        "thorve",
        "pass2"
      ],
      "line": 15,
      "id": "stackoverflow-login-from-datadriven.feature;validate-stackoverflow-login-with-correct-credentials-from-datadriven.feature1;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8860619583,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The user is on Stackoverflow homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "feature1.the_user_is_on_Stackoverflow_homepage()"
});
formatter.result({
  "duration": 5695044901,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate Stackoverflow login with correct credentials from datadriven.feature1",
  "description": "",
  "id": "stackoverflow-login-from-datadriven.feature;validate-stackoverflow-login-with-correct-credentials-from-datadriven.feature1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters correct \"pratik\" and \"pass1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User is successfully directed to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "feature1.user_click_on_login_home_page_buttong()"
});
formatter.result({
  "duration": 1239505583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pratik",
      "offset": 21
    },
    {
      "val": "pass1",
      "offset": 34
    }
  ],
  "location": "feature1.user_enters_correct_and(String,String)"
});
formatter.result({
  "duration": 243917850,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 108540065,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_is_successfully_directed_to_the_homepage()"
});
formatter.result({
  "duration": 255779832,
  "status": "passed"
});
formatter.after({
  "duration": 184290,
  "status": "passed"
});
formatter.before({
  "duration": 6198568066,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The user is on Stackoverflow homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "feature1.the_user_is_on_Stackoverflow_homepage()"
});
formatter.result({
  "duration": 6686634018,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate Stackoverflow login with correct credentials from datadriven.feature1",
  "description": "",
  "id": "stackoverflow-login-from-datadriven.feature;validate-stackoverflow-login-with-correct-credentials-from-datadriven.feature1;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters correct \"thorve\" and \"pass2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User is successfully directed to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "feature1.user_click_on_login_home_page_buttong()"
});
formatter.result({
  "duration": 1861584320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thorve",
      "offset": 21
    },
    {
      "val": "pass2",
      "offset": 34
    }
  ],
  "location": "feature1.user_enters_correct_and(String,String)"
});
formatter.result({
  "duration": 231844804,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 100577191,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_is_successfully_directed_to_the_homepage()"
});
formatter.result({
  "duration": 257234970,
  "status": "passed"
});
formatter.after({
  "duration": 83444,
  "status": "passed"
});
formatter.uri("datatable.feature");
formatter.feature({
  "line": 1,
  "name": "Stackoverflow Login (With data Table) from datatable.feature",
  "description": "As a stackoverflow user , with valid credentials i should be able to successfully login",
  "id": "stackoverflow-login-(with-data-table)-from-datatable.feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6114299930,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Validate Stackoverflow login with correct credentials from datatable.feature1",
  "description": "",
  "id": "stackoverflow-login-(with-data-table)-from-datatable.feature;validate-stackoverflow-login-with-correct-credentials-from-datatable.feature1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "The user is on Stackoverflow homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters following username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "pratik",
        "thorve"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User is successfully directed to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "feature1.the_user_is_on_Stackoverflow_homepage()"
});
formatter.result({
  "duration": 6667354447,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_click_on_login_home_page_buttong()"
});
formatter.result({
  "duration": 2147633784,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_enters_following_username_and_password(DataTable)"
});
formatter.result({
  "duration": 2184714,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 126681764,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_is_successfully_directed_to_the_homepage()"
});
formatter.result({
  "duration": 308893475,
  "status": "passed"
});
formatter.after({
  "duration": 99062,
  "status": "passed"
});
formatter.uri("feature1.feature");
formatter.feature({
  "line": 1,
  "name": "Stackoverflow Login from feature1.feature",
  "description": "As a stackoverflow user , with valid credentials i should be able to successfully login",
  "id": "stackoverflow-login-from-feature1.feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6612574157,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The user is on Stackoverflow homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "feature1.the_user_is_on_Stackoverflow_homepage()"
});
formatter.result({
  "duration": 6636190136,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Validate Stackoverflow login with correct credentials from feature1.feature1",
  "description": "",
  "id": "stackoverflow-login-from-feature1.feature;validate-stackoverflow-login-with-correct-credentials-from-feature1.feature1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters correct username and password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User is successfully directed to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "feature1.user_click_on_login_home_page_buttong()"
});
formatter.result({
  "duration": 1384936357,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_enters_correct_username_and_password()"
});
formatter.result({
  "duration": 312001428,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 109068395,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_is_successfully_directed_to_the_homepage()"
});
formatter.result({
  "duration": 233178121,
  "status": "passed"
});
formatter.after({
  "duration": 73627,
  "status": "passed"
});
formatter.before({
  "duration": 6002676008,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The user is on Stackoverflow homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "feature1.the_user_is_on_Stackoverflow_homepage()"
});
formatter.result({
  "duration": 5774964581,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate Stackoverflow login with incorrect credentials from feature1.feature2",
  "description": "",
  "id": "stackoverflow-login-from-feature1.feature;validate-stackoverflow-login-with-incorrect-credentials-from-feature1.feature2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters incorrect username and password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User is displayed with error on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "feature1.user_click_on_login_home_page_buttong()"
});
formatter.result({
  "duration": 1198720674,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_enters_incorrect_username_and_password()"
});
formatter.result({
  "duration": 365153445,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 106728841,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_is_displayed_with_error_on_login_page()"
});
formatter.result({
  "duration": 1251356856,
  "status": "passed"
});
formatter.after({
  "duration": 95046,
  "status": "passed"
});
formatter.uri("featureParameterized.feature");
formatter.feature({
  "line": 1,
  "name": "Stackoverflow Login  (Paramaterzied TC) from featureParameterized.feature",
  "description": "As a stackoverflow user , with valid credentials i should be able to successfully login",
  "id": "stackoverflow-login--(paramaterzied-tc)-from-featureparameterized.feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7407119956,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validate Stackoverflow login with correct credentials (Paramaterzied TC) from featureParameterized.feature1",
  "description": "",
  "id": "stackoverflow-login--(paramaterzied-tc)-from-featureparameterized.feature;validate-stackoverflow-login-with-correct-credentials-(paramaterzied-tc)-from-featureparameterized.feature1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "The user is on Stackoverflow homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username \"username@gmail.com\" and password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User is successfully directed to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "feature1.the_user_is_on_Stackoverflow_homepage()"
});
formatter.result({
  "duration": 12298848518,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_click_on_login_home_page_buttong()"
});
formatter.result({
  "duration": 1212780759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username@gmail.com",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 56
    }
  ],
  "location": "feature1.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 365347999,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 132536228,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_is_successfully_directed_to_the_homepage()"
});
formatter.result({
  "duration": 256462110,
  "status": "passed"
});
formatter.after({
  "duration": 110218,
  "status": "passed"
});
formatter.before({
  "duration": 5818641916,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate Stackoverflow login with incorrect credentials  (Paramaterzied TC) from featureParameterized.feature2",
  "description": "",
  "id": "stackoverflow-login--(paramaterzied-tc)-from-featureparameterized.feature;validate-stackoverflow-login-with-incorrect-credentials--(paramaterzied-tc)-from-featureparameterized.feature2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "The user is on Stackoverflow homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters username \"username1@gmail.com\" and password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User is displayed with error on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "feature1.the_user_is_on_Stackoverflow_homepage()"
});
formatter.result({
  "duration": 10095291217,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_click_on_login_home_page_buttong()"
});
formatter.result({
  "duration": 1092535782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username1@gmail.com",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 57
    }
  ],
  "location": "feature1.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 339781574,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 105383474,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_is_displayed_with_error_on_login_page()"
});
formatter.result({
  "duration": 256210440,
  "status": "passed"
});
formatter.after({
  "duration": 75412,
  "status": "passed"
});
formatter.uri("hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Stackoverflow Login from hooks.feature",
  "description": "As a stackoverflow user , with valid credentials i should be able to successfully login",
  "id": "stackoverflow-login-from-hooks.feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6105613279,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Validate Stackoverflow login with correct credentials from hooks.feature1",
  "description": "",
  "id": "stackoverflow-login-from-hooks.feature;validate-stackoverflow-login-with-correct-credentials-from-hooks.feature1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters correct username and password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User is successfully directed to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "feature1.user_click_on_login_home_page_buttong()"
});
formatter.result({
  "duration": 1105237559,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_enters_correct_username_and_password()"
});
formatter.result({
  "duration": 432265147,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 144845327,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_is_successfully_directed_to_the_homepage()"
});
formatter.result({
  "duration": 2151002331,
  "status": "passed"
});
formatter.after({
  "duration": 84336,
  "status": "passed"
});
formatter.before({
  "duration": 5919383318,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate Stackoverflow login with incorrect credentials from hooks.feature2",
  "description": "",
  "id": "stackoverflow-login-from-hooks.feature;validate-stackoverflow-login-with-incorrect-credentials-from-hooks.feature2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters incorrect username and password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User is displayed with error on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "feature1.user_click_on_login_home_page_buttong()"
});
formatter.result({
  "duration": 1252967727,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_enters_incorrect_username_and_password()"
});
formatter.result({
  "duration": 366852668,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 105675751,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_is_displayed_with_error_on_login_page()"
});
formatter.result({
  "duration": 263492822,
  "status": "passed"
});
formatter.after({
  "duration": 75858,
  "status": "passed"
});
formatter.uri("tags.feature");
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
  "duration": 6161337781,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The user is on Stackoverflow homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "feature1.the_user_is_on_Stackoverflow_homepage()"
});
formatter.result({
  "duration": 6244904006,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate Stackoverflow login with correct credentials from tags.feature1",
  "description": "",
  "id": "stackoverflow-login-from-tags.feature;validate-stackoverflow-login-with-correct-credentials-from-tags.feature1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters correct username and password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User is successfully directed to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "feature1.user_click_on_login_home_page_buttong()"
});
formatter.result({
  "duration": 1394004530,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_enters_correct_username_and_password()"
});
formatter.result({
  "duration": 441568032,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 126794212,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_is_successfully_directed_to_the_homepage()"
});
formatter.result({
  "duration": 251103848,
  "status": "passed"
});
formatter.after({
  "duration": 82105,
  "status": "passed"
});
formatter.before({
  "duration": 6831262034,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The user is on Stackoverflow homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "feature1.the_user_is_on_Stackoverflow_homepage()"
});
formatter.result({
  "duration": 7719954039,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validate Stackoverflow login with incorrect credentials from tags.feature2",
  "description": "",
  "id": "stackoverflow-login-from-tags.feature;validate-stackoverflow-login-with-incorrect-credentials-from-tags.feature2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters incorrect username and password",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User is displayed with error on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "feature1.user_click_on_login_home_page_buttong()"
});
formatter.result({
  "duration": 1290074408,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_enters_incorrect_username_and_password()"
});
formatter.result({
  "duration": 399634989,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 112776520,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_is_displayed_with_error_on_login_page()"
});
formatter.result({
  "duration": 2126471146,
  "status": "passed"
});
formatter.after({
  "duration": 73181,
  "status": "passed"
});
formatter.before({
  "duration": 5869704265,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The user is on Stackoverflow homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "feature1.the_user_is_on_Stackoverflow_homepage()"
});
formatter.result({
  "duration": 6048940998,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validate Stackoverflow login with incorrect credentials both smoke and regression",
  "description": "",
  "id": "stackoverflow-login-from-tags.feature;validate-stackoverflow-login-with-incorrect-credentials-both-smoke-and-regression",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Smoke"
    },
    {
      "line": 24,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User click on login home page buttong",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enters incorrect username and password",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User is displayed with error on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "feature1.user_click_on_login_home_page_buttong()"
});
formatter.result({
  "duration": 1297557145,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_enters_incorrect_username_and_password()"
});
formatter.result({
  "duration": 471029998,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 125119979,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_is_displayed_with_error_on_login_page()"
});
formatter.result({
  "duration": 319507814,
  "status": "passed"
});
formatter.after({
  "duration": 89691,
  "status": "passed"
});
});