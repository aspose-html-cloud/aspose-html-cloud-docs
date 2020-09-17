---
title: "HTML conversion to MHTML"
type: docs
url: /html-conversion-to-mhtml/
weight: 50
---

## **Introduction**
This article explains how to convert an HTML document to MHTML language. 
## **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/convert/mhtml|GET|Converts the HTML page from Web by its URL to MHTML returns resulting file in response content|[GetConvertDocumentToMHTMLByUrl](https://apireference.aspose.cloud/html/#!/Conversion/GetConvertDocumentToMHTMLByUrl)|
### **cURL Example**
{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/convert/mhtml?sourceURL=http://help.websiteos.com/websiteos/example\_of\_a\_simple\_html\_page.htm" -X GET -H "Accept: application/json"

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

{{< gist "aspose-cloud" "4a4cc875ae01e3ef985330696eef8938" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "9e72dbc59a4fb1c2b643519b7970b1b5" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "fd23d9f12effe5b0f396d5f5e1289b0d" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "4db3f7f19aa262ce289970a1142a3697" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "cb1441e79a3737eb08ef7194aa3f961b" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "d22ea8768dd1150b71ff637d55a59eda" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "87de306fab6e7b01f1f4b8b3e8f86bb3" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "8c35bf2b0009ac4c8a63a1094b33044d" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "b5d4eb27e437898c72bc5177760f626d" >}}

{{< /tab >}}

{{< /tabs >}}
