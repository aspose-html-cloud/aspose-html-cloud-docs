---
title: "Convert HTML to XPS"
type: docs
keywords: "html to xps, convert html to xps, html to xps conversion, format conversion, html conversion, asynchronous conversion, conversion SDK, SDK example, Python, PHP, Perl, Android, Swift, C#, Java, Node.js"
description: "The article explains the usage of Aspose.HTML Cloud client SDKs for HTML to XPS conversion by a set of examples. SDKs are wrappers upon REST API to help developers speed up their development. SDKs are available in PHP, Perl, Android, Swift, C#, Java and more."
weight: 20
---

## **Summary**

Converting between formats is required for various reasons: to work in a familiar, convenient format or to take advantage of different formats for specific tasks. {{%XPS%}} is a document storage and viewing format developed by Microsoft. An XPS file is a ZIP archive using the Open Packaging Conventions containing the files that make up the document. It has a set of advantages that support security features, such as digital signatures to provide greater document security and more.

This article explains in a set of code examples how to convert {{%HTML%}} to {{%XPS%}} using Aspose.HTML Cloud client SDKs.


## **SDK Examples of HTML to XPS Conversion**

Aspose.HTML Cloud SDK allows you to fetch an HTML document from storage location by its name, from a URL or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert HTML to XPS for different cases using available SDKs.

### **Example 1.**  Convert an HTML file from the storage to XPS and save the result to the storage

The conversion process is following - a source document is loaded from the *default* cloud storage, and after conversion is completed, the result is saved to this storage. The default XPSConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: **FromStorageFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorageDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to XPS C#** language applying. HTML is taken from the storage, converted to XPS and saved to the storage.  You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create a ConverterBuilder instance and specify builder methods with parameters of conversion
ConverterBuilder builder = new ConverterBuilder()                   
    .FromStorageFile("/html_file.html")
    .To(new XPSConversionOptions())
    .SaveToStorageDirectory("/TestResult/Html");

// Initialize SDK API using the configuration builder          
using (var api = new HtmlApi(cb => cb
    .WithClientId(ClientId)            // from user Сredentials            
    .WithClientSecret(ClientSecret)))
{
    // Convert HTML to XPS            
    ConversionResult result = api.Convert(builder);

    if(result.Status == "success" && result.Files.Length > 0)
    {
        // Download file(s) by path result.Files 
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following SDK example demonstrates how to convert **HTML to XPS java** language applying. HTML is taken from the storage, converted to XPS and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to XPS C++** language applying. HTML is taken from the storage, converted to XPS and saved to the storage.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to XPS Python** language applying. HTML is taken from the storage, converted to XPS and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to XPS PHP** language applying. HTML is taken from the storage, converted to XPS and saved to the storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to XPS Ruby** language applying. HTML is taken from the storage, converted to XPS and saved to the storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to XPS Node.js** language applying. HTML is taken from the storage, converted to XPS and saved to the storage.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to XPS Swift** language applying. HTML is taken from storage, converted to XPS and saved to the storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to XPS Java/Android** applying. HTML is taken from storage, converted to XPS and saved to the storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
HTML to XPS conversion occurs with the **default conversion options**: the resulting XPS document’s width and height correspond to A4 and all margins have zero value.

{{% /alert %}} 

### **Example 2.** Convert HTML from the local file system to XPS with explicitly specified options and save the result to the storage

The example below demonstrates how to convert an HTML file from the local file system to XPS with explicitly specified options and save the result to the cloud storage.

 For conversion, we use methods of the **ConverterBuilder** class: **FromLocalFile**(`inputPath`), **To**(`ConversionOptions`) and **SaveToStorageDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result. The **Convert**(`builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to XPS C#** language applying. HTML is taken from the local file system, converted to XPS and saved to the storage.  You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create an instance of ConversionOptions class and specify options for HTML to XPS conversion		
ConversionOptions xpsOpts = new XPSConversionOptions()
    .SetHeight(800)
    .SetWidth(1000)
    .SetLeftMargin(10)
    .SetRightMargin(10)
    .SetBottomMargin(10)
    .SetTopMargin(10);    

// Create a ConverterBuilder instance - builder and specify builder methods
ConverterBuilder builder = new ConverterBuilder()
    .FromLocalFile(@"Input\html_file.html")
    .To(xpsOpts)
    .SaveToStorageDirectory("/TestResult/Html/WithParams");

// Initialize SDK API using the configuration builder
using (var api = new HtmlApi(cb => cb
     .WithClientId(ClientId)              // from user Сredentials
     .WithClientSecret(ClientSecret)))
{
    // Convert HTML to XPS
	ConversionResult result = api.Convert(builder);

    if(result.Status == "success" && result.Files.Length > 0)
    {
        // Download file(s) by path result.Files 
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to XPS java** language applying. HTML is taken from the local file system, converted to XPS and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to XPS C++** language applying. HTML is taken from the local file system, converted to XPS and saved to the storage.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to XPS Python** language applying. HTML is taken from the local file system, converted to XPS and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to XPS PHP** language applying. HTML is taken from the local file system, converted to XPS and saved to the storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to XPS Ruby** language applying. HTML is taken from the local file system, converted to XPS and saved to the storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to XPS Node.js** language applying. HTML is taken from the local file system, converted to XPS and saved to the storage.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to XPS Swift** language applying. HTML is taken from storage, converted to XPS and saved to the storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to XPS Java/Android** applying. HTML is taken from the local file system, converted to XPS and saved to the storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}
In the example above, the source "html_file.html" file is taken from the "Input" folder of the local file system and the converted file saved in the storage folder "WithParams".

{{% alert color="primary" %}} 
More details about available conversion parameters for HTML files are in the [SDK Conversion Options](/html/sdk-conversion-options/) section.

{{% /alert %}} 

### **Example 3.** Convert a Web page by its URL to XPS and save the result to the local file system

Aspose.HTML Cloud SDK allows you to get an HTML page from the web by its URL, convert it to  {{%XPS%}} format and save into the local file system. The example below demonstrates how to convert HTML to XPS with the default conversion parameters.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **HTML to XPS C#** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create a ConverterBuilder instance and specify builder methods with parameters of conversion
ConverterBuilder builder = new ConverterBuilder()
    .FromUrl("https://stallman.org/articles/anonymous-payments-thru-phones.html")
    .To(new XPSConversionOptions())
    .SaveToLocalDirectory(@"Output\Url");

// Initialize SDK API in the builder style           
using (var api = new HtmlApi(cb => cb
    .WithClientId(ClientId)           // from user Сredentials            
    .WithClientSecret(ClientSecret)))
{
    // Convert HTML to XPS           
    ConversionResult result = api.Convert(builder);

    if(result.Status == "success" && result.Files.Length > 0)
    {
        // Download file(s) by path result.Files 
    }
}	
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to XPS java** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to XPS C++** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to XPS Python** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to XPS PHP** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to XPS Ruby** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to XPS Node.js** language applying. HTML is taken from the Web, converted to XPS and saved to the local file system.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to XPS Swift** language applying.HTML is taken from the Web, converted to XPS and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to XPS Java/Android** applying. HTML is taken from the Web, converted to XPS and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}



In the example, we use methods of the **ConverterBuilder** class: **FromUrl**(`url`), **To**(`ConversionOptions`) and **SaveToLocalDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result.

HTML to XPS conversion occurs with the **default conversion options**: the resulting XPS document’s width and height correspond to A4, all margins have zero value.

{{% alert color="primary" %}} 
Please check the [Available SDKs](/html/overview/available-sdks/) article to learn how to add an SDK to your project.

To obtain more information about converting between formats, please read the [Conversion SDK API](/html/conversion-api/conversion-sdk-api/) section.

{{% /alert %}}