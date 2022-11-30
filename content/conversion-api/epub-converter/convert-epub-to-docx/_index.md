---
title: Convert EPUB to DOCX - Cloud SDKs and REST API
linktitle: Convert EPUB to DOCX
type: docs
keywords: epub to docx, convert epub, epub file, cloud sdk, convert epub to docx, Python, Ruby, PHP, Java, .Net, C#, Android, Swift, Node.js, curl
description: Convert EPUB to DOCX using Aspose.HTML Cloud SDKs and REST API. SDKs are available in PHP, Perl, Python, C#, Java, Android, Swift and more
weight: 30
url: /convert-epub-to-docx/
lastmod: 2022-11-07
---

## **Summary**

Aspose.HTML Cloud v4.0 provides the simplest API to convert {{%EPUB%}} documents to {{%DOCX%}} format with high quality, easy and fast. EPUB is an open XML-based format for digital books and publications, which can be viewed and read on smartphones, tablets and computers. Microsoft Word files including DOCX and DOC are also famous because of various features. You can convert EPUB files to DOCX or DOC files, with great fidelity. 

The article explains in a set of code examples how to convert an EPUB document to DOCX using Aspose.HTML Cloud client SDKs and REST API. We will consider various scenarios of EPUB to DOCX conversion: from storage to storage, from a local file system to the storage and from the storage to a local file system.

## **Examples of EPUB to DOCX Conversion**

A widespread use case for Aspose.HTML Cloud functions is file processing and converting. Cloud SDKs and REST API allow you to fetch an EPUB document from a storage location by its name or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert EPUB to DOCX for different cases.

### **Example 1.**  Convert a local EPUB file to DOCX and save the result to local path

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example demonstrates the simplest way to convert **EPUB to DOCX C#** language applying. Local EPUB converted to DOCX and saved to the local path. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert EPUB to DOC
var result = await api.ConvertAsync("test.epub", "test.doc");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **EPUB to DOCX java** language applying. Local EPUB converted to DOCX and saved to the local path. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.epub")
                .saveToLocal("output.docx");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB to DOCX** C++ language applying. Local EPUB converted to DOCX and saved to the local path.

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
utility::string_t dst = w_cur_dir + L"result.docx";

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

The following example demonstrates how to convert **EPUB to DOCX Python** language applying. Local EPUB converted to DOCX and saved to the local path. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

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
    res = html_api.convertApi.convert_local_to_local(input_file="test.epub", output_file="test.docx")
except ApiException as ex:
    print("Exception")
    print("Info: " + str(ex))
    raise ex
```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB to DOCX PHP** language applying. Local EPUB converted to DOCX and saved to the local path. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

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
$dst = 'output.docx';

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

The following example demonstrates how to convert **EPUB to DOCX Ruby** language applying. Local EPUB converted to DOCX and saved to the local path. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

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
dst = "test.docx"  # String | Full path to the result.

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

The following example demonstrates how to convert **EPUB to DOCX Node.js** language applying. Local EPUB converted to DOCX and saved to the local path.

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
var dst = "/path/to/dst/test.docx"; // {String} Result document.
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

The following example demonstrates how to convert **EPUB to DOCX Swift** language applying. Local EPUB converted to DOCX and saved to the local path. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

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
let format = "docx"
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

The following example demonstrates how to convert **EPUB to DOCX Java/Android** applying. Local EPUB converted to DOCX and saved to the local path. You can download the Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.epub")
                .saveToLocal("output.docx");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **EPUB to DOCX** REST API applying. Local EPUB converted to DOCX and saved to the local path. Follow a few required steps:
- Upload a local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/epub-doc" \
    -d "{'InputPath': '/testpage.epub', 'OutputFile': 'test.doc'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}


{{% alert color="primary" %}} 
EPUB to DOCX conversion occurs with the **default conversion options**: the resulting DOCX document’s width and height correspond to A4, all margins have zero value.

{{% /alert %}} 


### **Example 2** Convert EPUB to DOCX inside cloud storage

Aspose.HTML Cloud allows you to get an EPUB file from your cloud storage and save conversion result back to cloud storage.

{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **EPUB to DOCX C#** language applying. EPUB file is located in cloud storage, converted to DOCX and saved back to cloud storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert EPUB to DOCX
var builder = new ConverterBuilder()
                .FromStorageFile("/test.epub")
                .ToStorageFile("/test.doc");
                
var result = await api.ConvertAsync(builder);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **EPUB to DOCX java** language applying. The EPUB file is in cloud storage, convert to DOCX, and saved back to cloud storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromStorageFile("input.epub")
                .saveToStorage("output.docx");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB to DOCX C++** language applying. The EPUB file is in cloud storage, convert to DOCX, and saved back to cloud storage. 

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
utility::string_t dst = L"result/in/storage/result.docx";

//Conversion
auto result = api->convertStorageToStorage(src, dst);
```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **EPUB to DOCX Python** language applying. The EPUB file is in cloud storage, convert to DOCX, and saved back to cloud storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

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
    res = html_api.convertApi.convert_storage_to_storage(input_file="test.epub", output_file="test.docx",
                                                         storage_name=None)
except ApiException as ex:
    print("Exception")
    print("Info: " + str(ex))
    raise ex
```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB to DOCX PHP** language applying. The EPUB file is in cloud storage, convert to DOCX, and saved back to cloud storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

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
$dst = 'FolderInStorage/test.docx';
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

The following example shows how to convert **EPUB to DOCX Ruby** language applying. The EPUB file is in cloud storage, convert to DOCX, and saved back to cloud storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

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
dst = "FolderInStorage/test.docx" # String | Result file.
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

The following example shows how to convert **EPUB to DOCX Node.js** language applying. The EPUB file is in cloud storage, convert to DOCX, and saved back to cloud storage. 

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
var dst = "FolderInStorage/test.docx"; // {String} Result document.
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

The following example shows how to convert **EPUB to DOCX Swift** language applying. The EPUB file is in cloud storage, converted to DOCX, and saved back to cloud storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

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
let dst = "FolderInStorage/test.docx"

let expectation = self.expectation(description: "testConvert to docx")

HtmlAPI.convertStorageToStorage(src: src, dst: dst, storage: nil, options: nil) { (data, error) in

    guard error == nil else {
        XCTFail("Error convert epub to docx. Error=\(error!.localizedDescription)")
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

The following example shows how to convert **EPUB to DOCX Java/Android** applying. The EPUB file is in cloud storage, convert to DOCX, and saved back to cloud storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromStorageFile("input.epub")
                .saveToStorage("output.docx");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **EPUB to DOCX** using REST API. EPUB file is located in cloud storage, converted to DOCX and saved back to cloud storage.
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/epub-docx" \
    -d "{'InputPath': '/test.epub', 'OutputFile': '/test.docx'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}



