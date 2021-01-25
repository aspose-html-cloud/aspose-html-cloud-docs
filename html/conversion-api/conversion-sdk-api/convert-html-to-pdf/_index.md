---
title: "Convert HTML to PDF"
type: docs
url: /conversion-sdk-api/convert-html-to-pdf/
keywords: "format conversion, html conversion, asynchronous conversion, conversion SDK, convert html to pdf, python, ruby, php, java, .net,  c#,  android, swift, Node.js"
description: "Article explains a usage of Aspose.HTML Cloud client SDKs to convert HTML to PDF by a set of examples. SDKs are available in PHP, Python, Ruby, Android, Swift, C#, Java, C++, Node.js and more."
weight: 10
---

## Summary

Article explains in a set of code examples how to convert HTML document to PDF using Aspose.HTML Cloud client SDKs.



## Examples

### Case 1.  Storage to storage

Convert an HTML file from the cloud storage to PDF and save the result to the cloud storage. 

The conversion process is following - a source document is loaded from the *default* cloud storage, and after conversion is completed, the result is saved to this storage.  The default PDFConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: FromStorageFile(`inputPath`), To(`ConversionOptions`) and SaveToStorage(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

```c#
const string STORAGE_SRCFOLDER = "storage:///Html/TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{STORAGE_SRCFOLDER}/{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/Pdf";

using(var api = new HtmlApi(clientID, clientSecret)) // initialize SDK API
{
    ConverterBuilder convHtmlPdf = new ConverterBuilder()
        .FromStorageFile(srcFilePath)
        .To(new PDFConversionOptions())
        .SaveToStorage(destFolder);

    ConversionResult result = api.Convert(convHtmlPdf);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // download file(s) by path result.Files
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

```java

```

{{< /tab >}}

{{< /tabs >}}



### Case 2. Local to storage, explicit PDF options

Convert an HTML file from the local file system to PDF with explicitly specified options and save the result to the cloud storage.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

```c#
const string LOCAL_TESTDATA = "d:\TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{LOCAL_TESTDATA}\{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/Pdf";

using(var api = new HtmlApi(clientId, clientSecret))
{
    ConversionOptions pdfOpts = new PDFConversionOptions()
        .SetHeight(800)
        .SetWidth(1000)
        .SetLeftMargin(10)
        .SetRightMargin(10)
        .SetBottomMargin(10)
        .SetTopMargin(10)
        .SetQuality(95);

    ConverterBuilder convHtmlPdf = new ConverterBuilder()
        .FromLocalFile(srcFilePath)
        .To(pdfOpts)
        .SaveToStorage(destFolder);

    ConversionResult result = api.Convert(convHtmlPdf);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // download file(s) by path result.Files
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

```java

```

{{< /tab >}}

{{< /tabs >}}



### Case 3. Web page to local, default PDF options

Convert a Web page by its URL to PDF with default PDF options and save the result to the local file system.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

```c#
const string LOCAL_TESTRESULT = "d:\TestResult";

var sourceUrl = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
var destFolder =  Path.Combine(LOCAL_TESTRESULT, "Pdf");

using(var api = new HtmlApi(clientID, clientSecret)) // initialize SDK API
{
    ConverterBuilder convHtmlPdf = new ConverterBuilder()
        .FromUrl(sourceUrl)
        .To(new PDFConversionOptions())
        .SaveToLocal(destFolder);

    ConversionResult result = api.Convert(convHtmlPdf);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // check if file exists locally
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}

```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

```java

```

{{< /tab >}}

{{< /tabs >}}

