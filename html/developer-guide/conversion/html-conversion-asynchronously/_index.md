---
title: "Conversion common information"
type: docs
url: /html-conversion-asynchronously/
keywords: "html conversion, asynchronous conversion, CQRS, convert html to pdf, convert html to jpeg, python, java , .net,  c#,  android, swift ,Perl, Node.js"
description: " Article explains HTML conversion using Aspose.HTML Cloud API. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 10
---

### **Summary**

Aspose.HTML Cloud v4.0 provides the simplest API to convert an [HTML](https://docs.fileformat.com/web/html/) page to one of the fixed-layout document formats (including  [PDF](https://docs.fileformat.com/pdf/) and [XPS](https://docs.fileformat.com/page-description-language/xps/)) or one of the raster image formats (including [JPEG](https://docs.fileformat.com/image/jpeg/), [PNG](https://docs.fileformat.com/image/png/), [TIFF](https://docs.fileformat.com/image/tiff/),  [BMP](https://docs.fileformat.com/image/bmp/), and  [GIF](https://docs.fileformat.com/image/gif/)). You can convert the HTML document to any of supported formats either from the storage by its name or from the web by its URL.

The main difference from API v3.0 are:

- conversion is considered as potentially long time operation, so new API provides an asynchronous mode of conversion;
- many conversion options that were available in API v3.0 have been reduced to only three possible API calls that makes development more straightforward.



### **Conversion API Information**

All URIs are relative to https://api.aspose.cloud/v4.0/html.

| **API**          | **Type** | **Description**                                              | **Swagger Link**                                             |
| :--------------- | :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| /conversion/     | POST     | Starts an asynchronous conversion operation.                 | [Convert](https://apireference.aspose.cloud/html/#/Conversion/Convert) |
| /conversion/{id} | GET      | Gets the current status of previously started asynchronous conversion operation by its ID. | [GetConversionStatus](https://apireference.aspose.cloud/html/#/Conversion/GetConversionStatus) |
| /conversion/{id} | DELETE   | Forces termination of the previously started asynchronous conversion operation by its ID. | [CancelConversion](https://apireference.aspose.cloud/html/#/Conversion/CancelConversion) |

For more details concerning the conversion API, see  [Conversion API Parameters](/html-conversion-asynchronously/html-conversion-params/).





### **cURL Example**

A cURL is a  powerful tool to receive or send data from or to a server, using a supported protocol. It has a wide range of features and flags that allow it to do this for varying purposes. It is a command-line instrument that you can use to access Aspose.HTML Cloud web services. 

This example demonstrates how to convert an HTML file located in the default cloud storage to PDF with default parameters using the cURL utility (in the console, or using the system shell script - .bat file or PowerShell script in Windows, bash script in Linux etc.).

#### Step 1: Get JWT token for the user authentication  

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

The `curl --data` command posts data about client credentials to the server.  Put your Aspose application credentials (App SID and App Key) as values of `client_id` and `client_secret` parameters respectively, and use the POST method:

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

The `curl -X POST` command specifies a request method (POST) to use when communicating with the HTTP server. The POST method is usually used in requests for adding data; in this case, an empty parameter list is passed `-d "{}"`.

{{< tabs tabTotal="2" tabID="2" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

Replace <_JWT_token_> with  `access_token` field value obtained in the Step 1.

```
curl -X POST  -v "https://api.aspose.cloud/v4.0/html/conversion?inputPath=inputFormat=pdf&storage:///myfolder/testpage.html&outputPath=storage:///myfolder/converted/testpage.pdf"      -d "{}" -H "Content-Type: application/json" -H "Authorization:Bearer <JWT_token>"
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

The GET method allows checking the previously started operation state by its ID and returns the state object.

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
{ "files":["storage:///myfolder/converted/testpage.pdf"],
	"code":200,
	"id":"CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660",
	"status":"completed",
	"links":{"self":"/v4.0/html/conversion/CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660"}
}
```

In this case, the *outputPath* parameter isn't specified for the POST method, so the result will be saved in the temporary storage and its path will have app:/// prefix.

{{< /tab >}}

{{< /tabs >}}



#### Step 4 (optional): Cancel the previously started conversion using the DELETE method

The DELETE method cancels the previously started operation by its ID.

{{< tabs tabTotal="2" tabID="4" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

Replace <_JWT_token_> with  `access_token` field value obtained in the Step 1.

Replace  <_ID_> with `id` field value obtained in the Step 2.

```
curl -v "https://api.aspose.cloud/v4.0/html/conversion/<ID> -X DELETE -H "Content-Type: application/json" -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```
{ "code":200,
	"id":"CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660",
	"status":"cancelled",
	"links":{"self":"/v4.0/html/conversion/CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660"}
}
```

{{< /tab >}}

{{< /tabs >}}



## **Available SDKs**

Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Check out our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/available-sdks/) article to learn how to add an SDK to your project.

### **SDK Examples**

A widespread use case for Aspose.HTML Cloud SDK functions is file processing and converting. The Cloud API request can fetch an HTML document from storage location by its name and convert it to the specified format, to save it to storage. An example below demonstrates such a function.

##### Case 1. Convert an HTML document from the storage by its name to PDF and save to the storage

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
        
        const string STORAGE_SRCFOLDER = "/Html/TestData";
        const string STORAGE_DSTFOLDER = "/Html/TestResult";
        
        static void Main(string[] args)
        {
        	var name = "testpage1.html";
 			var srcFilePath = $"{STORAGE_SRCFOLDER}/{name}";
 			var destFolder = $"{STORAGE_DSTFOLDER}/Pdf";
 			
 			var api = new HtmlApi(appSID, appKey, SERVICE_API_HOST); 
 			
            // Convert to single or multiple files with default options
            ConverterBuilder convHtmlPdf = new ConverterBuilder()
                .FromStorageFile(srcFilePath)
                .To(new PDFConversionOptions())
                .SaveToStorage(destFolder);

            ConversionResult result = api.Convert(convHtmlPdf);
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

The conversion process is following - a source document is loaded from the cloud storage, and after conversion is completed, the result is saved to this storage.  The default PDFConversionOptions are applied to the conversion. In the example, we use methods of the **ConverterBuilder** class: FromStorageFile(`inputPath`), To(`ConversionOptions`) and SaveToStorage(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result.

##### Case 2. Convert a Web page by its URL to PDF with explicit PDF options and save to the local file system

Aspose.HTML Cloud SDK allows you to get HTML page from the web by its URL and convert it to the specified format for saving to the local file system.

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
 			var destFolder =  Path.Combine(LOCAL_TESTRESULT, "PdfWithParams");
 
 			var api = new HtmlApi(appSID, appKey, SERVICE_API_HOST); 
            ConversionOptions pdfOpts = new PDFConversionOptions()
                .SetHeight(800)
                .SetWidth(1000)
                .SetLeftMargin(10)
                .SetRightMargin(10)
                .SetBottomMargin(10)
                .SetTopMargin(10)
                .SetQuality(95);

            // Convert to single or multiple files with options
            ConverterBuilder convHtmlPdf = new ConverterBuilder()
                .FromUrl(sourceUrl)
                .To(pdfOpts)
                .SaveToLocal(destFolder);

            ConversionResult result = api.Convert(convHtmlPdf);
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

You can get information about all the API resources from  [Aspose.HTML for Cloud API Reference](https://apireference.aspose.cloud/html/).