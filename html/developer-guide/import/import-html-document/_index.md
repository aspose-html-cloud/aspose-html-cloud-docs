---
title: "Import HTML Document"
type: docs
url: /import-html-document/
keywords: "Markdown to HTML, Aspose.HTML Cloud, Python, Java, Android, Perl, Swift, Ruby"
description: "Aspose.HTML Cloud REST API provides an easiest and most accurate way of Markdown to HTML conversion."
weight: 10
---

## **Introduction**
Aspose.HTML Cloud is an easy to use REST API which allows you multiple features. This article explains how you can easily create/import HTML document from a Markdown file using our this API with any language: .NET, Java, PHP, Ruby, Rails, Python and many more.
## **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/{name}/import/md|GET|Creates an HTML document from Markdown file (located on storage) and returns resulting file in response content|[GetImportMarkdownToHtml](https://apireference.aspose.cloud/html/#/Import/GetImportMarkdownToHtml)|
|/html/{name}/import/md|PUT|Creates an HTML document from Markdown file (located on storage) and uploads resulting file to the storage|[PutImportMarkdownToHtml](https://apireference.aspose.cloud/html/#/Import/PutImportMarkdownToHtml)|
|/html/import/md|POST|Creates an HTML document from Markdown file (in request content) and uploads resulting file to the storage.|[PostImportMarkdownToHtml](https://apireference.aspose.cloud/html/#/Import/PostImportMarkdownToHtml)|
### **cURL Example**
#### **Case 1: Create an HTML document from Markdown file** 

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -X GET "https://api.aspose.cloud/v3.0/html/README.md/import/md" -H "accept: text/html" -H "x-aspose-client: Containerize.Swagger"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

Returns the result. Content is an HTML file.

```

{{< /tab >}}

{{< /tabs >}}

#### **Case 2: Create an HTML document from Markdown file and upload result file to cloud storage**

{{< tabs tabTotal="2" tabID="5" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -X PUT "https://api.aspose.cloud/v3.0/html/README.md/import/md?outPath=HtmlDoc/put\_md\_to\_html.html&folder=HtmlDoc" -H "accept: application/json" -H "x-aspose-client: Containerize.Swagger"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

Returns the result. Content is an HTML file.

```

{{< /tab >}}

{{< /tabs >}}

#### **Case 3: Create an HTML document from Markdown file (in request content)**

{{< tabs tabTotal="1" tabID="9" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -X POST "https://api.aspose.cloud/v3.0/html/import/md?outPath=put\_md\_to\_html.html" -H "accept: application/json" -H "x-aspose-client: Containerize.Swagger"

```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Checkout our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
#### **Case 1: Create an HTML document from Markdown file and upload result file to cloud storage**
 
{{< tabs tabTotal="9" tabID="12" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "cb3161cafdcc926a79f583c0565ba756" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "39b4c03164b3ac2e65ee0e254ce2fbb4" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "65638882c0a7db731570e83dfffb238b" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "45163c3d5de4c387ee31c6a5936fe5a8" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "ef4dfefb11bedf17e1e475aaccee0a53" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "471379e6131efd8dd3c437bf1cb19b87" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "0cae28e193d39b1585afa3a4eede6446" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "e58c1494da0d18263877cc15f90d9dfb" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "ed63a00b724ca3aa634fec251e62bd19" >}}

{{< /tab >}}

{{< /tabs >}}

#### **Case 2: Create an HTML document from Markdown file and upload result file to cloud storage**

{{< tabs tabTotal="9" tabID="13" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "1f7cd996d1f72829efbe908988e70b2b" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "e542485cf173e39e576b216d5fa6c250" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "72e21d3714d88ef7330bd4c02ab8eec3" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "08c0c788a20aca5aba670b08bd91fe10" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "45550ead33fd8fd64544482d965e4f7c" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "f283f1271408752d9e7ef4635e485b0b" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "d2308da23332ed70760b1031aa286a20" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "a12afb41b77cc03e469bca89d1be456c" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "116b9fb8b143edcc5f7004e84a55fb0e" >}}

{{< /tab >}}

{{< /tabs >}}

#### **Case 3: Create an HTML document from Markdown file (in request content)**

{{< tabs tabTotal="9" tabID="14" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "4d1ce89a034b28a3606e54b61ef9f2d4" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "4eac89a2086e541f162070f7a17c34d6" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "184d0a02125fc2e932e66425e21c4d8c" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "3b9c3e65eab22acc59cd83c615294698" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "895ca587a23a67804cfac5c163bdf05a" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "a0fb2f671546f1fc91a3ec55d0ce30f7" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "57935121bfe89a57208e77a7e447797c" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "ecee3adfe12c4fc30cf1c21e509bb0c6" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "38a1b04f28c3ff6516f40e9e7e7c5e13" >}}

{{< /tab >}}

{{< /tabs >}}
