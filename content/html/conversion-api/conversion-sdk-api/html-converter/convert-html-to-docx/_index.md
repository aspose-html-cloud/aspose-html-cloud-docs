---
title: "Convert HTML to DOCX"
type: docs
keywords: "format conversion, html conversion, asynchronous conversion, conversion SDK, convert html to doc, convert html to docx, Python, PHP, Perl, Android, Swift, C#, Java, Node.js"
description: "The article explains the usage of Aspose.HTML Cloud client SDKs for HTML to DOCX/DOC conversion by a set of examples. SDKs are wrappers upon REST API to help developers speed up their development. SDKs are available in PHP, Perl, Android, Swift, C#, Java and more."
weight: 30
---

The document  formats {{%DOCX%}} and {{%DOC%}} can contain a wide range of data, including text, tables, raster and vector graphics, video, sounds and diagrams. These formats are very popular because of the variety of options they offer users to write any type of documents.  DOCX/DOC documents support a wide range of formatting features. Sometimes, they are not always the best choice for distributing as they can be easily modified without the author's approval.

## **Summary**

Aspose.HTML Cloud produces quick and easy way to convert {{%HTML%}} to {{%DOC%}}, {{%DOCX%}} using Aspose.HTML Cloud client SDKs. This article explains in a set of code examples how to convert an HTML file to DOC/DOCX using available SDKs.

{{% alert color="primary" %}} 

The article [Conversion REST API]() describes how to convert an HTML file to other formats using direct REST API call.

{{% /alert %}} 



## **SDK Examples of HTML to DOCX/DOC Conversion**

Aspose.HTML Cloud SDK allows you to fetch an HTML document from storage location by its name, from a URL or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert HTML to DOCX/DOC for different cases using available SDKs.

### **Example 1.**  Convert  HTML from the cloud storage to DOCX/DOC and save the result to the storage

Let’s consider a common SDK usage scenario when the source document is in the cloud storage, and you want to convert it to some other format and save to the storage. In our example, it is HTML to DOCX/DOC conversion.

The conversion process is following - a source document is loaded from the *default* cloud storage, and after conversion is completed, the result is saved to this storage.  The default DOCConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: **FromStorageFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorage**(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result. The **Convert**(`ConverterBuilder builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to DOCX C#** language applying. HTML is taken from the cloud storage, converted to DOCX and saved to the storage.  You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
const string STORAGE_SRCFOLDER = "storage:///Html/TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{STORAGE_SRCFOLDER}/{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/Doc";

using(var api = new HtmlApi(clientID, clientSecret)) // initialize SDK API
{
    ConverterBuilder convHtmlDoc = new ConverterBuilder()
        .FromStorageFile(srcFilePath)
        .To(new DOCConversionOptions())
        .SaveToStorage(destFolder);

    ConversionResult result = api.Convert(convHtmlDoc);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // download file(s) by path result.Files
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to DOCX java** language applying. HTML is taken from the storage, converted to DOCX and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to DOCX C++** language applying. HTML is taken from the storage, converted to DOCX and saved to the storage.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to DOCX Python** language applying. HTML is taken from the storage, converted to DOCX and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to DOCX PHP** language applying. HTML is taken from the storage, converted to DOCX and saved to the storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to DOCX Ruby** language applying. HTML is taken from the storage, converted to DOCX and saved to the storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to DOCX Node.js** language applying. HTML is taken from the storage, converted to DOCX and saved to the storage.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to DOCX Swift** language applying. HTML is taken from the storage, converted to DOCX and saved to the storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to DOCX Java/Android** applying. HTML is taken from the storage, converted to DOCX and saved to the storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
HTML to DOCX conversion occurs with the **default conversion options**: the resulting DOCX document’s width and height correspond to A4, all margins have zero value.

{{% /alert %}} 



### **Example 2.** Convert HTML from the local file system to DOCX/DOC  with explicitly specified options and save the result to the storage

The example below demonstrates how to convert an HTML file from the local file system to DOCX/DOC format with explicitly specified options and save in the cloud storage.

 For conversion, we use methods of the **ConverterBuilder** class: **FromLocalFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorage**(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to DOCX C#** language applying. HTML is taken from the local file system, converted to DOCX and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
const string LOCAL_TESTDATA = "d:\TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{LOCAL_TESTDATA}\{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/Doc";

using(var api = new HtmlApi(clientId, clientSecret))
{
    ConversionOptions docOpts = new DOCConversionOptions()
        .SetHeight(800)
        .SetWidth(1000)
        .SetLeftMargin(10)
        .SetRightMargin(10)
        .SetBottomMargin(10)
        .SetTopMargin(10);

    ConverterBuilder convHtmlDoc = new ConverterBuilder()
        .FromLocalFile(srcFilePath)
        .To(docOpts)
        .SaveToStorage(destFolder);

    ConversionResult result = api.Convert(convHtmlDoc);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // download file(s) by path result.Files
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to DOCX java** language applying. HTML is taken from the local file system, converted to DOCX and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to DOCX C++** language applying. HTML is taken from the local file system, converted to DOCX and saved to the storage.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to DOCX Python** language applying. HTML is taken from the local file system, converted to DOCX and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to DOCX PHP** language applying. HTML is taken from the local file system, converted to DOCX and saved to the storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to DOCX Ruby** language applying. HTML is taken from the local file system, converted to DOCX and saved to the storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to DOCX Node.js** language applying. HTML is taken from the local file system, converted to DOCX and saved to the storage.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to DOCX Swift** language applying. HTML is taken from the local file system, converted to DOCX and saved to the storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to DOCX Java/Android** applying. HTML is taken from the local file system, converted to DOCX and saved to the storage. You can download the Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}



{{% alert color="primary" %}} 
More details about available conversion parameters for HTML files are in the [SDK Conversion Options](/html/sdk-conversion-options/) section.

{{% /alert %}} 

### **Example 3.** Convert a Web page to DOCX/DOC and save the result to the local file system

The following example shows how to convert a Web page by its URL to DOCX/DOC with default DOC options and save the result to the local file system.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to DOCX C#** language applying. HTML is taken from the Web, converted to DOCX and saved to the local file system.  You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
const string LOCAL_TESTRESULT = "d:\TestResult";

var sourceUrl = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
var destFolder =  Path.Combine(LOCAL_TESTRESULT, "Doc");

using(var api = new HtmlApi(clientID, clientSecret)) // initialize SDK API
{
    ConverterBuilder convHtmlDoc = new ConverterBuilder()
        .FromUrl(sourceUrl)
        .To(new DOCConversionOptions())
        .SaveToLocal(destFolder);

    ConversionResult result = api.Convert(convHtmlDoc);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // check if file exists locally
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to DOCX java** language applying. HTML is taken from the Web, converted to DOCX and saved to the local file system.  You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to DOCX C++** language applying. HTML is taken from the Web, converted to DOCX and saved to the local file system. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to DOCX Python** language applying. HTML is taken from the Web, converted to DOCX and saved to the local file system.  You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to DOCX PHP** language applying. HTML is taken from the Web, converted to DOCX and saved to the local file system.  You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to DOCX Ruby** language applying. HTML is taken from the Web, converted to DOCX and saved to the local file system.  You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to DOCX Node.js** language applying. HTML is taken from the Web, converted to DOCX and saved to the local file system. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to DOCX Swift** language applying. HTML is taken from the Web, converted to DOCX and saved to the local file system.  You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to DOCX  Java/Android** applying. HTML is taken from the Web, converted to DOCX and saved to the local file system.  You can download the Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

In the example, we use methods of the **ConverterBuilder** class: **FromUrl**(`urlAddress`), **To**(`ConversionOptions`) and **SaveToLocal**(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result.

HTML to DOCX/DOC conversion occurs with the **default conversion options**: the resulting DOCX/DOC document’s width and height correspond to A4, all margins have zero value.

{{% alert color="primary" %}} 
You can download Aspose.HTML Cloud SDKs of your required platform from [GitHub](https://github.com/aspose-html-cloud/). 

{{% /alert %}} 

