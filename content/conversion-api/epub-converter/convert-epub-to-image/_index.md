---
title: Convert EPUB to Image - Cloud SDKs and REST API
linktitle: Convert EPUB to Image
type: docs
keywords: epub to image, epub to jpg, epub to png, epub to gif, convert epub to image, convert epub to jpg, convert epub to png, convert epub to gif, Python, Ruby, PHP, Java, .Net, C#, Android, Swift, Node.js
description: Learn how to use Cloud SDKs and REST API to convert EPUB to Image formats such as JPG, PNG, GIF, TIFF, and BMP with a set of SDK examples. 
weight: 40
lastmod: 2022-11-07
url: /convert-epub-to-image/
---

## **Summary**

Aspose.HTML Cloud v4.0 provides the simplest API to convert {{%EPUB%}} documents to Image file formats with high quality, easy and fast. 

The EPUB format has gained popularity as an XML-based e-book format and designed to adapt the content's presentation to the reader device. It is implemented as an archive file consisting of XHTML files carrying the content, images and other supporting files. Sometimes, it is required to get an image instead of EPUB documents, such as making them portable and easily shared on various devices, creating a picture gallery from eBooks, etc. 

The article explains in a set of code examples how to convert an EPUB document to Image file formats such as {{%JPEG%}}, {{%PNG%}}, {{%GIF%}}, {{%TIFF%}} or {{%BMP%}} using Aspose.HTML Cloud SDKs and REST API calls. SDKs are available in PHP, Perl, Python, C#, Ruby, Java, Android, Swift and more. We will consider various scenarios of EPUB to Image conversion: from storage to storage, from a local file system to the local file system, etc.

## **SDK Examples of EPUB to Image Conversion**

A widespread use case for Aspose.HTML Cloud SDK functions is file processing and converting.  Cloud SDK allows you to fetch an EPUB document from a storage location by its name or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert EPUB to JPG for different cases using available SDKs.

### **Example 1.**  Convert a local EPUB file to JPG and save the result to local path

JPG is one of the most commonly used image formats. Its uniqueness is the controlled loss of quality during compression. Therefore, it is widely used to store and send graphic content (photos, scanned copies, digitized images) over the Internet.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example demonstrates the simplest way to convert **EPUB to JPG C#** language applying. Local EPUB converted to JPG and saved to the local path. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert EPUB to JPG
var result = await api.ConvertAsync("test.epub", "test.jpg");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **EPUB to JPG java** language applying. Local EPUB converted to JPG and saved to the local path. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.epub")
                .saveToLocal("output.jpeg");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB to JPG** C++ language applying. Local EPUB converted to JPG and saved to the local path.

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
utility::string_t dst = w_cur_dir + L"result.jpeg";

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

The following example demonstrates how to convert **EPUB to JPG Python** language applying. Local EPUB converted to JPG and saved to the local path. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB to JPG PHP** language applying. Local EPUB converted to JPG and saved to the local path. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **EPUB to JPG Ruby** language applying. Local EPUB converted to JPG and saved to the local path. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **EPUB to JPG Node.js** language applying. Local EPUB converted to JPG and saved to the local path.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **EPUB to JPG Swift** language applying. Local EPUB converted to JPG and saved to the local path. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **EPUB to JPG Java/Android** applying. Local EPUB converted to JPG and saved to the local path. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.epub")
                .saveToLocal("output.jpeg");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **EPUB to JPG** REST API applying. Local EPUB converted to JPG and saved to the local path. Take a few required steps:
- Upload a local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/epub-jpg" \
    -d "{'InputPath': '/testpage.epub', 'OutputFile': 'test.jpg'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}


{{% alert color="primary" %}} 
EPUB to JPG conversion occurs with the **default conversion options**: the resulting JPG document’s width and height correspond to A4, all margins have zero value.
{{% /alert %}} 

### **Example 2.** Convert EPUB from the local file system to PNG with explicitly specified options and save it to the local path

PNG image format widely takes to transmit pictures over the network, display photos and graphics on web-pages and reserve in cloud storages. EPUB to PNG conversion may be required, for example, if you want to add a web page in a PowerPoint presentation, insert it on a blog for your readers, or send it by e-mail. The example below shows how to convert EPUB to PNG with explicitly specified options and save the result back to the local file system.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL">}}

{{< tab tabNum="1" >}}

The following SDK example demonstrates how to convert **EPUB to PNG C#** language applying. EPUB is taken from the local file system, converted to PNG and saved to the local drive. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Create an options instance and specify options for EPUB to PNG conversion
var options = new ImageConversionOptions()
                .SetHeight(800)
                .SetWidth(1000)
                .SetLeftMargin(10)
                .SetRightMargin(10)
                .SetBottomMargin(10)
                .SetTopMargin(10);

// Convert EPUB to PNG
var result = await api.ConvertAsync("test.epub", "test.png", options);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **EPUB to PNG java** language applying. EPUB is taken from the local file system, converted to PNG and saved to the local path. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConversionOptions opt = new ImageConversionOptions()
                        .setWidth(600)
                        .setHeight(900)
                        .setTopMargin(20)
                        .setBottomMargin(20)
                        .setLeftMargin(20)
                        .setRightMargin(20);

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.epub")
                .useOptions(opt)
                .saveToLocal("output.png");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB to PNG C++** language applying. EPUB is taken from the local file system, converted to PNG and saved to the local file system. 

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
utility::string_t dst = w_cur_dir + L"result.png";

std::shared_ptr<ConversionOptions> opts = std::make_shared<ConversionOptions>();
opts->setWidth(800)
    ->setHeight(600)
    ->setLeftMargin(10)
    ->setRightMargin(10)
    ->setTopMargin(10)
    ->setBottomMargin(10);

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

The following example demonstrates how to convert **EPUB to PNG Python** language applying. EPUB is taken from the local file system, converted to PNG and saved to the local drive. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB to PNG PHP** language applying. EPUB is taken from the local file system, converted to PNG and saved to the local file. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **EPUB to PNG Ruby** language applying. EPUB is taken from the local file system, converted to PNG and saved to the local drive. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **EPUB to PNG Node.js** language applying. EPUB is taken from the local file system, converted to PNG and saved to the local file. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **EPUB to PNG Swift** language applying. EPUB is taken from the local file system, converted to PNG and saved to the local drive. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **EPUB to PNG Java/Android** applying. EPUB is taken from the local file system, converted to PNG and saved to the local path. You can download the Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConversionOptions opt = new ImageConversionOptions()
                        .setWidth(600)
                        .setHeight(900)
                        .setTopMargin(20)
                        .setBottomMargin(20)
                        .setLeftMargin(20)
                        .setRightMargin(20);

ConverterBuilder builder = new ConverterBuilder()
                .fromLocalFile("input.epub")
                .useOptions(opt)
                .saveToLocal("output.png");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **EPUB to PNG** using REST API. Local EPUB converted to PNG and saved to the local file system.
Please take a few steps:
- Upload local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/epub-png" \
    -d "{'InputPath': '/testpage.epub', 'OutputFile': 'test.png', 'Options': {'Width':1000, 'Height': 800, 'LeftMargin': 10, 'RightMargin': 10, 'TopMargin': 10, 'BottomMargin': 10}}" \
    -H "Content-Type: application/json" \
    -H "Authorization: bearer <token>"
```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
More details about available conversion parameters for EPUB files are in the [SDK Conversion Options](/html/conversion-api/sdk-conversion-options/) section.

{{% /alert %}} 

### **Example 3.** Convert EPUB to GIF inside cloud storage

Aspose.HTML Cloud allows you to get an EPUB file from your cloud storage and save conversion result back to cloud storage.

{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **EPUB to GIF C#** language applying. EPUB file is located in cloud storage, converted to GIF and saved back to cloud storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert EPUB to GIF
var builder = new ConverterBuilder()
                .FromStorageFile("/test.epub")
                .ToStorageFile("/test.gif");
                
var result = await api.ConvertAsync(builder);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **EPUB to GIF java** language applying. EPUB file is located in cloud storage, converted to GIF and saved back to cloud storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromStorageFile("input.epub")
                .saveToStorage("output.gif");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB to GIF C++** language applying. EPUB file is located in cloud storage, converted to GIF and saved back to cloud storage. 

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
utility::string_t dst = L"result/in/storage/result.gif";

//Conversion
auto result = api->convertStorageToStorage(src, dst);
```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **EPUB to GIF Python** language applying. EPUB file is located in cloud storage, converted to GIF and saved back to cloud storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB to GIF PHP** language applying. EPUB file is located in cloud storage, converted to GIF and saved back to cloud storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **EPUB to GIF Ruby** language applying. EPUB file is located in cloud storage, converted to GIF and saved back to cloud storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **EPUB to GIF Node.js** language applying. EPUB file is located in cloud storage, converted to GIF and saved back to cloud storage. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **EPUB to GIF Swift** language applying. EPUB file is located in cloud storage, converted to GIF and saved back to cloud storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **EPUB to GIF Java/Android** applying. EPUB file is located in cloud storage, converted to GIF and saved back to cloud storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");

HtmlApi api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET");

ConverterBuilder builder = new ConverterBuilder()
                .fromStorageFile("input.epub")
                .saveToStorage("output.gif");

ConversionResult result = api.convert(builder);
```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **EPUB to GIF** using REST API. EPUB file is located in cloud storage, converted to GIF and saved back to cloud storage.
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/epub-gif" \
    -d "{'InputPath': '/test.epub', 'OutputFile': '/test.gif'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}
