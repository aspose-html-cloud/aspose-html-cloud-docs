---
title: "Convert EPUB to PDF"
type: docs
keywords: "EPUB to PDF, EPUB conversion, convert EPUB, EPUB file, asynchronous conversion, conversion SDK, convert EPUB to PDF, PDF format, Python, Ruby, PHP, Java, .Net, C#, Android, Swift, Node.js"
description: "Article explains a usage of Aspose.HTML Cloud client SDKs to convert EPUB to PDF by a set of examples. SDKs are available in PHP, Python, Ruby, Android, Swift, C#, Java, C++, Node.js and more."
weight: 10
---

## **Summary**

Aspose.HTML Cloud v4.0 provides the simplest API to convert  {{%EPUB%}} documents to {{%PDF%}} format with high quality, easy and fast. 

The EPUB format has gained popularity as an XML-based e-book format and designed to adapt the content's presentation to the reader device. It is implemented as an archive file consisting of XHTML files carrying the content, images and other supporting files. 
PDF is basically a static document that can contain text, images, form-fields,  media, digital signatures,  hyperlinks, etc. One of the PDF benefits is your paper will be presented exactly how you designed it out, and it is ideal for sending documents that are intended to be printed out.

The article explains in a set of code examples how to convert an EPUB document to PDF using Aspose.HTML Cloud client SDKs. We will consider various scenarios of EPUB to PDF conversion: from storage to storage, from a local file system to the storage and from the storage to a local file system.

{{% alert color="primary" %}} 
All the above SDKs are hosted on [GitHub](https://github.com/aspose-words-cloud/). Each repository contains a wide range of code examples to illustrate its usage.

{{% /alert %}} 



## **SDK Examples of EPUB to PDF Conversion**

A widespread use case for Aspose.HTML Cloud SDK functions is file processing and converting.  Cloud SDK allows you to fetch an EPUB document from storage location by its name or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert EPUB to PDF for different cases using available SDKs.

### **Example 1.**  Convert an EPUB file from the storage to PDF and save the result to the storage

The conversion process is following - a source document is loaded from the *default* cloud storage, and after conversion is completed, the result is saved to this storage. The default PDFConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: **FromStorageFile**(`filePath`), **To**(`ConversionOptions`) and **SaveToStorageDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **EPUB to PDF C#** language applying. EPUB is taken from the cloud storage, converted to PDF and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create a ConverterBuilder instance - builder and specify builder methods	
    ConverterBuilder builder = new ConverterBuilder()
        .FromStorageFile("/example.epub")
        .To(new PDFConversionOptions())
        .SaveToStorageDirectory("/TestResult/Epub");

    // Initialize SDK API in the builder style
	using (var api = new HtmlApi(cb => cb
         .WithClientId(ClientId)
         .WithClientSecret(ClientSecret)))
    {
        // Convert EPUB to PDF
	    ConversionResult result = api.Convert(builder);

        if(result.Status == "success" && result.Files.Length > 0)
        {
            // Download file(s) by path result.Files 
        }        
    }
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **EPUB to PDF java** language applying. EPUB is taken from storage, converted to PDF and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB  to PDF** C++ language applying. EPUB is taken from storage, converted to PDF and saved to the storage.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **EPUB  to PDF Python** language applying. EPUB is taken from storage, converted to PDF and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB to PDF PHP** language applying. EPUB is taken from storage, converted to PDF and saved to the storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **EPUB to PDF Ruby** language applying. EPUB is taken from storage, converted to PDF and saved to the storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **EPUB to PDF Node.js** language applying. EPUB is taken from storage, converted to PDF and saved to the storage.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **EPUB to PDF Swift** language applying. EPUB is taken from storage, converted to PDF and saved to the storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **EPUB to PDF Java/Android** applying. EPUB is taken from storage, converted to PDF and saved to storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
EPUB to PDF conversion occurs with the **default conversion options**: the resulting PDF document’s width and height correspond to A4, all margins have zero value, and Quality of jpeg compression is 95%.

{{% /alert %}} 



### **Example 2.** Convert EPUB from the local file system to PDF with explicitly specified options and save to the storage

The example below demonstrates how to convert an EPUB file from the local file system to PDF format with explicitly specified options and save the result to the cloud storage.

 For conversion, we use methods of the **ConverterBuilder** class: **FromLocalFile**(`filePath`), **To**(`ConversionOptions`) and **SaveToStorageDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result. The **Convert**(` builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example demonstrates how to convert **EPUB to PDF C#** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create an instance of ConversionOptions class and specify options for EPUB to PDF conversion	
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
         .FromLocalFile(@"Input\example.epub")
         .To(pdfOpts)
         .SaveToStorageDirectory("/TestResult/Epub/WithParams");

    // Initialize SDK API using the configuration builder
    using (var api = new HtmlApi(cb => cb
         .WithClientId(ClientId)              // from user secrets
         .WithClientSecret(ClientSecret)))
    {
        // Convert EPUB to PDF
	    ConversionResult result = api.Convert(builder);

        if(result.Status == "success" && result.Files.Length > 0)
        {
            // Download file(s) by path result.Files 
        }        
    }
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **EPUB to PDF java** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB to PDF C++** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **EPUB to PDF Python** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB to PDF PHP** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage.  You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **EPUB to PDF Ruby** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage.  You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **EPUB to PDF Node.js** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **EPUB to PDF Swift** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage.  You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **EPUB to PDF Java/Android** applying. EPUB is taken from the local file system, converted to PDF and saved to the storage.  You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
More details about available conversion parameters for EPUB files are in the [SDK Conversion Options](/html/conversion-api/sdk-conversion-options/) section.

{{% /alert %}} 

### **Example 3.** Convert an EPUB file from the storage to PDF and save the result to the local file system

Aspose.HTML Cloud SDK allows you to get EPUB from the storage, convert it to another format and save into the local file system. The example below demonstrates how to convert EPUB to PDF with the default conversion parameters.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **EPUB to PDF C#** language applying. The EPUB file is taken from the storage, converted to PDF and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Create a ConverterBuilder instance - builder and specify builder methods
	ConverterBuilder builder = new ConverterBuilder()
        .FromStorageFile("/example.epub")
        .To(new PDFConversionOptions())
        .SaveToLocalDirectory(@"Output\Epub");

    // Initialize SDK API using the configuration builder
	using (var api = new HtmlApi(cb => cb
         .WithClientId(ClientId)              
         .WithClientSecret(ClientSecret)))
    {
        // Convert EPUB to PDF
	    ConversionResult result = api.Convert(builder);

        if(result.Status == "success" && result.Files.Length > 0)
        {
            // Download file(s) by path result.Files 
        }        
    }
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **EPUB to PDF java** language applying. The EPUB file is got from the storage, converted to PDF and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB to PDF C++** language applying. The EPUB file is got from the storage, converted to PDF and saved to the local file system. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **EPUB to PDF Python** language applying. The EPUB file is got from the storage, converted to PDF and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB to PDF PHP** language applying. The EPUB file is got from the storage, converted to PDF and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **EPUB to PDF Ruby** language applying. The EPUB file is taken from the storage, converted to PDF and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **EPUB to PDF Node.js** language applying. The EPUB file is taken from the storage, converted to PDF and saved to the local file system. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **EPUB to PDF Swift** language applying. The EPUB file is got from the storage, converted to PDF and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **EPUB to PDF Java/Android** applying. The EPUB file is got from the storage, converted to PDF and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< /tabs >}}

In the example, we use methods of the **ConverterBuilder** class: **FromStorageFile**(`filePath`), **To**(`ConversionOptions`) and **SaveToLocalDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result.

EPUB to PDF conversion occurs with the **default conversion options**: the resulting PDF document’s width and height correspond to A4, all margins have zero value, and Quality of jpeg compression is 95%.

{{% alert color="primary" %}} 
Please see the [Conversion REST API](/html/conversion-api/conversion-rest-api/) article to learn how to convert an HTML file to other formats using direct REST API calls.

{{% /alert %}} 

