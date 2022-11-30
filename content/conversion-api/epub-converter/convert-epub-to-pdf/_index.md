---
title: Convert EPUB to PDF - Cloud SDKs and REST API
linktitle: Convert EPUB to PDF
type: docs
keywords: convert epub to pdf, cloud sdks, epub to pdf, epub to pdf conversion, sdk api, python, php, perl, ruby, android, swift, c#, java, node.js, curl
description: Learn how to use Cloud SDKs and REST API to convert EPUB to PDF. SDKs are available in PHP, Perl, Python, C#, Java, Android, Swift and more
weight: 10
url: /convert-epub-to-pdf/
lastmod: 2022-11-07
---

## **Summary**

Aspose.HTML Cloud v4.0 provides the simplest API to convert  {{%EPUB%}} documents to {{%PDF%}} format with high quality, easy and fast. 

The EPUB format has gained popularity as an XML-based e-book format and designed to adapt the content's presentation to the reader device. It is implemented as an archive file consisting of XHTML files carrying the content, images and other supporting files. 
PDF is basically a static document that can contain text, images, form-fields,  media, digital signatures,  hyperlinks, etc. One of the PDF benefits is your paper will be presented exactly how you designed it out, and it is ideal for sending documents that are intended to be printed out.

The article explains in a set of code examples how to convert an EPUB document to PDF using Aspose.HTML Cloud client SDKs and REST API. SDKs are available in PHP, Perl, Python, C#, Ruby, Java, Android, Swift and more. We will consider various scenarios of EPUB to PDF conversion: from storage to storage, from a local file system to the local file system, etc.


## **Examples of EPUB to PDF Conversion**

A widespread use case for Aspose.HTML Cloud functions is file processing and converting. Cloud SDK allows you to fetch an EPUB document from a storage location by its name or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert EPUB to PDF for different cases using available SDKs and REST API.

### **Example 1.**  Convert a local EPUB file to PDF and save the result to local path

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example demonstrates the simplest way to convert **EPUB to PDF C#** language applying. Local EPUB converted to PDF and saved to the local path. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert EPUB to PDF
var result = await api.ConvertAsync("test.epub", "test.pdf");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **EPUB to PDF java** language applying. Local EPUB converted to PDF and saved to the local path. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.epub")
                .saveToLocal("output.pdf");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB to PDF** C++ language applying. Local EPUB converted to PDF and saved to the local path.

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
utility::string_t src = w_cur_dir + L"test.epub";
utility::string_t dst = w_cur_dir + L"result.pdf";

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

The following example demonstrates how to convert **EPUB to PDF Python** language applying. Local EPUB converted to PDF and saved to the local path. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

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
    res = html_api.convertApi.convert_local_to_local(input_file="test.epub", output_file="test.pdf")
except ApiException as ex:
    print("Exception")
    print("Info: " + str(ex))
    raise ex
```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB to PDF PHP** language applying. Local EPUB converted to PDF and saved to the local path. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

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

$src = 'input.epub';
$dst = 'output.pdf';

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

The following example demonstrates how to convert **EPUB to PDF Ruby** language applying. Local EPUB converted to PDF and saved to the local path. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

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

src = "test.epub"  # String | Full path to the input file.
dst = "test.pdf"   # String | Full path to the result.

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

The following example demonstrates how to convert **EPUB to PDF Node.js** language applying. Local EPUB converted to PDF and saved to the local path.

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

var src = "/path/to/src/test.epub"; // {String} Source document.
var dst = "/path/to/dst/test.pdf"; // {String} Result document.
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

The following example demonstrates how to convert **EPUB to PDF Swift** language applying. Local EPUB converted to PDF and saved to the local path. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

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

let fileName = "test.epub"
let format = "pdf"
let src = url(forResource: fileName).absoluteString

let expectation = self.expectation(description: "testConvert to \(format)")
let dst = resultDir.appendingPathComponent("Output.\(format)").absoluteString
HtmlAPI.convertLocalToLocal(src: src, dst: dst, options: nil) { (data, error) in

	guard error == nil else {
		XCTFail("Error convert epub to \(format)). Error=\(error!.localizedDescription)")
		return
	}
	let resultPath = data!.file!
	XCTAssertTrue(fileExist(name: resultPath))
	expectation.fulfill()
}
self.waitForExpectations(timeout: 100.0, handler: nil)
```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **EPUB to PDF Java/Android** applying. Local EPUB converted to PDF and saved to the local path. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.epub")
                .saveToLocal("output.pdf");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **EPUB to PDF** REST API applying. Local EPUB converted to PDF and saved to the local path. Follow a few required steps:
- Upload a local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/epub-pdf" \
    -d "{'InputPath': '/testpage.epub', 'OutputFile': 'test.pdf'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}


{{% alert color="primary" %}} 
EPUB to PDF conversion occurs with the **default conversion options**: the resulting PDF document’s width and height correspond to A4, all margins have zero value.

{{% /alert %}} 

### **Example 2.** Convert EPUB from the local file system to PDF with explicitly specified options and save it to the local path

The example below demonstrates how to convert an EPUB file from the local file system to PDF with explicitly specified options and save the result back to the local path.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL">}}

{{< tab tabNum="1" >}}

The following SDK example demonstrates how to convert **EPUB to PDF C#** language applying. EPUB is taken from the local file system, converted to PDF and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Create an options object and specify options for EPUB to PDF conversion
var options = new PDFConversionOptions()
                .SetHeight(8.3)
                .SetWidth(11.7)
                .SetLeftMargin(0.5)
                .SetRightMargin(0.5)
                .SetBottomMargin(0.5)
                .SetTopMargin(0.5);

// Convert EPUB file to PDF format
var result = await api.ConvertAsync("test.epub", "test.pdf", options);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **EPUB to PDF java** language applying. EPUB is taken from the local file system, converted to PDF and saved to the local path. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConversionOptions opt_A5 = new PDFConversionOptions()
                    .setWidth(5.8)        // A5 format in inches
                    .setHeight(8.3)
                    .setTopMargin(0.5)
                    .setBottomMargin(0.5)
                    .setLeftMargin(0.5)
                    .setRightMargin(0.5)
                    .setQuality(95);

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.epub")
                .useOptions(opt_A5)
                .saveToLocal("output.pdf");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB to PDF C++** language applying. EPUB is taken from the local file system, converted to PDF and saved to the local drive. 

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
utility::string_t src = w_cur_dir + L"test.epub";
utility::string_t dst = w_cur_dir + L"result.pdf";

std::shared_ptr<ConversionOptions> opts = std::make_shared<ConversionOptions>();
opts->setWidth(8.3)
    ->setHeight(11.7)
    ->setLeftMargin(0.2)
    ->setRightMargin(0.2)
    ->setTopMargin(0.2)
    ->setBottomMargin(0.2);

//Conversion
auto result = api->convertLocalToLocal(src, dst, opts);

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

The following example demonstrates how to convert **EPUB to PDF Python** language applying. EPUB is taken from the local file system, converted to PDF and saved to the local drive. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

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

options = {
    'width': 8.3,
    'height': 11.7,
    'topmargin': 0.2,
    'bottommargin': 0.2,
    'leftmargin': 0.2,
    'rightmargin': 0.2
}

try:
    res = html_api.convertApi.convert_local_to_local(input_file="test.epub", output_file="test.pdf", options=options)
except ApiException as ex:
    print("Exception")
    print("Info: " + str(ex))
    raise ex
```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB to PDF PHP** language applying. EPUB is taken from the local file system, converted to PDF and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

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

$src = 'input.epub';
$dst = 'output.pdf';

$options_a4 = [
    'width' => 8.3,
    'height' => 11.7,
    'left_margin' => 0.2,
    'right_margin' => 0.2,
    'top_margin' => 0.2,
    'bottom_margin' => 0.2
];


try {
    //Request to server Api
    $result = $api_html->convertLocalToLocal($src, $dst, $options_a4);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HtmlApi->convertLocalToLocal: ', $e->getMessage(), PHP_EOL;
}
?>
```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **EPUB to PDF Ruby** language applying. EPUB is taken from the local file system, converted to PDF and saved to the local path. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

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

src = "test.epub" # String | Source file.
dst = "test.pdf"  # String | Result file.

opts = { 
  width: 8.3,        # Float | Resulting document width in inches. 
  height: 11.7,      # Float | Resulting document height in inches. 
  left_margin: 0.2,  # Float | Left resulting document margin in inches.
  right_margin: 0.2, # Float | Right resulting document margin in inches.
  top_margin: 0.2,   # Float | Top resulting document margin in inches.
  bottom_margin: 0.2 # Float | Bottom resulting document margin in inches.
}

begin
  #Convert the HTML file from the local file and save result to the local file.
  result = api_instance.convert_local_to_local(src, dst, opts)
  p result
rescue AsposeHtml::ApiError => e
  puts "Exception when calling api_instance.convert_local_to_local: #{e}"
end
```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **EPUB to PDF Node.js** language applying. EPUB is taken from the local file system, converted to PDF and saved to the local file system. 

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

var src = "/path/to/src/test.epub"; // {String} Source document.
var dst = "/path/to/dst/test.pdf";  // {String} Result document.
var opts = {
    'width': 8.3,
    'height': 11.7,
    'leftMargin': 0.2,
    'rightMargin': 0.2,
    'topMargin': 0.2,
    'bottomMargin': 0.2
};

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

The following example demonstrates how to convert **EPUB to PDF Swift** language applying. EPUB is taken from the local file system, converted to PDF and saved to the local drive. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

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

let fileName = "test.epub"
let format = "pdf"
let src = url(forResource: fileName).absoluteString
let options = ConversionOptions(width: 8.3, height: 11.7, leftMargin: 0.2,
        rightMargin: 0.2, topMargin: 0.2, bottomMargin: 0.2)


let expectation = self.expectation(description: "testConvert to \(format)")
let dst = resultDir.appendingPathComponent("Output.\(format)").absoluteString
HtmlAPI.convertLocalToLocal(src: src, dst: dst, options: options) { (data, error) in

	guard error == nil else {
		XCTFail("Error convert epub to \(format)). Error=\(error!.localizedDescription)")
		return
	}
	let resultPath = data!.file!
	XCTAssertTrue(fileExist(name: resultPath))
	expectation.fulfill()
}
self.waitForExpectations(timeout: 100.0, handler: nil)
```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **EPUB to PDF Java/Android** applying. EPUB is taken from the local file system, converted to PDF and saved to the local drive. You can download the Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConversionOptions opt_A5 = new PDFConversionOptions()
                    .setWidth(5.8)        // A5 format in inches
                    .setHeight(8.3)
                    .setTopMargin(0.5)
                    .setBottomMargin(0.5)
                    .setLeftMargin(0.5)
                    .setRightMargin(0.5)
                    .setQuality(95);

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.epub")
                .useOptions(opt_A5)
                .saveToLocal("output.pdf");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **EPUB to PDF** using REST API. Local EPUB converted to PDF and saved to the local file system. Follow a few required steps:
- Upload local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/epub-pdf" \
    -d "{'InputPath': '/testpage.epub', 'OutputFile': 'test.pdf', 'Options': {'Width':1000, 'Height': 800, 'LeftMargin': 10, 'RightMargin': 10, 'TopMargin': 10, 'BottomMargin': 10}}" \
    -H "Content-Type: application/json" \
    -H "Authorization: bearer <token>"
```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
More details about available conversion parameters for EPUB files are in the [SDK Conversion Options](/html/conversion-api/sdk-conversion-options/) section.
{{% /alert %}} 


### **Example 3** Convert EPUB to PDF inside cloud storage

Aspose.HTML Cloud allows you to get an EPUB file from your cloud storage and save conversion result back to cloud storage.

{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **EPUB to PDF C#** language applying. EPUB file is located in cloud storage, converted to PDF and saved back to cloud storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert EPUB to PDF using ConvertAsync() method
var builder = new ConverterBuilder()
                .FromStorageFile("/test.epub")
                .ToStorageFile("/test.pdf");
                
var result = await api.ConvertAsync(builder);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **EPUB to PDF java** language applying. EPUB is located in cloud storage, converted to PDF and saved to cloud storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromStorageFile("input.epub")
                .saveToStorage("output.pdf");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB to PDF C++** language applying. EPUB is located in cloud storage, converted to PDF and saved in the cloud. 

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
utility::string_t src = L"file/in/storage/index.epub";
utility::string_t dst = L"result/in/storage/result.pdf";

//Conversion
auto result = api->convertStorageToStorage(src, dst);
```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **EPUB to PDF Python** language applying. EPUB is located in cloud storage, converted to PDF and saved to the cloud storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

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
    res = html_api.convertApi.convert_storage_to_storage(input_file="test.epub", output_file="test.pdf",
                                                         storage_name=None)
except ApiException as ex:
    print("Exception")
    print("Info: " + str(ex))
    raise ex
```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB to PDF PHP** language applying. EPUB is located in cloud storage, converted to PDF and saved to the cloud. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

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

$src = "FolderInStorage/test.epub";
$dst = 'FolderInStorage/test.pdf';
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

The following example shows how to convert **EPUB to PDF Ruby** language applying. EPUB is located in cloud storage, converted to PDF and saved to the cloud storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

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

src = "FolderInStorage/test.epub" # String | Source file.
dst = "FolderInStorage/test.pdf"  # String | Result file.
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

The following example shows how to convert **EPUB to PDF Node.js** language applying. EPUB is located in cloud storage, converted to PDF and saved to the cloud storage. 

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

var src = "FolderInStorage/test.epub"; // {String} Source document.
var dst = "FolderInStorage/test.pdf";  // {String} Result document.
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

The following example shows how to convert **EPUB to PDF Swift** language applying. EPUB is located in cloud storage, converted to PDF and saved to the cloud. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

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

let src = "FolderInStorage/test.epub"
let dst = "FolderInStorage/test.pdf"

let expectation = self.expectation(description: "testConvert to pdf")

HtmlAPI.convertStorageToStorage(src: src, dst: dst, storage: nil, options: nil) { (data, error) in

    guard error == nil else {
        XCTFail("Error convert epub to pdf. Error=\(error!.localizedDescription)")
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
self.waitForExpectations(timeout: 100.0, handler: nil)
```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **EPUB to PDF Java/Android** applying. EPUB is located in cloud storage, converted to PDF and saved to the cloud storage. You can download the Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromStorageFile("input.epub")
                .saveToStorage("output.pdf");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **EPUB to PDF** using REST API. EPUB file is located in cloud storage, converted to PDF and saved back to cloud storage.
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/epub-pdf" \
    -d "{'InputPath': '/test.epub', 'OutputFile': '/test.pdf'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}

