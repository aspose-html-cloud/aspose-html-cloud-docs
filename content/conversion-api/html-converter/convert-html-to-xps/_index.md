---
title: Convert HTML to XPS - Cloud SDKs
linktitle: Convert HTML to XPS
type: docs
aliases: /html-conversion-to_xps/
keywords: html to xps, convert html to xps, html to xps conversion, html conversion, SDK example, Python, PHP, Perl, Android, Swift, C#, Java, Node.js, curl
description: Learn how to use Cloud SDKs and REST API to convert HTML to XPS. SDKs are available in C#, Java, Perl, Python, Android, Swift and more.
weight: 20
url: /convert-html-to-xps/
lastmod: 2022-11-03
---

## **Summary**

Converting between formats is required for various reasons: to work in a familiar, convenient format or to take advantage of different formats for specific tasks. {{%XPS%}} is a document storage and viewing format developed by Microsoft. An XPS file is a ZIP archive using the Open Packaging Conventions containing the files that make up the document. It has a set of advantages that support security features, such as digital signatures to provide greater document security and more.

This article explains in a set of code examples how to convert {{%HTML%}} to {{%XPS%}} using Aspose.HTML Cloud.


## **Examples of HTML to XPS Conversion**

Aspose.HTML Cloud allows you to fetch an HTML document from a storage location by its name, from a URL or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert HTML to XPS for different cases using available SDKs and REST API.

### **Example 1.**  Convert a local HTML file to XPS and save the result to local path

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example demonstrates the simplest way to convert **HTML to XPS C#** language applying. Local HTML converted to XPS and saved to the local path. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert from HTML file to XPS file
var result = await api.ConvertAsync("test.html", "test.xps");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to XPS java** language applying. Local HTML converted to XPS and saved to the local path. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.html")
                .saveToLocal("output.xps");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to XPS** C++ language applying. Local HTML converted to XPS and saved to the local path.

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

The following example demonstrates how to convert **HTML to XPS Python** language applying. Local HTML converted to XPS and saved to the local path. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to XPS XPS** language applying. Local HTML converted to XPS and saved to the local path. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to XPS Ruby** language applying. Local HTML converted to XPS and saved to the local path. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to XPS Node.js** language applying. Local HTML converted to XPS and saved to the local path.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to XPS Swift** language applying. Local HTML converted to XPS and saved to the local path. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to XPS Java/Android** applying. Local HTML converted to XPS and saved to the local path. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.html")
                .saveToLocal("output.xps");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to XPS** REST API applying. Local HTML converted to XPS and saved to the local path. Follow a few required steps:
- Upload local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-xps" \
    -d "{'InputPath': '/testpage.html', 'OutputFile': 'test.xps'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}


{{% alert color="primary" %}} 
HTML to XPS conversion occurs with the **default conversion options**: the resulting XPS document’s width and height correspond to A4, all margins have zero value.

{{% /alert %}} 

### **Example 2.** Convert HTML from the local file system to XPS with explicitly specified options and save to the local path

The example below demonstrates how to convert an HTML file from the local file system to XPS with explicitly specified options and save the result back to the local path.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL">}}

{{< tab tabNum="1" >}}

The following SDK example demonstrates how to convert **HTML to XPS C#** language applying. HTML is taken from the local file system, converted to XPS and saved to the local drive. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Initialize options
var options = new XPSConversionOptions()
                .SetHeight(11.7)   // A4 in inches
                .SetWidth(8.3)
                .SetLeftMargin(0.5)
                .SetRightMargin(0.5)
                .SetBottomMargin(0.5)
                .SetTopMargin(0.5);

// Convert from HTML file to XPS file
var result = await api.ConvertAsync("test.html", "test.xps", options);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to XPS java** language applying. Local HTML is converted to XPS and saved to the local drive. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConversionOptions opt_A5 = new XPSConversionOptions()
                    .setWidth(5.8)        // A5 format in inches
                    .setHeight(8.3)
                    .setTopMargin(0.5)
                    .setBottomMargin(0.5)
                    .setLeftMargin(0.5)
                    .setRightMargin(0.5)
                    .setQuality(95);

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.html")
                .useOptions(opt_A5)
                .saveToLocal("output.xps");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to XPS C++** language applying. Local HTML converted to XPS and saved on the local drive. 

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

The following example demonstrates how to convert **HTML to XPS Python** language applying. Local HTML converted to XPS and saved on the local drive. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to XPS PHP** language applying. HTML is taken from the local file system, converted to XPS and saved to the local path. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to XPS Ruby** language applying. Local HTML converted to XPS and saved on the local drive. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to XPS Node.js** language applying. Local HTML converted to XPS and saved on the local drive.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to XPS Swift** language applying. Local HTML converted to XPS and saved on the local drive. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to XPS Java/Android** applying. Local HTML converted to XPS and saved on the local drive. You can download the Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConversionOptions opt_A5 = new XPSConversionOptions()
                    .setWidth(5.8)        // A5 format in inches
                    .setHeight(8.3)
                    .setTopMargin(0.5)
                    .setBottomMargin(0.5)
                    .setLeftMargin(0.5)
                    .setRightMargin(0.5)
                    .setQuality(95);

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.html")
                .useOptions(opt_A5)
                .saveToLocal("output.xps");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to XPS** using REST API. Local HTML converted to XPS and saved to the local file system. Follow a few required steps:
- Upload local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-xps" \
    -d "{'InputPath': '/testpage.html', 'OutputFile': 'test.xps', 'Options': {'Width':1000, 'Height': 800, 'LeftMargin': 10, 'RightMargin': 10, 'TopMargin': 10, 'BottomMargin': 10}}" \
    -H "Content-Type: application/json" \
    -H "Authorization: bearer <token>"
```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
More details about available conversion parameters for HTML files are in the [SDK Conversion Options](/html/conversion-api/sdk-conversion-options/) section.

{{% /alert %}} 

### **Example 3.** Convert a Web page to XPS and save the result to the local file system

Aspose.HTML Cloud allows you to get an HTML page from the web by its URL, convert it to another format and save into the local file system. The example below demonstrates how to convert HTML to XPS with the default conversion parameters.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **HTML to XPS C#** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert HTML to XPS
var result = await api.ConvertUrlAsync("https://example.com", "test.xps");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **HTML to XPS java** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromUrl("https://example.com")
                .saveToLocal("output.xps");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to XPS C++** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system. 

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
utility::string_t dst = w_cur_dir + L"result.xps";

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

The following example shows how to convert **HTML to XPS Python** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to XPS PHP** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **HTML to XPS Ruby** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **HTML to XPS Node.js** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **HTML to XPS Swift** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **HTML to XPS Java/Android** applying. HTML is taken from the Web, converted to XPS and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromUrl("https://example.com")
                .saveToLocal("output.xps");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to XPS** using REST API. HTML is taken from the Web, converted to XPS and saved to the local file system.
Follow a few required steps:
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-xps" \
    -d "{'InputPath': 'https://example.com', 'OutputFile': 'test.xps'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}

HTML to XPS conversion occurs with the **default conversion options**: the resulting XPS document’s width and height correspond to A4, all margins have zero value.

### **Example 4.** Convert HTML to XPS inside cloud storage

Aspose.HTML Cloud allows you to get an HTML file from your cloud storage and save conversion result back to cloud storage.

{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **HTML to XPS C#** language applying. HTML file is located in cloud storage, converted to XPS and saved back to cloud storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert HTML to XPS
var builder = new ConverterBuilder()
                .FromStorageFile("/test.html")
                .ToStorageFile("/test.xps");
                
var result = await api.ConvertAsync(builder);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **HTML to XPS java** language applying. HTML file is located in cloud storage, converted to XPS and saved back to the cloud storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromStorageFile("input.html")
                .saveToStorage("output.xps");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to XPS C++** language applying. HTML file is located in cloud storage, converted to XPS and saved back to cloud storage. 

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
utility::string_t dst = L"result/in/storage/result.xps";

//Conversion
auto result = api->convertStorageToStorage(src, dst);
```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **HTML to XPS Python** language applying. HTML file is located in cloud storage, converted to XPS and saved back to cloud storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to XPS PHP** language applying. HTML file is located in cloud storage, converted to XPS and saved back to cloud storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **HTML to XPS Ruby** language applying. HTML file is located in cloud storage, converted to XPS and saved back to the cloud storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **HTML to XPS Node.js** language applying. HTML file is located in cloud storage, converted to XPS and saved back to the cloud storage. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **HTML to XPS Swift** language applying. HTML file is located in cloud storage, converted to XPS and saved back to cloud storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **HTML to XPS Java/Android** applying. HTML file is located in cloud storage, converted to XPS and saved back to cloud storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromStorageFile("input.html")
                .saveToStorage("output.xps");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to XPS** using REST API. HTML file is located in cloud storage, converted to XPS and saved back to cloud storage.
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-xps" \
    -d "{'InputPath': '/test.html', 'OutputFile': '/test.xps'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}