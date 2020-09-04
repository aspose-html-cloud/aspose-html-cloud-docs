---
title: "HTML conversion to MHTML"
type: docs
url: /html-conversion-to-mhtml/
weight: 50
---

## **Introduction**
This article explains how to convert an HTML document to MHTML language. 
### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/convert/mhtml|GET|Converts the HTML page from Web by its URL to MHTML returns resulting file in response content|[GetConvertDocumentToMHTMLByUrl](https://apireference.aspose.cloud/html/#!/Conversion/GetConvertDocumentToMHTMLByUrl)|
### **cURL Example**
{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

**Create Authentication Header**

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/convert/mhtml?sourceURL=http://help.websiteos.com/websiteos/example\_of\_a\_simple\_html\_page.htm" -X GET -H "Accept: application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE4MTg0ODMsImV4cCI6MTU2MTkwNDg4MywiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.EegmlLNbXHmmQWcCtN1WncYseZO2PA4gdSxQKMlpoFRP5xD5LLJS2J\_KvnM96JcbVcKXnTiJfUiDTiOesihpOF2f0o-xpUPmSjpxhzrmgFNUL778jj\_XW2FiOH0I0yHy9-EiOns8pWVCx4lD\_1440EzqIXXMFssO3N2r2DrbZ2Ltn2EjSNuUcoxhZEyGBahGQclL73HBqyf06esT4QOOkrhC9L9pkQALyy2RTvYh8tXbVbvYNxmKXWoiN3dVdk74kUFsLsy9bLyifplQ1RqCAL\_B8C1L4gJYJp-aOvLiJkilwuV8ZWIgd7cmBKMUMCBC0MYt57mRLAlioYGdO37tEQ" --ssl-no-revoke

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

HTML Document 

```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Checkout our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
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
