---
title: "Convert HTML to PNG"
type: docs
url: /conversion-sdk-api/convert-html-to-tiff/
keywords: "format conversion, html conversion, epub conversion, mhtml conversion, asynchronous conversion, conversion SDK, convert html to image , convert html to png, python, java , .net,  c#,  android, swift ,Perl, Node.js"
description: "Article explains a usage of Aspose.HTML Cloud client SDKs by a set of examples. SDKs are wrappers upon REST API to help developers speed up their development. SDKs are available in PHP, Perl, Android, Swift, C#, Java and more."
weight: 80
---

## Summary

Article explains in a set of code examples how to convert HTML document to [PNG](https://docs.fileformat.com/image/png/) using Aspose.HTML Cloud client SDKs.



## Examples

### Case 1. Storage to storage

Convert an HTML file from the cloud storage to [PNG](https://docs.fileformat.com/image/png/)and save the result to the cloud storage. 

The conversion process is following - a source document is loaded from the *default* cloud storage, and after conversion is completed, the result is saved to this storage.  The default PNGConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: FromStorageFile(`inputPath`), To(`ConversionOptions`) and SaveToStorage(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName8="Java/Android" >}}

{{< tab tabNum="1" >}}

```c#
const string STORAGE_SRCFOLDER = "storage:///Html/TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{STORAGE_SRCFOLDER}/{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/Png";

var api = new HtmlApi(clientID, clientSecret); // initialize SDK API

ConverterBuilder convHtmlPng = new ConverterBuilder()
    .FromStorageFile(srcFilePath)
    .To(new PNGConversionOptions())
    .SaveToStorage(destFolder);

ConversionResult result = api.Convert(convHtmlPng);
if(result.Status == "success" && result.Files.Length > 0)
{
    // download file(s) by path result.Files
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



### Case 2. Local to storage, explicit PNG options

Convert an HTML file from the local file system to [PNG](https://docs.fileformat.com/image/png/) with explicitly specified options and save the result to the cloud storage.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName8="Java/Android" >}}

{{< tab tabNum="1" >}}

```c#
const string LOCAL_TESTDATA = "d:\TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{LOCAL_TESTDATA}\{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/Png";

var api = new HtmlApi(clientId, clientSecret);

ConversionOptions pngOpts = new PNGConversionOptions()
    .SetHeight(800)
    .SetWidth(1000)
    .SetLeftMargin(10)
    .SetRightMargin(10)
    .SetBottomMargin(10)
    .SetTopMargin(10);

ConverterBuilder convHtmlPng = new ConverterBuilder()
    .FromLocalFile(srcFilePath)
    .To(pngOpts)
    .SaveToStorage(destFolder);

ConversionResult result = api.Convert(convHtmlPng);
if(result.Status == "success" && result.Files.Length > 0)
{
    // download file(s) by path result.Files
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





### Case 3. Web page to local, default PNG options

Convert a Web page by its URL to [PNG](https://docs.fileformat.com/image/png/) with default PNG options and save the result to the local file system.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName8="Java/Android" >}}

{{< tab tabNum="1" >}}

```c#
const string LOCAL_TESTRESULT = "d:\TestResult";

var sourceUrl = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
var destFolder =  Path.Combine(LOCAL_TESTRESULT, "Png");

var api = new HtmlApi(clientID, clientSecret); // initialize SDK API

ConverterBuilder convHtmlPng = new ConverterBuilder()
    .FromUrl(sourceUrl)
    .To(new PNGConversionOptions())
    .SaveToLocal(destFolder);

ConversionResult result = api.Convert(convHtmlPng);
if(result.Status == "success" && result.Files.Length > 0)
{
    // check if file exists locally
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

