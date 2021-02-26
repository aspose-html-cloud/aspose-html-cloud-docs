---
title: "SDK Conversion Options"
type: docs
aliases: /sdk-conversion-options/
keywords: "html conversion, conversion options, convert html to pdf, convert html to xps, convert html to doc, convert html to image, convert html to jpeg, convert html to markdown, convert html to mhtml"
description: " Article explains HTML conversion to PDF using Aspose.HTML Cloud API. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 80
---
## **Summary**

Aspose.HTML Cloud v4.0 presents the simplest API to convert an {{%HTML%}} page to one of the fixed-layout document formats including {{%PDF%}}, {{%XPS%}}, {{%DOC%}}, {{%DOCX%}}; to {{%MD%}} and {{%MHTML%}} formats; to one of the raster image formats such as {{%JPEG%}}, {{%PNG%}}, {{%TIFF%}}, {{%BMP%}}, and {{%GIF%}}.

Aspose.HTML Cloud SDK family provides a set of classes that represent the conversion options. Conversion options allow you to customize the conversion process. You can specify the file page size, margins, compression level, etc. 



## **Namespace**

**Aspose.HTML.Cloud.Sdk.Conversion**



## **Hierarchy of classes**

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




### **PDFConversionOptions**
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

How to apply conversion options for HTML to PDF conversion is in SDK examples of the [Convert HTML to PDF](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-pdf/) article.

### **XPSConversionOptions**

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

How to apply conversion options for HTML to XPS conversion is in SDK examples of the [Convert HTML to XPS](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-xps/) article.

### **DOCConversionOptions**

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

How to apply conversion options for HTML to DOCX/DOC conversion is in SDK examples of the [Convert HTML to DOCX](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-docx/) article.

### **JPEGConversionOptions**

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

How to apply conversion options for HTML to JPEG conversion is in SDK examples of the [Convert HTML to JPEG](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-jpeg/) article.

### **PNGConversionOptions**

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

How to apply conversion options for HTML to PNG conversion is in SDK examples of the [Convert HTML to PNG](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-png/) article.

### **BMPConversionOptions**

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

How to apply conversion options for HTML to BMP conversion is in SDK examples of the [Convert HTML to BMP](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-bmp/) article.

### **GIFConversionOptions**

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

How to apply conversion options for HTML to GIF conversion is in SDK examples of the [Convert HTML to GIF](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-gif/) article.

### **TIFFConversionOptions**

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

How to apply conversion options for HTML to TIFF conversion is in SDK examples of the [Convert HTML to TIFF](/html/conversion-api/conversion-sdk-api/html-converter/convert-html-to-tiff/) article.

### **MarkdownConversionOptions**

```code
ConversionOptions mdOpts = new MarkdownConversionOptions()
    .SetUseGit(true);
```
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UseGit** | **Boolean**| Use [Git Markdown flavor](https://github.github.com/gfm/) to save. | [optional] [default to false]

### **MHTMLConversionOptions**

```code
ConversionOptions mhtmlOpts = new MHTMLConversionOptions();
```