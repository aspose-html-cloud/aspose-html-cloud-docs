---
title: "Get HTML Document"
type: docs
url: /get-html-document/
weight: 10
---

## **Introduction**
This article explains how to get the HTML document by its name. The document is previously uploaded to the Cloud Storage and can be accessed by its name and folder name, if specified.
### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/download|GET|Return HTML page from Web with linked resources packaged as a ZIP archive by the source page URL|[GetDocumentByUrl](https://apireference.aspose.cloud/html/#!/Document/GetDocumentByUrl)|
### **cURL Example**
{{% alert color="primary" %}} 

The example below downloads the html page and all associated content into a zip file. For large pages this can be slow

{{% /alert %}} 

{{< tabs tabTotal="1" tabID="1" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/download?sourceUrl=http://help.websiteos.com/websiteos/example\_of\_a\_simple\_html\_page.htm" -X GET -H "Content-Type:application/json" -H "Accept:multipart/form-data" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE2NzI1ODEsImV4cCI6MTU2MTc1ODk4MSwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.giiO1-D9Zw6q9RhEkm-fmCjRV1GuyTHr4Db-o0jCjZMoQfHddSAG1IpBmuDZHvLSSr6lp2yqCHDSAaNNoGdH\_AaCKdT73VfeiCQIOzxbMEzF53N304\_GQ39gr2-Zq6fgHW8uD\_Sd-BiHwDvt5PkGJR23NUPF7US8ZWhvHpiTrZEzpSiNZEiLISA1bh\_L8SiJtLGKgzXn2BgyR\_Kxw\_i\_WXYmbqtPry8w-P25gUjcthHbqzqO6VITzAFAt2jKMQ25YYXnhigNDfPYrc9iTmbKoEggaitR-sz8YIyxEctEcdoECyQo2Dibxf6-a8iVxlsKNfStsnymyfEl1WvyzQyzxA" --ssl-no-revoke --output page\_download.zip

```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Checkout our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
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




