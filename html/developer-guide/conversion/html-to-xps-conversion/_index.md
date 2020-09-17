---
title: "HTML to XPS Conversion"
type: docs
url: /html-to-xps-conversion/
weight: 20
---

## **Introduction**
Aspose.HTML Cloud has provided the simplest API to convert an HTML page to the fixed-layout document format XPS. You can convert the HTML document to XPS either from the storage by its name or from the web by its URL.
## **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/{name}/convert/xps|GET|Converts the HTML document (located on storage) to XPS and returns resulting file in response content|[GetConvertDocumentToXps](https://apireference.aspose.cloud/html/#/Conversion/GetConvertDocumentToXps)|
|/html/{name}/convert/xps|PUT|Converts the HTML document (located on storage) to XPS and uploads resulting file to storage|[PutConvertDocumentToXps](https://apireference.aspose.cloud/html/#/Conversion/PutConvertDocumentToXps)|
|/html/convert/xps|GET|Converts the HTML page (located in the Web) to XPS and returns resulting file in response content|[GetConvertDocumentToXpsByUrl](https://apireference.aspose.cloud/html/#/Conversion/GetConvertDocumentToXpsByUrl)|
|/html/convert/xps|POST|Converts the HTML document (in request content) to XPS and uploads resulting file to storage|[PostConvertDocumentInRequestToXps](https://apireference.aspose.cloud/html/#/Conversion/PostConvertDocumentInRequestToXps)|
### **cURL Example**
#### **Case 1: Converts the HTML document (located on storage) to XPS and returns resulting file in response content:**

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

// First get Access Token

// Get App Key and App SID from https://dashboard.aspose.cloud/

curl -v "https://api.aspose.cloud/oauth2/token" -X POST -d 'grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX' -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

 ```
 
 ```java

// cURL example for HTML to XPS Conversion

curl -v "https://api.aspose.cloud/v3.0/html/testpage4_embcss.html/convert/xps" -X GET -H "Content-Type: application/json" -H "Accept: multipart/form-data"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

Converted XPS File

```

{{< /tab >}}

{{< /tabs >}}

#### **Case 2: Converts the HTML document (located on storage) to XPS and uploads resulting file to storage:**

{{< tabs tabTotal="2" tabID="4" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

// First get Access Token

// Get App Key and App SID from https://dashboard.aspose.cloud/

curl -v "https://api.aspose.cloud/oauth2/token" -X POST -d 'grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX' -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

// cURL example for HTML to XPS Conversion

curl -v "https://api.aspose.cloud/v3.0/html/testpage4_embcss.html/convert/xps?outPath=testpage4_embcss.xps&storage=MyStorage" -X PUT -H "Content-Length: 0" -H "Content-Type: application/json" -H "Accept: multipart/form-data" 

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

{
  "Code": 200,
  "Status": "OK"
}

```

{{< /tab >}}

{{< /tabs >}}

#### **Case 3: Converts the HTML page (located in the Web) to XPS and returns resulting file in response content:**

{{< tabs tabTotal="2" tabID="7" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

// First get Access Token

// Get App Key and App SID from https://dashboard.aspose.cloud/

curl -v "https://api.aspose.cloud/oauth2/token" -X POST -d 'grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX' -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

// cURL example for HTML to XPS Conversion

curl -v "https://api.aspose.cloud/v3.0/html/convert/xps?sourceUrl=https://www.le.ac.uk/oerresources/bdra/html/page_01.htm" -X GET -H "Content-Type: application/json" -H "Accept: multipart/form-data"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

Converted XPS File

```

{{< /tab >}}

{{< /tabs >}}

#### **Case 4: Converts the HTML document (in request content) to XPS and uploads resulting file to storage:**

{{< tabs tabTotal="2" tabID="10" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

// First get Access Token

// Get App Key and App SID from https://dashboard.aspose.cloud/

curl -v "https://api.aspose.cloud/oauth2/token" -X POST -d 'grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX' -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

// cURL example for HTML to XPS Conversion

curl -v "https://api.aspose.cloud/v3.0/html/convert/xps?outPath=testpage4_embcss.xps" -X PUT -T testpage4_embcss.html -H "Content-Type: application/json" -H "Accept: multipart/form-data" 

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

{
  "Code": 200,
  "Status": "OK"
}

```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Check out our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
#### **Case 1: Convert the HTML document from the storage by its name to XPS** 

{{< tabs tabTotal="9" tabID="13" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "e21ab0a49cf89992f3164e42eb0d23df" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "c9b6970434d767784901ad3d5bd1960b" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "e5b94f81822a233a329b8e6133cfe232" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "1cbdd318e3adf3f6f8e195ae50b0c467" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "783a40f62f5f12247aed3b5001631132" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "58321f1f663a40884f02b23f5cef7cd5" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "fbd546289c068dc51d296af2a0632cec" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "f500d28be8614041837bc3ce84e18bd7" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "fb83dec44cc8e2e5cc3ac7c7afae4551" >}}

{{< /tab >}}

{{< /tabs >}}

#### **Case 2: Converts the HTML document from storage to XPS**

{{< tabs tabTotal="9" tabID="14" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "30a67eecc86c7c01fe265062a14f3d2e" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "12b0d0b48495919e3c68e2fda1a30799" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "fec3c1a1e4655b706816357ff14377c5" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "3a7829169fc870e182d7ef5e17731ef9" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "f86dbe8b5fb0f785f6f02e84150afa93" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "7dec3dac9ee4bc83c7b7472c4785f127" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "f0bb55aa5796088966ee1e4d06671d1e" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "84c3d6e873dbdb1e406b8206894d6ea3" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "9a829bfe2aeddbddeccfdd127551f8ab" >}}

{{< /tab >}}

{{< /tabs >}}

#### **Case 3: Convert the HTML page from the web by its URL to XPS** 

{{< tabs tabTotal="9" tabID="15" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "5281de29e631830ffc9ab1e44ea9988a" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "b72a624104a5c900abea575fd6f707cb" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "080c13b6e471257c82ed7128d2c1cebf" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "ed149fb50a56700651278e767a6a3c26" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "61a7a8b7388be78ac29d86b0d148de93" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "306b0dd53e3ed764b7d7a6c7504a16c3" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "efb5d05389d64d4da1785524194b90ce" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "dd661956d19079caa0f35dc0eb9eab58" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "94bcfd4cdc855983201dc4ab1d43cf02" >}}

{{< /tab >}}

{{< /tabs >}}

#### **Case 4: Converts the HTML document to XPS and uploads resulting file to storage**

{{< tabs tabTotal="9" tabID="16" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}



{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "9c1475a9b69bc19a5b040c07192db84e" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "3ad4bd68a3534303d31fa16bb2d869dd" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "6547378c3f9ad523fb946d8c56eeae0f" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "66395cea35f82a523d57eec45fc91ef8" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "b1d7354aae203a39de78774e37aeb204" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "14c944ce17117ce6c4c72e4247f10e05" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "efa05ba0fd528a8044fb4cba8ce94af9" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "a01ad8029f3adfffc762dc775d072a3b" >}}

{{< /tab >}}

{{< /tabs >}}
