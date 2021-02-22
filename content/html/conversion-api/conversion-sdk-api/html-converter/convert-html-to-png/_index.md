---
title: "Convert HTML to PNG"
type: docs
keywords: "format conversion, html conversion, asynchronous conversion, conversion SDK, convert html to image, convert html to png, Python, PHP, Perl, Android, Swift, C#, Java, Node.js"
description: "The article explains the usage of Aspose.HTML Cloud client SDKs for HTML to PNG conversion by a set of examples. SDKs are wrappers upon REST API to help developers speed up their development. SDKs are available in PHP, Perl, Android, Swift, C#, Java and more."
weight: 80
---

## Summary

A widespread use case for Aspose.HTML Cloud SDKs functions is file processing and converting. This article explains in a set of code examples how to convert an {{%HTML%}} document to {{%PNG%}}  using Cloud client SDKs. PNG image format widely takes to transmit pictures over the network, display photos and graphics on web-pages and reserve in cloud storages. We will consider various scenarios of HTML to PNG conversion: from storage to storage, from a local file system to the storage and from the Web to the local file system. 

{{% alert color="primary" %}} 

Learn how to convert an HTML file to other formats using direct REST API calls from the [Conversion REST API](/html/conversion-api/conversion-rest-api/) article.

{{% /alert %}} 

## **SDK Examples of HTML to PNG Conversion**

Aspose.HTML Cloud SDK allows you to fetch an HTML document from storage location by its name, from a URL or a local file on your drive, convert it to specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert HTML to PNG programmatically for different cases.

### **Example 1.** Convert HTML from the storage to PNG and save the result to the storage

The conversion process is following - a source document is loaded from the *default* cloud storage, and after conversion is completed, the result is saved to this storage.  The default PNGConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: **FromStorageFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorage**(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result. The **Convert**(`ConverterBuilder builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example illustrates how to convert **HTML to PNG C#** language applying. HTML is taken from the cloud storage, converted to PNG and saved to the storage.  You can download C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
const string STORAGE_SRCFOLDER = "storage:///Html/TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{STORAGE_SRCFOLDER}/{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/Png";

using(var api = new HtmlApi(clientID, clientSecret)) // initialize SDK API
{
    ConverterBuilder convHtmlPng = new ConverterBuilder()
        .FromStorageFile(srcFilePath)
        .To(new PNGConversionOptions())
        .SaveToStorage(destFolder);

    ConversionResult result = api.Convert(convHtmlPng);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // download file(s) by path result.Files
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to PNG java** language applying. HTML is taken from the cloud storage, converted to PNG and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to PNG C++** language applying. HTML is taken from the cloud storage, converted to PNG and saved to the storage. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to PNG Python** language applying. HTML is taken from the cloud storage, converted to PNG and saved to the storage.  You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to PNG PHP** language applying. HTML is taken from the cloud storage, converted to PNG and saved to the storage.  You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to PNG Ruby** language applying. HTML is taken from the cloud storage, converted to PNG and saved to the storage.  You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to PNG Node.js** language applying. HTML is taken from the cloud storage, converted to PNG and saved to the storage. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to PNG Swift** language applying. HTML is taken from the cloud storage, converted to PNG and saved to the storage.  You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example describes how to convert **HTML to PNG Java/Android** applying. HTML is taken from the cloud storage, converted to PNG and saved to the storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
HTML to PNG conversion occurs with the **default conversion options**: the resulting PNG document’s width and height correspond to A4, all margins have zero value, and the resolution value is 96 dpi.

{{% /alert %}} 



### **Example 2.** Convert HTML from the local file system to PNG with explicitly specified options and save to the storage

The example below demonstrates how to convert an HTML file from the local file system to {{%PNG%}} with explicitly specified options and save the result to the cloud storage.

 For conversion, we use methods of the **ConverterBuilder** class: **FromLocalFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorage**(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example illustrates how to convert **HTML to PNG C#** language applying. HTML is taken from the local file system, converted to PNG and saved to the storage.  You can download C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
const string LOCAL_TESTDATA = "d:\TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{LOCAL_TESTDATA}\{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/Png";

using(var api = new HtmlApi(clientId, clientSecret))
{
    ConversionOptions pngOpts = new PNGConversionOptions()
        .SetHeight(800)
        .SetWidth(1000)
        .SetLeftMargin(10)
        .SetRightMargin(10)
        .SetBottomMargin(10)
        .SetTopMargin(10)
        .SetResolution(300);

    ConverterBuilder convHtmlPng = new ConverterBuilder()
        .FromLocalFile(srcFilePath)
        .To(pngOpts)
        .SaveToStorage(destFolder);

    ConversionResult result = api.Convert(convHtmlPng);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // download file(s) by path result.Files
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to PNG java** language applying. HTML is taken from the local file system, converted to PNG and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to PNG C++** language applying. HTML is taken from the local file system, converted to PNG and saved to the storage.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to PNG Python** language applying. HTML is taken from the local file system, converted to PNG and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to PNG PHP** language applying. HTML is taken from the local file system, converted to PNG and saved to the storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to PNG Ruby** language applying. HTML is taken from the local file system, converted to PNG and saved to the storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to PNG Node.js** language applying. HTML is taken from the local file system, converted to PNG and saved to the storage. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to PNG Swift** language applying. HTML is taken from the local file system, converted to PNG and saved to the storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example describes how to convert **HTML to PNG Java/Android** applying. HTML is taken from the local file system, converted to PNG and saved to the storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

In the example above, the conversion HTML to PNG occurs with the **ConversionOptions** specifying, among which there is the **Resolution** that applicable only to image formats. The set resolution value (300 dpi) indicates higher image quality than using the default value (96 dpi).

{{% alert color="primary" %}} 
More details about available conversion parameters for HTML files are in the [SDK Conversion Options](/html/sdk-conversion-options/) section.

{{% /alert %}} 

### **Example 3.**  Convert a Web page to PNG and save the result to the local file system

Aspose.HTML Cloud SDK allows you to get HTML page from the web by its URL, convert it to {{%PNG%}} format and save the result into the local file system. The example below demonstrates how to convert HTML to PNG with the default conversion parameters.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example illustrates how to convert **HTML to PNG C#** language applying. HTML is taken from the Web, converted to PNG and saved to the local file system.  You can download C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
const string LOCAL_TESTRESULT = "d:\TestResult";

var sourceUrl = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
var destFolder =  Path.Combine(LOCAL_TESTRESULT, "Png");

using(var api = new HtmlApi(clientID, clientSecret)) // initialize SDK API
{
    ConverterBuilder convHtmlPng = new ConverterBuilder()
        .FromUrl(sourceUrl)
        .To(new PNGConversionOptions())
        .SaveToLocal(destFolder);

    ConversionResult result = api.Convert(convHtmlPng);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // check if file exists locally
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to PNG java** language applying. HTML is taken from the Web, converted to PNG and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to PNG C++** language applying. HTML is taken from the Web, converted to PNG and saved to the local file system.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to PNG Python** language applying. HTML is taken from the Web, converted to PNG and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to PNG PHP** language applying. HTML is taken from the Web, converted to PNG and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to PNG Ruby** language applying. HTML is taken from the Web, converted to PNG and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to PNG Node.js** language applying. HTML is taken from the Web, converted to PNG and saved to the local file system.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to PNG Swift** language applying. HTML is taken from the Web, converted to PNG and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example describes how to convert **HTML to PNG Java/Android** applying. HTML is taken from the Web, converted to PNG and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

In the example, we use methods of the **ConverterBuilder** class: **FromUrl**(`urlAddress`), **To**(`ConversionOptions`) and **SaveToLocal**(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result.


HTML to PNG conversion occurs with the **default conversion options**: the resulting PNG document’s width and height correspond to A4, all margins have zero value, and the resolution is 96 dpi.

{{% alert color="primary" %}} 
You can download Aspose.HTML Cloud SDKs of your required platform from [GitHub](https://github.com/aspose-html-cloud/). 

{{% /alert %}} 