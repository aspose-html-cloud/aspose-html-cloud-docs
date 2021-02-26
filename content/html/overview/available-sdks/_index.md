---
title: "Available SDKs"
type: docs
aliases: /available-sdks/
keywords: "SDK, Cloud SDKs, REST API, SDK Example, HTML to JPEG, java SDK, Python SDK, python, java , .net,  c#,  android, swift, Perl, Node.js"
description: "This article introduce you  with Aspose.HTML Cloud v4.0 abilities to use its functionality by the set of wrappers implemented as SDKs on the various programming languages such as, C#, Java, Python, Ruby, PHP, Node.js, Swift, Android and Go."
weight: 30
---

## **Aspose.HTML Cloud SDKs**
Aspose.HTML for Cloud is a modern REST oriented API that allows easy integration into existing systems. SDKs serve an essential purpose: they enable the creation of new software and apps; they help the developers increase the websites with more operationalities and make development more straightforward. SDKs are specifically designed to facilitate programmers the Aspose.HTML RESTFul APIs using. 

### **Why use an SDK?**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project.

### **SDK benefits**
Our supported SDKs are 100% tested and out of the box running. These SDKs are open source and have an MIT license. You can use them, and even customize them for absolutely free of charge. 

The SDKs are simple to understand and use by outside developers, contain comprehensive documentation that explains the working of codes and work well with other SDKs.

## **Supported SDKs**

Aspose.HTML Cloud provides the ability to use its functionality by the set of wrappers implemented as SDKs on the various programming languages such as, C#, Java, Python, Ruby, PHP, Node.js, Swift, Android and Go.

{{< tabs tabTotal="10" tabID="1" tabName1=".NET" tabName2="Python" tabName3="Java" tabName4="C++" tabName5="Go" tabName6="Node.js" tabName7="Swift" tabName8="Android" tabName9="Ruby" tabName10="PHP" >}}

{{< tab tabNum="1" >}}

**Aspose.HTML Cloud SDK for .NET** allows you to incorporate Aspose.HTML Cloud services in your .NET applications quickly and easily.

Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud).

```java

PM> Install-Package Aspose.HTML-Cloud

```

{{% alert color="primary" %}} 

The complete source code of Aspose.HTML Cloud SDK for .NET is freely available on the [GitHub](https://github.com/aspose-html-cloud).

{{% /alert %}}

{{< /tab >}}

{{< tab tabNum="2" >}}

**Aspose.HTML Cloud SDK for Python** allows you to incorporate Aspose.HTML Cloud services in your python applications quickly and easily.

Aspose.HTML Cloud SDK for Python can be installed using [PyPi](https://pypi.org/project/asposehtmlcloud/) package manager.

```java

pip install -r Aspose.HTML-Cloud-SDK-for-Python/requirements.txt 

```

**Direct Method**

1. Download the latest package from [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-python), and run the following command:

```java

python Aspose.HTML-Cloud-SDK-for-Python/setup.py install 

```

{{% alert color="primary" %}} 

The complete source code of Aspose.HTML Cloud SDK for Python is freely available on your favorite [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-python) repositories.

{{% /alert %}} 

{{< /tab >}}

{{< tab tabNum="3" >}}

**Aspose.HTML Cloud SDK for Java** allows you to incorporate Aspose.HTML Cloud services in your Java applications quickly and easily.

You can add the following dependency into your existing Java application:

```java

<dependency>
    <groupId>com.aspose</groupId>
    <artifactId>aspose-html-cloud</artifactId>
    <version>1.0.0</version>
    <scope>compile</scope>
</dependency>

```

{{% alert color="primary" %}} 

The complete source code of Aspose.HTML Cloud SDK for Java is freely available on our [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-java) repository.

{{% /alert %}} 

{{< /tab >}}

{{< tab tabNum="4" >}}

{{% alert color="primary" %}} 

The complete source code and examples to get started using the Aspose.HTML Cloud SDK for C++ is freely available on our [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-cpp) repository.

{{% /alert %}} 

{{< /tab >}}

{{< tab tabNum="5" >}}

{{% alert color="primary" %}} 

The complete source code and examples to get started using the Aspose.HTML Cloud SDK for Go is available on our [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-go) repository.

{{% /alert %}} 

{{< /tab >}}

{{< tab tabNum="6" >}}

{{% alert color="primary" %}} 

The complete source code and examples to get started using the Aspose.HTML Cloud SDK for Node.JS is available on our [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-nodejs) repository.

{{% /alert %}} 

{{< /tab >}}

{{< tab tabNum="7" >}}

{{% alert color="primary" %}} 

The complete source code and examples to get started using the Aspose.HTML Cloud SDK for Swift is available on our [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-swift) repository.

{{% /alert %}} 

{{< /tab >}}

{{< tab tabNum="8" >}}

{{% alert color="primary" %}} 

The complete source code and examples to get started using the Aspose.HTML Cloud SDK for Android is available on our [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-android) repository.

{{% /alert %}} 

{{< /tab >}}

{{< tab tabNum="9" >}}

{{% alert color="primary" %}} 

The complete source code and examples to get started using the Aspose.HTML Cloud SDK for Ruby is available on our [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby) repository.

{{% /alert %}} 

{{< /tab >}}

{{< tab tabNum="10" >}}

{{% alert color="primary" %}} 

The complete source code and examples to get started using the Aspose.HTML Cloud SDK for PHP is available on our [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-php) repository.

{{% /alert %}} 

{{< /tab >}}

{{< /tabs >}}

## **SDK Example of HTML to JPEG conversion**

As an example, let’s use the Aspose.HTML Cloud SDK to convert HTML to JPEG.

Consider a case when you get an HTML page from the web by its URL, convert it to JPEG format and save the result to the storage. The default JPEGConversionOptions are applied to the conversion. 

The **HtmlApi** (` clientId`, `clientSecret`) method Initializes a class instance with user Credentials. In the example, we use methods of the **ConverterBuilder** class: **FromUrl**(`urlAddress`), **To**(`ConversionOptions`) and **SaveToStorage**(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result. The **Convert**(`ConverterBuilder builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.

```c#
const string STORAGE_DSTFOLDER = "storage:///Html/TestResult";

var sourceUrl = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
var destFolder = $"{STORAGE_DSTFOLDER}/Jpeg";

using(var api = new HtmlApi(clientID, clientSecret)) // initialize SDK API
{
    ConverterBuilder convHtmlJpeg = new ConverterBuilder()
        .FromUrl(sourceUrl)
        .To(new JPEGConversionOptions())
        .SaveToStorage(destFolder);

    ConversionResult result = api.Convert(convHtmlJpeg);
    if(result.Status == "success" && result.Files.Length > 0)
    {
        // check if file exists locally
    }
}
```

{{% alert color="primary" %}} 

To obtain information about converting between formats, please read the [Conversion API](http://localhost:1313/html/conversion-api/) section.

{{% /alert %}} 