---
title: "Get HTML Warnings"
type: docs
url: /get-html-warnings/
keywords: "HTML Warnings, Validate HTML, HTML, Aspose.HTML, Python, Perl, Android, Java, .NET,C#, Swift, Go"
description: "Use Aspose.HTML Cloud and get HTML warnings in the form of JSON or XML format. Fixing the HTML warnings helps in loading fast which plays a key role in improving site ranking."
weight: 20
---

## **Introduction**
Aspose.HTML Cloud, easy to use REST API allows you validate your HTML and get warnings in JSON or XML format. You can use this API with any language: .NET, Java, PHP, Ruby, Rails, Python and many more.
### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/validator|GET|Return html warning or errors in json format|[HtmlVerification](https://apireference.aspose.cloud/html/#/SEO/HtmlVerification)|
### **cURL Example**
{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -X GET "https://api.aspose.cloud/v3.0/html/validator?url=http://help.websiteos.com/websiteos/example\_of\_a\_simple\_html\_page.htm&format=json" -H "accept: application/json" -H "x-aspose-client: Containerize.Swagger"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

Returns the result

```

.

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Checkout our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/available-sdks/) article to learn how to add an SDK to your project.
