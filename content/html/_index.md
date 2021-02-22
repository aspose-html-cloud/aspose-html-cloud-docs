---
title: Aspose.HTML Cloud
keywords: SDKs, REST API, Cloud REST API, cloud storage, Convert HTML, Convert
  XHTML, Convert MHTML, Convert EPUB, Convert Markdown, HTML to PDF, SDK
  examples
description: "Aspose.HTML Cloud provides two main points: the conversion between
  formats feature and the cloud storage access functionality. This article
  introduces you with Aspose.HTML Cloud v4.0 abilities to provide access to
  files and folders stored in the cloud storage;  presents a set of available
  conversions including HTML, XHTML, and MHTML, EPUB and Markdown converters."a
s SDKs on the various programming languages.
---

The main highlights of Aspose.HTML Cloud REST API v4.0  are the [conversion feature](/html/conversion-api/) and the [cloud storage access](/html/storage-api/) functionality.

{{% /alert %}} 

The REST API supports a set of converting between formats. You can take a source document from cloud storage or a local file system. The following conversions are available:

 - Convert {{%HTML%}} to different formats including {{%PDF%}}, {{%XPS%}}, {{%DOC%}}, {{%DOCX%}}, {{%JPEG%}}, {{%PNG%}}, {{%TIFF%}}, {{%BMP%}}, {{%GIF%}}, {{%Markdown%}}, and {{%MHTML%}}. 
 - Convert {{%XHTML%}} to different formats including {{%PDF%}}, {{%XPS%}}, {{%DOC%}}, {{%DOCX%}}, {{%JPEG%}}, {{%PNG%}}, {{%TIFF%}}, {{%BMP%}}, {{%GIF%}}, {{%Markdown%}}, and {{%MHTML%}}.
 - Convert {{%EPUB%}} to different formats including {{%PDF%}}, {{%XPS%}}, {{%DOC%}}, {{%DOCX%}}, {{%JPEG%}}, {{%PNG%}}, {{%TIFF%}}, {{%BMP%}}, and {{%GIF%}}.
 - Convert {{%MHTML%}} to different formats including {{%PDF%}}, {{%XPS%}}, {{%DOC%}}, {{%DOCX%}}, {{%JPEG%}}, {{%PNG%}}, {{%TIFF%}}, {{%BMP%}}, {{%GIF%}}, and {{%HTML%}}.

 - Convert {{%Markdown%}} to different formats including {{%PDF%}}, {{%XPS%}}, {{%DOC%}}, {{%DOCX%}}, {{%JPEG%}}, {{%PNG%}}, {{%TIFF%}}, {{%BMP%}}, and {{%GIF%}}.

{{% alert color="primary" %}}

To obtain information about converting between formats, please read the [Conversion API](/html/conversion-api/) section.

{{% /alert %}} 

**SDK example of HTML to PDF conversion**

Convert an HTML document fast and easy with our intuitive API just with a few lines of code. Let’s review the common usage scenario when HTML is stored at a local drive, and you want to convert it to PDF format and save to the storage.

```c#
// Create a ConverterBuilder instance 
ConverterBuilder builder = new ConverterBuilder()
    .FromLocalFile(@"Input\html_file.html")
    .To(new PDFConversionOptions())
    .SaveToStorageDirectory("/TestResult/Html");



// Initialize SDK API in the builder style
using (var api = new HtmlApi(cb => cb
    .WithClientId(ClientId)              // from user Сredentials
    .WithClientSecret(ClientSecret)))
{
    // Convert HTML to PDF
    ConversionResult result = api.Convert(builder);

    if(result.Status == "success" && result.Files != null && result.Files.Length > 0)
    {
        // Download file(s) by path result.Files 
    }
}
```

Also, our REST API provides capabilities to manipulate files that are stored in the cloud storage associated with user applications, such as:

- Upload and download files to/from the cloud storage.
- Check if a file or folder exists in the storage.
- Get a list of folders and files in the specified storage folder.
- Get a list of versions of the specified file (if the given storage supports file versioning).
- Copy, move and delete files and folders in the cloud storage.
- Check if named storage exists and is accessible to the user and get the storage total and used disc space.

{{% alert color="primary" %}}
For more details about the storage API features, see the [Storage API](https://docs.aspose.cloud/html/storage-api/) section.
{{% /alert %}} 

