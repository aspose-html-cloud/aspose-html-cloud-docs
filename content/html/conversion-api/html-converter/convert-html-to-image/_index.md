---
title: Convert HTML to Image - Cloud SDKs
linktitle: Convert HTML to Image
type: docs
aliases: /conversion-sdk-api/convert-html-to-jpeg/
keywords: convert html to image, html to image, convert html to jpeg, html to jpg, html to png, html to gif, sdk api, Python, PHP, Perl, Android, Swift, C#, Java, Node.js, curl
description: Learn how to use Cloud SDKs and REST API to convert HTML to Image formats such as JPG, PNG, GIF, TIFF, and BMP with a set of SDK examples. 
weight: 40
url: /convert-html-to-image/
lastmod: 2022-11-03
---

## **Summary**

A widespread use case for Aspose.HTML Cloud functions is file processing and converting. This article explains in a set of code examples how to convert {{%HTML%}} to Image file formats such as JPG, PNG, GIF, TIFF, and BMP. We will consider various scenarios of HTML to Image conversion: from storage to storage, from a local file system to a local drive, and from the Web to the local file system.

This article explains in a set of code examples how to convert an HTML document to {{%JPEG%}}, {{%PNG%}}, {{%GIF%}}, {{%TIFF%}} or {{%BMP%}} formats using Aspose.HTML Cloud SDKs.

## **Examples of HTML to Image Conversion**

Aspose.HTML Cloud SDK allows you to fetch an HTML document from storage location by its name, from a URL or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert HTML to Image formats for different cases. These examples show how to use available SDKs and REST API for conversion operations.

### **Example 1.**  Convert a local HTML file to JPEG and save the result to local path

JPEG is one of the most commonly used image formats. Its uniqueness is the controlled loss of quality during compression. Therefore, it is widely used to store and send graphic content (photos, scanned copies, digitized images) over the Internet.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example demonstrates the simplest way to convert **HTML to JPEG C#** language applying. Local HTML converted to JPEG and saved to the local path. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert HTML to JPEG
var result = await api.ConvertAsync("test.html", "test.jpeg");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to JPEG java** language applying. Local HTML converted to JPEG and saved to the local path. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to JPEG** C++ language applying. Local HTML converted to JPEG and saved to the local path.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to JPEG Python** language applying. Local HTML converted to JPEG and saved to the local path. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to JPEG JPEG** language applying. Local HTML converted to JPEG and saved to the local path. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to JPEG Ruby** language applying. Local HTML converted to JPEG and saved to the local path. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to JPEG Node.js** language applying. Local HTML converted to JPEG and saved to the local path.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to JPEG Swift** language applying. Local HTML converted to JPEG and saved to the local path. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to JPEG Java/Android** applying. Local HTML converted to JPEG and saved to the local path. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to JPEG** REST API applying. Local HTML converted to JPEG and saved to the local path. Take a few required steps:
- Upload a local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-jpeg" \
    -d "{'InputPath': '/testpage.html', 'OutputFile': 'test.jpeg'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}


{{% alert color="primary" %}} 
HTML to JPEG conversion occurs with the **default conversion options**: the resulting JPEG document’s width and height correspond to A4, all margins have zero value.
{{% /alert %}} 

### **Example 2.** Convert HTML from the local file system to PNG with explicitly specified options and save it to the local path

PNG image format widely takes to transmit pictures over the network, display photos and graphics on web-pages and reserve in cloud storages. HTML to PNG conversion may be required, for example, if you want to add a web page in a PowerPoint presentation, insert it on a blog for your readers, or send it by e-mail. The example below shows how to convert HTML to PNG with explicitly specified options and save the result back to the local file system.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL">}}

{{< tab tabNum="1" >}}

The following SDK example demonstrates how to convert **HTML to PNG C#** language applying. HTML is taken from the local file system, converted to PNG and saved to the local drive. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Create an options instance and specify options for HTML to PNG conversion
var options = new ImageConversionOptions()
                .SetHeight(800)
                .SetWidth(1000)
                .SetLeftMargin(10)
                .SetRightMargin(10)
                .SetBottomMargin(10)
                .SetTopMargin(10);

// Convert HTML to PNG
var result = await api.ConvertAsync("test.html", "test.png", options);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to PNG java** language applying. HTML is taken from the local file system, converted to PNG and saved to the local path. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to PNG C++** language applying. HTML is taken from the local file system, converted to PNG and saved to the local file system. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to PNG Python** language applying. HTML is taken from the local file system, converted to PNG and saved to the local drive. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to PNG PHP** language applying. HTML is taken from the local file system, converted to PNG and saved to the local file. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to PNG Ruby** language applying. HTML is taken from the local file system, converted to PNG and saved to the local drive. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to PNG Node.js** language applying. HTML is taken from the local file system, converted to PNG and saved to the local file. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to PNG Swift** language applying. HTML is taken from the local file system, converted to PNG and saved to the local drive. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to PNG Java/Android** applying. HTML is taken from the local file system, converted to PNG and saved to the local path. You can download the Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to PNG** using REST API. Local HTML converted to PNG and saved to the local file system.
Please take a few steps:
- Upload local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-png" \
    -d "{'InputPath': '/testpage.html', 'OutputFile': 'test.png', 'Options': {'Width':1000, 'Height': 800, 'LeftMargin': 10, 'RightMargin': 10, 'TopMargin': 10, 'BottomMargin': 10}}" \
    -H "Content-Type: application/json" \
    -H "Authorization: bearer <token>"
```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
More details about available conversion parameters for HTML files are in the [SDK Conversion Options](/html/conversion-api/sdk-conversion-options/) section.

{{% /alert %}} 

### **Example 3.** Convert a Web page to GIF and save the result to the local file system

Aspose.HTML Cloud allows you to get an HTML page from the web by its URL, convert it to another format and save into the local file system. The example below demonstrates how to convert HTML to GIF with the default conversion parameters.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **HTML to GIF C#** language applying. HTML is taken from the Web, converted to GIF and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert HTML to GIF using ConvertUrlAsync() method
var result = await api.ConvertUrlAsync("https://example.com", "test.gif");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **HTML to GIF java** language applying. HTML is taken from the Web, converted to GIF and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to GIF C++** language applying. HTML is taken from the Web, converted to GIF and saved to the local file system. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **HTML to GIF Python** language applying. HTML is taken from the Web, converted to GIF and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to GIF PHP** language applying. HTML is taken from the Web, converted to GIF and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **HTML to GIF Ruby** language applying. HTML is taken from the Web, converted to GIF and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **HTML to GIF Node.js** language applying. HTML is taken from the Web, converted to GIF and saved to the local file system. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **HTML to GIF Swift** language applying. HTML is taken from the Web, converted to GIF and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **HTML to GIF Java/Android** applying. HTML is taken from the Web, converted to GIF and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to GIF** using REST API. HTML is taken from the Web, converted to GIF and saved to the local file system.
Please take a few steps:
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-gif" \
    -d "{'InputPath': 'https://example.com', 'OutputFile': 'test.gif'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}

HTML to GIF conversion occurs with the **default conversion options**: the resulting GIF document’s width and height correspond to A4, all margins have zero value.

### **Example 4.** Convert HTML to JPEG inside cloud storage

Aspose.HTML Cloud allows you to get an HTML file from your cloud storage and save conversion result back to cloud storage.

{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **HTML to JPEG C#** language applying. HTML file is located in cloud storage, converted to JPEG and saved back to the cloud storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert HTML to JPEG
var builder = new ConverterBuilder()
                .FromStorageFile("/test.html")
                .ToStorageFile("/test.jpeg");
                
var result = await api.ConvertAsync(builder);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **HTML to JPEG java** language applying. HTML file is located in cloud storage, converted to JPEG and saved back to the cloud storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to JPEG C++** language applying. HTML file is located in cloud storage, converted to JPEG and saved back to the cloud storage. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **HTML to JPEG Python** language applying. HTML file is located in cloud storage, converted to JPEG and saved back to the cloud storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to JPEG PHP** language applying. HTML file is located in cloud storage, converted to JPEG and saved back to the cloud storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **HTML to JPEG Ruby** language applying. HTML file is located in cloud storage, converted to JPEG and saved back to the cloud storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **HTML to JPEG Node.js** language applying. HTML file is located in cloud storage, converted to JPEG and saved back to the cloud storage. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **HTML to JPEG Swift** language applying. HTML file is located in cloud storage, converted to JPEG and saved back to the cloud storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **HTML to JPEG Java/Android** applying. HTML file is located in cloud storage, converted to JPEG and saved back to the cloud storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to JPEG** using REST API. HTML file is located in a cloud storage, converted to JPEG and saved back to the cloud storage.
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-jpeg" \
    -d "{'InputPath': '/test.html', 'OutputFile': '/test.jpeg'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}
