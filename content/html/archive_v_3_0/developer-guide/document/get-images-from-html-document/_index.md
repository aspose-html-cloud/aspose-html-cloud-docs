---
title: "Get Images from HTML document"
type: docs
weight: 30
---

## **Introduction**
This article explain how to get all images from the HTML document. Aspose.HTML Cloud provide two APIs to get HTML document images:
## **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/{name}/images/all|GET|Return all HTML document images packaged as a ZIP archive|[GetDocumentImages](https://apireference.aspose.cloud/html/#/Document/GetDocumentImages)|
|/html/images/all|GET|Return all HTML page images packaged as a ZIP archive by the source page URL|[GetDocumentImagesByUrl](https://apireference.aspose.cloud/html/#/Document/GetDocumentImagesByUrl)|
### **cURL Example**
{{< tabs tabTotal="1" tabID="1" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/oauth2/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/images/all?sourceUrl=https://www.yourhtmlsource.com/myfirstsite/basicimages.html" -X GET -H "Content-Type:application/json" -H "Accept:application/json"

```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Checkout our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/html/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
#### **Case 1: Get all HTML document images packaged as a ZIP archive:**

{{< tabs tabTotal="9" tabID="4" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "016f08e057466300ebb6f000408a8053" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "bd52b195441774cfd455b299bf7779e7" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "98843645ac2e81e9b69065167ec88232" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "94c4f162464e9755e491ea015c1e3f29" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "54b32872998a597658aec7b16855a1b1" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "d02ee4e41ca43c3e16d91ffa03ef3427" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "9a4d5e12ff29e540b0107844133bfc1c" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "93662f46fc3f20d4b683b3d44b549653" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "77d3c087babb0b75fcb8302804166401" >}}

{{< /tab >}}

{{< /tabs >}}

#### **Case 2: Get all HTML page images packaged as a ZIP archive by the source page URL:**

{{< tabs tabTotal="9" tabID="5" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "aa6e161111c0b7596889509abbec3885" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "5258b8bd26e10563880c549867b46193" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "d725c87dd8eed4409e9f5a8de64858c0" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "47b5ad95d81bdfd2318afb84e8ce6a0d" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "74a6b170bfc8e1c487632ef94f8652e6" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "5721772789a88210d1fb304eee1d748e" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "58682a126b84c3fa71484dc6287c5185" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "dafc4191cd8131dddaa6c66daf7b4e27" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "4f808a3a0dd075adad8068afe223d739" >}}

{{< /tab >}}

{{< /tabs >}}
