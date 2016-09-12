$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginScenaries.feature");
formatter.feature({
  "line": 1,
  "name": "Login Scenarios",
  "description": "",
  "id": "login-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario 1"
    }
  ],
  "line": 4,
  "name": "Login with correct values",
  "description": "",
  "id": "login-scenarios;login-with-correct-values",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with this \"\u003cusername\u003e\" and this \"\u003cpassword\u003e\" values",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see my user profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I logout of the App",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I confirm the message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "App login should appears",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-scenarios;login-with-correct-values;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "login-scenarios;login-with-correct-values;;1"
    },
    {
      "cells": [
        "gvelasquez",
        "belatrix"
      ],
      "line": 15,
      "id": "login-scenarios;login-with-correct-values;;2"
    },
    {
      "cells": [
        "rrashuaman",
        "belatrix"
      ],
      "line": 16,
      "id": "login-scenarios;login-with-correct-values;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Login with correct values",
  "description": "",
  "id": "login-scenarios;login-with-correct-values;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with this \"gvelasquez\" and this \"belatrix\" values",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see my user profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I logout of the App",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I confirm the message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "App login should appears",
  "keyword": "Then "
});
formatter.match({
  "location": "loginOnApp.i_open_the_app()"
});
formatter.result({
  "duration": 10131798184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gvelasquez",
      "offset": 19
    },
    {
      "val": "belatrix",
      "offset": 41
    }
  ],
  "location": "loginOnApp.i_login_with_this_and_this_values(String,String)"
});
formatter.result({
  "duration": 16912160202,
  "status": "passed"
});
formatter.match({
  "location": "loginOnApp.i_see_my_user_profile_page()"
});
formatter.result({
  "duration": 15608487339,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027jestrada\u0027, ip: \u0027192.168.1.187\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities [{networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003dCB5A28Q2LU, platform\u003dLINUX, desired\u003d{platformVersion\u003d6.0.1, platformName\u003dAndroid, deviceName\u003dCB5A28Q2LU}, platformVersion\u003d6.0.1, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, browserName\u003dAndroid, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dAndroid}]\nSession ID: ce6a8b58-004b-4708-a730-d8ee27be54d0\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:899)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:181)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:178)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\r\n\tat Motor.testBasicMethods.handlingWaits(testBasicMethods.java:136)\r\n\tat Pages.toolBar.openMenuSideBar(toolBar.java:33)\r\n\tat Steps.loginOnApp.i_see_my_user_profile_page(loginOnApp.java:49)\r\n\tat ✽.Then I see my user profile page(LoginScenaries.feature:7)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 192.168.1.187:4723 [/192.168.1.187] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:140)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:314)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:363)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:219)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:195)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:86)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:108)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:186)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:144)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:899)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:181)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:178)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\r\n\tat Motor.testBasicMethods.handlingWaits(testBasicMethods.java:136)\r\n\tat Pages.toolBar.openMenuSideBar(toolBar.java:33)\r\n\tat Steps.loginOnApp.i_see_my_user_profile_page(loginOnApp.java:49)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:163)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:43)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run_cukes(AbstractTestNGCucumberTests.java:14)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.MethodInvocationHelper$1.runTestMethod(MethodInvocationHelper.java:200)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run(AbstractTestNGCucumberTests.java:19)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeHookable(MethodInvocationHelper.java:212)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:689)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:882)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1189)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:124)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:126)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:152)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:57)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:72)\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:117)\r\n\t... 71 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginOnApp.i_logout_of_the_App()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.I_confirm_the_message_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.App_login_should_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Login with correct values",
  "description": "",
  "id": "login-scenarios;login-with-correct-values;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with this \"rrashuaman\" and this \"belatrix\" values",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see my user profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I logout of the App",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I confirm the message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "App login should appears",
  "keyword": "Then "
});
formatter.match({
  "location": "loginOnApp.i_open_the_app()"
});
formatter.result({
  "duration": 1004587658,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027jestrada\u0027, ip: \u0027192.168.1.187\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:158)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:39)\r\n\tat Motor.testBasicMethods.getConnection(testBasicMethods.java:26)\r\n\tat Steps.loginOnApp.i_open_the_app(loginOnApp.java:33)\r\n\tat ✽.Given I open the app(LoginScenaries.feature:5)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 192.168.1.187:4723 [/192.168.1.187] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:140)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:314)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:363)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:219)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:195)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:86)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:108)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:186)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:144)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:158)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:39)\r\n\tat Motor.testBasicMethods.getConnection(testBasicMethods.java:26)\r\n\tat Steps.loginOnApp.i_open_the_app(loginOnApp.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:163)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:43)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run_cukes(AbstractTestNGCucumberTests.java:14)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.MethodInvocationHelper$1.runTestMethod(MethodInvocationHelper.java:200)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run(AbstractTestNGCucumberTests.java:19)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeHookable(MethodInvocationHelper.java:212)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:689)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:882)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1189)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:124)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:126)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:152)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:57)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:72)\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:117)\r\n\t... 66 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "rrashuaman",
      "offset": 19
    },
    {
      "val": "belatrix",
      "offset": 41
    }
  ],
  "location": "loginOnApp.i_login_with_this_and_this_values(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.i_see_my_user_profile_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.i_logout_of_the_App()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.I_confirm_the_message_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.App_login_should_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 20,
      "value": "#Scenario 2"
    }
  ],
  "line": 21,
  "name": "Login with incorrect username",
  "description": "",
  "id": "login-scenarios;login-with-incorrect-username",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I login with this \"\u003cusername\u003e\" and this \"\u003cpassword\u003e\" values",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I see an error message for invalid login",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-scenarios;login-with-incorrect-username;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 28,
      "id": "login-scenarios;login-with-incorrect-username;;1"
    },
    {
      "cells": [
        "gvelasquess",
        "belatrix"
      ],
      "line": 29,
      "id": "login-scenarios;login-with-incorrect-username;;2"
    },
    {
      "cells": [
        "rrashuamamm",
        "belatrix"
      ],
      "line": 30,
      "id": "login-scenarios;login-with-incorrect-username;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Login with incorrect username",
  "description": "",
  "id": "login-scenarios;login-with-incorrect-username;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I login with this \"gvelasquess\" and this \"belatrix\" values",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I see an error message for invalid login",
  "keyword": "Then "
});
formatter.match({
  "location": "loginOnApp.i_open_the_app()"
});
formatter.result({
  "duration": 1004247604,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027jestrada\u0027, ip: \u0027192.168.1.187\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:158)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:39)\r\n\tat Motor.testBasicMethods.getConnection(testBasicMethods.java:26)\r\n\tat Steps.loginOnApp.i_open_the_app(loginOnApp.java:33)\r\n\tat ✽.Given I open the app(LoginScenaries.feature:22)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 192.168.1.187:4723 [/192.168.1.187] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:140)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:314)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:363)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:219)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:195)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:86)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:108)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:186)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:144)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:158)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:39)\r\n\tat Motor.testBasicMethods.getConnection(testBasicMethods.java:26)\r\n\tat Steps.loginOnApp.i_open_the_app(loginOnApp.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:163)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:43)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run_cukes(AbstractTestNGCucumberTests.java:14)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.MethodInvocationHelper$1.runTestMethod(MethodInvocationHelper.java:200)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run(AbstractTestNGCucumberTests.java:19)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeHookable(MethodInvocationHelper.java:212)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:689)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:882)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1189)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:124)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:126)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:152)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:57)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:72)\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:117)\r\n\t... 66 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "gvelasquess",
      "offset": 19
    },
    {
      "val": "belatrix",
      "offset": 42
    }
  ],
  "location": "loginOnApp.i_login_with_this_and_this_values(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.I_see_an_error_message_for_invalid_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "Login with incorrect username",
  "description": "",
  "id": "login-scenarios;login-with-incorrect-username;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I login with this \"rrashuamamm\" and this \"belatrix\" values",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I see an error message for invalid login",
  "keyword": "Then "
});
formatter.match({
  "location": "loginOnApp.i_open_the_app()"
});
formatter.result({
  "duration": 1004632817,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027jestrada\u0027, ip: \u0027192.168.1.187\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:158)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:39)\r\n\tat Motor.testBasicMethods.getConnection(testBasicMethods.java:26)\r\n\tat Steps.loginOnApp.i_open_the_app(loginOnApp.java:33)\r\n\tat ✽.Given I open the app(LoginScenaries.feature:22)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 192.168.1.187:4723 [/192.168.1.187] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:140)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:314)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:363)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:219)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:195)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:86)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:108)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:186)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:144)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:158)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:39)\r\n\tat Motor.testBasicMethods.getConnection(testBasicMethods.java:26)\r\n\tat Steps.loginOnApp.i_open_the_app(loginOnApp.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:163)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:43)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run_cukes(AbstractTestNGCucumberTests.java:14)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.MethodInvocationHelper$1.runTestMethod(MethodInvocationHelper.java:200)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run(AbstractTestNGCucumberTests.java:19)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeHookable(MethodInvocationHelper.java:212)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:689)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:882)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1189)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:124)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:126)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:152)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:57)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:72)\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:117)\r\n\t... 66 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "rrashuamamm",
      "offset": 19
    },
    {
      "val": "belatrix",
      "offset": 42
    }
  ],
  "location": "loginOnApp.i_login_with_this_and_this_values(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.I_see_an_error_message_for_invalid_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 33,
      "value": "#Scenario 3"
    }
  ],
  "line": 34,
  "name": "Login with incorrect password",
  "description": "",
  "id": "login-scenarios;login-with-incorrect-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I login with this \"\u003cusername\u003e\" and this \"\u003cpassword\u003e\" values",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I see an error message for invalid login",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "login-scenarios;login-with-incorrect-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 41,
      "id": "login-scenarios;login-with-incorrect-password;;1"
    },
    {
      "cells": [
        "gvelasques",
        "belatrix1"
      ],
      "line": 42,
      "id": "login-scenarios;login-with-incorrect-password;;2"
    },
    {
      "cells": [
        "rrashuamam",
        "belatrix1"
      ],
      "line": 43,
      "id": "login-scenarios;login-with-incorrect-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 42,
  "name": "Login with incorrect password",
  "description": "",
  "id": "login-scenarios;login-with-incorrect-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I login with this \"gvelasques\" and this \"belatrix1\" values",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I see an error message for invalid login",
  "keyword": "Then "
});
formatter.match({
  "location": "loginOnApp.i_open_the_app()"
});
formatter.result({
  "duration": 1004471684,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027jestrada\u0027, ip: \u0027192.168.1.187\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:158)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:39)\r\n\tat Motor.testBasicMethods.getConnection(testBasicMethods.java:26)\r\n\tat Steps.loginOnApp.i_open_the_app(loginOnApp.java:33)\r\n\tat ✽.Given I open the app(LoginScenaries.feature:35)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 192.168.1.187:4723 [/192.168.1.187] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:140)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:314)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:363)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:219)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:195)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:86)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:108)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:186)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:144)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:158)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:39)\r\n\tat Motor.testBasicMethods.getConnection(testBasicMethods.java:26)\r\n\tat Steps.loginOnApp.i_open_the_app(loginOnApp.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:163)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:43)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run_cukes(AbstractTestNGCucumberTests.java:14)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.MethodInvocationHelper$1.runTestMethod(MethodInvocationHelper.java:200)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run(AbstractTestNGCucumberTests.java:19)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeHookable(MethodInvocationHelper.java:212)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:689)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:882)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1189)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:124)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:126)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:152)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:57)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:72)\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:117)\r\n\t... 66 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "gvelasques",
      "offset": 19
    },
    {
      "val": "belatrix1",
      "offset": 41
    }
  ],
  "location": "loginOnApp.i_login_with_this_and_this_values(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.I_see_an_error_message_for_invalid_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 43,
  "name": "Login with incorrect password",
  "description": "",
  "id": "login-scenarios;login-with-incorrect-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I login with this \"rrashuamam\" and this \"belatrix1\" values",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I see an error message for invalid login",
  "keyword": "Then "
});
formatter.match({
  "location": "loginOnApp.i_open_the_app()"
});
formatter.result({
  "duration": 1003408415,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027jestrada\u0027, ip: \u0027192.168.1.187\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:158)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:39)\r\n\tat Motor.testBasicMethods.getConnection(testBasicMethods.java:26)\r\n\tat Steps.loginOnApp.i_open_the_app(loginOnApp.java:33)\r\n\tat ✽.Given I open the app(LoginScenaries.feature:35)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 192.168.1.187:4723 [/192.168.1.187] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:140)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:314)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:363)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:219)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:195)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:86)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:108)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:186)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:144)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:158)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:39)\r\n\tat Motor.testBasicMethods.getConnection(testBasicMethods.java:26)\r\n\tat Steps.loginOnApp.i_open_the_app(loginOnApp.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:163)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:43)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run_cukes(AbstractTestNGCucumberTests.java:14)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.MethodInvocationHelper$1.runTestMethod(MethodInvocationHelper.java:200)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run(AbstractTestNGCucumberTests.java:19)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeHookable(MethodInvocationHelper.java:212)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:689)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:882)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1189)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:124)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:126)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:152)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:57)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:72)\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:117)\r\n\t... 66 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "rrashuamam",
      "offset": 19
    },
    {
      "val": "belatrix1",
      "offset": 41
    }
  ],
  "location": "loginOnApp.i_login_with_this_and_this_values(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.I_see_an_error_message_for_invalid_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("PasswordRecovery.feature");
formatter.feature({
  "line": 1,
  "name": "Password Recovery Option and Login",
  "description": "",
  "id": "password-recovery-option-and-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario 1"
    }
  ],
  "line": 4,
  "name": "Login after Password Recovered",
  "description": "",
  "id": "password-recovery-option-and-login;login-after-password-recovered",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with this \"\u003cusername\u003e\" and this \"\u003cpassword\u003e\" values",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "App show me a message of error",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I go to Forgot Password option",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I request my New Passowrd after input my Email",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I confirm the message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "App login should appears",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "password-recovery-option-and-login;login-after-password-recovered;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "password-recovery-option-and-login;login-after-password-recovered;;1"
    },
    {
      "cells": [
        "bestrada",
        "rb751"
      ],
      "line": 16,
      "id": "password-recovery-option-and-login;login-after-password-recovered;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Login after Password Recovered",
  "description": "",
  "id": "password-recovery-option-and-login;login-after-password-recovered;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with this \"bestrada\" and this \"rb751\" values",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "App show me a message of error",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I go to Forgot Password option",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I request my New Passowrd after input my Email",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I confirm the message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "App login should appears",
  "keyword": "Then "
});
formatter.match({
  "location": "loginOnApp.i_open_the_app()"
});
formatter.result({
  "duration": 1010009032,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027jestrada\u0027, ip: \u0027192.168.1.187\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:158)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:39)\r\n\tat Motor.testBasicMethods.getConnection(testBasicMethods.java:26)\r\n\tat Steps.loginOnApp.i_open_the_app(loginOnApp.java:33)\r\n\tat ✽.Given I open the app(PasswordRecovery.feature:5)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 192.168.1.187:4723 [/192.168.1.187] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:140)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:314)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:363)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:219)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:195)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:86)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:108)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:186)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:144)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:158)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:39)\r\n\tat Motor.testBasicMethods.getConnection(testBasicMethods.java:26)\r\n\tat Steps.loginOnApp.i_open_the_app(loginOnApp.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:163)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:43)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run_cukes(AbstractTestNGCucumberTests.java:14)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.MethodInvocationHelper$1.runTestMethod(MethodInvocationHelper.java:200)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run(AbstractTestNGCucumberTests.java:19)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeHookable(MethodInvocationHelper.java:212)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:689)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:882)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1189)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:124)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:126)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:152)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:57)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:72)\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:117)\r\n\t... 66 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "bestrada",
      "offset": 19
    },
    {
      "val": "rb751",
      "offset": 39
    }
  ],
  "location": "loginOnApp.i_login_with_this_and_this_values(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.App_show_me_a_message_of_error()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.I_go_to_Forgot_Password_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.I_request_my_New_Passowrd_after_input_my_Email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.I_confirm_the_message_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginOnApp.App_login_should_appears()"
});
formatter.result({
  "status": "skipped"
});
});