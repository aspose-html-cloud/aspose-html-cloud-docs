---
title: "HTML to PDF Conversion"
type: docs
url: /html-conversion-to_pdf/
keywords: "html conversion, asynchronous conversion, CQRS, convert html to pdf, python, java , .net,  c#,  android, swift ,Perl, Node.js"
description: " Article explains HTML conversion to PDF using Aspose.HTML Cloud API. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 20
---



## HTML to PDF conversion
[TOC]

### Summary

Aspose.HTML Cloud v4.0 provides the simplest API to convert HTML documents to [PDF](https://docs.fileformat.com/pdf/) format with high quality, easy and fast. HTML to PDF conversion is often required to establish limited access to documents editing or copying; to produce official documentation or send some information, for example, by email.

This article demonstrates how to convert HTML file to PDF by direct REST API calls or using SDKs.   



### **cURL Example**

A cURL is a command-line tool that you can use to access Aspose.HTML Cloud web services. 

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

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

Replace <_JWT_token_> with  `access_token` field value obtained in the Step 1.

```
curl -X POST  -v "https://api.aspose.cloud/v4.0/html/conversion?inputFormat=pdf&inputPath=storage:///myfolder/testpage.html&outputPath=storage:///myfolder/converted/testpage.pdf" -d "{}" -H "Content-Type: application/json" -H "Authorization:Bearer <JWT_token>"
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

{{< tabs tabTotal="3" tabID="1" tabName1="Request" tabName2="Response - running" tabName3="Response - completed" >}}

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



### **SDK Examples**

These examples demonstrate how to convert HTML to PDF using available SDKs.

##### Case 1. Convert an HTML document from the storage by its name to PDF and save to the storage

The conversion process is following - a source document is loaded from the cloud storage, and after conversion is completed, the result is saved to this storage.  

{{< tabs tabTotal="1" tabID="1" tabName1="C#" >}}

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

 In the example, we use methods of the **ConverterBuilder** class: FromStorageFile(`inputPath`), To(`ConversionOptions`) and SaveToStorage(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result. HTML to PDF conversion occurs with the default conversion options: the resulting PDF document's width and height correspond to A4, all margins have zero value, and Quality of jpeg compression is 95%.

More details about available conversion parameters for HTML files are in the [SDK Conversion Options](/conversion-options/) section.



##### Case 2. Convert a Web page by its URL to PDF with explicit PDF options and save to the local file system

Aspose.HTML Cloud SDK allows you to get HTML page from the web by its URL, convert it to another format and save into the local file system. The example below demonstrates how to convert HTML to PDF with the conversion parameters specifying.

{{< tabs tabTotal="1" tabID="1" tabName1="C#" >}}

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
 			var sourceUrl = "";
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

{{< /tabs >}}

In the example, we use methods of the **ConverterBuilder** class: FromUrl(`urlAddress`), To(`ConversionOptions`) and SaveToStorage(`outputDirectory`) that specify input data, the output format and the target directory for a conversion result.

You can get information about all the API resources from the [Aspose.HTML for Cloud API Reference](https://apireference.aspose.cloud/html/).