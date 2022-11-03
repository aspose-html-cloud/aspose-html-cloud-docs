---
title: Convert HTML to TIFF
type: docs
aliases: /conversion-sdk-api/convert-html-to-tiff/
keywords: html to tiff, html to tiff conversion, format conversion, html
  conversion, asynchronous conversion, conversion SDK, SDK example, convert html
  to image, convert html to tiff, Python, PHP, Perl, Android, Swift, C#, Java,
  Node.js
description: The article explains the usage of Aspose.HTML Cloud client SDKs for
  HTML to TIFF conversion by a set of examples. SDKs are wrappers upon REST API
  to help developers speed up their development. SDKs are available in PHP,
  Perl, Android, Swift, C#, Java and more.
weight: 70
---

## **Summary**

Aspose.HTML Cloud produces a few quick and easy ways to convert HTML files to various image formats: by direct REST API calls or using SDKs. There are multiple image formats accessible for converting HTML documents with Aspose.HTML Cloud APIs - {{%TIFF%}}, {{%PNG%}}, {{%BMP%}}, {{%GIF%}}, and {{%TIFF%}}.

This article explains in a set of code examples how to convert an {{%HTML%}} document to {{%TIFF%}} using Aspose.HTML Cloud.


## **SDK Examples of HTML to TIFF Conversion**

Aspose.HTML Cloud allows you to fetch an HTML document from a storage location by its name, from a URL or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert HTML to TIFF programmatically for different cases.

## **Example 1.**  Convert a local HTML file to TIFF and save the result to local path

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example demonstrates the simplest way to convert **HTML to TIFF C#** language applying. Local HTML converted to TIFF and saved to the local path. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert from HTML file to TIFF file
var result = await api.ConvertAsync("test.html", "test.tiff");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to TIFF java** language applying. Local HTML converted to TIFF and saved to the local path. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to TIFF** C++ language applying. Local HTML converted to TIFF and saved to the local path.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to TIFF Python** language applying. Local HTML converted to TIFF and saved to the local path. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to TIFF TIFF** language applying. Local HTML converted to TIFF and saved to the local path. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to TIFF Ruby** language applying. Local HTML converted to TIFF and saved to the local path. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to TIFF Node.js** language applying. Local HTML converted to TIFF and saved to the local path.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to TIFF Swift** language applying. Local HTML converted to TIFF and saved to the local path. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to TIFF Java/Android** applying. Local HTML converted to TIFF and saved to the local path. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to TIFF** REST API applying. Local HTML converted to TIFF and saved to the local path.
3 steps:
- Upload local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage)
- Call REST API to execute conversion (in the example bellow)
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage)
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-tiff" \
    -d "{'InputPath': '/testpage.html', 'OutputFile': 'test.tiff'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}


{{% alert color="primary" %}} 
HTML to TIFF conversion occurs with the **default conversion options**: the resulting TIFF document’s width and height correspond to A4, all margins have zero value.

{{% /alert %}} 

### **Example 2.** Convert HTML from the local file system to TIFF with explicitly specified options and save to the local path

The example below demonstrates how to convert an HTML file from the local file system to TIFF with explicitly specified options and save the result back to the local path.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL">}}

{{< tab tabNum="1" >}}

The following SDK example demonstrates how to convert **HTML to TIFF C#** language applying. HTML is taken from the local file system, converted to TIFF and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Initialize options
var options = new ImageConversionOptions()
                .SetHeight(800)
                .SetWidth(1000)
                .SetLeftMargin(10)
                .SetRightMargin(10)
                .SetBottomMargin(10)
                .SetTopMargin(10);

// Convert from HTML file to TIFF file
var result = await api.ConvertAsync("test.html", "test.tiff", options);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to TIFF java** language applying. HTML is taken from the local file system, converted to TIFF and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to TIFF C++** language applying. HTML is taken from the local file system, converted to TIFF and saved to the storage. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to TIFF Python** language applying. HTML is taken from the local file system, converted to TIFF and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to TIFF PHP** language applying. HTML is taken from the local file system, converted to TIFF and saved to the storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to TIFF Ruby** language applying. HTML is taken from the local file system, converted to TIFF and saved to the storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to TIFF Node.js** language applying. HTML is taken from the local file system, converted to TIFF and saved to the storage. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to TIFF Swift** language applying. HTML is taken from the local file system, converted to TIFF and saved to the storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to TIFF Java/Android** applying. TIFF is taken from the local file system, converted to TIFF and saved to the storage. You can download the Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to TIFF** using REST API. Local HTML converted to TIFF and saved to the local file system.
3 steps:
- Upload local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage)
- Call REST API to execute conversion (in the example bellow)
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage)
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-tiff" \
    -d "{'InputPath': '/testpage.html', 'OutputFile': 'test.tiff', 'Options': {'Width':1000, 'Height': 800, 'LeftMargin': 10, 'RightMargin': 10, 'TopMargin': 10, 'BottomMargin': 10}}" \
    -H "Content-Type: application/json" \
    -H "Authorization: bearer <token>"
```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
More details about available conversion parameters for HTML files are in the [SDK Conversion Options](/html/conversion-api/sdk-conversion-options/) section.

{{% /alert %}} 

### **Example 3.** Convert a Web page to TIFF and save the result to the local file system

Aspose.HTML Cloud allows you to get an HTML page from the web by its URL, convert it to another format and save into the local file system. The example below demonstrates how to convert HTML to TIFF with the default conversion parameters.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **HTML to TIFF C#** language applying. HTML is got from the Web, converted to TIFF and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert
var result = await api.ConvertUrlAsync("https://example.com", "test.tiff");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **HTML to TIFF java** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to TIFF C++** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **HTML to TIFF Python** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to TIFF PHP** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **HTML to TIFF Ruby** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **HTML to TIFF Node.js** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **HTML to TIFF Swift** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **HTML to TIFF Java/Android** applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to TIFF** using REST API. HTML is taken from the Web, converted to TIFF and saved to the local file system.
2 steps:
- Call REST API to execute conversion (in the example bellow)
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage)
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-tiff" \
    -d "{'InputPath': 'https://example.com', 'OutputFile': 'test.tiff'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}

HTML to TIFF conversion occurs with the **default conversion options**: the resulting TIFF document’s width and height correspond to A4, all margins have zero value.

### **Example 4.** Convert HTML to TIFF inside cloud storage

Aspose.HTML Cloud allows you to get an HTML file from your cloud storage and save conversion result back to cloud storage.

{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **HTML to TIFF C#** language applying. HTML file is located in a cloud storage, converted to TIFF and saved back to the cloud storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert
var builder = new ConverterBuilder()
                .FromStorageFile("/test.html")
                .ToStorageFile("/test.tiff");
                
var result = await api.ConvertAsync(builder);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **HTML to TIFF java** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to TIFF C++** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **HTML to TIFF Python** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to TIFF PHP** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **HTML to TIFF Ruby** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **HTML to TIFF Node.js** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **HTML to TIFF Swift** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **HTML to TIFF Java/Android** applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to TIFF** using REST API. HTML file is located in a cloud storage, converted to TIFF and saved back to the cloud storage.
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-tiff" \
    -d "{'InputPath': '/test.html', 'OutputFile': '/test.tiff'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}

Aspose.HTML Cloud SDK allows you to get an HTML page from the web by its URL, convert it to  {{%TIFF%}}   format and save it into the local file system. The example below demonstrates how to convert HTML to TIFF with the default conversion parameters.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to TIFF C#** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create a ConverterBuilder instance and specify builder methods with parameters of conversion
ConverterBuilder builder = new ConverterBuilder()
    .FromUrl("https://stallman.org/articles/anonymous-payments-thru-phones.html")
    .To(new TIFFConversionOptions())
    .SaveToLocalDirectory(@"Output\Url");

// Initialize SDK API in the builder style           
using (var api = new HtmlApi(cb => cb
    .WithClientId(ClientId)           // from user Сredentials            
    .WithClientSecret(ClientSecret)))
{
    // Convert HTML to TIFF            
    ConversionResult result = api.Convert(builder);

    if(result.Status == "success" && result.Files.Length > 0)
    {
        // Download file(s) by path result.Files 
    }
}	
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to TIFF java** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to TIFF C++** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to TIFF Python** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to TIFF PHP** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system.  You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to TIFF Ruby** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system.  You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to TIFF Node.js** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to TIFF Swift** language applying. HTML is taken from the Web, converted to TIFF and saved to the local file system.  You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to TIFF Java/Android** applying. HTML is taken from the Web, converted to TIFF and saved to the local file system.  You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

In the example, we use methods of the **ConverterBuilder** class: **FromUrl**(`url`), **To**(`ConversionOptions`) and **SaveToLocalDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result.

HTML to TIFF conversion occurs with the **default conversion options**: the resulting TIFF document’s width and height correspond to A4, all margins have zero value, and the resolution value is 96 dpi.

{{% alert color="primary" %}} 
Please check the [Available SDKs](/html/overview/available-sdks/) article to learn how to add an SDK to your project.

To obtain more information about converting between formats, please read the [Conversion SDK API](/html/conversion-api/conversion-sdk-api/) section.

{{% /alert %}}