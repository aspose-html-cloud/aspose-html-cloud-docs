---
title: "HTML to image conversion"
type: docs
url: /html-conversion-to_image/
keywords: "html conversion, asynchronous conversion, CQRS, convert html to jpeg, convert html to png, convert html to tiff, python, java , .net,  c#,  android, swift ,Perl, Node.js"
description: "Article explains HTML conversion to image formats using Aspose.HTML Cloud API. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 40
---

### Summary

Aspose.HTML Cloud SDK for .NET produces a few quick and easy ways to convert HTML files to various image formats: by direct REST API calls or using SDKs. There are multiple image formats accessible for converting HTML documents with Aspose.HTML Cloud APIs - [JPEG](https://docs.fileformat.com/image/jpeg/), [PNG](https://docs.fileformat.com/image/png/), [BMP](https://docs.fileformat.com/image/bmp/), [GIF](https://docs.fileformat.com/image/gif/), and [TIFF](https://docs.fileformat.com/image/tiff/).

### **cURL Example**

A cURL is one of the essential tools applied to receive or send data to a server and has a wide range of features. You can use cURL command-line instrument to access Aspose.HTML Cloud web services easily.

This example demonstrates how to convert HTML file located in the default cloud storage to an image format (JPEG in this example) with default parameters using the cURL utility (in the console, or using the system shell script - .bat file or PowerShell script in Windows, bash script in Linux etc.).

#### Step 1: Get JWT token for the user authentication  

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

The `curl --data` command posts data about client credentials to the server.  Put your Aspose application credentials (App SID and App Key) as values of `client_id` and `client_secret` parameters respectively and use the POST method:

```
curl --data "grant_type=client_credentials&client_id=xxxxxxxxxxxx&client_secret=xxxxxxxxxxxxxxx" -X POST -v "https://api.aspose.cloud/connect/token"
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example is the response of the token request. It contains a JWT token in the `access_token` field; this token should be used in subsequent API calls as a value of *Authorization* HTTP header (see steps below).  

```
{"access_token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDY5OTk4OTUsImV4cCI6MTYwNzA4NjI5NSwiaXNzIjoiaHR0cHM6Ly9hcGktcWEuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLXFhLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6Imh0bWwuY2xvdWQiLCJjbGllbnRfdXNhZ2UiOiJwb3N0IiwiY2xpZW50X3N0b3JhZ2UiOiJnZXQiLCJjbGllbnRfcmVzdHJpY3Rpb25zIjoiZ2V0IiwiY2xpZW50X2RlZmF1bHRfc3RvcmFnZSI6ImJiZDg3NTAxLTM5ZDgtNDQ1Yi05ZDIzLTlkYmNhYWJiMTFhOCIsImNsaWVudF9pZGVudGl0eV91c2VyX2lkIjoiMTg5MjA5Iiwic2NvcGUiOlsiYXBpLmJpbGxpbmciLCJhcGkuaWRlbnRpdHkiLCJhcGkucHJvZHVjdHMiLCJhcGkuc3RvcmFnZSJdfQ.dHeWTkSTzgqGCucoG1ef9dXFk_GoDMyL8tsba1pG5tkaXj6smp_KM2Ty52II-ejoVgEXwDhNMKaYET-YxO3up9gaojvrj-41gSPHn3AhjX40rQ2Ny3ziUGOauQT64k_VpThjAqs0qkS8bF9tA85hQBJsiizLsRyuATfLCWuZUX3KT0o9PnfNULqEEc7JG_dMqOBrcJc4TTUd8jzP2XjrU412LZlfWiloZouzrxvu0bpwnlwAF8XnMUuFahhzbWUeThCgZxWNjMw2_pGYvB2vzCknV1WZrDN4RULT30T6fAT0VmTYc_GGWNuQEn8xba8CztLmWmtSrNlT5qoVnzyv0g","expires_in":86400,"token_type":"Bearer"}
```

{{< /tab >}}

{{< /tabs >}}



#### Step 2: Initialize an asynchronous conversion process using the POST method

{{< tabs tabTotal="2" tabID="2" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

The `curl -X POST` command specifies a request method to use when communicating with the HTTP server. 

Replace <_JWT_token_> with  `access_token` field value obtained in the Step 1.

```
curl -X POST  -v "https://api.aspose.cloud/v4.0/html/conversion?inputFormat=jpeg&inputPath=storage:///myfolder/testpage.html&outputPath=storage:///myfolder/converted/testpage.jpg" -d "{}" -H "Content-Type: application/json" -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< tab tabNum="2" >}}

 The POST method response contains an ID of just started conversion operation and a relative URL to call to get its status. 

```
{ "code":200,
	"id":"CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660",
	"status":"pending",
	"links": {"self":"/v4.0/html/conversion/CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660" }
}
```

{{< /tab >}}

{{< /tabs >}}



#### Step 3: Check the previously started conversion process status using the GET method

{{< tabs tabTotal="3" tabID="3" tabName1="Request" tabName2="Response - running" tabName3="Response - completed" >}}

{{< tab tabNum="1" >}}

Replace <_JWT_token_> with  `access_token` field value obtained in the Step 1.

Replace  <_ID_> with `id` field value obtained in the Step 2.

Repeat calling the command below until the response `status` field becomes "completed" or "faulted".

```
curl -v "https://api.aspose.cloud/v4.0/html/conversion/<ID> -X GET -H "Content-Type: application/json" -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```
{ "code":200,
	"id":"CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660",
	"status":"running",
	"links":{"self":"/v4.0/html/conversion/CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660"}
}
```

{{< /tab >}}

{{< tab tabNum="3" >}}

If the asynchronous process has been completed, the GET method response contains one or more storage paths the conversion results are stored by. The result files can be downloaded from the storage by their paths.

```
{ "files":["storage:///myfolder/converted/testpage.jpg"],
	"code":200,
	"id":"CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660",
	"status":"completed",
	"links":{"self":"/v4.0/html/conversion/CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660"}
}
```

In this case, the *outputPath* parameter isn't specified for the POST method, so the result will be saved in the temporary storage and its path will have app:/// prefix.

{{< /tab >}}

{{< /tabs >}}



### **SDK Examples**

An SDK integrates functionalities quickly, helps apps to perform better and be more stable. Using the Aspose.HTML Cloud SDK is the best way to speed up development.

Aspose.HTML Cloud SDK  allows you to fetch HTML document from storage location by its name, from a URL or a local file on your drive, convert it to specified image format and save it to the storage or a local drive.
The following code examples demonstrate how to convert HTML to images programmatically for different cases.

#### Case 1. Convert an HTML document from the storage by its name to JPEG and save to the storage

 An example below shows how to convert HTML to JPEG using available SDKs. We consider the case when the source HTML document is in the storage, and you want to convert it to JPEG format and save to the storage. 

{{< tabs tabTotal="1" tabID="4" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```
using System;
using System.IO;
using System.Net.Http;
using Aspose.HTML.Cloud.Sdk.Conversion;
using Aspose.HTML.Cloud.Sdk.Runtime.Core.Model;


namespace Aspose.Html.Cloud.Examples
{
	class Program
	{
		const string appSID = "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"; // apply user's appSID
        const string appKey = "xxxxxxxxxxxxxxxxxxxxxxxxx";           // apply user's key
        const string SERVICE_API_HOST = "https://api.aspose.cloud";
        
        const string STORAGE_SRCFOLDER = "/Html/TestData";
        const string STORAGE_DSTFOLDER = "/Html/TestResult";
        
        static void Main(string[] args)
        {
        	var name = "testpage1.html";
 			var srcFilePath = $"{STORAGE_SRCFOLDER}/{name}";
 			var destFolder = $"{STORAGE_DSTFOLDER}/Jpeg";
 			
 			var api = new HtmlApi(appSID, appKey, SERVICE_API_HOST); 
            ConversionOptions jpgOpts = new JPEGConversionOptions()
                .SetHeight(800)
                .SetWidth(1000)
                .SetLeftMargin(10)
                .SetRightMargin(10)
                .SetBottomMargin(10)
                .SetTopMargin(10)
                .SetResolution(300);

            // Convert to single or multiple files with options
            ConverterBuilder convHtmlJpg = new ConverterBuilder()
                .FromStorageFile(srcFilePath)
                .To(jpgOpts)
                .SaveToStorage(destFolder);

            ConversionResult result = api.Convert(convHtmlJpg);
            if(result.Status == "success" && result.Files.Length > 0)
            {
            	Console.WriteLine("Conversion succeeded.");
            	Console.WriteLine($"Conversion result was saved to: {result.Files[0]}.");
            }
            else
            {
            	Console.WriteLine("Conversion ended with error.");
            }        
        }     
	}
}
```

{{< /tab >}}

{{< /tabs >}}

In the example above, the conversion HTML to JPEG occurs with the **ConversionOptions** specifying, among which there is the **Resolution** that applicable only to image formats. More details about available conversion parameters for HTML files are in the [SDK Conversion Options](/html/conversion-options/) section.

#### Case 2. Convert a Web page by its URL to PNG and save to the local file system

Aspose.HTML Cloud SDK allows you to get HTML page from the web by its URL and convert it to the specified image format for saving to the local file system. The example below demonstrates how to convert HTML to PNG without conversion parameters specifying.

{{< tabs tabTotal="1" tabID="5" tabName1="C#" >}}

{{< tab tabNum="1" >}}
```
using System;
using System.IO;
using System.Net.Http;
using Aspose.HTML.Cloud.Sdk.Conversion;
using Aspose.HTML.Cloud.Sdk.Runtime.Core.Model;


namespace Aspose.Html.Cloud.Examples
{
	class Program
	{
		const string appSID = "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"; // apply user's appSID
        const string appKey = "xxxxxxxxxxxxxxxxxxxxxxxxx";           // apply user's key
        const string SERVICE_API_HOST = "https://api.aspose.cloud";
        
        const string LOCAL_TESTRESULT = "d:\TestResult";
        
        static void Main(string[] args)
        {
 			var sourceUrl = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
 			var destFolder =  Path.Combine(LOCAL_TESTRESULT, "Png_UrlToLocal");
 
 			var api = new HtmlApi(appSID, appKey, SERVICE_API_HOST);                

            // Convert to single file
            ConverterBuilder convHtmlPng = new ConverterBuilder()
                .FromUrl(sourceUrl)
                .To(new PNGConversionOptions())
                .SaveToLocal(destFolder);

            ConversionResult result = api.Convert(convHtmlPng);
	        if(result.Status == "success" && result.Files.Length > 0)
            {
            	Console.WriteLine("Conversion succeeded.");
            	Console.WriteLine($"Conversion result was saved to: {result.Files[0]}.");
            }
            else
            {
            	Console.WriteLine("Conversion ended with error.");
            } 
        }
    }
}			
```
{{< /tab >}}

{{< /tabs >}}

In the example, HTML to PNG conversion takes place with the default conversion options: the width and height of the resulting PNG image correspond to A4, all margins have zero value and resolution is 96 dpi. 

#### Case 3. Convert a Web page by its URL to TIFF and save to the local file system

In the following example,  HTML to TIFF conversion occurs with the conversion options setting. The set resolution value (300 dpi) indicates higher image quality than using the default value (96 dpi).

{{< tabs tabTotal="1" tabID="6" tabName1="C#" >}}

{{< tab tabNum="1" >}}
```
using System;
using System.IO;
using System.Net.Http;
using Aspose.HTML.Cloud.Sdk.Conversion;
using Aspose.HTML.Cloud.Sdk.Runtime.Core.Model;


namespace Aspose.Html.Cloud.Examples
{
	class Program
	{
		const string appSID = "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"; // apply user's appSID
        const string appKey = "xxxxxxxxxxxxxxxxxxxxxxxxx";           // apply user's key
        const string SERVICE_API_HOST = "https://api.aspose.cloud";
        
        const string LOCAL_TESTRESULT = "d:\TestResult";
        
        static void Main(string[] args)
        {
 			var sourceUrl = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
 			var destFolder =  Path.Combine(LOCAL_TESTRESULT, "Tiff_UrlToLocal");
 
 			var api = new HtmlApi(appSID, appKey, SERVICE_API_HOST);                

            ConversionOptions tiffOpts = new TIFFConversionOptions()
                .SetHeight(800)
                .SetWidth(1000)
                .SetLeftMargin(10)
                .SetRightMargin(10)
                .SetBottomMargin(10)
                .SetTopMargin(10)
                .SetResolution(300);

            // Convert to single or multiple files with options
            ConverterBuilder convHtmlTiff = new ConverterBuilder()
                .FromUrl(sourceUrl)
                .To(tiffOpts)
                .SaveToLocal(destWithParamFolder);

            ConversionResult result = api.Convert(convHtmlTiff);
	        if(result.Status == "success" && result.Files.Length > 0)
            {
            	Console.WriteLine("Conversion succeeded.");
            	Console.WriteLine($"Conversion result was saved to: {result.Files[0]}.");
            }
            else
            {
            	Console.WriteLine("Conversion ended with error.");
            } 
        }
    }
}			
```
{{< /tab >}}

{{< /tabs >}}



#### Case 4. Convert an HTML document from the storage by its name to BMP and save to the local file system

Let’s consider a common SDK usage scenario when the source document is in the storage, and you want to convert it to some other format and save to the  local file system. In our example, it is HTML to BMP conversion.

{{< tabs tabTotal="1" tabID="7" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```
using System;
using System.IO;
using System.Net.Http;
using Aspose.HTML.Cloud.Sdk.Conversion;
using Aspose.HTML.Cloud.Sdk.Runtime.Core.Model;


namespace Aspose.Html.Cloud.Examples
{
	class Program
	{
		const string appSID = "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"; // apply user's appSID
        const string appKey = "xxxxxxxxxxxxxxxxxxxxxxxxx";           // apply user's key
        const string SERVICE_API_HOST = "https://api.aspose.cloud";
        
        const string STORAGE_SRCFOLDER = "/Html/TestData";
        const string LOCAL_TESTRESULT = "d:\TestResult";
               
        static void Main(string[] args)
        {
            var name = "testpage1.html";
 			var srcFilePath = $"{STORAGE_SRCFOLDER}/{name}";
 			var destFolder =  Path.Combine(LOCAL_TESTRESULT, "Bmp_StorageToLocal");
             			
 			var api = new HtmlApi(appSID, appKey, SERVICE_API_HOST); 
            ConversionOptions bmpOpts = new BMPConversionOptions()
                .SetHeight(800)
                .SetWidth(1000)
                .SetLeftMargin(10)
                .SetRightMargin(10)
                .SetBottomMargin(10)
                .SetTopMargin(10)
                .SetResolution(300);

            // Convert to single or multiple files with options
            ConverterBuilder convHtmlBmp = new ConverterBuilder()
                .FromStorageFile(srcFilePath)
                .To(bmpOpts)
                .SaveToLocal(destFolder);

            ConversionResult result = api.Convert(convHtmlBmp);
            if(result.Status == "success" && result.Files.Length > 0)
            {
            	Console.WriteLine("Conversion succeeded.");
            	Console.WriteLine($"Conversion result was saved to: {result.Files[0]}.");
            }
            else
            {
            	Console.WriteLine("Conversion ended with error.");
            }        
        }     
	}
}
```

{{< /tab >}}

{{< /tabs >}}



#### Case 5. Convert an HTML document from the storage by its name to GIF and save to the storage 

In the following example, we consider the case when the source HTML document is in the storage, and you want to convert it to GIF format and save to the storage. 

{{< tabs tabTotal="1" tabID="8" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```
using System;
using System.IO;
using System.Net.Http;
using Aspose.HTML.Cloud.Sdk.Conversion;
using Aspose.HTML.Cloud.Sdk.Runtime.Core.Model;


namespace Aspose.Html.Cloud.Examples
{
	class Program
	{
		const string appSID = "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"; // apply user's appSID
        const string appKey = "xxxxxxxxxxxxxxxxxxxxxxxxx";           // apply user's key
        const string SERVICE_API_HOST = "https://api.aspose.cloud";
        
        const string STORAGE_SRCFOLDER = "/Html/TestData";
        const string STORAGE_DSTFOLDER = "/Html/TestResult";
        
        static void Main(string[] args)
        {
        	var name = "testpage1.html";
 			var srcFilePath = $"{STORAGE_SRCFOLDER}/{name}";
 			var destFolder = $"{STORAGE_DSTFOLDER}/";
 			
 			var api = new HtmlApi(appSID, appKey, SERVICE_API_HOST); 
 			
            // Convert to single file
            ConverterBuilder convHtmlGif = new ConverterBuilder()
                .FromStorageFile(srcFilePath)
                .To(new GIFConversionOptions())
                .SaveToStorage(destFolder);

            ConversionResult result = api.Convert(convHtmlGif); 
            if(result.Status == "success" && result.Files.Length > 0)
            {
            	Console.WriteLine("Conversion succeeded.");
            	Console.WriteLine($"Conversion result was saved to: {result.Files[0]}.");
            }
            else
            {
            	Console.WriteLine("Conversion ended with error.");
            }        
        }     
	}
}
```

{{< /tab >}}

{{< /tabs >}}

In the example, HTML to GIF conversion occurs with the default conversion options: the width and height of the resulting PNG image correspond to A4, all margins have zero value and resolution is 96 dpi.

For more details, see [Aspose.HTML for Cloud API Reference](https://apireference.aspose.cloud/html/) - is a collection of Swagger documentation for the Aspose.HTML Cloud APIs that provides testing and interactivity to our API endpoint documentation.

