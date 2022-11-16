---
title: "HTML to DOCX Conversion"
type: docs
url: /html-to-docx-conversion/
weight: 30
---

## **Introduction**
Aspose.HTML Cloud has provided the simplest API to convert an HTML page to the fixed-layout document format DOCX (Microsoft Word). You can convert the HTML document to XPS either from the storage by its name or from the web by its URL.
## **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/{name}/convert/doc|GET|Converts the HTML document (located on storage) to DOCX and returns resulting file in response content|[GetConvertDocumentToDoc](https://apireference.aspose.cloud/html/#/Conversion/GetConvertDocumentToDoc)|
|/html/{name}/convert/doc|PUT|Converts the HTML document (located on storage) to DOCX and uploads resulting file to storage|[PutConvertDocumentToDoc](https://apireference.aspose.cloud/html/#/Conversion/PutConvertDocumentToDoc)|
|/html/convert/doc|GET|Converts the HTML page (located in the Web) to DOCX and returns resulting file in response content|[GetConvertDocumentToDocByUrl](https://apireference.aspose.cloud/html/#/Conversion/GetConvertDocumentToDocByUrl)|
|/html/convert/doc|POST|Converts the HTML document (in request content) to DOCX and uploads resulting file to storage|[PostConvertDocumentInRequestToDoc](https://apireference.aspose.cloud/html/#/Conversion/PostConvertDocumentInRequestToDoc)|
### **cURL Example**
#### **Case 1: Converts the HTML document (located on storage) to DOCX and returns resulting file in response content:**

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

// First get Access Token
// Get Client ID and Client Secret from https://dashboard.aspose.cloud/

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

 ```java

// cURL example for HTML to XPS Conversion

curl -v "https://api.aspose.cloud/v3.0/html/testpage4_embcss.html/convert/doc" -X GET -H "Content-Type: application/json" -H "Accept: multipart/form-data" -H "Authorization: Bearer [access token]"

 ```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

Converted DOCX File

```

{{< /tab >}}

{{< /tabs >}}

#### **Case 2: Converts the HTML document (located on storage) to DOC and uploads resulting file to storage:**

{{< tabs tabTotal="2" tabID="4" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

// First get Access Token
// Get Client ID and Client Secret from https://dashboard.aspose.cloud/

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

// cURL example for HTML to DOCX Conversion

curl -v "https://api.aspose.cloud/v3.0/html/testpage4_embcss.html/convert/doc?outPath=testpage4_embcss.xps&storage=MyStorage" -X PUT -H "Content-Length: 0" -H "Content-Type: application/json" -H "Accept: multipart/form-data" -H "Authorization: Bearer [access token]"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

{
  "Code": 200,
  "Status": "OK"
}

```

{{< /tab >}}

{{< /tabs >}}

#### **Case 3: Converts the HTML page (located in the Web) to DOCX and returns resulting file in response content:**

{{< tabs tabTotal="2" tabID="7" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

// First get Access Token
// Get Client ID and Client Secret from https://dashboard.aspose.cloud/

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

// cURL example for HTML to XPS Conversion

curl -v "https://api.aspose.cloud/v3.0/html/convert/doc?sourceUrl=https://www.le.ac.uk/oerresources/bdra/html/page_01.htm" -X GET -H "Content-Type: application/json" -H "Accept: multipart/form-data" -H "Authorization: Bearer [access token]"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

Converted XPS File

```

{{< /tab >}}

{{< /tabs >}}

#### **Case 4: Converts the HTML document (in request content) to DOCX and uploads resulting file to storage:**

{{< tabs tabTotal="2" tabID="10" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

// First get Access Token
// Get Client ID and Client Secret from https://dashboard.aspose.cloud/

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

// cURL example for HTML to XPS Conversion

curl -v "https://api.aspose.cloud/v3.0/html/convert/doc?outPath=testpage4_embcss.docx" -X PUT -T testpage4_embcss.html -H "Content-Type: application/json" -H "Accept: multipart/form-data" -H "Authorization: Bearer [access token]"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

{
  "Code": 200,
  "Status": "OK"
}

```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Check out our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/html/available-sdks/) article to learn how to add an SDK to your project.

