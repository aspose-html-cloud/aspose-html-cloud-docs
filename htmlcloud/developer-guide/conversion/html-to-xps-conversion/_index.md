---
title: "HTML to XPS Conversion"
type: docs
url: /html-to-xps-conversion/
weight: 20
---

## **Introduction**
Aspose.HTML Cloud has provided the simplest API to convert an HTML page to the fixed-layout document format XPS. You can convert the HTML document to XPS either from the storage by its name or from the web by its URL.
### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/{name}/convert/xps|GET|Converts the HTML document (located on storage) to XPS and returns resulting file in response content|[GetConvertDocumentToXps](https://apireference.aspose.cloud/html/#/Conversion/GetConvertDocumentToXps)|
|/html/{name}/convert/xps|PUT|Converts the HTML document (located on storage) to XPS and uploads resulting file to storage|[PutConvertDocumentToXps](https://apireference.aspose.cloud/html/#/Conversion/PutConvertDocumentToXps)|
|/html/convert/xps|GET|Converts the HTML page (located in the Web) to XPS and returns resulting file in response content|[GetConvertDocumentToXpsByUrl](https://apireference.aspose.cloud/html/#/Conversion/GetConvertDocumentToXpsByUrl)|
|/html/convert/xps|POST|Converts the HTML document (in request content) to XPS and uploads resulting file to storage|[PostConvertDocumentInRequestToXps](https://apireference.aspose.cloud/html/#/Conversion/PostConvertDocumentInRequestToXps)|
### **cURL Example**
**Case 1: Converts the HTML document (located on storage) to XPS and returns resulting file in response content:**

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

// First get Access Token

// Get App Key and App SID from https://dashboard.aspose.cloud/

curl -v "https://api.aspose.cloud/oauth2/token" \

-X POST \

-d 'grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX' \

-H "Content-Type: application/x-www-form-urlencoded" \

-H "Accept: application/json"



// cURL example for HTML to XPS Conversion

curl -v "https://api.aspose.cloud/v3.0/html/testpage4\_embcss.html/convert/xps" \

-X GET \

-H "Content-Type: application/json" \

-H "Accept: multipart/form-data" \

-H "Authorization: Bearer SpH8UPprlhncOED8QfVyI9iftyeicQ8brSWt7ANVL5NGYtTV7tT5H4hLevh80V0IIMJ\_C6yCgz-R0Qcyh4FV\_Pg4PbCcJmnQrscCx1OTOcI3t73Lsg7LUMQgJCRcrTZ5TzXcPoV2u0lRKV55qEXUl6zssHMDzPyRmRbzlf7jfkumn1LJMj6jtarSp7yu4hN8kVlvG6K8nz8L85k3QFFCbTnePkVOg2Uiy8mT7wncoa3ynMscqBgQynwL8N9DgKg0L1Ivt-8RgGLNK1GZtDOds8wDoBm4KsxTlihYq3X\_J1tB6zY\_owqnNwkhXGW7uV-oNYGN4E6gU5PaPDNEg0POwOGeohpKi8SwvyHenzGVNdV-HtaWmUdtjd8rl7qhPx8i71pu-31FMrS4yhXczc7V2LzCgIcFlyP\_9D38Z\_UiwFPq5KWb" \

-o testpage4\_embcss.xps

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

Converted XPS File

```

{{< /tab >}}

{{< /tabs >}}

**Case 2: Converts the HTML document (located on storage) to XPS and uploads resulting file to storage:**

{{< tabs tabTotal="2" tabID="4" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

// First get Access Token

// Get App Key and App SID from https://dashboard.aspose.cloud/

curl -v "https://api.aspose.cloud/oauth2/token" \

-X POST \

-d 'grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX' \

-H "Content-Type: application/x-www-form-urlencoded" \

-H "Accept: application/json"



// cURL example for HTML to XPS Conversion

curl -v "https://api.aspose.cloud/v3.0/html/testpage4\_embcss.html/convert/xps?outPath=testpage4\_embcss.xps&storage=MyStorage" \

-X PUT \

-H "Content-Length: 0" \

-H "Content-Type: application/json" \

-H "Accept: multipart/form-data" \

-H "Authorization: Bearer SpH8UPprlhncOED8QfVyI9iftyeicQ8brSWt7ANVL5NGYtTV7tT5H4hLevh80V0IIMJ\_C6yCgz-R0Qcyh4FV\_Pg4PbCcJmnQrscCx1OTOcI3t73Lsg7LUMQgJCRcrTZ5TzXcPoV2u0lRKV55qEXUl6zssHMDzPyRmRbzlf7jfkumn1LJMj6jtarSp7yu4hN8kVlvG6K8nz8L85k3QFFCbTnePkVOg2Uiy8mT7wncoa3ynMscqBgQynwL8N9DgKg0L1Ivt-8RgGLNK1GZtDOds8wDoBm4KsxTlihYq3X\_J1tB6zY\_owqnNwkhXGW7uV-oNYGN4E6gU5PaPDNEg0POwOGeohpKi8SwvyHenzGVNdV-HtaWmUdtjd8rl7qhPx8i71pu-31FMrS4yhXczc7V2LzCgIcFlyP\_9D38Z\_UiwFPq5KWb"

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

**Case 3: Converts the HTML page (located in the Web) to XPS and returns resulting file in response content:**

{{< tabs tabTotal="2" tabID="7" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

// First get Access Token

// Get App Key and App SID from https://dashboard.aspose.cloud/

curl -v "https://api.aspose.cloud/oauth2/token" \

-X POST \

-d 'grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX' \

-H "Content-Type: application/x-www-form-urlencoded" \

-H "Accept: application/json"



// cURL example for HTML to XPS Conversion

curl -v "https://api.aspose.cloud/v3.0/html/convert/xps?sourceUrl=https://www.le.ac.uk/oerresources/bdra/html/page\_01.htm" \

-X GET \

-H "Content-Type: application/json" \

-H "Accept: multipart/form-data" \

-H "Authorization: Bearer SpH8UPprlhncOED8QfVyI9iftyeicQ8brSWt7ANVL5NGYtTV7tT5H4hLevh80V0IIMJ\_C6yCgz-R0Qcyh4FV\_Pg4PbCcJmnQrscCx1OTOcI3t73Lsg7LUMQgJCRcrTZ5TzXcPoV2u0lRKV55qEXUl6zssHMDzPyRmRbzlf7jfkumn1LJMj6jtarSp7yu4hN8kVlvG6K8nz8L85k3QFFCbTnePkVOg2Uiy8mT7wncoa3ynMscqBgQynwL8N9DgKg0L1Ivt-8RgGLNK1GZtDOds8wDoBm4KsxTlihYq3X\_J1tB6zY\_owqnNwkhXGW7uV-oNYGN4E6gU5PaPDNEg0POwOGeohpKi8SwvyHenzGVNdV-HtaWmUdtjd8rl7qhPx8i71pu-31FMrS4yhXczc7V2LzCgIcFlyP\_9D38Z\_UiwFPq5KWb" \

-o testpage4\_embcss.xps

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

Converted XPS File

```

{{< /tab >}}

{{< /tabs >}}

**Case 4: Converts the HTML document (in request content) to XPS and uploads resulting file to storage:**

{{< tabs tabTotal="2" tabID="10" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

// First get Access Token

// Get App Key and App SID from https://dashboard.aspose.cloud/

curl -v "https://api.aspose.cloud/oauth2/token" \

-X POST \

-d 'grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX' \

-H "Content-Type: application/x-www-form-urlencoded" \

-H "Accept: application/json"



// cURL example for HTML to XPS Conversion

curl -v "https://api.aspose.cloud/v3.0/html/convert/xps?outPath=testpage4\_embcss.xps" \

-X PUT \

-T testpage4\_embcss.html \

-H "Content-Type: application/json" \

-H "Accept: multipart/form-data" \

-H "Authorization: Bearer SpH8UPprlhncOED8QfVyI9iftyeicQ8brSWt7ANVL5NGYtTV7tT5H4hLevh80V0IIMJ\_C6yCgz-R0Qcyh4FV\_Pg4PbCcJmnQrscCx1OTOcI3t73Lsg7LUMQgJCRcrTZ5TzXcPoV2u0lRKV55qEXUl6zssHMDzPyRmRbzlf7jfkumn1LJMj6jtarSp7yu4hN8kVlvG6K8nz8L85k3QFFCbTnePkVOg2Uiy8mT7wncoa3ynMscqBgQynwL8N9DgKg0L1Ivt-8RgGLNK1GZtDOds8wDoBm4KsxTlihYq3X\_J1tB6zY\_owqnNwkhXGW7uV-oNYGN4E6gU5PaPDNEg0POwOGeohpKi8SwvyHenzGVNdV-HtaWmUdtjd8rl7qhPx8i71pu-31FMrS4yhXczc7V2LzCgIcFlyP\_9D38Z\_UiwFPq5KWb"

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
**Case 1: Convert the HTML document from the storage by its name to XPS** 

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

**Case 2: Converts the HTML document from storage to XPS**

{{< tabs tabTotal="9" tabID="14" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

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

**Case 3: Convert the HTML page from the web by its URL to XPS** 

{{< tabs tabTotal="9" tabID="15" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

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

**Case 4: Converts the HTML document to XPS and uploads resulting file to storage**



{{< tabs tabTotal="9" tabID="16" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

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
