---
title: SDK Conversion Options
type: docs
aliases: /sdk-conversion-options/
keywords: convert html, conversion options, convert html to pdf, convert html to xps, convert html to doc, convert html to image, convert html to jpeg, convert html to markdown, convert html to mhtml
description: Aspose.HTML Cloud SDK family allows converting HTML, MHTML, XHTML, EPUB and Markdown files to a variety of popular formats using default or custom conversion options. This article describes a set of classes that represent conversion options: PDFConversionOptions, XPSConversionOptions, DOCConversionOptions, ImageConversionOptions, and MarkdownConversionOptions.
weight: 80
---
## **Summary**

Aspose.HTML Cloud v4.0 presents the simplest API to convert an {{%HTML%}} page to one of the fixed-layout document formats including {{%PDF%}}, {{%XPS%}}, {{%DOC%}}, {{%DOCX%}}; to {{%MD%}} and {{%MHTML%}} formats; to one of the raster image formats such as {{%JPEG%}}, {{%PNG%}}, {{%TIFF%}}, {{%BMP%}}, and {{%GIF%}}.

Aspose.HTML Cloud SDK family provides a set of classes that represent the conversion options. Conversion options allow you to customize the conversion process. You can specify the file page size, margins, compression level, etc.  This article describes a set of classes that represent conversion options: PDFConversionOptions, XPSConversionOptions, DOCConversionOptions, ImageConversionOptions, and MarkdownConversionOptions.


## **PDFConversionOptions**
 ```c#
ConversionOptions pdfOpts = new PDFConversionOptions()
    .SetHeight(800)
    .SetWidth(1000)
    .SetLeftMargin(10)
    .SetRightMargin(10)
    .SetBottomMargin(10)
    .SetTopMargin(10)
    .SetQuality(95);
 ```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Width** | **Number**| Resulting document page width in points (1/96 inch). | [optional] 
 **Height** | **Number**| Resulting document page height in points (1/96 inch). | [optional] 
 **LeftMargin** | **Number**| Left resulting document page margin in points (1/96 inch). | [optional] 
 **RightMargin** | **Number**| Right resulting document page margin in points (1/96 inch). | [optional] 
 **TopMargin** | **Number**| Top resulting document page margin in points (1/96 inch). | [optional] 
 **BottomMargin** | **Number**| Bottom resulting document page margin in points (1/96 inch). | [optional] 
 **JpegQuality** | **Number**| Quality of jpeg compression in percent. | [optional]

How to apply conversion options for HTML to PDF conversion is in SDK examples of the [Convert HTML to PDF](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-pdf/) article.

## **XPSConversionOptions**

 ```c#
ConversionOptions xpsOpts = new XPSConversionOptions()
    .SetHeight(800)
    .SetWidth(1000)
    .SetLeftMargin(10)
    .SetRightMargin(10)
    .SetBottomMargin(10)
    .SetTopMargin(10);
 ```
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Width** | **Number**| Resulting document page width in points (1/96 inch). | [optional] 
 **Height** | **Number**| Resulting document page height in points (1/96 inch). | [optional] 
 **LeftMargin** | **Number**| Left resulting document page margin in points (1/96 inch). | [optional] 
 **RightMargin** | **Number**| Right resulting document page margin in points (1/96 inch). | [optional] 
 **TopMargin** | **Number**| Top resulting document page margin in points (1/96 inch). | [optional] 
 **BottomMargin** | **Number**| Bottom resulting document page margin in points (1/96 inch). | [optional] 

How to apply conversion options for HTML to XPS conversion is in SDK examples of the [Convert HTML to XPS](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-xps/) article.

## **DOCConversionOptions**

 ```c#
ConversionOptions docOpts = new DOCConversionOptions()
    .SetHeight(800)
    .SetWidth(1000)
    .SetLeftMargin(10)
    .SetRightMargin(10)
    .SetBottomMargin(10)
    .SetTopMargin(10);
 ```

| Name             | Type       | Description                                                  | Notes      |
| ---------------- | ---------- | ------------------------------------------------------------ | ---------- |
| **Width**        | **Number** | Resulting document page width in points (1/96 inch).         | [optional] |
| **Height**       | **Number** | Resulting document page height in points (1/96 inch).        | [optional] |
| **LeftMargin**   | **Number** | Left resulting document page margin in points (1/96 inch).   | [optional] |
| **RightMargin**  | **Number** | Right resulting document page margin in points (1/96 inch).  | [optional] |
| **TopMargin**    | **Number** | Top resulting document page margin in points (1/96 inch).    | [optional] |
| **BottomMargin** | **Number** | Bottom resulting document page margin in points (1/96 inch). | [optional] |

How to apply conversion options for HTML to DOCX/DOC conversion is in SDK examples of the [Convert HTML to DOCX](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-docx/) article.

## **ImageConversionOptions**

 ```c#
ConversionOptions jpgOpts = new ImageConversionOptions()
    .SetHeight(800)
    .SetWidth(1000)
    .SetLeftMargin(10)
    .SetRightMargin(10)
    .SetBottomMargin(10)
    .SetTopMargin(10)
    .SetResolution(300);
 ```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Width** | **Number**| Resulting document page width in points (1/96 inch). | [optional] 
 **Height** | **Number**| Resulting document page height in points (1/96 inch). | [optional] 
 **LeftMargin** | **Number**| Left resulting document page margin in points (1/96 inch). | [optional] 
 **RightMargin** | **Number**| Right resulting document page margin in points (1/96 inch). | [optional] 
 **TopMargin** | **Number**| Top resulting document page margin in points (1/96 inch). | [optional] 
 **BottomMargin** | **Number**| Bottom resulting document page margin in points (1/96 inch). | [optional]
 **Resolution** | **Number**| Resolution of the resulting image. The default is 96 dpi. | [optional]

How to apply conversion options for HTML to JPEG conversion is in SDK examples of the [Convert HTML to JPEG](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-jpeg/) article.

## **MarkdownConversionOptions**

 ```c#
ConversionOptions mdOpts = new MarkdownConversionOptions()
    .SetUseGit(true);
 ```
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UseGit** | **Boolean**| Use [Git Markdown Flavor](https://github.github.com/gfm/) to save. | [optional] [default to false]

[GitLab Flavored Markdown](https://github.github.com/gfm/) is the GitHub.com version of the Markdown syntax that provides an additional set of helpful features that make it easier to work with content on GitHub.com

## **MHTMLConversionOptions**

 ```c#
ConversionOptions mhtmlOpts = new MHTMLConversionOptions();
 ```