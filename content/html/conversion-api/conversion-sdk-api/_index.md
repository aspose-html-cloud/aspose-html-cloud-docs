---
title: "Conversion SDK API"
type: docs
aliases: /conversion-sdk-api/
keywords: "format conversion, html conversion, epub conversion, mhtml conversion, asynchronous conversion, conversion SDK, convert html to pdf, convert html to xps, convert html to doc, convert html to jpeg, convert html to png, convert html to tiff, Python, PHP, Perl, Android, Swift, C#, Java, Node.js"
description: "In this documentation chapter, you find out in details on how to convert documents from different source formats HTML, XHTML, MHTML, EPUB,  and Markdown to a variety of the most popular formats, such as PDF, XPS, DOCX, DOC, PNG, JPG, BMP, TIFF, GIFF, and others using Aspose.HTML Cloud SDKs. SDKs are wrappers upon REST API to help developers speed up their development. SDKs are available in Python, PHP, Perl, Android, Swift, C#, Java and more."
weight: 40
---

## **Summary**

Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Check out our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples to get you started in no time. Please check the [Available SDKs](/html/overview/available-sdks/) article to learn how to add an SDK to your project.

## **SDK conversion examples**

A widespread use case for Aspose.HTML Cloud SDK functions is file processing and converting. The following conversion scenarios are supported:

 - [HTML converter](/html/conversion-api/conversion-sdk-api/html-converter/) 
 - [MHTML converter](/html/conversion-api/conversion-sdk-api/mhtml-converter/) 
 - [XHTML converter](/html/conversion-api/conversion-sdk-api/xhtml-converter/) 
 - [Markdown converter](/html/conversion-api/conversion-sdk-api/markdown-converter/) 
 - [EPUB converter](/html/conversion-api/conversion-sdk-api/epub-converter/) 

To view code examples that illustrate various cases of client SDKs usage for the format conversions, follow the most-popular links:

 - [HTML to PDF](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-pdf/) 
 - [MHTML to PDF](/html/conversion-api/conversion-sdk-api/mhtml-converter/convert-mhtml-to-pdf/)
 - [HTML to JPG](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-jpeg/) 

{{% alert color="primary" %}} 
Please see the [Conversion REST API](/html/conversion-api/conversion-rest-api/) article to learn how to convert an {{%HTML%}} file to other formats using direct REST API calls.

{{% /alert %}} 

## **Conversion methods**



### ConvertAsync

 ```
 AsyncResult<Conversion.Conversion> ConvertAsync(
          ConversionSource source,
          ConversionOptions options,
          string outputFilePath = null,
          NameCollisionOption nameCollisionOption = NameCollisionOption.FailIfExists,
          IObserver<Conversion.Conversion> observer = null)
 ```

Starts asynchronously a long-time conversion operation of a source file (or files) specified by *source* parameter and returns an **AsyncResult** object that allows watching for the current asynchronous operation status. 



### ConvertAsync

```c#
AsyncResult<Conversion.Conversion> ConvertAsync(
      List<RemoteFile> files,
      ConversionOptions options,
      string outputFilePath = null,
      NameCollisionOption nameCollisionOption = NameCollisionOption.FailIfExists,
      IObserver<Conversion.Conversion> observer = null)
```

Overloaded method.  Starts asynchronously a long-time conversion operation of a list of storage files.



### GetConversion

```c#
AsyncResult<Conversion.Conversion> GetConversion(string id)
```

Gets a current status of long-time conversion operation started previously by the *ConvertAsync* method.



### DeleteTask

```c#
bool DeleteTask(string id)
```

Cancels a long-time conversion operation started previously by the *ConvertAsync* method.



### Convert

```c#
Conversion.Conversion Convert(
   ConversionSource source,
   ConversionOptions options,
   string outputFilePath = null,
   NameCollisionOption nameCollisionOption = NameCollisionOption.FailIfExists,
   IObserver<Conversion.Conversion> observer = null)
```

Converts synchronously a file (or files) specified by  *source* parameter. This method is a synchronous mode of the *ConvertAsync*. Returns the Conversion.Conversion object with a list of conversion results.



### Convert

```c#
Conversion.Conversion Convert(
      List<RemoteFile> files, 
      ConversionOptions options, string outputFilePath = null,
      NameCollisionOption nameCollisionOption = NameCollisionOption.FailIfExists,
      IObserver<Conversion.Conversion> observer = null)
```

Overloaded method. Converts synchronously a list of storage files. This method is a synchronous mode of the *ConvertAsync* (overloaded).

The specialized versions of the conversion methods are described below.

### ConvertWebSiteAsync

```c#
AsyncResult<Conversion.Conversion> ConvertWebSiteAsync(
      string address, 
      ConversionOptions options,
      string outputFilePath = null, 
      NameCollisionOption nameCollisionOption = NameCollisionOption.FailIfExists,
      IObserver<Conversion.Conversion> observer = null)
```

Starts asynchronously a long-time conversion operation of a web page specified by its URL (*address* parameter). This method is an analog of the *ConvertAsync* specialized for web pages.



### ConvertWebSite

```c#
Conversion.Conversion ConvertWebSite(
      string address,
      ConversionOptions options,
      string outputFilePath = null,
      NameCollisionOption nameCollisionOption = NameCollisionOption.FailIfExists,
      IObserver<Conversion.Conversion> observer = null)
```

Synchronous mode of the *ConvertWebSiteAsync* method. Converts a web page specified by its URL.



### ConvertWebSite

```c#
Conversion.Conversion ConvertWebSite(
      List<string> address, 
      ConversionOptions options,
      string outputFilePath = null, 
      NameCollisionOption nameCollisionOption = NameCollisionOption.FailIfExists,
      IObserver<Conversion.Conversion> observer = null)
```

Overloaded method. Synchronous mode of the *ConvertWebSiteAsync* method. Converts several web pages specified the list of their URLs.



### ConvertLocalFileAsync

```c#
AsyncResult<Conversion.Conversion> ConvertLocalFileAsync(
      string filePath,
      ConversionOptions options,
      string outputFilePath = null,
      NameCollisionOption nameCollisionOption = NameCollisionOption.FailIfExists,
      IObserver<Conversion.Conversion> observer = null)
```

Starts asynchronously a long-time conversion operation of a file specified by its local file system path.



### ConvertLocalFileAsync

```c#
AsyncResult<Conversion.Conversion> ConvertLocalFileAsync(
      List<string> filePaths, 
      ConversionOptions options,
      string outputFilePath = null, 
      NameCollisionOption nameCollisionOption = NameCollisionOption.FailIfExists,
      IObserver<Conversion.Conversion> observer = null)
```

Overloaded method.  Starts asynchronously a long-time conversion operation of several files specified by a list of their local file system paths.



### ConvertLocalFile

```c#
Conversion.Conversion ConvertLocalFile(
      string filePath,
      ConversionOptions options,
      string outputFilePath = null,
      NameCollisionOption nameCollisionOption = NameCollisionOption.FailIfExists,
      IObserver<Conversion.Conversion> observer = null)
```

Synchronous mode of the *ConvertLocalFileAsync* method. Converts a file specified by its local file system path.



### ConvertLocalFile

```c#
Conversion.Conversion ConvertLocalFile(
      List<string> filePath, 
      ConversionOptions options,
      string outputFilePath = null, 
      NameCollisionOption nameCollisionOption = NameCollisionOption.FailIfExists,
      IObserver<Conversion.Conversion> observer = null)
```

Overloaded method. Synchronous mode of the *ConvertLocalFileAsync* method. Converts several files specified by a list of their local file system paths.



### ConvertLocalDirectory

```
Conversion.Conversion ConvertLocalDirectory(
      List<string> paths,
      ConversionOptions options,
      string outputFilePath = null,
      NameCollisionOption nameCollisionOption = NameCollisionOption.FailIfExists,
      IObserver<Conversion.Conversion> observer = null)
```

Converts synchronously files in a list of local directories.