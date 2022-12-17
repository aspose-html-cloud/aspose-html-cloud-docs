---
title: SDK Conversion Options
type: docs
weight: 80
aliases: /html-conversion-options/
keywords: conversion options, html conversion options, convert html
description: Learn how to apply conversion options to convert HTML to PDF, XPS and Image formats such as JPG, PNG, GIF, TIFF, and BMP with a set of SDK examples. 
url: /sdk-conversion-options/
lastmod: 2022-11-08
---

## **Summary**

Aspose.HTML Cloud v4.0 presents the simplest API to convert an {{%HTML%}} page to one of the fixed-layout document formats including {{%PDF%}}, {{%XPS%}}, {{%DOC%}}, {{%DOCX%}}; to {{%MD%}} and {{%MHTML%}} formats; to one of the raster image formats such as {{%JPEG%}}, {{%PNG%}}, {{%TIFF%}}, {{%BMP%}}, and {{%GIF%}}.

Aspose.HTML Cloud SDK family provides a set of classes that represent the conversion options. Conversion options allow you to customize the conversion process. You can specify the file page size, margins, etc. This article describes a set of classes that represent conversion options for PDF, XPS and Images.


## **PDF Conversion Options**

{{< tabs tabTotal="9" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android">}}

{{< tab tabNum="1" >}}

 ```c#
var options = new PDFConversionOptions()
    .SetHeight(11.7)
    .SetWidth(8.3)
    .SetLeftMargin(0.5)
    .SetRightMargin(0.5)
    .SetBottomMargin(0.5)
    .SetTopMargin(0.5);
 ```

| Name             | Type      | Description                                     | Notes      |
|------------------|-----------|-------------------------------------------------|------------|
| **Width**        | **Number**| Resulting document page width in inches.        | [optional] |
| **Height**       | **Number**| Resulting document page height in inches.       | [optional] |
| **LeftMargin**   | **Number**| Left resulting document page margin in inches.  | [optional] |
| **RightMargin**  | **Number**| Right resulting document page margin in inches. | [optional] |
| **TopMargin**    | **Number**| Top resulting document page margin in inches.   | [optional] |
| **BottomMargin** | **Number**| Bottom resulting document page margin inches.   | [optional] |

{{< /tab >}}

{{< tab tabNum="2" >}}

```java
PDFConversionOptions opt_A5 = new PDFConversionOptions()
    .setWidth(5.8)
    .setHeight(8.3)
    .setTopMargin(0.5)
    .setBottomMargin(0.5)
    .setLeftMargin(0.5)
    .setRightMargin(0.5)
    .setQuality(95);
```

| Name             | Type                    | Description                                      | Notes      |
|------------------|-------------------------|--------------------------------------------------|------------|
| **width**        | **Optional\<Double\>**  | Resulting document page width in inches.         | [optional] | 
| **height**       | **Optional\<Double\>**  | Resulting document page height in inches.        | [optional] |
| **leftMargin**   | **Optional\<Double\>**  | Left resulting document page margin in inches.   | [optional] |
| **rightMargin**  | **Optional\<Double\>**  | Right resulting document page margin in inches.  | [optional] |
| **topMargin**    | **Optional\<Double\>**  | Top resulting document page margin in inches.    | [optional] |
| **bottomMargin** | **Optional\<Double\>**  | Bottom resulting document page margin in inches. | [optional] |
| **jpegQuality**  | **Optional\<Integer\>** | Quality of jpeg compression in percent.          | [optional] |

{{< /tab >}}

{{< tab tabNum="3" >}}

```c++
    std::shared_ptr<ConversionOptions> opts = std::make_shared<ConversionOptions>();
    opts->setWidth(8.3)
        ->setHeight(11.7)
        ->setLeftMargin(0.2)
        ->setRightMargin(0.2)
        ->setTopMargin(0.2)
        ->setBottomMargin(0.2)
        ->setJpegQuality(95);
```

| Method                                                                            | Description              | Note       |
|-----------------------------------------------------------------------------------|--------------------------|------------|
| **ConversionOptions\* ConversionOptions::setWidth(double value)**                 | Width in inches.         | [optional] |
| **ConversionOptions\* ConversionOptions::setHeight(double value)**                | Height in inches.        | [optional] |
| **ConversionOptions\* ConversionOptions::setLeftMargin(double value)**            | Left margin in inches.   | [optional] |
| **ConversionOptions\* ConversionOptions::setRightMargin(double value)**           | Right margin in inches.  | [optional] |
| **ConversionOptions\* ConversionOptions::setTopMargin(double value)**             | Top margin in inches.    | [optional] |
| **ConversionOptions\* ConversionOptions::setBottomMargin(double value)**          | Bottom margin in inches. | [optional] |
| **ConversionOptions\* ConversionOptions::setJpegQuality(int value)**              | Quality in percent.      | [optional] |

{{< /tab >}}

{{< tab tabNum="4" >}}


```python
options = {
    'width': 8.3,
    'height': 11.7,
    'topmargin': 0.2,
    'bottommargin': 0.2,
    'leftmargin': 0.2,
    'rightmargin': 0.2,
    'jpegquality': 95
}
```

| Field            | Type  | Description                                                  | Note     |
|------------------|-------|--------------------------------------------------------------|----------|
| **width**        | float | Width in inches                                              | Optional |
| **height**       | float | Height in inches                                             | Optional |
| **leftmargin**   | float | Left margin in inches                                        | Optional |
| **rightmargin**  | float | Right margin in inches                                       | Optional |
| **topmargin**    | float | Top margin in inches                                         | Optional |
| **bottommargin** | float | Bottom margin in inches                                      | Optional |
| **jpegquality**  | int   | Quality in percent                                           | Optional |
| **background**   | str   | CSS background like '#FF0000'. For conversion from SVG only  | Optional |

{{< /tab >}}

{{< tab tabNum="5" >}}

```php
$options_a4 = [
    'width' => 8.3,
    'height' => 11.7,
    'left_margin' => 0.2,
    'right_margin' => 0.2,
    'top_margin' => 0.2,
    'bottom_margin' => 0.2
];
```

| Field             | Type  | Description                                                  | Note     |
|-------------------|-------|--------------------------------------------------------------|----------|
| **width**         | float | Width in inches                                              | Optional |
| **height**        | float | Height in inches                                             | Optional |
| **left_margin**   | float | Left margin in inches                                        | Optional |
| **right_margin**  | float | Right margin in inches                                       | Optional |
| **top_margin**    | float | Top margin in inches                                         | Optional |
| **bottom_margin** | float | Bottom margin in inches                                      | Optional |
| **jpeg_quality**  | int   | Quality in percent                                           | Optional |
| **background**    | str   | CSS background like '#FF0000'. For conversion from SVG only  | Optional |

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby
opts = { 
  width: 8.3,
  height: 11.7,
  left_margin: 0.2,
  right_margin: 0.2,
  top_margin: 0.2,
  bottom_margin: 0.2
}
```

| Field             | Type    | Description                                                 | Note     |
|-------------------|---------|-------------------------------------------------------------|----------|
| **width**         | Float   | Width in inches                                             | Optional |
| **height**        | Float   | Height in inches                                            | Optional |
| **left_margin**   | Float   | Left margin in inches                                       | Optional |
| **right_margin**  | Float   | Right margin in inches                                      | Optional |
| **top_margin**    | Float   | Top margin in inches                                        | Optional |
| **bottom_margin** | Float   | Bottom margin in inches                                     | Optional |
| **jpeg_quality**  | Integer | Quality in percent                                          | Optional |
| **background**    | String  | CSS background like '#FF0000'. For conversion from SVG only | Optional |

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript
var opts_A4 = {
    'width': 8.3,
    'height': 11.7,
    'leftMargin': 0.2,
    'rightMargin': 0.2,
    'topMargin': 0.2,
    'bottomMargin': 0.2,
    'jpegquality': 95
};
```

| Field            | Type   | Description                                                 | Note     |
|------------------|--------|-------------------------------------------------------------|----------|
| **width**        | Number | Width in inches                                             | Optional |
| **height**       | Number | Height in inches                                            | Optional |
| **leftmargin**   | Number | Left margin in inches                                       | Optional |
| **rightmargin**  | Number | Right margin in inches                                      | Optional |
| **topmargin**    | Number | Top margin in inches                                        | Optional |
| **bottommargin** | Number | Bottom margin in inches                                     | Optional |
| **jpegquality**  | Number | Quality in percent                                          | Optional |
| **background**   | String | CSS background like '#FF0000'. For conversion from SVG only | Optional |

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift
let options = Options(width: 8.3, height: 11.7, leftMargin: 0.2,
        rightMargin: 0.2, topMargin: 0.2, bottomMargin: 0.2)
```

| Name                | Type         | Description                                                                                                                     | Notes      |
|---------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------|------------|
| **width**           | **Float32?** | Resulting width in pixels for images and in inches for PDF, XPS, DOCX formats.                                                  | [optional] |
| **height**          | **Float32?** | Resulting height in pixels for images and in inches for PDF, XPS, DOCX formats.                                                 | [optional] |
| **leftMargin**      | **Float32?** | Left margin in pixels for images and in inches for PDF, XPS, DOCX formats.                                                      | [optional] |
| **rightMargin**     | **Float32?** | Right margin in pixels for images and in inches for PDF, XPS, DOCX formats.                                                     | [optional] |
| **topMargin**       | **Float32?** | Top margin in pixels for images and in inches for PDF, XPS, DOCX formats.                                                       | [optional] |
| **bottomMargin**    | **Float32?** | Bottom margin in pixels for images and in inches for PDF, XPS, DOCX formats.                                                    | [optional] |
| **jpegquality**     | **Int32?**   | JPEG quality images in percent for PDF output format.                                                                           | [optional] |
| **background**      | **String?**  | CSS background like '#FF0000'. For conversion from SVG only.                                                                    | [optional] |


{{< /tab >}}

{{< tab tabNum="9" >}}

```java
PDFConversionOptions opt_A5 = new PDFConversionOptions()
    .setWidth(5.8)
    .setHeight(8.3)
    .setTopMargin(0.5)
    .setBottomMargin(0.5)
    .setLeftMargin(0.5)
    .setRightMargin(0.5)
    .setQuality(95);
```

| Name             | Type                    | Description                                      | Notes      |
|------------------|-------------------------|--------------------------------------------------|------------|
| **width**        | **Optional\<Double\>**  | Resulting document page width in inches.         | [optional] | 
| **height**       | **Optional\<Double\>**  | Resulting document page height in inches.        | [optional] |
| **leftMargin**   | **Optional\<Double\>**  | Left resulting document page margin in inches.   | [optional] |
| **rightMargin**  | **Optional\<Double\>**  | Right resulting document page margin in inches.  | [optional] |
| **topMargin**    | **Optional\<Double\>**  | Top resulting document page margin in inches.    | [optional] |
| **bottomMargin** | **Optional\<Double\>**  | Bottom resulting document page margin in inches. | [optional] |
| **jpegQuality**  | **Optional\<Integer\>** | Quality of jpeg compression in percent.          | [optional] |

{{< /tab >}}

{{< /tabs >}}	

How to apply conversion options for converting HTML to PDF is described in the SDK samples in [Convert HTML to PDF](/html/convert-html-to-pdf/).

## **XPS Conversion Options**
{{< tabs tabTotal="9" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android">}}

{{< tab tabNum="1" >}}

 ```c#
var options = new XPSConversionOptions()
    .SetHeight(8.3)
    .SetWidth(5.8)
    .SetLeftMargin(0.5)
    .SetRightMargin(0.5)
    .SetBottomMargin(0.5)
    .SetTopMargin(0.5);
 ```

| Name             | Type       | Description                                     | Notes      |
|------------------|------------|-------------------------------------------------| -----------|
| **Width**        | **Number** | Resulting document page width in inches.        | [optional] |
| **Height**       | **Number** | Resulting document page height in inches.       | [optional] |
| **LeftMargin**   | **Number** | Left resulting document page margin in inches.  | [optional] |
| **RightMargin**  | **Number** | Right resulting document page margin in inches. | [optional] |
| **TopMargin**    | **Number** | Top resulting document page margin in inches.   | [optional] |
| **BottomMargin** | **Number** | Bottom resulting document page margin inches.   | [optional] |

{{< /tab >}}

{{< tab tabNum="2" >}}

```java
XPSConversionOptions xpsOpts_A5 = new XPSConversionOptions()
    .setHeight(8.3)
    .setWidth(5.8)
    .setLeftMargin(0.5)
    .setRightMargin(0.5)
    .setBottomMargin(0.5)
    .setTopMargin(0.5);
```

| Name             | Type                   | Description                                      | Notes      |
|------------------|------------------------|--------------------------------------------------|------------|
| **width**        | **Optional\<Double\>** | Resulting document page width in inches.         | [optional] |
| **height**       | **Optional\<Double\>** | Resulting document page height in inches.        | [optional] |
| **leftMargin**   | **Optional\<Double\>** | Left resulting document page margin in inches.   | [optional] |
| **rightMargin**  | **Optional\<Double\>** | Right resulting document page margin in inches.  | [optional] |
| **topMargin**    | **Optional\<Double\>** | Top resulting document page margin in inches.    | [optional] |
| **bottomMargin** | **Optional\<Double\>** | Bottom resulting document page margin in inches. | [optional] |


{{< /tab >}}

{{< tab tabNum="3" >}}

```c++
    std::shared_ptr<ConversionOptions> opts = std::make_shared<ConversionOptions>();
    opts->setWidth(8.3)
        ->setHeight(11.7)
        ->setLeftMargin(0.2)
        ->setRightMargin(0.2)
        ->setTopMargin(0.2)
        ->setBottomMargin(0.2);
```

| Method                                                                            | Description              | Note       |
|-----------------------------------------------------------------------------------|--------------------------|------------|
| **ConversionOptions\* ConversionOptions::setWidth(double value)**                 | Width in inches.         | [optional] |
| **ConversionOptions\* ConversionOptions::setHeight(double value)**                | Height in inches.        | [optional] |
| **ConversionOptions\* ConversionOptions::setLeftMargin(double value)**            | Left margin in inches.   | [optional] |
| **ConversionOptions\* ConversionOptions::setRightMargin(double value)**           | Right margin in inches.  | [optional] |
| **ConversionOptions\* ConversionOptions::setTopMargin(double value)**             | Top margin in inches.    | [optional] |
| **ConversionOptions\* ConversionOptions::setBottomMargin(double value)**          | Bottom margin in inches. | [optional] |



{{< /tab >}}

{{< tab tabNum="4" >}}

```python
options = {
    'width': 8.3,
    'height': 11.7,
    'topmargin': 0.2,
    'bottommargin': 0.2,
    'leftmargin': 0.2,
    'rightmargin': 0.2
}
```

| Field            | Type  | Description                                                  | Note     |
|------------------|-------|--------------------------------------------------------------|----------|
| **width**        | float | Width in inches                                              | Optional |
| **height**       | float | Height in inches                                             | Optional |
| **leftmargin**   | float | Left margin in inches                                        | Optional |
| **rightmargin**  | float | Right margin in inches                                       | Optional |
| **topmargin**    | float | Top margin in inches                                         | Optional |
| **bottommargin** | float | Bottom margin in inches                                      | Optional |

{{< /tab >}}

{{< tab tabNum="5" >}}

```php
$options_a4 = [
    'width' => 8.3,
    'height' => 11.7,
    'left_margin' => 0.2,
    'right_margin' => 0.2,
    'top_margin' => 0.2,
    'bottom_margin' => 0.2
];
```

| Field             | Type  | Description                                                  | Note     |
|-------------------|-------|--------------------------------------------------------------|----------|
| **width**         | float | Width in inches                                              | Optional |
| **height**        | float | Height in inches                                             | Optional |
| **left_margin**   | float | Left margin in inches                                        | Optional |
| **right_margin**  | float | Right margin in inches                                       | Optional |
| **top_margin**    | float | Top margin in inches                                         | Optional |
| **bottom_margin** | float | Bottom margin in inches                                      | Optional |

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby
opts = { 
  width: 8.3,
  height: 11.7,
  left_margin: 0.2,
  right_margin: 0.2,
  top_margin: 0.2,
  bottom_margin: 0.2
}
```

| Field             | Type    | Description                                                 | Note     |
|-------------------|---------|-------------------------------------------------------------|----------|
| **width**         | Float   | Width in inches                                             | Optional |
| **height**        | Float   | Height in inches                                            | Optional |
| **left_margin**   | Float   | Left margin in inches                                       | Optional |
| **right_margin**  | Float   | Right margin in inches                                      | Optional |
| **top_margin**    | Float   | Top margin in inches                                        | Optional |
| **bottom_margin** | Float   | Bottom margin in inches                                     | Optional |

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript
var opts_A4 = {
    'width': 8.3,
    'height': 11.7,
    'leftMargin': 0.2,
    'rightMargin': 0.2,
    'topMargin': 0.2,
    'bottomMargin': 0.2
};
```

| Field            | Type   | Description                                                 | Note     |
|------------------|--------|-------------------------------------------------------------|----------|
| **width**        | Number | Width in inches                                             | Optional |
| **height**       | Number | Height in inches                                            | Optional |
| **leftmargin**   | Number | Left margin in inches                                       | Optional |
| **rightmargin**  | Number | Right margin in inches                                      | Optional |
| **topmargin**    | Number | Top margin in inches                                        | Optional |
| **bottommargin** | Number | Bottom margin in inches                                     | Optional |

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift
let options = Options(width: 8.3, height: 11.7, leftMargin: 0.2,
        rightMargin: 0.2, topMargin: 0.2, bottomMargin: 0.2)
```

| Name                | Type         | Description                                                                                                                     | Notes      |
|---------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------|------------|
| **width**           | **Float32?** | Resulting width in pixels for images and in inches for PDF, XPS, DOCX formats.                                                  | [optional] |
| **height**          | **Float32?** | Resulting height in pixels for images and in inches for PDF, XPS, DOCX formats.                                                 | [optional] |
| **leftMargin**      | **Float32?** | Left margin in pixels for images and in inches for PDF, XPS, DOCX formats.                                                      | [optional] |
| **rightMargin**     | **Float32?** | Right margin in pixels for images and in inches for PDF, XPS, DOCX formats.                                                     | [optional] |
| **topMargin**       | **Float32?** | Top margin in pixels for images and in inches for PDF, XPS, DOCX formats.                                                       | [optional] |
| **bottomMargin**    | **Float32?** | Bottom margin in pixels for images and in inches for PDF, XPS, DOCX formats.                                                    | [optional] |

{{< /tab >}}

{{< tab tabNum="9" >}}

```java
XPSConversionOptions xpsOpts_A5 = new XPSConversionOptions()
    .setHeight(8.3)
    .setWidth(5.8)
    .setLeftMargin(0.5)
    .setRightMargin(0.5)
    .setBottomMargin(0.5)
    .setTopMargin(0.5);
```

| Name             | Type                   | Description                                      | Notes      |
|------------------|------------------------|--------------------------------------------------|------------|
| **width**        | **Optional\<Double\>** | Resulting document page width in inches.         | [optional] |
| **height**       | **Optional\<Double\>** | Resulting document page height in inches.        | [optional] |
| **leftMargin**   | **Optional\<Double\>** | Left resulting document page margin in inches.   | [optional] |
| **rightMargin**  | **Optional\<Double\>** | Right resulting document page margin in inches.  | [optional] |
| **topMargin**    | **Optional\<Double\>** | Top resulting document page margin in inches.    | [optional] |
| **bottomMargin** | **Optional\<Double\>** | Bottom resulting document page margin in inches. | [optional] |

{{< /tab >}}

{{< /tabs >}}	

How to apply conversion options for converting HTML to XPS is described in the SDK samples in [Convert HTML to XPS](/html/convert-html-to-xps/).

## **Image Conversion Options**
{{< tabs tabTotal="9" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android">}}

{{< tab tabNum="1" >}}

 ```c#
var options = new ImageConversionOptions()
    .SetHeight(800)
    .SetWidth(1000)
    .SetLeftMargin(10)
    .SetRightMargin(10)
    .SetBottomMargin(10)
    .SetTopMargin(10);
 ```

| Name             | Type       | Description                                     | Notes      |
|------------------|------------|-------------------------------------------------|------------|
| **Width**        | **Number** | Resulting document page width in pixels.        | [optional] |
| **Height**       | **Number** | Resulting document page height in pixels.       | [optional] |
| **LeftMargin**   | **Number** | Left resulting document page margin in pixels.  | [optional] |
| **RightMargin**  | **Number** | Right resulting document page margin in pixels. | [optional] |
| **TopMargin**    | **Number** | Top resulting document page margin in pixels.   | [optional] |
| **BottomMargin** | **Number** | Bottom resulting document page margin pixels.   | [optional] |


{{< /tab >}}

{{< tab tabNum="2" >}}

```java
ImageConversionOptions opts = new ImageConversionOptions()
    .setHeight(800)
    .setWidth(1000)
    .setLeftMargin(10)
    .setRightMargin(10)
    .setBottomMargin(10)
    .setTopMargin(10);
```

| Name             | Type                    | Description                                           | Notes      |
|------------------|-------------------------|-------------------------------------------------------|------------|
| **width**        | **Optional\<Integer\>** | Resulting document page width in pixels.              | [optional] | 
| **height**       | **Optional\<Integer\>** | Resulting document page height in pixels.             | [optional] |
| **leftMargin**   | **Optional\<Integer\>** | Left resulting document page margin in pixels.        | [optional] |
| **rightMargin**  | **Optional\<Integer\>** | Right resulting document page margin in pixels.       | [optional] |
| **topMargin**    | **Optional\<Integer\>** | Top resulting document page margin in pixels.         | [optional] |
| **bottomMargin** | **Optional\<Integer\>** | Bottom resulting document page margin in pixels.      | [optional] |


{{< /tab >}}

{{< tab tabNum="3" >}}

```c++
    std::shared_ptr<ConversionOptions> opts = std::make_shared<ConversionOptions>();
    opts->setWidth(800)
        ->setHeight(600)
        ->setLeftMargin(20)
        ->setRightMargin(20)
        ->setTopMargin(20)
        ->setBottomMargin(20);
```

| Method                                                                            | Description              | Note       |
|-----------------------------------------------------------------------------------|--------------------------|------------|
| **ConversionOptions\* ConversionOptions::setWidth(double value)**                 | Width in pixels.         | [optional] |
| **ConversionOptions\* ConversionOptions::setHeight(double value)**                | Height in pixels.        | [optional] |
| **ConversionOptions\* ConversionOptions::setLeftMargin(double value)**            | Left margin in pixels.   | [optional] |
| **ConversionOptions\* ConversionOptions::setRightMargin(double value)**           | Right margin in pixels.  | [optional] |
| **ConversionOptions\* ConversionOptions::setTopMargin(double value)**             | Top margin in pixels.    | [optional] |
| **ConversionOptions\* ConversionOptions::setBottomMargin(double value)**          | Bottom margin in pixels. | [optional] |


{{< /tab >}}

{{< tab tabNum="4" >}}


```python
options = {
    'width': 600,
    'height': 900,
    'topmargin': 20,
    'bottommargin': 20,
    'leftmargin': 20,
    'rightmargin': 20,
    'jpegquality': 95
}
```

| Field            | Type | Description                                                 | Note     |
|------------------|------|-------------------------------------------------------------|----------|
| **width**        | int  | Width in pixel                                              | Optional |
| **height**       | int  | Height in pixel                                             | Optional |
| **leftmargin**   | int  | Left margin in pixel                                        | Optional |
| **rightmargin**  | int  | Right margin in pixel                                       | Optional |
| **topmargin**    | int  | Top margin in pixel                                         | Optional |
| **bottommargin** | int  | Bottom margin in pixel                                      | Optional |
| **background**   | str  | CSS background like '#FF0000'. For conversion from SVG only | Optional |


{{< /tab >}}

{{< tab tabNum="5" >}}

```php
$options = [
    'width' => 800,
    'height' => 600,
    'left_margin' => 20,
    'right_margin' => 20,
    'top_margin' => 20,
    'bottom_margin' => 20
];
```

| Field             | Type | Description                                                 | Note     |
|-------------------|------|-------------------------------------------------------------|----------|
| **width**         | int  | Width in pixel                                              | Optional |
| **height**        | int  | Height in pixel                                             | Optional |
| **left_margin**   | int  | Left margin in pixel                                        | Optional |
| **right_margin**  | int  | Right margin in pixel                                       | Optional |
| **top_margin**    | int  | Top margin in pixel                                         | Optional |
| **bottom_margin** | int  | Bottom margin in pixel                                      | Optional |
| **background**    | str  | CSS background like '#FF0000'. For conversion from SVG only | Optional |

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby
opts = { 
  width: 700,
  height: 1000,
  left_margin: 40,
  right_margin: 40,
  top_margin: 50,
  bottom_margin: 50
}
```

| Field             | Type    | Description                                                 | Note     |
|-------------------|---------|-------------------------------------------------------------|----------|
| **width**         | Integer | Width in pixel                                              | Optional |
| **height**        | Integer | Height in pixel                                             | Optional |
| **left_margin**   | Integer | Left margin in pixel                                        | Optional |
| **right_margin**  | Integer | Right margin in pixel                                       | Optional |
| **top_margin**    | Integer | Top margin in pixel                                         | Optional |
| **bottom_margin** | Integer | Bottom margin in pixel                                      | Optional |
| **background**    | String  | CSS background like '#FF0000'. For conversion from SVG only | Optional |

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript
var opts = {
    'width': 600,
    'height': 800,
    'leftMargin': 10,
    'rightMargin': 20,
    'topMargin': 30,
    'bottomMargin': 40
};
```

| Field            | Type   | Description                                                 | Note     |
|------------------|--------|-------------------------------------------------------------|----------|
| **width**        | Number | Width in pixel                                              | Optional |
| **height**       | Number | Height in pixel                                             | Optional |
| **leftmargin**   | Number | Left margin in pixel                                        | Optional |
| **rightmargin**  | Number | Right margin in pixel                                       | Optional |
| **topmargin**    | Number | Top margin in pixel                                         | Optional |
| **bottommargin** | Number | Bottom margin in pixel                                      | Optional |
| **background**   | String | CSS background like '#FF0000'. For conversion from SVG only | Optional |

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift
let options = Options(width: 800, height: 1200, leftMargin: 20,
        rightMargin: 20, topMargin: 20, bottomMargin: 20)
```

| Name                | Type         | Description                                                                                                                     | Notes      |
|---------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------|------------|
| **width**           | **Float32?** | Resulting width in pixels for images and in inches for PDF, XPS, DOCX formats.                                                  | [optional] |
| **height**          | **Float32?** | Resulting height in pixels for images and in inches for PDF, XPS, DOCX formats.                                                 | [optional] |
| **leftMargin**      | **Float32?** | Left margin in pixels for images and in inches for PDF, XPS, DOCX formats.                                                      | [optional] |
| **rightMargin**     | **Float32?** | Right margin in pixels for images and in inches for PDF, XPS, DOCX formats.                                                     | [optional] |
| **topMargin**       | **Float32?** | Top margin in pixels for images and in inches for PDF, XPS, DOCX formats.                                                       | [optional] |
| **bottomMargin**    | **Float32?** | Bottom margin in pixels for images and in inches for PDF, XPS, DOCX formats.                                                    | [optional] |
| **background**      | **String?**  | CSS background like '#FF0000'. For conversion from SVG only.                                                                    | [optional] |

{{< /tab >}}

{{< tab tabNum="9" >}}

```java
ImageConversionOptions opts = new ImageConversionOptions()
    .setHeight(800)
    .setWidth(1000)
    .setLeftMargin(10)
    .setRightMargin(10)
    .setBottomMargin(10)
    .setTopMargin(10);
```

| Name             | Type                    | Description                                           | Notes      |
|------------------|-------------------------|-------------------------------------------------------|------------|
| **width**        | **Optional\<Integer\>** | Resulting document page width in pixels.              | [optional] | 
| **height**       | **Optional\<Integer\>** | Resulting document page height in pixels.             | [optional] |
| **leftMargin**   | **Optional\<Integer\>** | Left resulting document page margin in pixels.        | [optional] |
| **rightMargin**  | **Optional\<Integer\>** | Right resulting document page margin in pixels.       | [optional] |
| **topMargin**    | **Optional\<Integer\>** | Top resulting document page margin in pixels.         | [optional] |
| **bottomMargin** | **Optional\<Integer\>** | Bottom resulting document page margin in pixels.      | [optional] |

{{< /tab >}}

{{< /tabs >}}	

How to apply conversion options for converting HTML to Images is described in the SDK samples in [Convert HTML to Image](/html/convert-html-to-image/).