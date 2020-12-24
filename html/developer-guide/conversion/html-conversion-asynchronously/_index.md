---
title: "HTML Conversion"
type: docs
url: /html-conversion-asynchronously/
keywords: "html conversion, asynchronous conversion, CQRS, convert html to pdf, convert html to jpeg, python, java , .net,  c#,  android, swift ,Perl, Node.js"
description: " Article explains HTML conversion using Aspose.HTML Cloud API. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 10
---

## **Introduction**

Aspose.HTML Cloud has provided the simplest API to convert an HTML page to one of the fixed-layout document formats (including PDF, XPS) or one of the raster image formats (including JPEG, BMP, PNG, GIF, TIFF) . You can convert the HTML document to any of supported formats either from the storage by its name or from the web by its URL.





## **API Information**

| **API**               | **Type** | **Description**                                              | **Swagger Link**                                             |
| :-------------------- | :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| /html/conversion/     | POST     | Starts an asynchronous conversion operation                  | [Convert](https://apireference.aspose.cloud/html/#/Conversion/Convert) |
| /html/conversion/{id} | GET      | Gets the current status of previously started asynchronous conversion operation by its ID. | [GetConversionStatus](https://apireference.aspose.cloud/html/#/Conversion/GetConversionStatus) |
| /html/conversion/{id} | DELETE   | Forces termination of the previously started asynchronous conversion operation by its ID | [CancelConversion](https://apireference.aspose.cloud/html/#/Conversion/CancelConversion) |

For more details concerning the conversion API, see  [Conversion API Parameters](html-conversion-params/_index.md)



### **cURL Example**

This example demonstrates how to convert HTML file located in the default cloud storage to PDF with default parameters using the cURL utility (in the console, or using the system shell script - .bat file or PowerShell script in Windows, bash script in Linux etc.).

#### **Step 1: Get JWT token for the user authentication  **

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

Put your Aspose application credentials (App SID and App Key) as values of `client_id` and `client_secret` parameters respectively:

```
curl --data "grant_type=client_credentials&client_id=xxxxxxxxxxxx&client_secret=xxxxxxxxxxxxxxx" -X POST -v "https://api.aspose.cloud/connect/token"
```

{{< /tab >}}

{{< tab tabNum="2" >}}

An example of the token request response; it contains a JWT token in the `access_token` field; this token should be used in subsequent API calls as a value of *Authorization* HTTP header (see steps below).  

```
{"access_token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDY5OTk4OTUsImV4cCI6MTYwNzA4NjI5NSwiaXNzIjoiaHR0cHM6Ly9hcGktcWEuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLXFhLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6Imh0bWwuY2xvdWQiLCJjbGllbnRfdXNhZ2UiOiJwb3N0IiwiY2xpZW50X3N0b3JhZ2UiOiJnZXQiLCJjbGllbnRfcmVzdHJpY3Rpb25zIjoiZ2V0IiwiY2xpZW50X2RlZmF1bHRfc3RvcmFnZSI6ImJiZDg3NTAxLTM5ZDgtNDQ1Yi05ZDIzLTlkYmNhYWJiMTFhOCIsImNsaWVudF9pZGVudGl0eV91c2VyX2lkIjoiMTg5MjA5Iiwic2NvcGUiOlsiYXBpLmJpbGxpbmciLCJhcGkuaWRlbnRpdHkiLCJhcGkucHJvZHVjdHMiLCJhcGkuc3RvcmFnZSJdfQ.dHeWTkSTzgqGCucoG1ef9dXFk_GoDMyL8tsba1pG5tkaXj6smp_KM2Ty52II-ejoVgEXwDhNMKaYET-YxO3up9gaojvrj-41gSPHn3AhjX40rQ2Ny3ziUGOauQT64k_VpThjAqs0qkS8bF9tA85hQBJsiizLsRyuATfLCWuZUX3KT0o9PnfNULqEEc7JG_dMqOBrcJc4TTUd8jzP2XjrU412LZlfWiloZouzrxvu0bpwnlwAF8XnMUuFahhzbWUeThCgZxWNjMw2_pGYvB2vzCknV1WZrDN4RULT30T6fAT0VmTYc_GGWNuQEn8xba8CztLmWmtSrNlT5qoVnzyv0g","expires_in":86400,"token_type":"Bearer"}
```

{{< /tab >}}

{{< /tabs >}}



#### Step 2: Initialize an asynchronous conversion process (POST method)

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```
curl -X POST  -v "https://api.aspose.cloud/v4.0/html/conversion?inputPath=storage://myfolder/testpage.html&inputFormat=pdf"      -d "{}" -H "Content-Type: application/json" -H "Authorization:Bearer <_JWT_token_>"
```

{{< /tab >}}

{{< tab tabNum="2" >}}

POST method response contains an ID of just started conversion operation and a URL to call to get its status. 

```
{ "code":200,
	"id":"CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660",
	"status":"pending",
	"links": {"self":"/v4.0/html/conversion/CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660" }
}
```

{{< /tab >}}

{{< /tabs >}}



#### Step 3: Check the previously started conversion process status (GET method)

{{< tabs tabTotal="3" tabID="1" tabName1="Request" tabName2="Response - running" tabName3="Response - completed" >}}

{{< tab tabNum="1" >}}

```
curl -v "https://api.aspose.cloud/v4.0/html/conversion/<ID> -X GET -H "Content-Type: application/json" -H "Authorization:Bearer <_JWT_token_>"
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

Note that in this case the *outputPath* parameter wasn't specified for POST method, so the result has been saved in the temporary storage and its path has app:/// prefix.

```
{ "files":["app:///46e83abf-289f-4ce2-90c5-e6d475e2917f/testpage.pdf"],
	"code":200,
	"id":"CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660",
	"status":"completed",
	"links":{"self":"/v4.0/html/conversion/CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660"}
}
```

{{< /tab >}}

{{< /tabs >}}



#### Step 4 (optional): Cancel the previously started conversion (DELETE method)

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```
curl -v "https://api.aspose.cloud/v4.0/html/conversion/<ID> -X DELETE -H "Content-Type: application/json" -H "Authorization:Bearer <_JWT_token_>"
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

Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Check out our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/html/available-sdks/) article to learn how to add an SDK to your project.

### **SDK Examples**

##### Case 1. Convert the HTML document from the storage by its name to PDF and save to the storage

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
            	Console.WroiteLine("Conversion succeeded.");
            	Console.WroiteLine($"Conversion result was saved to: {result.Files[0]}.");
            }
            else
            {
            	Console.WroiteLine("Conversion ended with error.");
            }        
        }     
	}
}
```

{{< /tabs >}}

##### Case 2. Convert the Web page by its URL to PDF with explicit PDF options and save to the local file system

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
            	Console.WroiteLine("Conversion succeeded.");
            	Console.WroiteLine($"Conversion result was saved to: {result.Files[0]}.");
            }
            else
            {
            	Console.WroiteLine("Conversion ended with error.");
            }
        
        }     
	}
}
```

{{< /tabs >}}