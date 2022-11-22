---
title: "Populate HTML Template with Data"
type: docs
aliases: /archive_v_3_0/developer-guide/template-merge/populate-html-template-with-data/
keywords: "Populate HTML Template, JSON , XML, Data, Python, Java, Perl, C#, Android, Swift, Ruby, Go "
description: "Aspose.HTML Cloud API can be used to populate HTML template with JSON and XML data. By merging template you can produce highly effective HTML document."
weight: 10
url: /populate-html-template-with-data/
---

## **Introduction**
This article explains how to populate HTML template with JSON and XML data source. Please go through the [Template Merge](/html/archive_v_3_0/template-merge/) article, which provides an example-based description of template markup elements, and rules of source data to template mapping. You can use of the following two REST APIs for template merge:
## **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/{templateName}/merge|GET|Populate HTML document template with data located as a file in the storage|[GetMergeHtmlTemplate](https://apireference.aspose.cloud/html/#!/TemplateMerge/GetMergeHtmlTemplate)|
|/html/{templateName}/merge|POST|Populate HTML document template with data from the request body. Result document will be saved to storage|[PostMergeHtmlTemplate](https://apireference.aspose.cloud/html/#!/TemplateMerge/PostMergeHtmlTemplate)|
### **cURL Example**
{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/template_3_2.html/merge" -F "dataPath=@merge_data_3.xml" --X POST -H "Accept: multipart/form-data"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

HTML Document 

```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Checkout our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/html/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
#### **Case 1: Populate HTML document template with data located as a file in the storage**

{{< tabs tabTotal="9" tabID="5" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "3391b3746032f8925440c97d71736831" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "92bed3bbc57ffd84b697662f83446c66" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "bee612c9ed106f69bde48e0546a8c8bf" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "da4e81979c2312b99c7298c78d4c591c" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "a197123bd775009f7cae1bb409e44f53" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "e61573ec73f6bc59dec17ac1e69f0f3d" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "ab9f79585edc18877c22634833b5fe42" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "f3150f96a828781344b8cc3b50738216" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "702a1e25c02da5abf1cf3b0d6cd41914" >}}

{{< /tab >}}

{{< /tabs >}}

#### **Case 2: Populate HTML document template with data from the request body and save result document to storage**

{{< tabs tabTotal="9" tabID="6" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "8c406be344946cce9cc496edd7725d2e" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "d28de4b3cf1c1e01f7a84f1e412f4d53" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "5c444d23b86432b0de31f22dc4f711cc" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "0367a9026872dfdcbbf57116f9133e39" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "c925ea960e132306b291c0e5f9a28188" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "57991c4c440e023ecfda212bf63d9f8f" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "01c30fb23028acd4eb9049a776da5a6d" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "4d75c9005fd768f6b67de152caa984ab" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "9d7436f79c272506ce0b2e5b774de790" >}}

{{< /tab >}}

{{< /tabs >}}




