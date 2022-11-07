---
title: Convert HTML to Markdown - Cloud SDKs
linktitle: Convert HTML to Markdown
type: docs
aliases: /conversion-sdk-api/html-converter/convert-html-to-markdown/
keywords: html to markdown, html to md, convert html to markdown, html to markdown conversion, html conversion, cloud sdk, Python, PHP, Perl, Android, Swift, C#, Java, Node.js, curl
description: Learn how to use Cloud SDKs and REST API to convert HTML to Markdown. SDKs are available in Perl, Python, C#, Java, Android, Swift and more.
weight: 110
url: /convert-html-to-md/
lastmod: 2022-11-03
---

## **Summary**

Aspose.HTML Cloud v4.0 provides the simplest API to convert {{%HTML%}} documents to {{%Markdown%}} format with high quality, easy and fast. This article contains a set of code examples that explain how to convert HTML to Markdown using available SDKs.

## **Examples of HTML to Markdown Conversion**

Aspose.HTML Cloud SDK allows you to fetch an HTML document from a storage location by its name, from a URL or a local file on your drive, convert it to the specified format and save the result to the storage or a local drive. The following code examples demonstrate how to convert HTML to Markdown programmatically for different cases.

### **Example 1.**  Convert a local HTML file to Markdown and save the result to local path

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example demonstrates the simplest way to convert **HTML to Markdown C#** language applying. Local HTML converted to Markdown and saved to the local path. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert from HTML file to Markdown file
var result = await api.ConvertAsync("test.html", "test.md");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example demonstrates how to convert **HTML to Markdown java** language applying. Local HTML converted to Markdown and saved to the local path. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to Markdown** C++ language applying. Local HTML converted to Markdown and saved to the local path.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example demonstrates how to convert **HTML to Markdown Python** language applying. Local HTML converted to Markdown and saved to the local path. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to Markdown MD** language applying. Local HTML converted to Markdown and saved to the local path. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php)

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example demonstrates how to convert **HTML to Markdown Ruby** language applying. Local HTML converted to Markdown and saved to the local path. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example demonstrates how to convert **HTML to Markdown Node.js** language applying. Local HTML converted to Markdown and saved to the local path.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example demonstrates how to convert **HTML to Markdown Swift** language applying. Local HTML converted to Markdown and saved to the local path. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example demonstrates how to convert **HTML to Markdown Java/Android** applying. Local HTML converted to Markdown and saved to the local path. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to Markdown** REST API applying. Local HTML converted to Markdown and saved to the local path. Follow a few required steps:
- Upload local file to storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-md" \
    -d "{'InputPath': '/testpage.html', 'OutputFile': 'test.md'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}

### **Example 2.** Convert a Web page to Markdown and save the result to the local file system

Aspose.HTML Cloud allows you to get an HTML page from the web by its URL, convert it to another format and save into the local file system. The example below demonstrates how to convert HTML to Markdown with the default conversion parameters.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **HTML to Markdown C#** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert HTML to Markdown using ConvertUrlAsync() method
var result = await api.ConvertUrlAsync("https://example.com", "test.md");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **HTML to Markdown java** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to Markdown C++** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. 

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **HTML to Markdown Python** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to Markdown PHP** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **HTML to Markdown Ruby** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **HTML to Markdown Node.js** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. 

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **HTML to Markdown Swift** language applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **HTML to Markdown Java/Android** applying. HTML is taken from the Web, converted to Markdown and saved to the local file system. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to Markdown** using REST API. HTML is taken from the Web, converted to Markdown and saved to the local file system.
Follow a few required steps:
- Call REST API to execute conversion (in the example below).
- Download conversion result back from storage using [Storage API](https://docs.aspose.cloud/html/storage-api/working-with-files-in-the-storage).
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-md" \
    -d "{'InputPath': 'https://example.com', 'OutputFile': 'test.md'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}

HTML to Markdown conversion occurs with the **default conversion options**: the resulting MD document’s width and height correspond to A4, all margins have zero value.

### **Example 3.** Convert HTML to Markdown inside cloud storage

Aspose.HTML Cloud allows you to get an HTML file from your cloud storage and save conversion result back to cloud storage.

{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

The following example shows how to convert **HTML to Markdown C#** language applying. HTML file is located in cloud storage, converted to Markdown and saved back to the cloud storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
// Initialize SDK API
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;

// Convert HTML to Markdown
var builder = new ConverterBuilder()
                .FromStorageFile("/test.html")
                .ToStorageFile("/test.md");
                
var result = await api.ConvertAsync(builder);
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example shows how to convert **HTML to Markdown java** language applying. HTML file is in cloud storage, converted to Markdown and saved back to the cloud storage. You can download the java SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-java).

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

The following example demonstrates how to convert **HTML to Markdown C++** language applying. HTML file is located in cloud storage, converted to Markdown and saved back to the cloud storage.

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

The following example shows how to convert **HTML to Markdown Python** language applying. HTML file is located in cloud storage, converted to Markdown and saved back to  cloud storage. You can download the Python SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-python).

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

The following example demonstrates how to convert **HTML to Markdown PHP** language applying. HTML file is located in cloud storage, converted to Markdown and saved back to cloud storage. You can download the PHP SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-php).

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

The following example shows how to convert **HTML to Markdown Ruby** language applying. HTML file is located in cloud storage, converted to Markdown and saved back to cloud storage. You can download the Ruby SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby).

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

The following example shows how to convert **HTML to Markdown Node.js** language applying. HTML file is located in cloud storage, converted to Markdown and saved back to cloud storage.

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

The following example shows how to convert **HTML to Markdown Swift** language applying. HTML file is in cloud storage, converted to Markdown and saved back to cloud storage. You can download the Swift SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-swift).

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

The following example shows how to convert **HTML to Markdown Java/Android** applying. HTML file is located in cloud storage, converted to Markdown and saved back to cloud storage. You can download the  Java/Android SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-android).

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

The following example demonstrates how to convert **HTML to Markdown** using REST API. HTML file is located in cloud storage, converted to Markdown and saved back to the cloud storage.
```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion/html-md" \
    -d "{'InputPath': '/test.html', 'OutputFile': '/test.md'}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}