---
title: Convert EPUB to XPS - Cloud SDKs and REST API
linktitle: Convert EPUB to XPS
type: docs
keywords: epub to xps, convert epub to xps, epub to xps conversion, cloud sdks, Python, Ruby, PHP, Java, .Net, C#, Android, Swift, Node.js, curl
description: Convert EPUB to DOCX using Cloud SDKs and REST API. SDKs are available in PHP, Perl, Ruby, Python, C#, Java, Android, Swift and more.
weight: 20
url: /convert-epub-to-xps/
lastmod: 2022-11-07
---

## **Summary**

Aspose.HTML Cloud v4.0 provides the simplest API to convert {{%EPUB%}} documents to {{%XPS%}} format with high quality, easy and fast. 

The EPUB format has gained popularity as an XML-based e-book format and designed to adapt the content's presentation to the reader device. It is implemented as an archive file consisting of XHTML files carrying the content, images and other supporting files. 

The article explains in a set of code examples how to convert an EPUB document to XPS using Aspose.HTML Cloud client SDKs and REST API calls. We will consider various scenarios of EPUB to XPS conversion. SDKs are available in PHP, Perl, Ruby, Python, C#, Java, Android, Swift and more.

## **SDK Examples of EPUB to XPS Conversion**

A widespread use case for Aspose.HTML Cloud SDK functions is file processing and converting. Cloud APIs allows you to fetch an EPUB document from a storage location by its name or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert EPUB to XPS for different cases using available SDKs and cURL.

### **Example 1.**  Convert a local EPUB file to XPS and save the result to local path

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example demonstrates the simplest way to convert **EPUB to XPS C#** language applying. Local EPUB converted to XPS and saved to the local path. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert EPUB to XPS
var result = await api.ConvertAsync("test.epub", "test.xps");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **EPUB to XPS java** language applying. Local EPUB converted to XPS and saved to the local path. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.epub")
                .saveToLocal("output.xps");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB to XPS** C++ language applying. Local EPUB converted to XPS and saved to the local path.

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
utility::string_t dst = w_cur_dir + L"result.xps";

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

The following example demonstrates how to convert **EPUB to XPS Python** language applying. Local EPUB converted to XPS and saved to the local path. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB to XPS XPS** language applying. Local EPUB converted to XPS and saved to the local path. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **EPUB to XPS Ruby** language applying. Local EPUB converted to XPS and saved to the local path. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **EPUB to XPS Node.js** language applying. Local EPUB converted to XPS and saved to the local path.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **EPUB to XPS Swift** language applying. Local EPUB converted to XPS and saved to the local path. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **EPUB to XPS Java/Android** applying. Local EPUB converted to XPS and saved to the local path. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.epub")
                .saveToLocal("output.xps");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **EPUB to XPS** REST API applying. Local EPUB converted to XPS and saved to the local path. Follow a few required steps:
- Upload local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/epub-xps" \
    -d "{'InputPath': '/testpage.epub', 'OutputFile': 'test.xps'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}


{{% alert color="primary" %}} 
EPUB to XPS conversion occurs with the **default conversion options**: the resulting XPS document’s width and height correspond to A4, all margins have zero value.

{{% /alert %}} 

### **Example 2.** Convert EPUB from the local file system to XPS with explicitly specified options and save to the local path

The example below demonstrates how to convert an EPUB file from the local file system to XPS with explicitly specified options and save the result back to the local path.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL">}}

{{< tab tabNum="1" >}}

The following SDK example demonstrates how to convert **EPUB to XPS C#** language applying. EPUB is taken from the local file system, converted to XPS and saved to the local drive. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Initialize conversion options
var options = new XPSConversionOptions()
                .SetHeight(8.3)   // A4 landscape
                .SetWidth(11.7)
                .SetLeftMargin(0.2)
                .SetRightMargin(0.2)
                .SetBottomMargin(0.2)
                .SetTopMargin(0.2);

// Convert EPUB to XPS
var result = await api.ConvertAsync("test.epub", "test.xps", options);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **EPUB to XPS java** language applying. Local EPUB is converted to XPS and saved to the local drive. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

XPSConversionOptions opt_A5 = new XPSConversionOptions()
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
                .saveToLocal("output.xps");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB to XPS C++** language applying. Local EPUB converted to XPS and saved on the local drive. 

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
utility::string_t dst = w_cur_dir + L"result.xps";

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

The following example demonstrates how to convert **EPUB to XPS Python** language applying. Local EPUB converted to XPS and saved on the local drive. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB to XPS PHP** language applying. EPUB is taken from the local file system, converted to XPS and saved to the local path. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **EPUB to XPS Ruby** language applying. Local EPUB converted to XPS and saved on the local drive. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **EPUB to XPS Node.js** language applying. Local EPUB converted to XPS and saved on the local drive.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **EPUB to XPS Swift** language applying. Local EPUB converted to XPS and saved on the local drive. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **EPUB to XPS Java/Android** applying. Local EPUB converted to XPS and saved on the local drive. You can download the Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

XPSConversionOptions opt_A5 = new XPSConversionOptions()
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
                .saveToLocal("output.xps");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **EPUB to XPS** using REST API. Local EPUB converted to XPS and saved to the local file system. Follow a few required steps:
- Upload a local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/epub-xps" \
    -d "{'InputPath': '/testpage.epub', 'OutputFile': 'test.xps', 'Options': {'Width':1000, 'Height': 800, 'LeftMargin': 10, 'RightMargin': 10, 'TopMargin': 10, 'BottomMargin': 10}}" \
    -H "Content-Type: application/json" \
    -H "Authorization: bearer <token>"
```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
More details about available conversion parameters for EPUB files are in the [SDK Conversion Options](/html/conversion-api/sdk-conversion-options/) section.

{{% /alert %}} 

### **Example 3.** Convert EPUB to XPS inside cloud storage

Aspose.HTML Cloud allows you to get an EPUB file from your cloud storage and save conversion result back to cloud storage.

{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **EPUB to XPS C#** language applying. EPUB file is located in cloud storage, converted to XPS and saved back to cloud storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert EPUB to XPS
var builder = new ConverterBuilder()
                .FromStorageFile("/test.epub")
                .ToStorageFile("/test.xps");
                
var result = await api.ConvertAsync(builder);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **EPUB to XPS java** language applying. EPUB file is located in cloud storage, converted to XPS and saved back to the cloud storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromStorageFile("input.epub")
                .saveToStorage("output.xps");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB to XPS C++** language applying. EPUB file is located in cloud storage, converted to XPS and saved back to the cloud storage. 

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
utility::string_t dst = L"result/in/storage/result.xps";

//Conversion
auto result = api->convertStorageToStorage(src, dst);
```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **EPUB to XPS Python** language applying. EPUB file is located in cloud storage, converted to XPS and saved back to the cloud storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB to XPS PHP** language applying. EPUB file is located in cloud storage, converted to XPS and saved back to the cloud storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **EPUB to XPS Ruby** language applying. EPUB file is located in cloud storage, converted to XPS and saved back to cloud storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **EPUB to XPS Node.js** language applying. EPUB file is located in cloud storage, converted to XPS and saved back to cloud storage. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **EPUB to XPS Swift** language applying. EPUB file is located in cloud storage, converted to XPS and saved back to cloud storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **EPUB to XPS Java/Android** applying. EPUB file is located in cloud storage, converted to XPS and saved back to cloud storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromStorageFile("input.epub")
                .saveToStorage("output.xps");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **EPUB to XPS** using REST API. EPUB file is located in cloud storage, converted to XPS and saved back to cloud storage.
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/epub-xps" \
    -d "{'InputPath': '/test.epub', 'OutputFile': '/test.xps'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}