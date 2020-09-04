---
title: "Import HTML Document"
type: docs
url: /import-html-document/
keywords: "Markdown to HTML, Aspose.HTML Cloud, Python, Java, Android, Perl, Swift, Ruby"
description: "Aspose.HTML Cloud REST API provides an easiest and most accurate way of Markdown to HTML conversion."
weight: 10
---

## **Introduction**
Aspose.HTML Cloud is an easy to use REST API which allows you multiple features. This article explains how you can easily create/import HTML document from a Markdown file using our this API with any language: .NET, Java, PHP, Ruby, Rails, Python and many more.
### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/{name}/import/md|GET|Creates an HTML document from Markdown file (located on storage) and returns resulting file in response content|[GetImportMarkdownToHtml](https://apireference.aspose.cloud/html/#/Import/GetImportMarkdownToHtml)|
|/html/{name}/import/md|PUT|Creates an HTML document from Markdown file (located on storage) and uploads resulting file to the storage|[PutImportMarkdownToHtml](https://apireference.aspose.cloud/html/#/Import/PutImportMarkdownToHtml)|
|/html/import/md|POST|Creates an HTML document from Markdown file (in request content) and uploads resulting file to the storage.|[PostImportMarkdownToHtml](https://apireference.aspose.cloud/html/#/Import/PostImportMarkdownToHtml)|
### **cURL Example**
**Case 1: Create an HTML document from Markdown file** 

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -X GET "https://api.aspose.cloud/v3.0/html/README.md/import/md" 

-H "accept: text/html" 

-H "x-aspose-client: Containerize.Swagger"

-H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTE5NTQ5OTIsImV4cCI6MTU5MjA0MTM5MiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiLCJhcGkuc3RvcmFnZSJdLCJjbGllbnRfaWQiOiI5YWEyNjU4Yy1kMTVjLTQ0ZTgtYTA3NS0zMWQ2N2M3YmIxYWIiLCJjbGllbnRfZGVmYXVsdF9zdG9yYWdlIjoiNjVEQkVCNkUtRDBCRS00MDBCLThCMzItRTZEQjcxODE1MUUxIiwiY2xpZW50X2lkU3J2SWQiOiI3MDQ3NzkiLCJzY29wZSI6WyJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiLCJhcGkuc3RvcmFnZSJdfQ.pJ2J3a8kmybu8r\_FXAlLhX4cRm0wF\_UUI081QT\_NbwHzp-TIH3Wj4FKr18DaaoA7KlA5ZMgXOIBsQpqUU27-jaXm5\_Dxl\_Y04nu8M4CycxClXSknpySUxMTHt6tnCPP\_\_vf7o8i9tHcr5s1S7sk3Gf\_35CL692TSHU27ybUgpQVhjUQiy18GYDpSRd6Bdi48T715APM0HKu4CncYjMLuJX3SxMwX6KXYW9sxpJQXorGER4DChzZ5-Mx7jcTAgfqZj7r8EEl-R5o-qt4NvUM5Bjc9ENiESOYmxpZkn8B4-e8\_oJwKJ-d22w69Vfqflq5h1oVeQGhn4kLAJ1JTWtbhOA"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

Returns the result. Content is an HTML file.

```

{{< /tab >}}

{{< /tabs >}}

**Case 2: Create an HTML document from Markdown file and upload result file to cloud storage**

{{< tabs tabTotal="2" tabID="5" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -X PUT "https://api.aspose.cloud/v3.0/html/README.md/import/md?outPath=HtmlDoc/put\_md\_to\_html.html&folder=HtmlDoc" 

-H "accept: application/json" 

-H "x-aspose-client: Containerize.Swagger"

-H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTE5NTQ5OTIsImV4cCI6MTU5MjA0MTM5MiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiLCJhcGkuc3RvcmFnZSJdLCJjbGllbnRfaWQiOiI5YWEyNjU4Yy1kMTVjLTQ0ZTgtYTA3NS0zMWQ2N2M3YmIxYWIiLCJjbGllbnRfZGVmYXVsdF9zdG9yYWdlIjoiNjVEQkVCNkUtRDBCRS00MDBCLThCMzItRTZEQjcxODE1MUUxIiwiY2xpZW50X2lkU3J2SWQiOiI3MDQ3NzkiLCJzY29wZSI6WyJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiLCJhcGkuc3RvcmFnZSJdfQ.pJ2J3a8kmybu8r\_FXAlLhX4cRm0wF\_UUI081QT\_NbwHzp-TIH3Wj4FKr18DaaoA7KlA5ZMgXOIBsQpqUU27-jaXm5\_Dxl\_Y04nu8M4CycxClXSknpySUxMTHt6tnCPP\_\_vf7o8i9tHcr5s1S7sk3Gf\_35CL692TSHU27ybUgpQVhjUQiy18GYDpSRd6Bdi48T715APM0HKu4CncYjMLuJX3SxMwX6KXYW9sxpJQXorGER4DChzZ5-Mx7jcTAgfqZj7r8EEl-R5o-qt4NvUM5Bjc9ENiESOYmxpZkn8B4-e8\_oJwKJ-d22w69Vfqflq5h1oVeQGhn4kLAJ1JTWtbhOA"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

Returns the result. Content is an HTML file.

```

{{< /tab >}}

{{< /tabs >}}

**Case 3: Create an HTML document from Markdown file (in request content)**

{{< tabs tabTotal="1" tabID="9" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -X POST "https://api.aspose.cloud/v3.0/html/import/md?outPath=put\_md\_to\_html.html" 

-H "accept: application/json" 

-H "x-aspose-client: Containerize.Swagger"

-H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTE5NTQ5OTIsImV4cCI6MTU5MjA0MTM5MiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiLCJhcGkuc3RvcmFnZSJdLCJjbGllbnRfaWQiOiI5YWEyNjU4Yy1kMTVjLTQ0ZTgtYTA3NS0zMWQ2N2M3YmIxYWIiLCJjbGllbnRfZGVmYXVsdF9zdG9yYWdlIjoiNjVEQkVCNkUtRDBCRS00MDBCLThCMzItRTZEQjcxODE1MUUxIiwiY2xpZW50X2lkU3J2SWQiOiI3MDQ3NzkiLCJzY29wZSI6WyJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiLCJhcGkuc3RvcmFnZSJdfQ.pJ2J3a8kmybu8r\_FXAlLhX4cRm0wF\_UUI081QT\_NbwHzp-TIH3Wj4FKr18DaaoA7KlA5ZMgXOIBsQpqUU27-jaXm5\_Dxl\_Y04nu8M4CycxClXSknpySUxMTHt6tnCPP\_\_vf7o8i9tHcr5s1S7sk3Gf\_35CL692TSHU27ybUgpQVhjUQiy18GYDpSRd6Bdi48T715APM0HKu4CncYjMLuJX3SxMwX6KXYW9sxpJQXorGER4DChzZ5-Mx7jcTAgfqZj7r8EEl-R5o-qt4NvUM5Bjc9ENiESOYmxpZkn8B4-e8\_oJwKJ-d22w69Vfqflq5h1oVeQGhn4kLAJ1JTWtbhOA"

```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Checkout our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
**Case 1: Create an HTML document from Markdown file and upload result file to cloud storage**

{{< tabs tabTotal="9" tabID="12" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

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

**Case 2: Create an HTML document from Markdown file and upload result file to cloud storage**

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

**Case 3: Create an HTML document from Markdown file (in request content)**

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
