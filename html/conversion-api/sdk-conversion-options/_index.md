---
title: "SDK Conversion Options"
type: docs
url: /sdk-conversion-options/
keywords: "html conversion, conversion options, convert html to pdf, convert html to xps, convert html to doc, convert html to image, convert html to jpeg, convert html to markdown, convert html to mhtml"
description: " Article explains HTML conversion to PDF using Aspose.HTML Cloud API. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 80
---
## Summary

Aspose.HTML Cloud SDK family provides a set of classes that represent the conversion options 



## Namespace

**Aspose.HTML.Cloud.Sdk.Conversion**



## Hierarchy of classes

- **ConversionOptions**
  - FixedLayoutConversionOptions
    - PDFConversionOptions
    - XPSConversionOptions
    - DOCConversionOptions
  - ImageConversionOptions
    - JPEGConversionOptions
    - PNGConversionOptions
    - BMPConversionOptions
    - GIFConversionOptions
    - TIFFConversionOptions
  - MHTMLConversionOptions
  - MarkdownConversionOptions








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



### DOCConversionOptions

```code
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


### MarkdownConversionOptions
```code
ConversionOptions mdOpts = new MarkdownConversionOptions()
    .SetUseGit(true);
```
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UseGit** | **Boolean**| Use [Git Markdown flavor](https://github.github.com/gfm/) to save. | [optional] [default to false]


### MHTMLConversionOptions
```code
ConversionOptions mhtmlOpts = new MHTMLConversionOptions();
```