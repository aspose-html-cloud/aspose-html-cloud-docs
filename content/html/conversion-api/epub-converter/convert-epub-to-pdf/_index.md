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

The article explains in a set of code examples how to convert an EPUB document to PDF using Aspose.HTML Cloud client SDKs and REST API. We will consider various scenarios of EPUB to PDF conversion: from storage to storage, from a local file system to the storage and from the storage to a local file system.


## **Examples of EPUB to PDF Conversion**

A widespread use case for Aspose.HTML Cloud functions is file processing and converting. Cloud SDK allows you to fetch an EPUB document from a storage location by its name or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert EPUB to PDF for different cases using available SDKs and RESt API.

### **Example 1.**  Convert a local EPUB file to PDF and save the result to local path

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example demonstrates the simplest way to convert **EPUB  to PDF C#** language applying. Local EPUB converted to PDF and saved to the local path. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert from EPUB file to PDF file
var result = await api.ConvertAsync("test.epub", "test.pdf");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **EPUB  to PDF java** language applying. Local EPUB converted to PDF and saved to the local path. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB  to PDF** C++ language applying. Local EPUB converted to PDF and saved to the local path.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **EPUB  to PDF Python** language applying. Local EPUB converted to PDF and saved to the local path. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB  to PDF PHP** language applying. Local EPUB converted to PDF and saved to the local path. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **EPUB  to PDF Ruby** language applying. Local EPUB converted to PDF and saved to the local path. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **EPUB  to PDF Node.js** language applying. Local EPUB converted to PDF and saved to the local path.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **EPUB  to PDF Swift** language applying. Local EPUB converted to PDF and saved to the local path. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **EPUB  to PDF Java/Android** applying. Local EPUB converted to PDF and saved to the local path. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **EPUB  to PDF** REST API applying. Local EPUB converted to PDF and saved to the local path.
3 steps:
- Upload local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage)
- Call REST API to execute conversion (in the example bellow)
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage)
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/epub-pdf" \
    -d "{'InputPath': '/testpage.epub', 'OutputFile': 'test.pdf'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}


{{% alert color="primary" %}} 
HTML to PDF conversion occurs with the **default conversion options**: the resulting PDF document’s width and height correspond to A4, all margins have zero value.

{{% /alert %}} 

### **Example 2.** Convert EPUB from the local file system to PDF with explicitly specified options and save to the local path

The example below demonstrates how to convert an EPUB file from the local file system to PDF with explicitly specified options and save the result back to the local path.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL">}}

{{< tab tabNum="1" >}}

The following SDK example demonstrates how to convert **EPUB  to PDF C#** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

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

// Convert from EPUB file to PDF file
var result = await api.ConvertAsync("test.epub", "test.pdf", options);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **EPUB  to PDF java** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB  to PDF C++** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **EPUB  to PDF Python** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB  to PDF PHP** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **EPUB  to PDF Ruby** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **EPUB  to PDF Node.js** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **EPUB  to PDF Swift** language applying. EPUB is taken from the local file system, converted to PDF and saved to the storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **EPUB  to PDF Java/Android** applying. EPUB is taken from the local file system, converted to PDF and saved to the storage. You can download the Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **EPUB  to PDF** using REST API. Local EPUB converted to PDF and saved to the local file system.
3 steps:
- Upload local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage)
- Call REST API to execute conversion (in the example bellow)
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage)
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/epub-pdf" \
    -d "{'InputPath': '/testpage.epub', 'OutputFile': 'test.pdf', 'Options': {'Width':1000, 'Height': 800, 'LeftMargin': 10, 'RightMargin': 10, 'TopMargin': 10, 'BottomMargin': 10}}" \
    -H "Content-Type: application/json" \
    -H "Authorization: bearer <token>"
```

{{< /tab >}}

{{< /tabs >}}

{{% alert color="primary" %}} 
More details about available conversion parameters for EPUB files are in the [SDK Conversion Options](/html/conversion-api/sdk-conversion-options/) section.

{{% /alert %}} 


### **Example 3** Convert EPUB to PDF inside cloud storage

Aspose.HTML Cloud allows you to get an EPUB file from your cloud storage and save conversion result back to cloud storage.

{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **EPUB  to PDF C#** language applying. EPUB file is located in a cloud storage, converted to PDF and saved back to the cloud storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert
var builder = new ConverterBuilder()
                .FromStorageFile("/test.epub")
                .ToStorageFile("/test.pdf");
                
var result = await api.ConvertAsync(builder);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **EPUB  to PDF java** language applying. EPUB is taken from the Web, converted to PDF and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **EPUB  to PDF C++** language applying. EPUB is taken from the Web, converted to PDF and saved to the local file system. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **EPUB  to PDF Python** language applying. EPUB is taken from the Web, converted to PDF and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **EPUB  to PDF PHP** language applying. EPUB is taken from the Web, converted to PDF and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **EPUB  to PDF Ruby** language applying. EPUB is taken from the Web, converted to PDF and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **EPUB  to PDF Node.js** language applying. EPUB is taken from the Web, converted to PDF and saved to the local file system. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **EPUB  to PDF Swift** language applying. EPUB is taken from the Web, converted to PDF and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **EPUB  to PDF Java/Android** applying. EPUB is taken from the Web, converted to PDF and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **EPUB  to PDF** using REST API. EPUB file is located in a cloud storage, converted to PDF and saved back to the cloud storage.
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/epub-pdf" \
    -d "{'InputPath': '/test.epub', 'OutputFile': '/test.pdf'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}

