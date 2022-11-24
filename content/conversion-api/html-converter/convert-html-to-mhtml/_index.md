---
title: Convert HTML to MHTML - Cloud SDKs
linktitle: Convert HTML to MHTML
type: docs
aliases: /conversion-sdk-api/convert-html-to-mhtml/
keywords: convert html, convert html to mhtml, html to mhtml, html to mhtml conversion, SDK example, Python, PHP, Perl, Android, Swift, C#, Java, Node.js, curl
description: Learn how to use Cloud SDKs and REST API to convert HTML to MHTML. SDKs are available in PHP, Perl, Python, C#, Java, Swift and more.
weight: 100
url: /convert-html-to-mhtml/
lastmod: 2022-11-03
---

## **Summary**

Aspose.HTML Cloud v4.0 provides the simplest API to convert {{%HTML%}} documents to {{%MHTML%}} format with high quality, easy and fast. This article contains a set of code examples that explain how to convert HTML to MHTML using available SDKs and REST API.

## **Examples of HTML to MHTML Conversion**

Aspose.HTML Cloud allows you to fetch an HTML document from a storage location by its name, from a URL or a local file on your drive, convert it to the specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert HTML to MHTML programmatically for different cases.

### **Example 1.**  Convert a local HTML file to MHTML and save the result to local path

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example demonstrates the simplest way to convert **HTML to MHTML C#** language applying. Local HTML converted to MHTML and saved to the local path. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert from HTML file to MHTML file
var result = await api.ConvertAsync("test.html", "test.mhtml");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to MHTML java** language applying. Local HTML converted to MHTML and saved to the local path. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.html")
                .saveToLocal("output.mhtml");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to MHTML** C++ language applying. Local HTML converted to MHTML and saved to the local path.

```c++
// Get current directory
std::string cur_dir(argv[0]);
int pos = cur_dir.find_last_of("/\\");
cur_dir = cur_dir.substr(0, pos + 1); // Include the last slash
std::wstring w_cur_dir(cur_dir.begin(), cur_dir.end());

const utility::string_t clientId = L"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const utility::string_t clientSecret = L"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const utility::string_t basePath = L"https://api.aspose.cloud/v4.0";
const utility::string_t authPath = L"https://api.aspose.cloud/connect/token";

// Create configuration for authorization
std::shared_ptr<ApiConfiguration> apiConfig(new ApiConfiguration(clientId, clientSecret, basePath, authPath));

// Create client from configuration
std::shared_ptr<ApiClient> apiClient(new ApiClient(apiConfig));

// Create ConversionApi
std::shared_ptr<ConversionApi> api = std::make_shared<ConversionApi>(apiClient);

// File name for conversion
utility::string_t src = w_cur_dir + L"test.html";
utility::string_t dst = w_cur_dir + L"result.mhtml";

//Conversion
auto result = api->convertLocalToLocal(src, dst);

// Check the result file
auto re = result->getFile();
std::ifstream f(re.c_str());
if(!f.good())
{
    throw std::runtime_error("Conversion failed");
}
```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to MHTML Python** language applying. Local HTML converted to MHTML and saved to the local path. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python
from asposehtmlcloud.configuration import Configuration
from asposehtmlcloud.api.html_api import HtmlApi
from asposehtmlcloud.api_client import ApiClient as Client
from asposehtmlcloud.rest import ApiException

configuration = Configuration(apiKey="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                              appSid="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
                              basePath="https://api.aspose.cloud/v4.0",
                              authPath="https://api.aspose.cloud/connect/token",
                              debug=True)
client = Client(configuration)
html_api = HtmlApi(client)

try:
    res = html_api.convertApi.convert_local_to_local(input_file="test.html", output_file="test.mhtml")
except ApiException as ex:
    print("Exception")
    print("Info: " + str(ex))
    raise ex
```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to MHTML MHTML** language applying. Local HTML converted to MHTML and saved to the local path. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$conf = array(
	"basePath" => "https://api.aspose.cloud/v4.0",
	"authPath" => "https://api.aspose.cloud/connect/token",
	"apiKey" => "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	"appSID" => "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
	"defaultUserAgent" => "Webkit"
);

$api_html = new Client\Invoker\Api\HtmlApi($conf);

$src = 'input.html';
$dst = 'output.mhtml';

try {
    //Request to server Api
    $result = $api_html->convertLocalToLocal($src, $dst);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HtmlApi->convertLocalToLocal: ', $e->getMessage(), PHP_EOL;
}

?>
```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to MHTML Ruby** language applying. Local HTML converted to MHTML and saved to the local path. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby
# load the gem
require 'aspose_html_cloud'

# Get keys from aspose site.
# There is free quota available. 
# For more details, see https://purchase.aspose.cloud/pricing

CONFIG = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "debug":true
}

api_instance = AsposeHtml::HtmlApi.new CONFIG

src = "test.html"   # String | Full path to the input file.
dst = "test.mhtml"  # String | Full path to the result.

begin
  #Convert the document from the local file and save result to the local file.
  result = api_instance.convert_local_to_local(src, dst)
  p result
rescue AsposeHtml::ApiError => e
  puts "Exception when calling api_instance.convert_local_to_local: #{e}"
end
```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to MHTML Node.js** language applying. Local HTML converted to MHTML and saved to the local path.

```javascript
// Get keys from aspose site.
// There is free quota available. 
// For more details, see https://purchase.aspose.cloud/pricing
	
var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"NodeJsWebkit"
};

var api = require('@asposecloud/aspose-html-cloud');

// Create Conversion Api object
var conversionApi = new api.ConversionApi(conf);

var src = "/path/to/src/test.html";  // {String} Source document.
var dst = "/path/to/dst/test.mhtml"; // {String} Result document.
var opts = null;

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);  
  }
};

conversionApi.convertLocalToLocal(src, dst, opts, callback);
```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to MHTML Swift** language applying. Local HTML converted to MHTML and saved to the local path. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift
import Alamofire
import Foundation
import XCTest
import AsposeHtmlCloud

static let fm = FileManager.default
let resourceDir = fm.homeDirectoryForCurrentUser.appendingPathComponent("Documents/Aspose.HTML.Cloud.SDK.Swift/Tests/AsposeHtmlCloudTests/Resources")
let resultDir = fm.homeDirectoryForCurrentUser.appendingPathComponent("Documents/Aspose.HTML.Cloud.SDK.Swift/Tests/AsposeHtmlCloudTests/TestResult")

func url(forResource fileName: String) -> URL {
	return resourceDir.appendingPathComponent(fileName)
}

func fileExist(name: String) -> Bool {
	return FileManager.default.fileExists(atPath: name)
}

ClientAPI.setConfig(
	basePath: "https://api.aspose.cloud/v4.0", 
	authPath: "https://api.aspose.cloud/connect/token", 
	apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", 
	appSID: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", 
	debugging: true
)

let fileName = "test.html"
let format = "mhtml"
let src = url(forResource: fileName).absoluteString

let expectation = self.expectation(description: "testConvert to \(format)")
let dst = resultDir.appendingPathComponent("Output.\(format)").absoluteString
HtmlAPI.convertLocalToLocal(src: src, dst: dst, options: nil) { (data, error) in

	guard error == nil else {
		XCTFail("Error convert html to \(format)). Error=\(error!.localizedDescription)")
		return
	}
	let resultPath = data!.file!
	XCTAssertTrue(fileExist(name: resultPath))
	expectation.fulfill()
}
self.waitForExpectations(timeout: testTimeout, handler: nil)
```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to MHTML Java/Android** applying. Local HTML converted to MHTML and saved to the local path. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.html")
                .saveToLocal("output.mhtml");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to MHTML** REST API applying. Local HTML converted to MHTML and saved to the local path. Follow a few required steps:
- Upload local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-mhtml" \
    -d "{'InputPath': '/testpage.html', 'OutputFile': 'test.mhtml'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}

### **Example 2.** Convert a Web page to MHTML and save the result to the local file system

Aspose.HTML Cloud allows you to get an HTML page from the web by its URL, convert it to another format and save into the local file system. The example below demonstrates how to convert HTML to MHTML with the default conversion parameters.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **HTML to MHTML C#** language applying. HTML is taken from the Web, converted to MHTML and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert HTML to MHTML using ConvertUrlAsync() method
var result = await api.ConvertUrlAsync("https://example.com", "test.mhtml");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **HTML to MHTML java** language applying. HTML is taken from the Web, converted to MHTML and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromUrl("https://example.com")
                .saveToLocal("output.mhtml");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to MHTML C++** language applying. HTML is taken from the Web, converted to MHTML and saved to the local file system. 

```c++
// Get current directory
std::string cur_dir(argv[0]);
int pos = cur_dir.find_last_of("/\\");
cur_dir = cur_dir.substr(0, pos + 1); // Include the last slash
std::wstring w_cur_dir(cur_dir.begin(), cur_dir.end());

const utility::string_t clientId = L"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const utility::string_t clientSecret = L"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const utility::string_t basePath = L"https://api.aspose.cloud/v4.0";
const utility::string_t authPath = L"https://api.aspose.cloud/connect/token";

// Create configuration for authorization
std::shared_ptr<ApiConfiguration> apiConfig(new ApiConfiguration(clientId, clientSecret, basePath, authPath));

// Create client from configuration
std::shared_ptr<ApiClient> apiClient(new ApiClient(apiConfig));

// Create ConversionApi
std::shared_ptr<ConversionApi> api = std::make_shared<ConversionApi>(apiClient);

// File name for conversion
utility::string_t src = L"https://example.com";
utility::string_t dst = w_cur_dir + L"result.mhtml";

//Conversion
auto result = api->convertUrlToLocal(src, dst);

// Check the result file
auto re = result->getFile();
std::ifstream f(re.c_str());
if(!f.good())
{
    throw std::runtime_error("Conversion failed");
}
```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **HTML to MHTML Python** language applying. HTML is taken from the Web, converted to MHTML and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python
import os
from asposehtmlcloud.configuration import Configuration
from asposehtmlcloud.api.html_api import HtmlApi
from asposehtmlcloud.api_client import ApiClient as Client
from asposehtmlcloud.rest import ApiException

# Get keys from aspose site.
# There is free quota available. 
# For more details, see https://purchase.aspose.cloud/pricing

configuration = Configuration(apiKey="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                              appSid="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
                              basePath="https://api.aspose.cloud/v4.0",
                              authPath="https://api.aspose.cloud/connect/token",
                              debug=True)

client = Client(configuration)
html_api = HtmlApi(client)

try:
    res = html_api.convert_url_to_local(input_file="https://example.com", output_file="result.mhtml")
    if not os.path.exists(res.file):
        print('conversion failed')
except ApiException as ex:
    print("Exception")
    print("Info: " + str(ex))
    raise ex
```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to MHTML PHP** language applying. HTML is taken from the Web, converted to MHTML and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$conf = array(
	"basePath" => "https://api.aspose.cloud/v4.0",
	"authPath" => "https://api.aspose.cloud/connect/token",
	"apiKey" => "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	"appSID" => "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
	"defaultUserAgent" => "Webkit"
);

$api_html = new Client\Invoker\Api\HtmlApi($conf);

$src = 'https://example.com';
$dst = 'output.mhtml';

try {
    //Request to server Api
    $result = $api_html->convertUrlToLocal($src, $dst);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HtmlApi->convertUrlToLocal: ', $e->getMessage(), PHP_EOL;
}
?>
```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **HTML to MHTML Ruby** language applying. HTML is taken from the Web, converted to MHTML and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby
# load the gem
require 'aspose_html_cloud'

# Get keys from aspose site.
# There is free quota available. 
# For more details, see https://purchase.aspose.cloud/pricing


CONFIG = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "debug":true
}

api_instance = AsposeHtml::HtmlApi.new CONFIG

src = "https://example.com"  # String | Input url.
dst = "test.mhtml"           # String | Result file.

begin
  #Convert the HTML file from the web and save result to the local file.
  result = api_instance.convert_url_to_local(src, dst)
  p result
rescue AsposeHtml::ApiError => e
  puts "Exception when calling api_instance.convert_url_to_local: #{e}"
end
```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **HTML to MHTML Node.js** language applying. HTML is taken from the Web, converted to MHTML and saved to the local file system. 

```javascript
// Get keys from aspose site.
// There is free quota available. 
// For more details, see https://purchase.aspose.cloud/pricing
	
var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"NodeJsWebkit"
};

var api = require('@asposecloud/aspose-html-cloud');

// Create Conversion Api object
var conversionApi = new api.ConversionApi(conf);

var src = "https://example.com";     // {String} Url for conversion.
var dst = "/path/to/dst/test.mhtml"; // {String} Result document.
var opts = null;

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);  
  }
};

conversionApi.convertUrlToLocal(src, dst, opts, callback);
```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **HTML to MHTML Swift** language applying. HTML is taken from the Web, converted to MHTML and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift
import Alamofire
import Foundation
import XCTest
import AsposeHtmlCloud

static let fm = FileManager.default
let resultDir = fm.homeDirectoryForCurrentUser.appendingPathComponent("Documents/Aspose.HTML.Cloud.SDK.Swift/Tests/AsposeHtmlCloudTests/TestResult")

func fileExist(name: String) -> Bool {
	return FileManager.default.fileExists(atPath: name)
}

ClientAPI.setConfig(
	basePath: "https://api.aspose.cloud/v4.0", 
	authPath: "https://api.aspose.cloud/connect/token", 
	apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", 
	appSID: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", 
	debugging: true
)

let format = "mhtml"
let src = "https://example.com"
let dst = resultDir.appendingPathComponent("Output.\(format)").absoluteString

let expectation = self.expectation(description: "testConvert to \(format)")

HtmlAPI.convertUrlToLocal(src: src, dst: dst, options: nil) { (data, error) in

	guard error == nil else {
		XCTFail("Error convert web site to \(format)). Error=\(error!.localizedDescription)")
		return
	}
	let resultPath = data!.file!
	XCTAssertTrue(fileExist(name: resultPath))
	expectation.fulfill()
}
self.waitForExpectations(timeout: testTimeout, handler: nil)
```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **HTML to MHTML Java/Android** applying. HTML is taken from the Web, converted to MHTML and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromUrl("https://example.com")
                .saveToLocal("output.mhtml");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to MHTML** using REST API. HTML is taken from the Web, converted to MHTML and saved to the local file system. Follow a few required steps:
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-mhtml" \
    -d "{'InputPath': 'https://example.com', 'OutputFile': 'test.mhtml'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}

HTML to MHTML conversion occurs with the **default conversion options**: the resulting MHTML document’s width and height correspond to A4, all margins have zero value.

### **Example 3.** Convert HTML to MHTML inside cloud storage

Aspose.HTML Cloud allows you to get an HTML file from your cloud storage and save conversion result back to cloud storage.

{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **HTML to MHTML C#** language applying. HTML file is located in cloud storage, converted to MHTML and saved back to the cloud storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert HTML to MHTML
var builder = new ConverterBuilder()
                .FromStorageFile("/test.html")
                .ToStorageFile("/test.mhtml");
                
var result = await api.ConvertAsync(builder);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **HTML to MHTML java** language applying. HTML file is in the cloud storage, converted to MHTML and saved back to the cloud storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromStorageFile("input.html")
                .saveToStorage("output.mhtml");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to MHTML C++** language applying. HTML file is in cloud storage, converted to MHTML and saved back to the cloud storage. 

```c++
const utility::string_t clientId = L"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const utility::string_t clientSecret = L"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const utility::string_t basePath = L"https://api.aspose.cloud/v4.0";
const utility::string_t authPath = L"https://api.aspose.cloud/connect/token";

// Create configuration for authorization
std::shared_ptr<ApiConfiguration> apiConfig(new ApiConfiguration(clientId, clientSecret, basePath, authPath));

// Create client from configuration
std::shared_ptr<ApiClient> apiClient(new ApiClient(apiConfig));

// Create ConversionApi
std::shared_ptr<ConversionApi> api = std::make_shared<ConversionApi>(apiClient);

// File name for conversion
utility::string_t src = L"file/in/storage/index.html";
utility::string_t dst = L"result/in/storage/result.mhtml";

//Conversion
auto result = api->convertStorageToStorage(src, dst);
```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **HTML to MHTML Python** language applying. HTML file is in cloud storage, converted to MHTML and saved back to the cloud storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python
from asposehtmlcloud.configuration import Configuration
from asposehtmlcloud.api.html_api import HtmlApi
from asposehtmlcloud.api_client import ApiClient as Client
from asposehtmlcloud.rest import ApiException

configuration = Configuration(apiKey="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                              appSid="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
                              basePath="https://api.aspose.cloud/v4.0",
                              authPath="https://api.aspose.cloud/connect/token",
                              debug=True)
client = Client(configuration)
html_api = HtmlApi(client)

try:
    res = html_api.convertApi.convert_storage_to_storage(input_file="test.html", output_file="test.mhtml",
                                                         storage_name=None)
except ApiException as ex:
    print("Exception")
    print("Info: " + str(ex))
    raise ex
```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to MHTML PHP** language applying. HTML file is in cloud storage, converted to MHTML and saved back to the cloud storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$configuration = array(
    "basePath" => "https://api.aspose.cloud/v4.0",
    "authPath" => "https://api.aspose.cloud/connect/token",
    "apiKey" => "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID" => "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent" => "Webkit"
);

$api_html = new HtmlApi($configuration);

$src = "FolderInStorage/test.html";
$dst = 'FolderInStorage/test.mhtml';
$options = null;

try {
    $result = $api_html->convertStorageToStorage($src, $dst, null, $options);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling $api_html->convertStorageToStorage: ', $e->getMessage(), PHP_EOL;
}
?>
```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **HTML to MHTML Ruby** language applying. HTML file is in cloud storage, converted to MHTML and saved back to the cloud storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby
# load the gem
require 'aspose_html_cloud'

# Get keys from aspose site.
# There is free quota available. 
# For more details, see https://purchase.aspose.cloud/pricing


CONFIG = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "debug":true
}

api_instance = AsposeHtml::HtmlApi.new CONFIG

src = "FolderInStorage/test.html"  # String | Source file.
dst = "FolderInStorage/test.mhtml" # String | Result file.
storage = nil

begin
  #Convert the file from the storage and save result to the storage.
  result = api_instance.convert_storage_to_storage(src, dst, storage)
  p result
rescue AsposeHtml::ApiError => e
  puts "Exception when calling api_instance.convert_storage_to_storage: #{e}"
end
```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **HTML to MHTML Node.js** language applying. HTML file is in cloud storage, converted to MHTML and saved back to the cloud storage. 

```javascript
// Get keys from aspose site.
// There is free quota available. 
// For more details, see https://purchase.aspose.cloud/pricing
	
var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"NodeJsWebkit"
};

var api = require('@asposecloud/aspose-html-cloud');

// Create Conversion Api object
var conversionApi = new api.ConversionApi(conf);

var src = "FolderInStorage/test.html";  // {String} Source document.
var dst = "FolderInStorage/test.mhtml"; // {String} Result document.
var opts = null;
var storage = null;

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);  
  }
};

conversionApi.convertStorageToStorage(src, dst, storage, opts, callback);
```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **HTML to MHTML Swift** language applying. HTML file is in cloud storage, converted to MHTML and saved back to the cloud storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift
import Alamofire
import Foundation
import XCTest
import AsposeHtmlCloud

ClientAPI.setConfig(
	basePath: "https://api.aspose.cloud/v4.0", 
	authPath: "https://api.aspose.cloud/connect/token", 
	apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", 
	appSID: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", 
	debugging: true
)

let src = "FolderInStorage/test.html"
let dst = "FolderInStorage/test.mhtml"

let expectation = self.expectation(description: "testConvert to mhtml")

HtmlAPI.convertStorageToStorage(src: src, dst: dst, storage: nil, options: nil) { (data, error) in

    guard error == nil else {
        XCTFail("Error convert html to mhtml. Error=\(error!.localizedDescription)")
        return
    }

    let resultPath = data!.file!

    StorageAPI.objectExists(path: resultPath, storageName: nil, versionId: nil) {(data, error) in
        guard error == nil else {
            XCTFail("Error objectExists exist. Error=\(error!.localizedDescription)")
            return
        }

        XCTAssertTrue(data!.exists)
        XCTAssertFalse(data!.isFolder)
        expectation.fulfill()
    }
}
self.waitForExpectations(timeout: testTimeout, handler: nil)
```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **HTML to MHTML Java/Android** applying. HTML file is in cloud storage, converted to MHTML and saved back to cloud storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromStorageFile("input.html")
                .saveToStorage("output.mhtml");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to MHTML** using REST API. HTML file is located in cloud storage, converted to MHTML and saved back to cloud storage.
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-mhtml" \
    -d "{'InputPath': '/test.html', 'OutputFile': '/test.mhtml'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}