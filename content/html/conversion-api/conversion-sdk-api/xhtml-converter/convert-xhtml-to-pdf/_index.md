---
title: Convert XHTML to PDF
keywords: XHTML, PDF, XHTML to PDF, XHTML conversion, XHTML file, asynchronous conversion,
  conversion SDK, convert XHTML to PDF, SDK, SDK examples, Python, Ruby, PHP,
  Java, .Net, C#, Android, Swift, Node.js
description: The article explains the usage of Aspose.HTML Cloud client SDKs to
  convert XHTML to PDF by a set of examples. SDKs are available in PHP, Python,
  Ruby, Android, Swift, C#, Java, C++, Node.js and more.
weight: 10
type: docs
---

## **Summary**

Aspose.HTML Cloud v4.0 provides the simplest API to convert  {{%XHTML%}} documents to {{%PDF%}} format with high quality, easy and fast. 

The article explains in a set of code examples how to convert an XHTML document to PDF using Aspose.HTML Cloud client SDKs. We will consider various scenarios of XHTML to PDF conversion: from storage to storage, from a local file system to the storage and from the storage to a local file system.

## **SDK Examples of XHTML to PDF Conversion**

A widespread use case for Aspose.HTML Cloud SDK functions is file processing and converting.  Cloud SDK allows you to fetch an XHTML document from a storage location by its name or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert XHTML to PDF for different cases using available SDKs.

### **Example 1.**  Convert an XHTML file from a local file system to PDF and save the result to the local file system

The conversion process is following - a source document is loaded from the local file system, and after conversion is completed, the result is saved to this local file system. The default PDFConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: **FromLocalFile**(`filePath`), **To**(`ConversionOptions`) and **SaveToLocalDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result.

The following example demonstrates how to convert **XHTML to PDF C#** language applying. XHTML is taken from the local drive, converted to PDF and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
    // Create a ConverterBuilder instance - builder 	
    ConverterBuilder builder = new ConverterBuilder()
        .FromLocalFile(@"Input\example.mht")
        .To(new PDFConversionOptions())
        .SaveToLocalDirectory(@"Output\XHTML");

    // Initialize SDK API in the builder style
	using (var api = new HtmlApi(cb => cb
         .WithClientId(ClientId)            // from user Сredentials
         .WithClientSecret(ClientSecret)))
    {
        // Convert XHTML to PDF
	    ConversionResult result = api.Convert(builder);

        if(result.Status == "success" && result.Files.Length > 0)
        {
            // Download file(s) by path result.Files 
        }        
    }
```

In the example above, the source "example.mht" file is taken in the local file system by its `filePath` and the converted file saved in the "XHTML" local folder.

{{% alert color="primary" %}}
XHTML to PDF conversion occurs with the default conversion options: the resulting PDF document’s width and height correspond to A4, all margins have zero value, and the Quality of jpeg compression is 95%.

{{% /alert %}} 



### **Example 2.** Convert XHTML to PDF using ConvertLocalFile() method

The example below demonstrates how to convert XHTML to PDF with the default conversion options using **ConvertLocalFile()** method of the **Conversion** class. The **ConvertLocalFile()** method converts synchronously a file located in the local file system and specified by the `filePath`. This method takes as the parameters also the `options` and `outputPath` that specify an output format and a path where the conversion result will be saved. The source “example.mht”  file is in the local  "Input" directory, and the conversion result will be held in the "ConvertLocal" folder on the local drive.

The following SDK example demonstrates how to convert **XHTML to PDF C#** language applying. XHTML is taken from the local file system, converted to PDF and saved to the local drive. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
    // Initialize SDK API in the builder style   
    using (var api = new HtmlApi(cb => cb
        .WithClientId(ClientId)            // from user Сredentials
        .WithClientSecret(ClientSecret)))
    {
        // Convert XHTML to PDF
	    Conversion.Conversion result = api.ConvertLocalFile(
            filePath: @"Input\example.mht",
            options: new PDFConversionOptions(),
            outputPath: new LocalDirectoryParameter(@"Output\XHTML\ConvertLocal"));

        if(result.Status == "completed" && result.Files.Length > 0)
        {
            // Download file(s) by path result.Files 
        }
    }	
```

{{% alert color="primary" %}} 
More details about available conversion parameters are in the [SDK Conversion Options](/html/conversion-api/sdk-conversion-options/) section.

Please see the [Conversion REST API](/html/conversion-api/conversion-rest-api/) article to learn how to convert an XHTML file to other formats using direct REST API calls.

{{% /alert %}} 