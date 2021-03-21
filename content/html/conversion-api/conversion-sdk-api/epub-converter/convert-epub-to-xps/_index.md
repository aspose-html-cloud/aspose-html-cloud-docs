---
title: "Convert EPUB to XPS"
type: docs
keywords: "EPUB to XPS, EPUB conversion, EPUB file, asynchronous conversion, conversion SDK, convert EPUB to XPS, SDK, SDK examples, Python, Ruby, PHP, Java, .Net, C#, Android, Swift, Node.js"
description: "Article explains a usage of Aspose.HTML Cloud client SDKs to convert EPUB to XPS by a set of examples. SDKs are available in PHP, Python, Ruby, Android, Swift, C#, Java, C++, Node.js and more."
weight: 30
---

## **Summary**

Aspose.HTML Cloud v4.0 provides the simplest API to convert {{%EPUB%}} documents to {{%XPS%}} format with high quality, easy and fast. 

The EPUB format has gained popularity as an XML-based e-book format and designed to adapt the content's presentation to the reader device. It is implemented as an archive file consisting of XHTML files carrying the content, images and other supporting files. 

The article explains in a set of code examples how to convert an EPUB document to XPS using Aspose.HTML Cloud client SDKs. We will consider various scenarios of EPUB to XPS conversion: from storage to storage, from a local file system to the storage and from the storage to a local file system.

## **SDK Examples of EPUB to XPS Conversion**

A widespread use case for Aspose.HTML Cloud SDK functions is file processing and converting.  Cloud SDK allows you to fetch an EPUB document from a storage location by its name or a local file on your drive, convert it to a specified format and save it to the storage or a local drive. The following code examples demonstrate how to convert EPUB to XPS for different cases using available SDKs.

### **Example 1.**  Convert an EPUB file from the storage to XPS and save the result to the storage

The conversion process is following - a source document is loaded from the *default* cloud storage, and after conversion is completed, the result is saved to this storage. The default XPSConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: **FromStorageFile**(`filePath`), **To**(`ConversionOptions`) and **SaveToStorageDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result.

The following example demonstrates how to convert **EPUB to XPS C#** language applying. EPUB is taken from the cloud storage, converted to XPS and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
    // Create a ConverterBuilder instance - builder and specify builder's methods	
    ConverterBuilder builder = new ConverterBuilder()
        .FromStorageFile("/example.epub")
        .To(new XPSConversionOptions())
        .SaveToStorageDirectory("/TestResult/Epub");

    // Initialize SDK API in the builder style
	using (var api = new HtmlApi(cb => cb
         .WithClientId(ClientId)            // from user Сredentials
         .WithClientSecret(ClientSecret)))
    {
        // Convert EPUB to XPS
	    ConversionResult result = api.Convert(builder);

        if(result.Status == "success" && result.Files.Length > 0)
        {
            // Download file(s) by path result.Files 
        }        
    }
```

In the example above, the source "example.epub" file is taken in the default storage by its `filePath` and the converted file saved in the "Epub" storage folder.

{{% alert color="primary" %}} 
EPUB to XPS conversion occurs with the **default conversion options**: the resulting XPS document’s width and height correspond to A4 and all margins have zero value.

{{% /alert %}} 



### **Example 2.** Convert EPUB from the local file system to XPS with explicitly specified options and save it to the storage

The example below demonstrates how to convert an EPUB file from the local file system to XPS with explicitly specified options and save the result to the cloud storage.

 For conversion, we use methods of the **ConverterBuilder** class: **FromLocalFile**(`filePath`), **To**(`ConversionOptions`) and **SaveToStorageDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result. The **Convert**(`builder`) overloaded method applies the builder style setup of the conversion parameters using ConverterBuilder class.

The following SDK example demonstrates how to convert **EPUB to XPS C#** language applying. EPUB is taken from the local file system, converted to XPS and saved to the storage. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
    // Create an instance of ConversionOptions class and specify options for EPUB to XPS conversion	
	ConversionOptions XPSOpts = new xpsConversionOptions()
         .SetHeight(800)
         .SetWidth(1000)
         .SetLeftMargin(10)
         .SetRightMargin(10)
         .SetBottomMargin(10)
         .SetTopMargin(10)
         .SetResolution(300);

     // Create a ConverterBuilder instance - builder 
     ConverterBuilder builder = new ConverterBuilder()
         .FromLocalFile(@"Input\example.epub")
         .To(xpsOpts)
         .SaveToStorageDirectory("/TestResult/Epub/WithParams");
    	 
    // Initialize SDK API using the configuration builder
    using (var api = new HtmlApi(cb => cb
         .WithClientId(ClientId)              //from user Сredentials
         .WithClientSecret(ClientSecret)))
    {
        // Convert EPUB to XPS
        ConversionResult result = api.Convert(builder);
    
        if(result.Status == "success" && result.Files.Length > 0)
        {
            // Download file(s) by path result.Files 
        }    
    }
```

{{% alert color="primary" %}} 
More details about available conversion parameters for EPUB files are in the [SDK Conversion Options](/html/conversion-api/sdk-conversion-options/) section.

{{% /alert %}} 

### **Example 3.** Convert an EPUB file from the storage to XPS and save the result to the local file system

Aspose.HTML Cloud SDK allows you to get EPUB from the storage, convert it to another format and save it into the local file system. The example below demonstrates how to convert EPUB to XPS with the default conversion parameters.

The following example shows how to convert **EPUB to XPS C#** language applying. The EPUB file is taken from the storage, converted to XPS and saved to the local file system. You can download the C# SDK from the [GitHub repository](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

```c#
    // Create a ConverterBuilder instance - builder 
	ConverterBuilder builder = new ConverterBuilder()
        .FromStorageFile("/example.epub")
        .To(new XPSConversionOptions())
        .SaveToLocalDirectory(@"Output\Epub");

    // Initialize SDK API using the configuration builder
	using (var api = new HtmlApi(cb => cb
         .WithClientId(ClientId)              // from user Сredentials          
         .WithClientSecret(ClientSecret)))
    {
        // Convert EPUB to XPS
	    ConversionResult result = api.Convert(builder);

        if(result.Status == "success" && result.Files.Length > 0)
        {
            // Download file(s) by path result.Files 
        }        
    }
```

In the example, we use methods of the **ConverterBuilder** class: **FromStorageFile**(`filePath`), **To**(`ConversionOptions`) and **SaveToLocalDirectory**(`outputDirectory`) that specify input data, the output format, and the target directory for a conversion result. The source "example.epub" file is taken in the default storage by its `filePath` and the converted file saved in the "Epub"  folder in the local file system.

{{% alert color="primary" %}} 
Please see the [Conversion REST API](/html/conversion-api/conversion-rest-api/) article to learn how to convert an EPUB file to other formats using direct REST API calls.

{{% /alert %}} 