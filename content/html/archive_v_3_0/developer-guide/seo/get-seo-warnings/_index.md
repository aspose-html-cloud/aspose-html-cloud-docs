---
title: "Get SEO Warnings"
type: docs
url: /get-seo-warnings/
keywords: "SEO Warnings, HTML, Aspose.HTML, Python, Perl, Android, Java, .NET,C#, Swift, Go"
description: "Improve your site ranking by getting SEO warnings in JSON format using Aspose.HTML Cloud, a REST API that can be use in any language like .NET, Java, Python, Perl, Ruby, PHP and many more."
weight: 10
---

## **Introduction**
Aspose.HTML Cloud, easy to use REST API allows you to get SEO warnings in JSON format,, that may help in SEO fixes that can boost your rankings in no time. You can use our REST API with any language: .NET, Java, PHP, Ruby, Rails, Python, jQuery and many more.
## **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/seo|GET|Return SEO warnings in json format|[GetSEO](https://apireference.aspose.cloud/html/#/SEO/Get)|
### **cURL Example**
{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java
// First get Access Token
// Get Client ID and Client Secret from https://dashboard.aspose.cloud/

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -X GET "https://api.aspose.cloud/v3.0/html/seo?addr=http://help.websiteos.com/websiteos/example_of_a_simple_html_page.htm" -H "accept: application/json" -H "x-aspose-client: Containerize.Swagger"  -H "Authorization: Bearer [access token]"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

{
	url:warning
}

```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Checkout our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/html/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
{{< tabs tabTotal="1" tabID="5" tabName1="C#" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "306992ad1634e92202728f8ff0c64f3b" >}}

{{< /tab >}}

{{< /tabs >}}
