---
title: Conversions SDK API
type: docs
aliases: /conversions-sdk-api/
keywords: conversion methods, convert html, convert epub, convert mhtml, convert xtml, asynchronous conversion, conversion SDK
description: In this documentation chapter, you find out in detail how to convert documents from different source formats HTML, XHTML, MHTML, EPUB,  and Markdown to a variety of the most popular formats, such as PDF, XPS, DOCX, DOC, PNG, JPG, BMP, TIFF, GIFF, and others using Aspose.HTML Cloud SDKs. SDKs are available in Python, PHP, Perl, Android, Swift, C#, Java and more.
weight: 40
---

## **Summary**

Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Check out our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples to get you started in no time. Also, please check the [Available SDKs](/html/overview/available-sdks/) article to learn how to add an SDK to your project.

## **SDK Converters **

Widespread use cases for Aspose.HTML Cloud SDK functions are file processing and converting. The following converters are supported:

 - [HTML converter](/html/conversion-api/conversion-sdk-api/html-converter/) - You will learn in detail how to convert an HTML file to the most popular formats such as PDF, XPS, DOCX, DOC, PNG, JPG, BMP, TIFF, GIF, MHTML, and Markdown using the Aspose.HTML Cloud SDK.
 - [MHTML converter](/html/conversion-api/conversion-sdk-api/mhtml-converter/) - provides a general description of how to convert [MHTML](https://docs.fileformat.com/web/mhtml/) to [PDF](https://docs.fileformat.com/pdf/), [XPS](https://docs.fileformat.com/page-description-language/xps/), [DOCX](https://docs.fileformat.com/word-processing/docx/), [JPEG](https://docs.fileformat.com/image/jpeg/), [PNG](https://docs.fileformat.com/image/png/), [BMP](https://docs.fileformat.com/image/bmp/), [TIFF](https://docs.fileformat.com/image/tiff/), and [GIF](https://docs.fileformat.com/image/gif/) formats.
 - [XHTML converter](/html/conversion-api/conversion-sdk-api/xhtml-converter/) -  
 - [Markdown converter](/html/conversion-api/conversion-sdk-api/markdown-converter/) - The articles in this section provide information on a description of conversion features of Aspose.HTML Cloud SDK API and the list of supported Markdown files conversion scenarios using various SDKs.
 - [EPUB converter](/html/conversion-api/conversion-sdk-api/epub-converter/) -  You find out how to convert [EPUB](https://docs.fileformat.com/ebook/epub/) to [PDF](https://docs.fileformat.com/pdf/), [XPS](https://docs.fileformat.com/page-description-language/xps/), [DOCX](https://docs.fileformat.com/word-processing/docx/), [JPEG](https://docs.fileformat.com/image/jpeg/), [PNG](https://docs.fileformat.com/image/png/), [BMP](https://docs.fileformat.com/image/bmp/), [TIFF](https://docs.fileformat.com/image/tiff/), and [GIF](https://docs.fileformat.com/image/gif/) formats using the Aspose.HTML Cloud SDK.

## **Conversion Methods**

This article provides information on a list of methods that make conversion convenient and easy to use.

### ConvertAsync

 ```c#
public async Task<ConvertResult> ConvertAsync(ConverterBuilder builder)
 ```

Starts asynchronously a long-time conversion operation. Takes a `builder` as a parameter and returns a **Task** object that allows watching for the current asynchronous operation status. 

### ConvertAsync

```c#
 public async Task<ConvertResultFile> ConvertAsync(
 		string inputFilePath,
         string outputFilePath,
         ConversionOptions options = null)
```

Overloaded method. Starts asynchronously a long-time conversion operation of a source file specified by `inputFilePath` parameter. Also, it takes a `outputFilePath` and `options` as parameters and returns a **Task** object. 

### ConvertAsync

```c#
public async Task<ConvertResultFile> ConvertAsync(
    	string inputFilePath, 
    	IList<string> resources, 
    	string outputFilePath, 
    	ConversionOptions options = null)

AsyncResult<Conversion.Conversion> ConvertAsync(
      List<RemoteFile> files,
      ConversionOptions options,
      string outputFilePath = null,
      NameCollisionOption nameCollisionOption = NameCollisionOption.FailIfExists,
      IObserver<Conversion.Conversion> observer = null)
```

Overloaded method.  Asynchronously starts a long-time conversion operation of a file with a list of resources.

### ConvertAsync

```c#
public async Task<ConvertResultFile> ConvertAsync(
    	string inputFilePath, 
    	string resourcesDirectory, 
    	string outputFilePath, 
    	ConversionOptions options = null)
```

Overloaded method.  Asynchronously starts a long-time conversion operation of a file with linked resources.

### ConvertUrlAsync

```c#

public async Task<ConvertResultFile> ConvertUrlAsync(
    	string url, 
    	string outputFilePath, 
    	ConversionOptions options = null)
```

Asynchronously starts a long-time conversion operation of a web page specified by its `url`. This method is an analog of the *ConvertAsync* specialized for web pages.

To view code examples that illustrate various cases of client SDKs usage for the formats conversions, follow the most-popular links:

 - [Convert HTML to PDF](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-pdf/) 
 - [Convert MHTML to PDF](/html/conversion-api/conversion-sdk-api/mhtml-converter/convert-mhtml-to-pdf/)
 - [Convert HTML to JPG](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-jpeg/) 

{{% alert color="primary" %}} 
Please see the [Conversion REST API](/html/conversion-api/conversion-rest-api/) article to learn how to convert an {{%HTML%}} file to other formats using direct REST API calls.

{{% /alert %}} 

