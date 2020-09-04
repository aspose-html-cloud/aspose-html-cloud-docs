---
title: "HTML conversion to Markdown"
type: docs
url: /html-conversion-to-markdown/
weight: 40
---

## **Introduction**
This article explains how to convert an HTML document to markdown language.
### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/{name}/convert/md|GET|Converts the HTML document (located on storage) to Markdown and returns resulting file in response content|[GetConvertDocumentToMarkdown](https://apireference.aspose.cloud/html/#!/Conversion/GetConvertDocumentToMarkdown)|
|/html/{name}/convert/md|PUT|Converts the HTML document (located on storage) to Markdown and uploads resulting file to storage by specified path|[PutConvertDocumentToMarkdown](https://apireference.aspose.cloud/html/#!/Conversion/PutConvertDocumentToMarkdown)|
|/html/convert/md|POST|Converts the HTML document (in request content) to Markdown and uploads resulting file to storage by specified path|[PostConvertDocumentInRequestToMarkdown](https://apireference.aspose.cloud/html/#!/Conversion/PostConvertDocumentInRequestToMarkdown)|
### **cURL Example**
**Case 1: This example demonstrates GET on /html/{name}/convert/md**

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/test.html/convert/md" -X GET -H "Accept: application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE4MTg0ODMsImV4cCI6MTU2MTkwNDg4MywiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.EegmlLNbXHmmQWcCtN1WncYseZO2PA4gdSxQKMlpoFRP5xD5LLJS2J\_KvnM96JcbVcKXnTiJfUiDTiOesihpOF2f0o-xpUPmSjpxhzrmgFNUL778jj\_XW2FiOH0I0yHy9-EiOns8pWVCx4lD\_1440EzqIXXMFssO3N2r2DrbZ2Ltn2EjSNuUcoxhZEyGBahGQclL73HBqyf06esT4QOOkrhC9L9pkQALyy2RTvYh8tXbVbvYNxmKXWoiN3dVdk74kUFsLsy9bLyifplQ1RqCAL\_B8C1L4gJYJp-aOvLiJkilwuV8ZWIgd7cmBKMUMCBC0MYt57mRLAlioYGdO37tEQ" --ssl-no-revoke

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

HTML File

```

{{< /tab >}}

{{< /tabs >}}


**Case 2: This example demonstrates PUT on /html/{name}/convert/md**

{{< tabs tabTotal="1" tabID="5" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/test.html/convert/md?outpath=aaaa.html" -X PUT -H "Accept: application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE4MTg0ODMsImV4cCI6MTU2MTkwNDg4MywiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.EegmlLNbXHmmQWcCtN1WncYseZO2PA4gdSxQKMlpoFRP5xD5LLJS2J\_KvnM96JcbVcKXnTiJfUiDTiOesihpOF2f0o-xpUPmSjpxhzrmgFNUL778jj\_XW2FiOH0I0yHy9-EiOns8pWVCx4lD\_1440EzqIXXMFssO3N2r2DrbZ2Ltn2EjSNuUcoxhZEyGBahGQclL73HBqyf06esT4QOOkrhC9L9pkQALyy2RTvYh8tXbVbvYNxmKXWoiN3dVdk74kUFsLsy9bLyifplQ1RqCAL\_B8C1L4gJYJp-aOvLiJkilwuV8ZWIgd7cmBKMUMCBC0MYt57mRLAlioYGdO37tEQ" --ssl-no-revoke -d {}

```

{{< /tab >}}

{{< /tabs >}}

**Case 3: This example demonstrates POST on /html/convert/md**

{{< tabs tabTotal="1" tabID="8" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/convert/md?outPath=testing\_out.html" -X POST -F "file=@test.html" -H "Accept: multipart/form-data"  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE4NDA0NjYsImV4cCI6MTU2MTkyNjg2NiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.TEuMwohycL0X4zeRargqybw7loAyrHJtTC-IrfS2OGyMbBjfnUcA0JoRdHc1jOU36PKDga-J0rKX8885BZUnS\_Vu8lR2dLrtn7uYePU08UNcq48sybK1jzgQq-0BYOjmuhGHh\_E4ZyoEbwv-dIlQ3SsBzTM4LP6y51JsghYqbtCkd7O-KUwZT7XDeil7JxPL1e4CkYaGRpopjaVv0QWbXHyaV8-jyB-aZMA-aKG-CpZOw8VEQWoCpvABpIi60\_K9nW9COX6pYCs8P3q8aYl4Iehwo3uZQQWe0AijnpMF4-ObqAQAKlYxHlNBw2be1mDYHuKrtukRvyu6uWmEAJbCZg" --ssl-no-revoke

```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Check out our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
**Case 1: Converts the HTML document to Markdown and returns resulting file in response content**

{{< tabs tabTotal="9" tabID="11" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

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

**Case 2: Converts the HTML document to Markdown and uploads resulting file to storage by specified path**

{{< tabs tabTotal="9" tabID="12" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

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

**Case 3: Converts the HTML document to Markdown and uploads resulting file to storage by specified path**

{{< tabs tabTotal="9" tabID="13" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

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
