---
title: Convert HTML to Markdown
keywords: html to markdown, html to md, convert html to md, html to markdown conversion, format conversion, html conversion, markdown conversion, asynchronous
  conversion, conversion SDK, convert html to markdown, SDK examples, Python, PHP, Perl,
  Android, Swift, C#, Java, Node.js
description: The article explains the usage of Aspose.HTML Cloud client SDKs for
  HTML to Markdown conversion by a set of examples. SDKs are wrappers upon REST
  API to help developers speed up their development. SDKs are available in PHP,
  Perl, Android, Swift, C#, Java and more.
weight: 110
type: docs
---
## **Summary**

Aspose.HTML Cloud v4.0 provides the simplest API to convert {{%HTML%}} documents to {{%Markdown%}} format with high quality, easy and fast. This article contains a set of code examples that explain how to convert HTML to Markdown using available SDKs.

{{% alert color="primary" %}} 

Learn how to convert an HTML file to other formats using direct REST API calls from the [Conversion REST API](/html/conversion-api/conversion-rest-api/) article.

{{% /alert %}} 

## **SDK Examples of HTML to Markdown Conversion**

Aspose.HTML Cloud SDK allows you to fetch an HTML document from a storage location by its name, from a URL or a local file on your drive, convert it to the specified format and save the result to the storage or a local drive. The following code examples demonstrate how to convert HTML to Markdown programmatically for different cases.

### **Example 1.** Convert HTML from the storage to Markdown and save the result to the storage

The conversion process is following - a source document is loaded from the *default* cloud storage, and after conversion is completed, the result is saved to this storage.  The default MarkdownConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: **FromStorageFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorageDirectory**(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to Markdown C#** language applying. HTML is taken from the cloud storage, converted to Markdown and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
ConverterBuilder builder = new ConverterBuilder()
    .FromStorageFile("/html_file.html")
    .To(new MarkdownConversionOptions())
    .SaveToStorageDirectory("/TestResult/Html");

// Initialize SDK API in the builder style
using (var api = new HtmlApi(cb => cb
    .WithClientId(ClientId)
    .WithClientSecret(ClientSecret)))
{
    // Convert HTML to Markdown
    ConversionResult result = api.Convert(builder);
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

For conversion, we use methods of the **ConverterBuilder** class: **FromLocalFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorageDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result. The **Convert**(`builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to Markdown C#** language applying. HTML is taken from the local file system, converted to Markdown and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create a ConverterBuilder instance, specify "From", "To", and "SaveTo" builder methods with parameters of conversion
ConverterBuilder builder = new ConverterBuilder()
    .FromLocalFile(@"Input\html_file.html")
    .To(new MarkdownConversionOptions())
    .SaveToStorageDirectory("/TestResult/Html");

// Initialize SDK API in the builder style
using (var api = new HtmlApi(cb => cb
    .WithClientId(ClientId)
    .WithClientSecret(ClientSecret)))
{
    // Convert HTML to Markdown
    ConversionResult result = api.Convert(builder);
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

In the following example, we consider the case when the source HTML document is got from the Web by its URL, converted to Markdown format and saved to the local file system. 

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The code snippet below explains how to convert **HTML to Markdown C#** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create a ConverterBuilder instance and specify builder methods with parameters of conversion
ConverterBuilder builder = new ConverterBuilder()
    .FromUrl("https://stallman.org/articles/anonymous-payments-thru-phones.html")
    .To(new MarkdownConversionOptions())
    .SaveToLocalDirectory(@"Output\Url");

// Initialize SDK API in the builder style
using (var api = new HtmlApi(cb => cb
    .WithClientId(ClientId)
    .WithClientSecret(ClientSecret)))
{
    // Convert HTML to Markdown
    ConversionResult result = api.Convert(builder);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // download file(s) by path result.Files
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

The code snippet below explains how to convert **HTML to Markdown Ruby** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

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

The code snippet below explains how to convert **HTML to Markdown Java/Android** applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

In the example, we use methods of the **ConverterBuilder** class: **FromUrl**(`urlAddress`), **To**(`ConversionOptions`) and **SaveToLocalDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result. The **Convert**(`builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.

{{% alert color="primary" %}} 
Please check the [Available SDKs](/html/overview/available-sdks/) article to learn how to add an SDK to your project.

To obtain more information about converting between formats, please read the [Conversion SDK API](/html/conversion-api/conversion-sdk-api/) section.

{{% /alert %}}