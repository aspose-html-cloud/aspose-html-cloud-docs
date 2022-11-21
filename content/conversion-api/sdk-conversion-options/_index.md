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
ConversionOptions opt_A5 = new PDFConversionOptions()
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
ConversionOptions opt_A5 = new PDFConversionOptions()
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
ConversionOptions xpsOpts_A5 = new XPSConversionOptions()
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
ConversionOptions xpsOpts_A5 = new XPSConversionOptions()
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
ConversionOptions opts = new ImageConversionOptions()
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
ConversionOptions opts = new ImageConversionOptions()
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