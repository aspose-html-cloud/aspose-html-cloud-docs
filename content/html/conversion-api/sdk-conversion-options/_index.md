---
title: SDK Conversion Options
type: docs
weight: 80
aliases:
- /sdk-conversion-options/

---
## **Summary**

Aspose.HTML Cloud v4.0 presents the simplest API to convert an {{%HTML%}} page to one of the fixed-layout document formats including {{%PDF%}}, {{%XPS%}}, {{%DOC%}}, {{%DOCX%}}; to {{%MD%}} and {{%MHTML%}} formats; to one of the raster image formats such as {{%JPEG%}}, {{%PNG%}}, {{%TIFF%}}, {{%BMP%}}, and {{%GIF%}}.

Aspose.HTML Cloud SDK family provides a set of classes that represent the conversion options. Conversion options allow you to customize the conversion process. You can specify the file page size, margins, etc.  This article describes a set of classes that represent conversion options for PDF, XPS and Images.


## **PDF Conversion Options**

{{< tabs tabTotal="9" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android">}}

{{< tab tabNum="1" >}}

 ```c#
var options = new PDFConversionOptions()
    .SetHeight(80)
    .SetWidth(100)
    .SetLeftMargin(1)
    .SetRightMargin(1)
    .SetBottomMargin(1)
    .SetTopMargin(1);
 ```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Width** | **Number**| Resulting document page width in inches. | [optional] 
 **Height** | **Number**| Resulting document page height in inches. | [optional] 
 **LeftMargin** | **Number**| Left resulting document page margin in inches. | [optional] 
 **RightMargin** | **Number**| Right resulting document page margin in inches. | [optional] 
 **TopMargin** | **Number**| Top resulting document page margin in inches. | [optional] 
 **BottomMargin** | **Number**| Bottom resulting document page margin inches. | [optional] 

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


## **XPS Conversion Options**
{{< tabs tabTotal="9" tabID="2" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android">}}

{{< tab tabNum="1" >}}

 ```c#
var options = new XPSConversionOptions()
    .SetHeight(800)
    .SetWidth(1000)
    .SetLeftMargin(10)
    .SetRightMargin(10)
    .SetBottomMargin(10)
    .SetTopMargin(10);
 ```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Width** | **Number**| Resulting document page width in inches. | [optional] 
 **Height** | **Number**| Resulting document page height in inches. | [optional] 
 **LeftMargin** | **Number**| Left resulting document page margin in inches. | [optional] 
 **RightMargin** | **Number**| Right resulting document page margin in inches. | [optional] 
 **TopMargin** | **Number**| Top resulting document page margin in inches. | [optional] 
 **BottomMargin** | **Number**| Bottom resulting document page margin inches. | [optional] 

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
    .SetTopMargin(10)
    .SetResolution(300);
 ```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Width** | **Number**| Resulting document page width in pixels. | [optional] 
 **Height** | **Number**| Resulting document page height in pixels. | [optional] 
 **LeftMargin** | **Number**| Left resulting document page margin in pixels. | [optional] 
 **RightMargin** | **Number**| Right resulting document page margin in pixels. | [optional] 
 **TopMargin** | **Number**| Top resulting document page margin in pixels. | [optional] 
 **BottomMargin** | **Number**| Bottom resulting document page margin pixels. | [optional] 

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
