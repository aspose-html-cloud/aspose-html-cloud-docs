---
title: "Get Images from HTML document"
type: docs
url: /get-images-from-html-document/
weight: 30
---

## **Introduction**
This article explain how to get all images from the HTML document. Aspose.HTML Cloud provide two APIs to get HTML document images:
### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/{name}/images/all|GET|Return all HTML document images packaged as a ZIP archive|[GetDocumentImages](https://apireference.aspose.cloud/html/#/Document/GetDocumentImages)|
|/html/images/all|GET|Return all HTML page images packaged as a ZIP archive by the source page URL|[GetDocumentImagesByUrl](https://apireference.aspose.cloud/html/#/Document/GetDocumentImagesByUrl)|
### **cURL Example**
{{< tabs tabTotal="1" tabID="1" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/oauth2/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/images/all?sourceUrl=https://www.yourhtmlsource.com/myfirstsite/basicimages.html" -X GET -H "Content-Type:application/json" -H "Accept:application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE2NzI1ODEsImV4cCI6MTU2MTc1ODk4MSwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.giiO1-D9Zw6q9RhEkm-fmCjRV1GuyTHr4Db-o0jCjZMoQfHddSAG1IpBmuDZHvLSSr6lp2yqCHDSAaNNoGdH\_AaCKdT73VfeiCQIOzxbMEzF53N304\_GQ39gr2-Zq6fgHW8uD\_Sd-BiHwDvt5PkGJR23NUPF7US8ZWhvHpiTrZEzpSiNZEiLISA1bh\_L8SiJtLGKgzXn2BgyR\_Kxw\_i\_WXYmbqtPry8w-P25gUjcthHbqzqO6VITzAFAt2jKMQ25YYXnhigNDfPYrc9iTmbKoEggaitR-sz8YIyxEctEcdoECyQo2Dibxf6-a8iVxlsKNfStsnymyfEl1WvyzQyzxA" --ssl-no-revoke 

```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Checkout our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
**Case 1: Get all HTML document images packaged as a ZIP archive:**

{{< tabs tabTotal="9" tabID="4" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< /tab >}}

{{< /tabs >}}

**Case 2: Get all HTML page images packaged as a ZIP archive by the source page URL:**

{{< tabs tabTotal="9" tabID="5" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< /tab >}}

{{< /tabs >}}
