---
title: "Conversion Options"
type: docs
url: /html-conversion-options/
keywords: "html conversion, asynchronous conversion, convert html to pdf, html to xps, html to image, html to markdown, html to mhtml"
description: " Article explains HTML conversion to PDF using Aspose.HTML Cloud API. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 80
---
## Conversion options
[TOC]

<a name="PDFConversionOptions"></a>

### PDFConversionOptions
```code
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

<a name="XPSConversionOptions"></a>
### XPSConversionOptions
```code
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

<a name="JPEGConversionOptions"></a>
### JPEGConversionOptions
```code
ConversionOptions jpgOpts = new JPEGConversionOptions()
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

<a name="PNGConversionOptions"></a> 
### PNGConversionOptions
```code
ConversionOptions pngOpts = new PNGConversionOptions()
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

<a name="BMPConversionOptions"></a>
### BMPConversionOptions
```code
ConversionOptions bmpOpts = new BMPConversionOptions()
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

<a name="GIFConversionOptions"></a>
### GIFConversionOptions
```code
ConversionOptions gifOpts = new GIFConversionOptions()
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

<a name="TIFFConversionOptions"></a>
### TIFFConversionOptions
```code
ConversionOptions tiffOpts = new TIFFConversionOptions()
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

<a name="MarkdownConversionOptions"></a>
### MarkdownConversionOptions
```code
ConversionOptions mdOpts = new MarkdownConversionOptions()
    .SetUseGit(true);
```
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UseGit** | **Boolean**| Use [Git Markdown flavor](https://github.github.com/gfm/) to save. | [optional] [default to false]

<a name="MHTMLConversionOptions"></a>
### MHTMLConversionOptions
```code
ConversionOptions mhtmlOpts = new MHTMLConversionOptions();
```