$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureFiles/feature1.feature");
formatter.feature({
  "line": 1,
  "name": "Stackoverflow Login from feature1.feature",
  "description": "As a stackoverflow user , with valid credentials i should be able to successfully login",
  "id": "stackoverflow-login-from-feature1.feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11673302265,
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
  "duration": 10731779028,
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
  "duration": 1288619054,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_enters_correct_username_and_password()"
});
formatter.result({
  "duration": 454564034,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 109459252,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cinput class\u003d\"fr\" type\u003d\"button\" id\u003d\"submit-button\" name\u003d\"submit-button\" value\u003d\"Log in\"\u003e is not clickable at point (627, 503). Other element would receive the click: \u003cp class\u003d\"mb0 lh-lg\"\u003e...\u003c/p\u003e\n  (Session info: chrome\u003d66.0.3359.181)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027L079322\u0027, ip: \u0027142.63.4.239\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528161 (5b82f2d2aae0ca..., userDataDir: C:\\Users\\x173479\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.181, webStorageEnabled: true}\nSession ID: 0765c4b1d5fef3d314513ace59f4e7c8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat stepDef.feature1.user_clicks_on_login_Button(feature1.java:87)\r\n\tat ✽.And User clicks on login Button(src/test/resources/FeatureFiles/feature1.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "feature1.user_is_successfully_directed_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 846480,
  "status": "passed"
});
formatter.before({
  "duration": 11327380006,
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
  "duration": 12043612263,
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
  "duration": 1243771207,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_enters_incorrect_username_and_password()"
});
formatter.result({
  "duration": 257759776,
  "status": "passed"
});
formatter.match({
  "location": "feature1.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 80512030,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cinput class\u003d\"fr\" type\u003d\"button\" id\u003d\"submit-button\" name\u003d\"submit-button\" value\u003d\"Log in\"\u003e is not clickable at point (627, 503). Other element would receive the click: \u003cp class\u003d\"mb0 lh-lg\"\u003e...\u003c/p\u003e\n  (Session info: chrome\u003d66.0.3359.181)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027L079322\u0027, ip: \u0027142.63.4.239\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528161 (5b82f2d2aae0ca..., userDataDir: C:\\Users\\x173479\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.181, webStorageEnabled: true}\nSession ID: 61788c5e5135536addb638114e454c9f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat stepDef.feature1.user_clicks_on_login_Button(feature1.java:87)\r\n\tat ✽.And User clicks on login Button(src/test/resources/FeatureFiles/feature1.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "feature1.user_is_displayed_with_error_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 39714,
  "status": "passed"
});
});