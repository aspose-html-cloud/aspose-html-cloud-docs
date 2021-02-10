---
title: Conversion REST API
type: docs
url: /conversion-rest-api/
keywords: format conversion, conversion REST API, html conversion, epub
  conversion, mhtml conversion, asynchronous conversion, conversion SDK, convert
  html to pdf, convert html to xps, convert html to doc, convert html to jpeg,
  convert html to png, convert html to tiff, python, java , .net,  c#, android,
  swift ,Perl, Node.js
description: The article provides a general description of Aspose.HTML Cloud
  REST API conversion features. Also SDKs are available in C#, Java, C++,
  Python, PHP, Ruby, Swift, Java/Android, and more to help developers speed up
  their development.
weight: 50
---
## **Summary ++**

This article demonstrates how to convert HTML file to other formats by direct REST API calls. Here you find a more detailed description of the conversion REST API provided by Aspose.HTML Cloud v4.0. The article explains the following features:

* a list of conversion REST API methods;
* a cURL example that explains how to use conversion API asynchronously;
* a reference to the conversion API parameters and the path format conventions of source and destination paths.

## **REST API method list**

The Aspose.HTML Cloud API is a REST-based API for wide usability on the web across platforms. The REST API uses existing HTTP methods, such as GET, POST and DELETE.

All URIs are relative to https://api.aspose.cloud/v4.0/html.

| **API**          | **Type** | **Description**                                                                            | **Swagger Link**                                                                               |
| ---------------- | -------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| /conversion/     | POST     | Starts an asynchronous conversion operation.                                               | [Convert](https://apireference.aspose.cloud/html/#/Conversion/Convert)                         |
| /conversion/{id} | GET      | Gets the current status of previously started asynchronous conversion operation by its ID. | [GetConversionStatus](https://apireference.aspose.cloud/html/#/Conversion/GetConversionStatus) |
| /conversion/{id} | DELETE   | Forces termination of the previously started asynchronous conversion operation by its ID.  | [CancelConversion](https://apireference.aspose.cloud/html/#/Conversion/CancelConversion)       |

{{% alert color="primary" %}} 
For more details concerning the conversion API, see  [Conversion API Parameters](/html/conversion-rest-api/conversion-params/).
{{% /alert %}}  

### **Asynchronous conversion cURL example**

A cURL is a  powerful tool to receive or send data from or to a server, using a supported protocol. It has a wide range of features and flags that allow it to do this for varying purposes. It is a command-line instrument that you can use to access Aspose.HTML Cloud web services. 

This example demonstrates how to convert an HTML file located in the default cloud storage to PDF with default parameters using the cURL utility (in the console, or using the system shell script - .bat file or PowerShell script in Windows, bash script in Linux etc.).

#### **Step 1: Get a JWT token for the user authentication**

Get a JWT token from the authentication service using user credentials (see [Authentication](/html/general-api-notes/authentication/) for details). The response  `access_token` field contains the token that should be used by API calls as it's shown below. 

#### **Step 2: Initialize an asynchronous conversion process using the POST method**

The `curl -X POST` command specifies a request method (POST) to use when communicating with the HTTP server. The **POST method** is usually used in requests for adding data; in this case, an empty parameter list is passed `-d "{}"`.

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

Replace `<JWT_token>` with  `access_token` field value obtained in the Step 1.

```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/conversion?inputPath=inputFormat=pdf&storage:///myfolder/testpage.html&outputPath=storage:///myfolder/converted/testpage.pdf" \
    -d "{}" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< tab tabNum="2" >}}

 The **POST method** response contains an ID of just started conversion operation and a relative URL to call to get its status. 

```json
{ "code":200,
	"id":"CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660",
	"status":"pending",
	"links": {"self":"/v4.0/html/conversion/CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660" }
}
```

{{< /tab >}}

{{< /tabs >}}

#### **Step 3: Check the previously started conversion process status using the GET method**

The **GET method** allows checking the previously started operation state by its ID and returns the state object.

{{< tabs tabTotal="3" tabID="2" tabName1="Request" tabName2="Response - running" tabName3="Response - completed" >}}

{{< tab tabNum="1" >}}

Replace `<JWT_token>` with  `access_token` field value obtained in the Step 1.

Replace  `<ID>` with `id` field value obtained in the Step 2.

Repeat calling the command below until the response `status` field becomes "completed" or "faulted".

```bash
curl -v "https://api.aspose.cloud/v4.0/html/conversion/<ID> -X GET -H "Content-Type: application/json" -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```json
{ "code":200,
	"id":"CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660",
	"status":"running",
	"links":{"self":"/v4.0/html/conversion/CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660"}
}
```

{{< /tab >}}

{{< tab tabNum="3" >}}

If the asynchronous process has been completed, the **GET method** response contains one or more storage paths the conversion results are stored by. The result files can be downloaded from the storage by their paths.

```json
{ "files":["storage:///myfolder/converted/testpage.pdf"],
	"code":200,
	"id":"CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660",
	"status":"completed",
	"links":{"self":"/v4.0/html/conversion/CN-119ebe92-b063-45be-bbb5-f9f9d1ad4660"}
}
```

{{< /tab >}}

{{< /tabs >}}

#### **Step 4 (optional): Cancel the previously started conversion using the DELETE method**

The **DELETE method** cancels the previously started operation by its ID.

{{< tabs tabTotal="2" tabID="3" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

Replace `<JWT_token>` with  `access_token` field value obtained in the Step 1.

Replace  `<ID>` with `id` field value obtained in the Step 2.

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

You can get information about all the API resources from the [Aspose.HTML for Cloud API Reference](https://apireference.aspose.cloud/html/).