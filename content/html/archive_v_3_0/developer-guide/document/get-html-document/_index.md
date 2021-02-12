---
title: "Get HTML Document"
type: docs
weight: 10
---

## **Introduction**
This article explains how to get the HTML document by its name. The document is previously uploaded to the Cloud Storage and can be accessed by its name and folder name, if specified.
## **API Information**

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

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/download?sourceUrl=http://help.websiteos.com/websiteos/example_of_a_simple_html_page.htm" -X GET -H "Content-Type:application/json" -H "Accept:multipart/form-data"

```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Checkout our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/html/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
{{< tabs tabTotal="9" tabID="4" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "7b979b97845daa3b3945c974a9893754" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "a959a5b8af98eee4ecf13649973ad50b" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "4a563dae11e0b928f0db93448ed82112" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "9a1b4d48a19ea7a0a56f3000a98444cd" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "088db6074ae0c71bf2c5402c321e18b5" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "5305214543affdfc0d0524e9afcf370d" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "c4b322efa0d5e3c3afe3c0f4f83d5cd5" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "fb170d26ff820d6eee17ff520075751d" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "5adc5ef9dc04b1d6329d44030b780cb5" >}}

{{< /tab >}}

{{< /tabs >}}




