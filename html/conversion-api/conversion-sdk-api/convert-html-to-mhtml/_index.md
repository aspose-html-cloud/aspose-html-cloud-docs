---
title: "Convert HTML to MHTML"
type: docs
url: /conversion-sdk-api/convert-html-to-mhtml/
keywords: "format conversion, html conversion, epub conversion, mhtml conversion, asynchronous conversion, conversion SDK, convert html to mhtml , python, java , .net,  c#,  android, swift ,Perl, Node.js"
description: "Article explains a usage of Aspose.HTML Cloud client SDKs by a set of examples. SDKs are wrappers upon REST API to help developers speed up their development. SDKs are available in PHP, Perl, Android, Swift, C#, Java and more."
weight: 100
---

## Summary

Article explains in a set of code examples how to convert HTML document to MHTML using Aspose.HTML Cloud client SDKs.



## Examples

### Case 1. Storage to storage

Convert an HTML file from the cloud storage to MHTML and save the result to the cloud storage. 

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

```c#
const string STORAGE_SRCFOLDER = "storage:///Html/TestData";
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var name = "testpage1.html";
var srcFilePath = $"{STORAGE_SRCFOLDER}/{name}";
var destFolder = $"{STORAGE_DSTFOLDER}/MHTML";

var api = new HtmlApi(clientID, clientSecret); // initialize SDK API

ConverterBuilder convHtmlMhtml = new ConverterBuilder()
    .FromStorageFile(srcFilePath)
    .To(new MHTMLConversionOptions())
    .SaveToStorage(destFolder);

ConversionResult result = api.Convert(convHtmlMhtml);
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



### Case 2. Web page to local

Convert a Web page by its URL to MHTML options and save the result to the local file system.

{{< tabs tabTotal="10" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" >}}

{{< tab tabNum="1" >}}

```c#
const string LOCAL_TESTRESULT = "d:\TestResult";

var sourceUrl = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
var destFolder =  Path.Combine(LOCAL_TESTRESULT, "MHTML");

var api = new HtmlApi(clientID, clientSecret); // initialize SDK API

ConverterBuilder convHtmlMhtml = new ConverterBuilder()
    .FromUrl(sourceUrl)
    .To(new MHTMLConversionOptions())
    .SaveToLocal(destFolder);

ConversionResult result = api.Convert(convHtmlMhtml);
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



