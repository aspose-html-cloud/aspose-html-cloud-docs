---
title: "Convert MHTML to XPS"
type: docs

keywords: "MHTML to XPS, MHTML conversion, MHTML file, asynchronous conversion, conversion SDK, convert MHTML to XPS, SDK, SDK examples, Python, Ruby, PHP, Java, .Net, C#, Android, Swift, Node.js"
description: "The article explains the usage of Aspose.HTML Cloud client SDKs to convert MHTML to XPS by a set of examples. SDKs are available in PHP, Python, Ruby, Android, Swift, C#, Java, C++, Node.js and more."
weight: 30

---

## **Summary**

Aspose.HTML Cloud v4.0 provides the simplest API to convert  {{%MHTML%}} documents to {{%XPS%}} format with high quality, easy and fast. 

The article explains in a set of code examples how to convert an MHTML document to XPS using Aspose.HTML Cloud client SDKs. We will consider various scenarios of MHTML to XPS conversion: from storage to storage, from a local file system to the storage and from the storage to a local file system.

## **SDK Examples of MHTML to XPS Conversion**

A widespread use case for Aspose.HTML Cloud SDK functions is file processing and converting.  Cloud SDK allows you to fetch an MHTML document from a storage location by its name or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert MHTML to XPS for different cases using available SDKs.

### **Example 1.**  Convert an MHTML file from a local file system to XPS and save the result to the local file system

The conversion process is following - a source document is loaded from the local file system, and after conversion is completed, the result is saved to this local file system. The default XPSConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: **FromLocalFile**(`filePath`), **To**(`ConversionOptions`) and **SaveToLocalDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result.

The following example demonstrates how to convert **MHTML to XPS C#** language applying. MHTML is taken from the local drive, converted to XPS and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
    // Create a ConverterBuilder instance - builder 	
    ConverterBuilder builder = new ConverterBuilder()
        .FromLocalFile(@"Input\example.mht")
        .To(new XPSConversionOptions())
        .SaveToLocalDirectory(@"Output\Mhtml");

    // Initialize SDK API in the builder style
	using (var api = new HtmlApi(cb => cb
         .WithClientId(ClientId)            // from user Сredentials
         .WithClientSecret(ClientSecret)))
    {
        // Convert MHTML to XPS
	    ConversionResult result = api.Convert(builder);

        if(result.Status == "success" && result.Files.Length > 0)
        {
            // Download file(s) by path result.Files 
        }        
    }
```

In the example above, the source "example.mht" file is taken in the local file system by its `filePath` and the converted file saved in the "Mhtml" local folder.

{{% alert color="primary" %}} 
MHTML to XPS conversion occurs with the **default conversion options**: the resulting XPS document’s width and height correspond to A4, all margins have zero value.

{{% /alert %}} 



### **Example 2.** Convert MHTML to XPS using ConvertLocalFile() method

The example below demonstrates how to convert MHTML to XPS with the default conversion options using **ConvertLocalFile()** method of the **Conversion** class. The **ConvertLocalFile()** method converts synchronously a file located in the local file system and specified by the `filePath`. This method takes as the parameters also the `options` and `outputPath` that specify an output format, and a path where the conversion result will be saved. The source “example.mht” file is in the local "Input" directory, and the conversion result will be held in the "ConvertLocal" folder on the local drive.

The following SDK example demonstrates how to convert **MHTML to XPS C#** language applying. MHTML is taken from the local file system, converted to XPS and saved to the local drive. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
    // Initialize SDK API in the builder style   
    using (var api = new HtmlApi(cb => cb
        .WithClientId(ClientId)            // from user Сredentials
        .WithClientSecret(ClientSecret)))
    {
        // Convert MHTML to XPS
	    Conversion.Conversion result = api.ConvertLocalFile(
            filePath: @"Input\example.mht",
            options: new XPSConversionOptions(),
            outputPath: new LocalDirectoryParameter(@"Output\Mhtml\ConvertLocal"));

        if(result.Status == "completed" && result.Files.Length > 0)
        {
            // Download file(s) by path result.Files 
        }
    }	
```

{{% alert color="primary" %}} 
More details about available conversion parameters are in the [SDK Conversion Options](/html/conversion-api/sdk-conversion-options/) section.

Please see the [Conversion REST API](/html/conversion-api/conversion-rest-api/) article to learn how to convert an MHTML file to other formats using direct REST API calls.

{{% /alert %}} 