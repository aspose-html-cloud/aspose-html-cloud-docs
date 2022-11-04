---
title: Convert HTML to DOCX - Cloud SDKs
linktitle: Convert HTML to DOCX
type: docs
keywords: convert html to doc, html to docx, html to doc conversion, SDK example, Python, PHP, Perl, Android, Swift, C#, Java, Node.js, curl
description: Learn how to use Cloud SDKs and REST API to convert HTML to DOCX. SDKs are available in PHP, Perl, Python, C#, Java, Android, Swift, etc.
weight: 30
url: /convert-html-to-docx/
lastmod: 2022-11-03
---

The document  formats {{%DOCX%}} and {{%DOC%}} can contain a wide range of data, including text, tables, raster and vector graphics, video, sounds and diagrams. These formats are very popular because of the variety of options they offer users to write any type of documents. DOCX/DOC documents support a wide range of formatting features. Sometimes, they are not always the best choice for distributing as they can be easily modified without the author's approval.

## **Summary**

Aspose.HTML Cloud produces quick and easy way to convert {{%HTML%}} to {{%DOC%}}, {{%DOCX%}}. This article explains in a set of code examples how to convert an HTML file to DOC/DOCX using available SDKs and REST API.


## **Examples of HTML to DOCX/DOC Conversion**

Aspose.HTML Cloud SDK allows you to fetch an HTML document from storage location by its name, from a URL or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert HTML to DOCX/DOC for different cases using available SDKs and REST API.

### **Example 1.**  Convert a local HTML file to DOC and save the result to local path

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example demonstrates the simplest way to convert **HTML to DOCX C#** language applying. Local HTML converted to DOCX and saved to the local path. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert  HTML to DOC
var result = await api.ConvertAsync("test.html", "test.doc");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to DOCX java** language applying. Local HTML converted to DOCX and saved to the local path. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to DOCX** C++ language applying. Local HTML converted to DOCX and saved to the local path.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to DOC Python** language applying. Local HTML converted to DOC and saved to the local path. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to DOC DOC** language applying. Local HTML converted to DOC and saved to the local path. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to DOC Ruby** language applying. Local HTML converted to DOC and saved to the local path. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to DOC Node.js** language applying. Local HTML converted to DOC and saved to the local path.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to DOC Swift** language applying. Local HTML converted to DOC and saved to the local path. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to DOC Java/Android** applying. Local HTML converted to DOC and saved to the local path. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to DOC** REST API applying. Local HTML converted to DOC and saved to the local path. Please take a few steps:
- Upload a local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-doc" \
    -d "{'InputPath': '/testpage.html', 'OutputFile': 'test.doc'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}


{{% alert color="primary" %}} 
HTML to DOC conversion occurs with the **default conversion options**: the resulting DOC document’s width and height correspond to A4, all margins have zero value.

{{% /alert %}} 


### **Example 2.** Convert a Web page to DOC and save the result to the local file system

Aspose.HTML Cloud allows you to get an HTML page from the web by its URL, convert it to another format and save into the local file system. The example below demonstrates how to convert HTML to DOC with the default conversion parameters.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **HTML to DOC C#** language applying. HTML is taken from the Web, converted to DOC and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert HTML to DOC using ConvertUrlAsync() method
var result = await api.ConvertUrlAsync("https://example.com", "test.doc");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **HTML to DOC java** language applying. HTML is taken from the Web, converted to DOC and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to DOC C++** language applying. HTML is taken from the Web, converted to DOC and saved to the local file system. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **HTML to DOC Python** language applying. HTML is taken from the Web, converted to DOC and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to DOC PHP** language applying. HTML is taken from the Web, converted to DOC and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **HTML to DOC Ruby** language applying. HTML is taken from the Web, converted to DOC and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **HTML to DOC Node.js** language applying. HTML is taken from the Web, converted to DOC and saved to the local file system. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **HTML to DOC Swift** language applying. HTML is taken from the Web, converted to DOC and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **HTML to DOC Java/Android** applying. HTML is taken from the Web, converted to DOC and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to DOC** using REST API. HTML is taken from the Web, converted to DOC and saved to the local file system.
2 steps:
- Call REST API to execute conversion (in the example bellow)
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage)
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-doc" \
    -d "{'InputPath': 'https://example.com', 'OutputFile': 'test.doc'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}

HTML to DOC conversion occurs with the **default conversion options**: the resulting DOC document’s width and height correspond to A4, all margins have zero value.

### **Example 3.** Convert HTML to DOC inside cloud storage

Aspose.HTML Cloud allows you to get an HTML file from your cloud storage and save conversion result back to cloud storage.

{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **HTML to DOC C#** language applying. HTML file is located in a cloud storage, converted to DOC and saved back to the cloud storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert
var builder = new ConverterBuilder()
                .FromStorageFile("/test.html")
                .ToStorageFile("/test.doc");
                
var result = await api.ConvertAsync(builder);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **HTML to DOC java** language applying. The HTML file is in the cloud storage, converted to DOC and saved back to the cloud storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to DOC C++** language applying. The HTML file is in the cloud storage, converted to DOC and saved back to the cloud storage. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **HTML to DOC Python** language applying. The HTML file is in the cloud storage, converted to DOC and saved back to the cloud storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to DOC PHP** language applying. The HTML file is in the cloud storage, converted to DOC and saved back to the cloud storage.. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **HTML to DOC Ruby** language applying. The HTML file is in the cloud storage, converted to DOC and saved back to the cloud storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **HTML to DOC Node.js** language applying. The HTML file is in the cloud storage, converted to DOC and saved back to the cloud storage. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **HTML to DOC Swift** language applying. The HTML file is in the cloud storage, converted to DOC and saved back to the cloud storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **HTML to DOC Java/Android** applying. The HTML file is in the cloud storage, converted to DOC and saved back to the cloud storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to DOC** using REST API. HTML file is located in a cloud storage, converted to DOC and saved back to the cloud storage.
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-doc" \
    -d "{'InputPath': '/test.html', 'OutputFile': '/test.doc'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}