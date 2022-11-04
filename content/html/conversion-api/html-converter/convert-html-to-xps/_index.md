---
title: Convert HTML to XPS - Cloud SDKs
linktitle: Convert HTML to XPS
type: docs
aliases: /conversion-sdk-api/convert-html-to-xps/
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

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to XPS** C++ language applying. Local HTML converted to XPS and saved to the local path.

```c++

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

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to XPS** REST API applying. Local HTML converted to XPS and saved to the local path. Follow a few required steps:
- Upload local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
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
                .SetHeight(800)
                .SetWidth(1000)
                .SetLeftMargin(10)
                .SetRightMargin(10)
                .SetBottomMargin(10)
                .SetTopMargin(10);

// Convert from HTML file to XPS file
var result = await api.ConvertAsync("test.html", "test.xps", options);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to XPS java** language applying. Local HTML is converted to XPS and saved to the local drive. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to XPS C++** language applying. Local HTML converted to XPS and saved on the local drive. 

```c++

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

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to XPS** using REST API. Local HTML converted to XPS and saved to the local file system. Follow a few required steps:
- Upload local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
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

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to XPS C++** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system. 

```c++

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

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to XPS** using REST API. HTML is taken from the Web, converted to XPS and saved to the local file system.
Follow a few required steps:
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
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

The following example shows how to convert **HTML to XPS C#** language applying. HTML file is located in a cloud storage, converted to XPS and saved back to the cloud storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

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

The following example shows how to convert **HTML to XPS java** language applying. HTML file is located in a cloud storage, converted to XPS and saved back to the cloud storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to XPS C++** language applying. HTML file is located in a cloud storage, converted to XPS and saved back to the cloud storage. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **HTML to XPS Python** language applying. HTML file is located in a cloud storage, converted to XPS and saved back to the cloud storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to XPS PHP** language applying. HTML file is located in a cloud storage, converted to XPS and saved back to the cloud storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **HTML to XPS Ruby** language applying. HTML file is located in a cloud storage, converted to XPS and saved back to the cloud storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **HTML to XPS Node.js** language applying. HTML file is located in a cloud storage, converted to XPS and saved back to the cloud storage. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **HTML to XPS Swift** language applying. HTML file is located in a cloud storage, converted to XPS and saved back to the cloud storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **HTML to XPS Java/Android** applying. HTML file is located in a cloud storage, converted to XPS and saved back to the cloud storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to XPS** using REST API. HTML file is located in a cloud storage, converted to XPS and saved back to the cloud storage.
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-xps" \
    -d "{'InputPath': '/test.html', 'OutputFile': '/test.xps'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}