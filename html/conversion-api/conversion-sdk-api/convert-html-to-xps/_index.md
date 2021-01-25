---
title: "Convert HTML to XPS"
type: docs
url: /conversion-sdk-api/convert-html-to-xps/
keywords: "format conversion, html conversion, asynchronous conversion, conversion SDK, convert html to xps, python, ruby, php, java, .net,  c#,  android, swift, Node.js"
description: "Article explains a usage of Aspose.HTML Cloud client SDKs to convert HTML to XPS by a set of examples. SDKs are available in PHP, Python, Ruby, Android, Swift, C#, Java, C++, Node.js and more."
weight: 20
---

## Summary

Article explains in a set of code examples how to convert HTML document to [XPS](https://docs.fileformat.com/page-description-language/xps/) using Aspose.HTML Cloud client SDKs.



## Examples

### Case 1. Storage to storage

Convert an HTML file from the cloud storage to [XPS](https://docs.fileformat.com/page-description-language/xps/) and save the result to the cloud storage. 

The conversion process is following - a source document is loaded from the *default* cloud storage, and after conversion is completed, the result is saved to this storage.  The default XPSConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: FromStorageFile(`inputPath`), To(`ConversionOptions`) and SaveToStorage(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

```c#
const string STORAGE_SRCFOLDER = "storage:///Html/TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{STORAGE_SRCFOLDER}/{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/Xps";

using(var api = new HtmlApi(clientID, clientSecret)) // initialize SDK API
{
    ConverterBuilder convHtmlXps = new ConverterBuilder()
        .FromStorageFile(srcFilePath)
        .To(new XPSConversionOptions())
        .SaveToStorage(destFolder);

    ConversionResult result = api.Convert(convHtmlXps);
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



### Case 2. Local to storage, explicit XPS options

Convert an HTML file from the local file system to [XPS](https://docs.fileformat.com/page-description-language/xps/) with explicitly specified options and save the result to the cloud storage.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

```c#
const string LOCAL_TESTDATA = "d:\TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{LOCAL_TESTDATA}\{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/Xps";

using(var api = new HtmlApi(clientId, clientSecret))
{
    ConversionOptions xpsOpts = new XPSConversionOptions()
        .SetHeight(800)
        .SetWidth(1000)
        .SetLeftMargin(10)
        .SetRightMargin(10)
        .SetBottomMargin(10)
        .SetTopMargin(10);

    ConverterBuilder convHtmlXps = new ConverterBuilder()
        .FromLocalFile(srcFilePath)
        .To(xpsOpts)
        .SaveToStorage(destFolder);

    ConversionResult result = api.Convert(convHtmlXps);
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



### Case 3. Web page to local, default XPS options

Convert a Web page by its URL to [XPS](https://docs.fileformat.com/page-description-language/xps/) with default  XPS options and save the result to the local file system.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

```c#
const string LOCAL_TESTRESULT = "d:\TestResult";

var sourceUrl = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
var destFolder =  Path.Combine(LOCAL_TESTRESULT, "Xps");

using(var api = new HtmlApi(clientID, clientSecret)) // initialize SDK API
{
    ConverterBuilder convHtmlXps = new ConverterBuilder()
        .FromUrl(sourceUrl)
        .To(new XPSConversionOptions())
        .SaveToLocal(destFolder);

    ConversionResult result = api.Convert(convHtmlXps);
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

