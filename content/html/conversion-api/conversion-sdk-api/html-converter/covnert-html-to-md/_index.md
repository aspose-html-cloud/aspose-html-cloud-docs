---
title: "Convert HTML to Markdown"
type: docs
aliases: /conversion-sdk-api/html-converter/convert-html-to-markdown/
keywords: "format conversion, html conversion, markdown conversion, asynchronous conversion, conversion SDK, convert html to markdown, Python, PHP, Perl, Android, Swift, C#, Java, Node.js"
description: "The article explains the usage of Aspose.HTML Cloud client SDKs for HTML to Markdown conversion by a set of examples. SDKs are wrappers upon REST API to help developers speed up their development. SDKs are available in PHP, Perl, Android, Swift, C#, Java and more."
weight: 110
---

## **Summary**

Aspose.HTML Cloud v4.0 provides the simplest API to convert {{%HTML%}} documents to {{%Markdown%}} format with high quality, easy and fast. This article contains a set of code examples that explain how to convert HTML to Markdown using available SDKs.

{{% alert color="primary" %}} 

Learn how to convert an HTML file to other formats using direct REST API calls from the [Conversion REST API](/html/conversion-rest-api/) article.

{{% /alert %}} 

## **SDK Examples of HTML to Markdown Conversion**

Aspose.HTML Cloud SDK allows you to fetch an HTML document from storage location by its name, from a URL or a local file on your drive, convert it to specified format and save the result to the storage or a local drive. The following code examples demonstrate how to convert HTML to Markdown programmatically for different cases.

### **Example 1.** Convert HTML from the storage to Markdown and save the result to the storage

The conversion process is following - a source document is loaded from the *default* cloud storage, and after conversion is completed, the result is saved to this storage.  The default MarkdownConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: **FromStorageFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorage**(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to Markdown C#** language applying. HTML is taken from the cloud storage, converted to Markdown and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
const string STORAGE_SRCFOLDER = "storage:///Html/TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{STORAGE_SRCFOLDER}/{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/MD";

using(var api = new HtmlApi(clientID, clientSecret)) // initialize SDK API
{
    ConverterBuilder convHtmlMd = new ConverterBuilder()
        .FromStorageFile(srcFilePath)
        .To(new MarkdownConversionOptions())
        .SaveToStorage(destFolder);

    ConversionResult result = api.Convert(convHtmlMd);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // download file(s) by path result.Files
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to Markdown java** language applying. HTML is taken from the cloud storage, converted to Markdown and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to Markdown C++** language applying. HTML is taken from the cloud storage, converted to Markdown and saved to the storage.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to Markdown Python** language applying. HTML is taken from the storage, converted to Markdown and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to Markdown PHP** language applying. HTML is taken from the cloud storage, converted to Markdown and saved to the storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to Markdown Ruby** language applying. HTML is taken from the storage, converted to Markdown and saved to the storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to Markdown Node.js** language applying. HTML is taken from the storage, converted to Markdown and saved to the storage.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to Markdown Swift** language applying. HTML is taken from the storage, converted to Markdown and saved to the storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to Markdown Java/Android** applying. HTML is taken from the storage, converted to Markdown and saved to the storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}



### **Example 2.** Convert HTML from the local file system to Markdown and save the result to the storage

The example below shows how to convert an HTML file from the local file system to Markdown and save the result to the cloud storage.

For conversion, we use methods of the **ConverterBuilder** class: **FromLocalFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorage**(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result. The **Convert**(`ConverterBuilder builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to Markdown C#** language applying. HTML is taken from the local file system, converted to Markdown and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
const string LOCAL_TESTDATA = "d:\TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{LOCAL_TESTDATA}\{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/MD";

using(var api = new HtmlApi(clientId, clientSecret))
{    
    ConverterBuilder convHtmlMD = new ConverterBuilder()
                .FromLocalFile(sourceFile)
                .To(new MarkdownConversionOptions())
                .SaveToStorage(destFolder);

    ConversionResult result = api.Convert(convHtmlMD);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // download file(s) by path result.Files
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to Markdown java** language applying. HTML is taken from the local file system, converted to Markdown and saved to the storage.  You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to Markdown C++** language applying. HTML is taken from the local file system, converted to Markdown and saved to the storage. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to Markdown Python** language applying. HTML is taken from the local file system, converted to Markdown and saved to the storage.  You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to Markdown PHP** language applying. HTML is taken from the local file system, converted to Markdown and saved to the storage.  You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to Markdown Ruby** language applying. HTML is taken from the local file system, converted to Markdown and saved to the storage.  You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to Markdown Node.js** language applying. HTML is taken from the local file system, converted to Markdown and saved to the storage. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to Markdown Swift** language applying. HTML is taken from the local file system, converted to Markdown and saved to the storage.  You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to Markdown Java/Android** applying. HTML is taken from the local file system, converted to Markdown and saved to the storage.  You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

### **Example 3.** Convert a Web page to Markdown and save the result to the local file system

In the following example, we consider the case when the source HTML document is got from the web by its URL, converted to Markdown format and saved to the local file system. 

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The code snippet below explains how to convert **HTML to Markdown C#** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system.  You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
const string LOCAL_TESTRESULT = "d:\TestResult";

var sourceUrl = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
var destFolder =  Path.Combine(LOCAL_TESTRESULT, "MD_UrlToLocal");

using(var api = new HtmlApi(clientID, clientSecret)) // initialize SDK API
{
    ConverterBuilder convHtmlMD = new ConverterBuilder()
        .FromUrl(sourceUrl)
        .To(new MarkdownConversionOptions())
        .SaveToLocal(destFolder);

    ConversionResult result = api.Convert(convHtmlMD);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // check if file exists locally
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The code snippet below explains how to convert **HTML to Markdown java** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The code snippet below explains how to convert **HTML to Markdown C++** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The code snippet below explains how to convert **HTML to Markdown Python** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The code snippet below explains how to convert **HTML to Markdown PHP** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The code snippet below explains how to convert **HTML to Markdown Ruby** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system.  You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The code snippet below explains how to convert **HTML to Markdown Node.js** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The code snippet below explains how to convert **HTML to Markdown Swift** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The code snippet below explains how to convert **HTML to Markdown Java/Android** applying. HTML is taken from the Web, converted to Markdown and saved to the local file system.  You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

In the example, we use methods of the **ConverterBuilder** class: **FromUrl**(`urlAddress`), **To**(`ConversionOptions`) and **SaveToLocal**(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result. The **Convert**(`ConverterBuilder builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.

{{% alert color="primary" %}} 
You can download Aspose.HTML Cloud SDKs of your required platform from [GitHub](https://github.com/aspose-html-cloud/). 

{{% /alert %}} 

