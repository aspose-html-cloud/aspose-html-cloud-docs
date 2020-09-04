---
title: "Populate HTML Template with Data"
type: docs
url: /populate-html-template-with-data/
keywords: "Populate HTML Template, JSON , XML, Data, Python, Java, Perl, C#, Android, Swift, Ruby, Go "
description: "Aspose.HTML Cloud API can be used to populate HTML template with JSON and XML data. By merging template you can produce highly effective HTML document."
weight: 10
---

## **Introduction**
This article explains how to populate HTML template with JSON and XML data source. Please go through the [Template Merge](/template-merge/) article, which provides an example-based description of template markup elements, and rules of source data to template mapping. You can use of the following two REST APIs for template merge:
### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/{templateName}/merge|GET|Populate HTML document template with data located as a file in the storage|[GetMergeHtmlTemplate](https://apireference.aspose.cloud/html/#!/TemplateMerge/GetMergeHtmlTemplate)|
|/html/{templateName}/merge|POST|Populate HTML document template with data from the request body. Result document will be saved to storage|[PostMergeHtmlTemplate](https://apireference.aspose.cloud/html/#!/TemplateMerge/PostMergeHtmlTemplate)|
### **cURL Example**
{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/template\_3\_2.html/merge" -F "dataPath=@merge\_data\_3.xml" --X POST -H "Accept: multipart/form-data" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE4NDIzMDAsImV4cCI6MTU2MTkyODcwMCwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.YykZ\_TwQsmw5uOJSsthSOXIxC\_xJeMEE5a3xxflOZOtEyUYfp5EhYNE5G0rZ4qrXCMmccRT7Bbcc\_xj1rzjri2WIb1oLq6ugKmKnkrN2xUO0DAGHXYkK\_MCHcfByp\_8RrCqfLet4zdN9Li6WeWQNd0DKujlzOZ1niGkSQRf7DRC6OzesVOqLFfDl-tM\_vSmg20zgQKsIEjXr9arjKT7GSLP4Yap1nfHhAZQKbd1r8g5bppVkgGVf920RvzcSd6bbS9uoPjI5-xcgFte4-y3WwEM4JjBX2OvGLPyPwrhrjpMG78YbVSavzjrWyRkpKP6FADuS8vVZLrlZnEv\_zseiRw" --ssl-no-revoke

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
**Case 1: Populate HTML document template with data located as a file in the storage**

{{< tabs tabTotal="9" tabID="5" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

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

**Case 2: Populate HTML document template with data from the request body and save result document to storage**

{{< tabs tabTotal="9" tabID="6" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

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




