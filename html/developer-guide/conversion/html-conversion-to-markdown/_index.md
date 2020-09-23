---
title: "HTML conversion to Markdown"
type: docs
url: /html-conversion-to-markdown/
weight: 40
---

## **Introduction**
This article explains how to convert an HTML document to markdown language.
## **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/{name}/convert/md|GET|Converts the HTML document (located on storage) to Markdown and returns resulting file in response content|[GetConvertDocumentToMarkdown](https://apireference.aspose.cloud/html/#!/Conversion/GetConvertDocumentToMarkdown)|
|/html/{name}/convert/md|PUT|Converts the HTML document (located on storage) to Markdown and uploads resulting file to storage by specified path|[PutConvertDocumentToMarkdown](https://apireference.aspose.cloud/html/#!/Conversion/PutConvertDocumentToMarkdown)|
|/html/convert/md|POST|Converts the HTML document (in request content) to Markdown and uploads resulting file to storage by specified path|[PostConvertDocumentInRequestToMarkdown](https://apireference.aspose.cloud/html/#!/Conversion/PostConvertDocumentInRequestToMarkdown)|
### **cURL Example**
#### **Case 1: This example demonstrates GET on /html/{name}/convert/md**

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/test.html/convert/md" -X GET -H "Accept: application/json"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

HTML File

```

{{< /tab >}}

{{< /tabs >}}


#### **Case 2: This example demonstrates PUT on /html/{name}/convert/md**

{{< tabs tabTotal="1" tabID="5" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/test.html/convert/md?outpath=aaaa.html" -X PUT -H "Accept: application/json"

```

{{< /tab >}}

{{< /tabs >}}

#### **Case 3: This example demonstrates POST on /html/convert/md**

{{< tabs tabTotal="1" tabID="8" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/convert/md?outPath=testing_out.html" -X POST -F "file=@test.html" -H "Accept: multipart/form-data"
```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Check out our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/html/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
#### **Case 1: Converts the HTML document to Markdown and returns resulting file in response content**

{{< tabs tabTotal="9" tabID="11" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "0356132081623477cb85188e4185179c" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "15dc796e1528b72c0453bca0112540c2" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "cf24005277c13f1341246a97c8203d82" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "8df01a3b721f4c09e0525cd260c7cfc6" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "72301a6dc34ae8e7e5d267fe8c70c8cf" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "cf42daae03135eb14d1ec8afbefbe612" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "231845b9ffe8a90d874faaafde6a140e" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "a4bc18fda592a7dedfbd2c32584e1905" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "dff971cf4a911494e2d1a19be4dc5fb7" >}}

{{< /tab >}}

{{< /tabs >}}

#### **Case 2: Converts the HTML document to Markdown and uploads resulting file to storage by specified path**

{{< tabs tabTotal="9" tabID="12" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "ab36700906e02af5242710a1ac317648" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "70f19aa3a8359a173b4ed175e48658bf" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "c5d65dba0f3958e26787a59c7c86aa74" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "a6d27cc3864c9d9fe9bf9a8251c9c86b" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "8268de74ea190a79671424f37ff3d2f8" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "cdf806f4abd545219494cf15926054b0" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "90b077a0e4d3770e6439c2b2f6dd0ddb" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "2dff36bbf599d88433083f7e0237fa03" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "a62fc93afe70e1340f7e7492f8c55de5" >}}

{{< /tab >}}

{{< /tabs >}}

#### **Case 3: Converts the HTML document to Markdown and uploads resulting file to storage by specified path**

{{< tabs tabTotal="9" tabID="13" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}



{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "a8bdab59c107560482a8d74f67977e94" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "f0c492188a67a732c89ea1b5033b6998" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "924eeaa3cf6208952fdfa530f452c39d" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "d71dbad9e8e306df2b7c428024a3a3b6" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "fbcb5c5ab83ce35d212214a6093563c5" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "5b980578fe11b800b52abb6dc37cdd87" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "96b4801e5adf4de7c1dbfc8206695de7" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "3900c3bafb08f9b26e398ca9f7566d80" >}}

{{< /tab >}}

{{< /tabs >}}
