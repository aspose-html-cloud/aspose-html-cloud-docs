---
title: "Convert HTML to JPEG"
type: docs
aliases: /conversion-sdk-api/convert-html-to-jpeg/
keywords: "format conversion, html conversion, asynchronous conversion, conversion SDK, convert html to image, convert html to jpeg, html to jpg, html to jpeg conversion, html to jpeg, SDK example, Python, PHP, Perl, Android, Swift, C#, Java, Node.js"
description: "The article explains the usage of Aspose.HTML Cloud client SDKs for HTML to JPEG conversion by a set of examples. SDKs are wrappers upon REST API to help developers speed up their development. SDKs are available in PHP, Perl, Android, Swift, C#, Java and more."
weight: 40
---

## **Summary**

JPEG is one of the most commonly used image formats. Its uniqueness is the controlled loss of quality during compression. Therefore, it is widely used to store and send graphic content (photos, scanned copies, digitized images) over the Internet.

This article explains in a set of code examples how to convert an {{%HTML%}} document to {{%JPEG%}} using Aspose.HTML Cloud client SDKs.

## **SDK Examples of HTML to JPEG Conversion**

Aspose.HTML Cloud SDK allows you to fetch an HTML document from storage location by its name, from a URL or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert HTML to JPEG for different cases. These examples show how to use available SDKs for conversion operations.

### **Example 1.** Convert HTML from the storage to JPEG and save the result to the storage

The conversion process is following - a source document is loaded from the *default* cloud storage, and after conversion is completed, the result is saved to this storage. The default JPEGConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: **FromStorageFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorageDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The example demonstrates how to convert **HTML to JPEG C#** language applying. HTML is taken from the cloud storage, converted to JPEG and saved to the storage. You can download C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create a ConverterBuilder instance and specify builder methods with parameters of conversion
ConverterBuilder builder = new ConverterBuilder()                   
    .FromStorageFile("/html_file.html")
    .To(new JPEGConversionOptions())
    .SaveToStorageDirectory("/TestResult/Html");

// Initialize SDK API using the configuration builder          
using (var api = new HtmlApi(cb => cb
    .WithClientId(ClientId)            // from user Сredentials            
    .WithClientSecret(ClientSecret)))
{
    // Convert HTML to JPEG            
    ConversionResult result = api.Convert(builder);

    if(result.Status == "success" && result.Files.Length > 0)
    {
        // Download file(s) by path result.Files 
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to JPEG java** language applying. HTML is taken from the cloud storage, converted to JPEG and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to JPEG C++** language applying. HTML is taken from the cloud storage, converted to JPEG and saved to the storage. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to JPEG Python** language applying. HTML is taken from the cloud storage, converted to JPEG and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to JPEG PHP** language applying. HTML is taken from the cloud storage, converted to JPEG and saved to the storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to JPEG Ruby** language applying. HTML is taken from the cloud storage, converted to JPEG and saved to the storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to JPEG Node.js** language applying. HTML is taken from the cloud storage, converted to JPEG and saved to the storage. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to JPEG Swift** language applying. HTML is taken from the cloud storage, converted to JPEG and saved to the storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example describes how to convert **HTML to JPEG Java/Android** applying. HTML is taken from the cloud storage, converted to JPEG and saved to the storage. You can download the Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
HTML to JPEG conversion occurs with the **default conversion options**: the resulting JPEG document’s width and height correspond to A4, all margins have zero value, and the resolution value is 96 dpi.

{{% /alert %}} 



### **Example 2.** Convert HTML from the local file system to JPEG with explicitly specified options and save to the storage

The example below shows how to convert an HTML file from the local file system to  {{%JPEG%}} with explicitly specified options and save the result to the cloud storage.

For conversion, we use methods of the **ConverterBuilder** class: **FromLocalFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorageDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result. The **Convert**(`builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The example demonstrates how to convert **HTML to JPEG C#** language applying. HTML is taken from the local file system, converted to JPEG and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create an instance of ConversionOptions class and specify options for HTML to JPEG conversion		
ConversionOptions jpgOpts = new JPEGConversionOptions()
    .SetHeight(800)
    .SetWidth(1000)
    .SetLeftMargin(10)
    .SetRightMargin(10)
    .SetBottomMargin(10)
    .SetTopMargin(10)
    .SetResolution(300);

// Create a ConverterBuilder instance - builder and specify builder methods 
ConverterBuilder builder = new ConverterBuilder()
    .FromLocalFile(@"Input\html_file.html")
    .To(jpgOpts)
    .SaveToStorageDirectory("/TestResult/Html/WithParams");

// Initialize SDK API using the configuration builder
using (var api = new HtmlApi(cb => cb
     .WithClientId(ClientId)              // from user Сredentials
     .WithClientSecret(ClientSecret)))
{
    // Convert HTML to JPEG
	ConversionResult result = api.Convert(builder);

    if(result.Status == "success" && result.Files != null && result.Files.Length > 0)
    {
        // Download file(s) by path result.Files 
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to JPEG java** language applying. HTML is taken from the local file system, converted to JPEG and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to JPEG C++** language applying. HTML is taken from the local file system, converted to JPEG and saved to the storage.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to JPEG Python** language applying. HTML is taken from the local file system, converted to JPEG and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to JPEG PHP** language applying. HTML is taken from the local file system, converted to JPEG and saved to the storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to JPEG Ruby** language applying. HTML is taken from the local file system, converted to JPEG and saved to the storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to JPEG Node.js** language applying. HTML is taken from the local file system, converted to JPEG and saved to the storage.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to JPEG Swift** language applying. HTML is taken from the local file system, converted to JPEG and saved to the storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example describes how to convert **HTML to JPEG Java/Android** applying. HTML is taken from the local file system, converted to JPEG and saved to the storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}



In the example above, the conversion HTML to JPEG occurs with the **ConversionOptions** specifying, among which there is the **Resolution** that applicable only to image formats. The set resolution value (300 dpi) indicates higher image quality than using the default value (96 dpi).

{{% alert color="primary" %}} 
More details about available conversion parameters for HTML files are in the [SDK Conversion Options](/html/sdk-conversion-options/) section.

{{% /alert %}} 

### **Example 3.**  Convert a Web page to JPEG and save the result to the local file system

Aspose.HTML Cloud SDK allows you to get an HTML page from the web by its URL, convert it to JPEG format and save the result into the local file system. The example below describes how to convert HTML to JPEG with the default conversion parameters.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The SDK example demonstrates how to convert **HTML to JPEG C#** language applying. HTML is got from the Web, converted to JPEG and saved to the local file system. You can download C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create a ConverterBuilder instance and specify builder methods with parameters of conversion
ConverterBuilder builder = new ConverterBuilder()
    .FromUrl("https://stallman.org/articles/anonymous-payments-thru-phones.html")
    .To(new JPEGConversionOptions())
    .SaveToLocalDirectory(@"Output\Url");

// Initialize SDK API in the builder style           
using (var api = new HtmlApi(cb => cb
    .WithClientId(ClientId)           // from user Сredentials            
    .WithClientSecret(ClientSecret)))
{
    // Convert HTML to JPEG            
    ConversionResult result = api.Convert(builder);

    if(result.Status == "success" && result.Files.Length > 0)
    {
        // Download file(s) by path result.Files 
    }
}	
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to JPEG java** language applying. HTML is taken from the Web, converted to JPEG and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to JPEG C++** language applying. HTML is taken from the Web, converted to JPEG and saved to the local file system.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to JPEG Python** language applying. HTML is taken from the Web, converted to JPEG and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to JPEG PHP** language applying. HTML is taken from the cloud storage, converted to JPEG and saved to the storage.  You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to JPEG Ruby** language applying. HTML is taken from the Web, converted to JPEG and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to JPEG Node.js** language applying. HTML is taken from the Web, converted to JPEG and saved to the local file system.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to JPEG Swift** language applying. HTML is taken from the Web, converted to JPEG and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example describes how to convert **HTML to JPEG Java/Android** applying. HTML is taken from the Web, converted to JPEG and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

In the example, we use methods of the **ConverterBuilder** class: **FromUrl**(`url`), **To**(`ConversionOptions`) and **SaveToLocalDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result. The **Convert**(`builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.

HTML to JPEG conversion occurs with the **default conversion options**: the resulting JPEG document’s width and height correspond to A4, all margins have zero value, and the resolution value is 96 dpi.

### **Example 4.** Convert HTML to JPEG from the local file with resources and save the result to the local file system

Aspose.HTML Cloud SDK allows you to get an HTML file with resources in the local file system, convert HTML to another format and save the result into the local file system. The example below demonstrates how to convert HTML to JPEG with the default conversion parameters.
A **ConvertLocalFile()** method converts synchronously an HTML document located in the local file system. This method takes as the parameters `filePath`, `options`, `outputPath` and `resources` that specify a source file path, output format, a path where the conversion result will be saved, and a list of paths of HTML resource files.

```c#
// Initialize SDK API in the builder style   
using (var api = new HtmlApi(cb => cb
    .WithClientId(ClientId)            // from user Сredentials
    .WithClientSecret(ClientSecret)))
{
    // Convert HTML to JPEG
	Conversion.Conversion result = api.ConvertLocalFile(
        filePath: @"Input\DirectoryTests\HtmlSite2\index.html",
        options: new JPEGConversionOptions(),
        outputPath: new LocalDirectoryParameter(@"Output\Html\ConvertLocalWithRes"),
        resources: new System.Collections.Generic.List<string>() {
            @"Input\DirectoryTests\HtmlSite2\css\styles.css",
            @"Input\DirectoryTests\HtmlSite2\images\mount-river.jpg",
            @"Input\DirectoryTests\HtmlSite2\images\Penguins.jpg",
            @"Input\DirectoryTests\HtmlSite2\images\waterfall-1.jpg",
            @"Input\DirectoryTests\HtmlSite2\images\waterfall-2.jpg",
            @"Input\DirectoryTests\HtmlSite2\images\waterfall-3.jpg"
        });

    if(result.Status == "completed" && result.Files.Length > 0)
    {
        // Download file(s) by path result.Files 
    }
}
```

{{% alert color="primary" %}} 
For more details concerning the conversion options, see the [SDK Conversion Options](/html/conversion-api/sdk-conversion-options/) article. 

{{% /alert %}} 