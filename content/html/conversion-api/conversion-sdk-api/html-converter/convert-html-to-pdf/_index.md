---
title: Convert HTML to PDF
keywords: html conversion, asynchronous conversion, conversion SDK, html to pdf,
  html to pdf conversion, convert html to pdf, Zip, Zip archive, SDK example,
  Python, PHP, Perl, Android, Swift, C#, Java, Node.js
description: The article explains the usage of Aspose.HTML Cloud client SDKs for
  HTML to PDF conversion by a set of examples. SDKs are wrappers upon REST API
  to help developers speed up their development. SDKs are available in PHP,
  Perl, Android, Swift, C#, Java and more.
weight: 10
type: docs
---
## **Summary**

Aspose.HTML Cloud v4.0 provides the simplest API to convert {{%HTML%}} documents to {{%PDF%}} format with high quality, easy and fast. HTML to PDF conversion is often required to establish limited access to documents editing or copying; to produce official documentation or send some information, for example, by email.

The article explains in a set of SDK examples how to convert an HTML document to PDF using Aspose.HTML Cloud client SDKs. We will consider various scenarios of HTML to PDF conversion: from storage to storage, from a local file system to the storage and from the Web to a local file system.

## **SDK Examples of HTML to PDF Conversion**

A widespread use case for Aspose.HTML Cloud SDK functions is file processing and converting.  Aspose.HTML Cloud SDK allows you to fetch an HTML document from a storage location by its name, from a URL or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert HTML to PDF for different cases using available SDKs.

### **Example 1.**  Convert an HTML file from the storage to PDF and save the result to the storage

The conversion process is following - a source document is loaded from the *default* cloud storage, and after conversion is completed, the result is saved to this storage. The default PDFConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: **FromStorageFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorageDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to PDF C#** language applying. HTML is taken from the cloud storage, converted to PDF and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create a ConverterBuilder instance and specify builder methods with parameters of conversion
ConverterBuilder builder = new ConverterBuilder()                   
    .FromStorageFile("/html_file.html")
    .To(new PDFConversionOptions())
    .SaveToStorageDirectory("/TestResult/Html");

// Initialize SDK API using the configuration builder          
using (var api = new HtmlApi(cb => cb
    .WithClientId(ClientId)            // from user Сredentials            
    .WithClientSecret(ClientSecret)))
{
    // Convert HTML to PDF            
    ConversionResult result = api.Convert(builder);

    if(result.Status == "success" && result.Files.Length > 0)
    {
        // Download file(s) by path result.Files 
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to PDF java** language applying. HTML is taken from storage, converted to PDF and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to PDF** C++ language applying. HTML is taken from storage, converted to PDF and saved to the storage.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to PDF Python** language applying. HTML is taken from storage, converted to PDF and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to PDF PHP** language applying. HTML is taken from storage, converted to PDF and saved to the storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to PDF Ruby** language applying. HTML is taken from storage, converted to PDF and saved to the storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to PDF Node.js** language applying. HTML is taken from storage, converted to PDF and saved to the storage.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to PDF Swift** language applying. HTML is taken from storage, converted to PDF and saved to the storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to PDF Java/Android** applying. HTML is taken from storage, converted to PDF and saved to storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

In the example above, the source "html_file.html" file is taken in the default storage by its `inputPath` and the converted file saved in the "Html" storage folder.

{{% alert color="primary" %}} 
HTML to PDF conversion occurs with the **default conversion options**: the resulting PDF document’s width and height correspond to A4, all margins have zero value, and the Quality of jpeg compression is 95%.

{{% /alert %}} 

### **Example 2.** Convert HTML from the local file system to PDF with explicitly specified options and save to the storage

The example below demonstrates how to convert an HTML file from the local file system to PDF with explicitly specified options and save the result to the cloud storage.

 For conversion, we use methods of the **ConverterBuilder** class: **FromLocalFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorage**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result. The **Convert**(`builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following SDK example demonstrates how to convert **HTML to PDF C#** language applying. HTML is taken from the local file system, converted to PDF and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create an instance of ConversionOptions class and specify options for HTML to PDF conversion		
ConversionOptions pdfOpts = new PDFConversionOptions()
    .SetHeight(800)
    .SetWidth(1000)
    .SetLeftMargin(10)
    .SetRightMargin(10)
    .SetBottomMargin(10)
    .SetTopMargin(10)
    .SetQuality(95);

// Create a ConverterBuilder instance - builder and specify builder methods
ConverterBuilder builder = new ConverterBuilder()
    .FromLocalFile(@"Input\html_file.html")
    .To(pdfOpts)
    .SaveToStorageDirectory("/TestResult/Html/WithParams");

// Initialize SDK API using the configuration builder
using (var api = new HtmlApi(cb => cb
     .WithClientId(ClientId)              // from user Сredentials
     .WithClientSecret(ClientSecret)))
{
    // Convert HTML to PDF
	ConversionResult result = api.Convert(builder);

    if(result.Status == "success" && result.Files != null && result.Files.Length > 0)
    {
        // Download file(s) by path result.Files 
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to PDF java** language applying. HTML is taken from the local file system, converted to PDF and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to PDF C++** language applying. HTML is taken from the local file system, converted to PDF and saved to the storage. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to PDF Python** language applying. HTML is taken from the local file system, converted to PDF and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to PDF PHP** language applying. HTML is taken from the local file system, converted to PDF and saved to the storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to PDF Ruby** language applying. HTML is taken from the local file system, converted to PDF and saved to the storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to PDF Node.js** language applying. HTML is taken from the local file system, converted to PDF and saved to the storage. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to PDF Swift** language applying. HTML is taken from the local file system, converted to PDF and saved to the storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to PDF Java/Android** applying. HTML is taken from the local file system, converted to PDF and saved to the storage. You can download the Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}
In the example above, the source "html_file.html" file is taken from the "Input" folder of the local file system, and the converted file saved in the storage folder "WithParams".

{{% alert color="primary" %}} 
More details about available conversion parameters for HTML files are in the [SDK Conversion Options](/html/conversion-api/sdk-conversion-options/) section.

{{% /alert %}} 

### **Example 3.** Convert a Web page to PDF and save the result to the local file system

Aspose.HTML Cloud SDK allows you to get an HTML page from the web by its URL, convert it to another format and save into the local file system. The example below demonstrates how to convert HTML to PDF with the default conversion parameters.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **HTML to PDF C#** language applying. HTML is got from the Web, converted to PDF and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create a ConverterBuilder instance and specify builder methods with parameters of conversion
ConverterBuilder builder = new ConverterBuilder()
    .FromUrl("https://stallman.org/articles/anonymous-payments-thru-phones.html")
    .To(new PDFConversionOptions())
    .SaveToLocalDirectory(@"Output\Url");

// Initialize SDK API in the builder style           
using (var api = new HtmlApi(cb => cb
    .WithClientId(ClientId)           // from user Сredentials            
    .WithClientSecret(ClientSecret)))
{
    // Convert HTML to PDF            
    ConversionResult result = api.Convert(builder);

    if(result.Status == "success" && result.Files.Length > 0)
    {
        // Download file(s) by path result.Files 
    }
}	
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **HTML to PDF java** language applying. HTML is taken from the Web, converted to PDF and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to PDF C++** language applying. HTML is taken from the Web, converted to PDF and saved to the local file system. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **HTML to PDF Python** language applying. HTML is taken from the Web, converted to PDF and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to PDF PHP** language applying. HTML is taken from the Web, converted to PDF and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **HTML to PDF Ruby** language applying. HTML is taken from the Web, converted to PDF and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **HTML to PDF Node.js** language applying. HTML is taken from the Web, converted to PDF and saved to the local file system. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **HTML to PDF Swift** language applying. HTML is taken from the Web, converted to PDF and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **HTML to PDF Java/Android** applying. HTML is taken from the Web, converted to PDF and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

In the example, we use methods of the **ConverterBuilder** class: **FromUrl**(`url`), **To**(`ConversionOptions`) and **SaveToLocalDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result.

HTML to PDF conversion occurs with the **default conversion options**: the resulting PDF document’s width and height correspond to A4, all margins have zero value, and the Quality of jpeg compression is 95%.

### **Example 4.** Convert HTML to PDF from the local Directory and save the result to the local file system

Aspose.HTML Cloud SDK allows you to get an HTML file in the local directory, convert the directory to another format and save the result into the local file system. The example below demonstrates how to convert HTML to PDF with the default conversion parameters. The source "index.html" has linked files in the directory. A **ConvertLocalDirectory()** method converts synchronously a directory located in the local file system and specified by `directoryPath` parameter. This method takes as the parameters also the `startPoint`, `options` and `outputPath` that specify a file name in the directory to be converted, output format, and a path where the conversion result will be saved.

```c#
// Initialize SDK API in the builder style   
using (var api = new HtmlApi(cb => cb
    .WithClientId(ClientId)            // from user Сredentials
    .WithClientSecret(ClientSecret)))
{
    // Convert HTML to PDF
	Conversion.Conversion result = api.ConvertLocalDirectory(
        directoryPath: @"Input\DirectoryTests\HtmlSite2",
        startPoint: "index.html",
        options: new PDFConversionOptions(),
        outputPath: new LocalDirectoryParameter(@"Output\Dir\ConvertLocal"));

    if(result.Status == "completed" && result.Files.Length > 0)
    {
        // Download file(s) by path result.Files 
    }
}	
```

### **Example 5.** Convert HTML to PDF from the local Zip archive and save the result to the local file system

Aspose.HTML Cloud SDK allows you to get an HTML file with resources from Zip archive in the local file system, convert HTML to another format and save the result into the local file system. The example below demonstrates how to convert HTML to PDF with the default conversion parameters.
**ConvertLocalArchive()** method converts synchronously an HTML document in the ZIP archive located in the local file system. This method takes as the parameters `archivePath`, `startPoint`, `options` and `outputPath` that specify a source archive file path, a file name in the archive root directory to be converted, output format, and a path where the conversion result will be saved.

```c#
// Initialize SDK API in the builder style   
using (var api = new HtmlApi(cb => cb
    .WithClientId(ClientId)            // from user Сredentials
    .WithClientSecret(ClientSecret)))
{
    // Convert HTML to PDF
	Conversion.Conversion result = api.ConvertLocalArchive(
        archivePath: @"Input\ZipTests\test1.zip",
        startPoint: "index.html",
        options: new PDFConversionOptions(),
        outputPath: new LocalDirectoryParameter(@"Output\Zip\ConvertLocal"));

    if(result.Status == "completed" && result.Files.Length > 0)
    {
        // Download file(s) by path result.Files 
    }
}
```

{{% alert color="primary" %}} 
Please see the [Conversion REST API](/html/conversion-api/conversion-rest-api/) article to learn how to convert an HTML file to other formats using direct REST API calls.

{{% /alert %}}