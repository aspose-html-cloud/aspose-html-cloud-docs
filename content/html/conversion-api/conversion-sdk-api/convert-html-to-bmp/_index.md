---
title: "Convert HTML to BMP"
type: docs
url: /conversion-sdk-api/convert-html-to-bmp/
keywords: "format conversion, html conversion, asynchronous conversion, conversion SDK, convert html to image, convert html to bmp, Python, PHP, Perl, Android, Swift, C#, Java, Node.js"
description: "The article explains the usage of Aspose.HTML Cloud client SDKs for HTML to BMP conversion by a set of examples. SDKs are wrappers upon REST API to help developers speed up their development. SDKs are available in PHP, Perl, Android, Swift, C#, Java and more."
weight: 50
---

## **Summary**

The article explains in a set of code examples how to convert an {{%HTML%}} document to {{%BMP%}} using Aspose.HTML Cloud client SDKs. We will consider various scenarios of HTML to BMP conversion: from storage to storage, from local file system to storage and from the Web to local file system.

{{% alert color="primary" %}} 

Learn how to convert an HTML file to other formats using direct REST API calls from the [Conversion REST API](/html/conversion-rest-api/) article.

{{% /alert %}} 

## **SDK Examples of HTML to BMP Conversion**

Aspose.HTML Cloud SDK allows you to fetch an HTML document from storage location by its name, from a URL or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert HTML to BMP for different cases using available SDKs.

### **Example 1.**  Convert  HTML from the cloud storage to BMP and save the result to the storage

Let’s consider a common SDK usage scenario when the source document is in the cloud storage, and you want to convert it to some other format and save to the storage. In our example, it is HTML to {{%BMP%}} conversion.

The conversion process is following - a source document is loaded from the *default* cloud storage, and after conversion is completed, the result is saved to this storage.  The default BMPConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: **FromStorageFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorage**(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to BMP C#** language applying. HTML is taken from the cloud storage, converted to BMP and saved to the storage.  You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
const string STORAGE_SRCFOLDER = "storage:///Html/TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{STORAGE_SRCFOLDER}/{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/Bmp";

using(var api = new HtmlApi(clientID, clientSecret)) // initialize SDK API
{
    ConverterBuilder convHtmlBmp = new ConverterBuilder()
        .FromStorageFile(srcFilePath)
        .To(new BMPConversionOptions())
        .SaveToStorage(destFolder);

    ConversionResult result = api.Convert(convHtmlBmp);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // download file(s) by path result.Files
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to BMP java** language applying. HTML is taken from the cloud storage, converted to BMP and saved to the storage.  You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to BMP C++** language applying. HTML is taken from the cloud storage, converted to BMP and saved to the storage. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to BMP Python** language applying. HTML is taken from the cloud storage, converted to BMP and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to BMP PHP** language applying. HTML is taken from the cloud storage, converted to BMP and saved to the storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to BMP Ruby** language applying. HTML is taken from the cloud storage, converted to BMP and saved to the storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to BMP Node.js** language applying. HTML is taken from the cloud storage, converted to BMP and saved to the storage.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to BMP Swift** language applying. HTML is taken from the cloud storage, converted to BMP and saved to the storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to BMP Java/Android** applying. HTML is taken from the cloud storage, converted to BMP and saved to the storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
HTML to BMP conversion occurs with the **default conversion options**: the resulting BMP document’s width and height correspond to A4, all margins have zero value, and the resolution value is 96 dpi.

{{% /alert %}} 



### **Example 2.** Convert HTML from the local file system to BMP with explicitly specified options and save to the storage

Let’s consider a common SDK usage scenario when the source document is in the local file system, and you want to convert it to some other format and save to the cloud storage. In our example, it is HTML to BMP conversion with explicitly specified options.

For conversion, we use methods of the **ConverterBuilder** class: **FromLocalFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorage**(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result. The **Convert**(`ConverterBuilder builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to BMP C#** language applying. HTML is taken from the local file system, converted to BMP and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
const string LOCAL_TESTDATA = "d:\TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{LOCAL_TESTDATA}\{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/Bmp";

using(var api = new HtmlApi(clientId, clientSecret))
{
    ConversionOptions bmpOpts = new BMPConversionOptions()
        .SetHeight(800)
        .SetWidth(1000)
        .SetLeftMargin(10)
        .SetRightMargin(10)
        .SetBottomMargin(10)
        .SetTopMargin(10);

    ConverterBuilder convHtmlBmp = new ConverterBuilder()
        .FromLocalFile(srcFilePath)
        .To(bmpOpts)
        .SaveToStorage(destFolder);

    ConversionResult result = api.Convert(convHtmlBmp);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // download file(s) by path result.Files
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to BMP java** language applying. HTML is taken from the local file system, converted to BMP and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to BMP C++** language applying. HTML is taken from the local file system, converted to BMP and saved to the storage.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to BMP Python** language applying. HTML is taken from the local file system, converted to BMP and saved to the storage.  You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to BMP PHP** language applying. HTML is taken from the local file system, converted to BMP and saved to the storage.  You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to BMP Ruby** language applying. HTML is taken from the local file system, converted to BMP and saved to the storage.  You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to BMP Node.js** language applying. HTML is taken from the local file system, converted to BMP and saved to the storage.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to BMP Swift** language applying. HTML is taken from the local file system, converted to BMP and saved to the storage.  You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to BMP Java/Android** applying. HTML is taken from the local file system, converted to BMP and saved to the storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
More details about available conversion parameters for HTML files are in the [SDK Conversion Options](/html/sdk-conversion-options/) section.

{{% /alert %}} 

### **Example 3.**  Convert a Web page to BMP and save the result to the local file system

Aspose.HTML Cloud SDK allows you to get HTML page from the web by its URL, convert it to  {{%BMP%}}  format and save into the local file system. The example below demonstrates how to convert HTML to BMP with the default conversion parameters.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to BMP C#** language applying. HTML is taken from the Web, converted to BMP and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
const string LOCAL_TESTRESULT = "d:\TestResult";

var sourceUrl = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
var destFolder =  Path.Combine(LOCAL_TESTRESULT, "Bmp");

using(var api = new HtmlApi(clientID, clientSecret)) // initialize SDK API
{
    ConverterBuilder convHtmlBmp = new ConverterBuilder()
        .FromUrl(sourceUrl)
        .To(new BMPConversionOptions())
        .SaveToLocal(destFolder);

    ConversionResult result = api.Convert(convHtmlBmp);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // check if file exists locally
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to BMP java** language applying. HTML is taken from the Web, converted to BMP and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to BMP C++** language applying. HTML is taken from the Web, converted to BMP and saved to the local file system.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to BMP Python** language applying. HTML is taken from the Web, converted to BMP and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to BMP PHP** language applying. HTML is taken from the Web, converted to BMP and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to BMP Ruby** language applying. HTML is taken from the Web, converted to BMP and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to BMP Node.js** language applying. HTML is taken from the Web, converted to BMP and saved to the local file system.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to BMP Swift** language applying. HTML is taken from the Web, converted to BMP and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to BMP Java/Android** applying. HTML is taken from the Web, converted to BMP and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

In the example, we use methods of the **ConverterBuilder** class: **FromUrl**(`urlAddress`), **To**(`ConversionOptions`) and **SaveToLocal**(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result. The **Convert**(`ConverterBuilder builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.


HTML to BMP conversion occurs with the **default conversion options**: the resulting BMP document’s width and height correspond to A4, all margins have zero value, and the resolution value is 96 dpi.

{{% alert color="primary" %}} 
You can download Aspose.HTML Cloud SDKs of your required platform from [GitHub](https://github.com/aspose-html-cloud/). 

{{% /alert %}} 