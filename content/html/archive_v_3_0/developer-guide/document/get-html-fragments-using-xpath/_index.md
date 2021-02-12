---
title: "Get HTML fragments using XPath"
type: docs
weight: 20
---

## **Introduction**
This article explain how to get the HTML fragments from the HTML document that match the specified XPath query. Aspose.HTML Cloud provide two APIs to get the list of HTML fragments:
## **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/{name}/fragments/{outFormat}|GET|Return list of HTML fragments matching the specified XPath query|[GetDocumentFragmentByXPath](https://apireference.aspose.cloud/html/#!/Document/GetDocumentFragmentByXPath)|
|/html/fragments/{outFormat}|GET|Return list of HTML fragments matching the specified XPath query by the source page URL|[GetDocumentFragmentByXPathByUrl](https://apireference.aspose.cloud/html/#!/Document/GetDocumentFragmentByXPathByUrl)|
### **cURL Example**
{{% alert color="primary" %}} 

The **/html/{name}/fragments/{outFormat}** operates on a HTML on Cloud Storage

{{% /alert %}} 

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/fragments/json?sourceUrl=https://www.le.ac.uk/oerresources/bdra/html/page_09.htm&xpath=//html/body/table" -X GET -H "Content-Type:application/json" -H "Accept:application/json"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

 [
   {
      "fragment_number":1,
      "value":"\u003ctable width=\u0022100%\u0022 cellspacing=\u00220\u0022 summary=\u0022Main layout table for two-column layout\u0022 dir=\u0022ltr\u0022\u003e\u003ctbody\u003e\u003ctr\u003e\n\u003ctd width=\u0022180\u0022 valign=\u0022top\u0022 id=\u0022maintable-toc\u0022\u003e\n\n\u003cdiv id=\u0022toc\u0022\u003e\n\n\u003ch2\u003e\u003ca id=\u0022toc-title\u0022 href=\u0022index.htm\u0022\u003eTable of Contents\u003c/a\u003e\u003c/h2\u003e\n\n\u003col class=\u0022section\u0022\u003e\n\u003cli\u003e\u003ca href=\u0022page_01.htm\u0022\u003eIntroduction to HTML/XHTML \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\n\u003ca href=\u0022page_06.htm\u0022\u003eStructure of an HTML Document  \u003c/a\u003e\n\u003col\u003e\n\u003cli\u003e\u003ca href=\u0022page_07.htm\u0022\u003epic001.gifHead of an HTML Document  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page_08.htm\u0022\u003eBody of an HTML Document  \u003c/a\u003e\u003c/li\u003e\n\u003cli class=\u0022currentpage\u0022\u003eExample HTML Document  \u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page_10.htm\u0022\u003eGood Working Practices  \u003c/a\u003e\u003c/li\u003e\n\u003c/ol\u003e\n\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page_11.htm\u0022\u003eGetting Started with HTML  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page_19.htm\u0022\u003eHypertext Links  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page_24.htm\u0022\u003eIncluding Pictures  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page_28.htm\u0022\u003eA bit more on XHTML  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page_29.htm\u0022\u003eUpdating Existing HTML Documents to XHTML  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page_30.htm\u0022\u003eCascading Style Sheets  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page_33.htm\u0022\u003eStyle Properties for Text  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page_40.htm\u0022\u003eUtilities  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page_41.htm\u0022\u003eBooks and Further Reading  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page_42.htm\u0022\u003eThe End  \u003c/a\u003e\u003c/li\u003e\n\u003c/ol\u003e\n\n\u003c/div\u003e\n\n\u003c/td\u003e\n\u003ctd width=\u0022\*\u0022 valign=\u0022top\u0022 id=\u0022maintable-content\u0022\u003e\n\n\u003cdiv id=\u0022main-content-withtoc\u0022\u003e\n\n\u003ca name=\u0022Main\u0022\u003e\u003c/a\u003e\n\n\u003ch2\u003eExample HTML Document\u003c/h2\u003e\n\n\u003cp class=\u0022bodycopy\u0022\u003eThe following text should be typed in to a local file on a\nsystem which is equipped with a Web browser.\u003c/p\u003e\n\n\u003cpre class=\u0022bodycopy\u0022\u003e\n\u003chtml\u003e\n\u003chead\u003e\n\u003ctitle\u003e\nA Simple HTML Document\n\u003c/title\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n\u003cp\u003eThis is a very simple HTML document\u003c/p\u003e\n\u003cp\u003eIt only has two paragraphs\u003c/p\u003e\n\u003c/body\u003e\n\u003c/html\u003e\n\u003c/pre\u003e\n\n\u003cp class=\u0022bodycopy\u0022\u003eWhen authoring a Web/HTML document there are several stages\nwhich will be repeated time and time again.\u003c/p\u003e\n\n\u003col class=\u0022bodycopy\u0022\u003e\n\u003cli\u003eUsing a local editor (or word processor) create the HTML\nfile.\u003c/li\u003e\n\n\u003cli\u003eView the local file by using the \u003ctt\u003e\u003cstrong\u003eOpen\nfile...\u003c/strong\u003e\u003c/tt\u003e option on the\n\u003ctt\u003e\u003cstrong\u003eFile\u003c/strong\u003e\u003c/tt\u003e menu.\u003c/li\u003e\n\n\u003cli\u003eIf you see any errors, go back to (1) and repeat the\nexercise. \u003cstrong\u003eNote:\u003c/strong\u003e most Web viewers will store\npreviously viewed pages and sometimes gives the impression that\ncorrections to the original HTML documents have not been made.\nAlways \u003ctt\u003e\u003cstrong\u003eReload\u003c/strong\u003e\u003c/tt\u003e HTML documents after they\nhave been edited.\u003c/li\u003e\n\u003c/ol\u003e\n\n\u003cp class=\u0022bodycopy\u0022\u003eIf there are no errors in your typing etc. the above tags\nshould be interpreted as:\u003c/p\u003e\n\n\u003chr class=\u0022bodycopy\u0022\u003e\n\u003cp class=\u0022bodycopy\u0022\u003e\u003cfont face=\u0022Times New Roman\u0022\u003eThis is a very simple HTML\ndocument\u003c/font\u003e\u003c/p\u003e\n\n\u003cp class=\u0022bodycopy\u0022\u003e\u003cfont face=\u0022Times New Roman\u0022\u003eIt only has two\nparagraphs\u003c/font\u003e\u003c/p\u003e\n\n\u003chr class=\u0022bodycopy\u0022\u003e\n\u003cp class=\u0022bodycopy\u0022\u003eThe document\u0027s title will appear as the viewing windows name\nand the text will appear in the default font for your browser,\nwhich is usually a Times Roman typeface with font size 12\u003ca href=\u0022resources/point.html\u0022 target=\u0022_blank\u0022\u003epoint\u003c/a\u003e.\u003c/p\u003e\n\n\u003cp class=\u0022bodycopy\u0022\u003eAdding headings and further character attributes to your HTML\ndocuments will be discussed in the following sections of this\ncourse.\u003c/p\u003e\n\n\n\u003c/div\u003e\n\n\u003c/td\u003e\n\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e"
   }
]

```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Checkout our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/html/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
#### **Case 1: Get list of HTML fragments matching the specified XPath query:**

{{< tabs tabTotal="9" tabID="5" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "0ad084be38cde8824b24ae26b23d9032" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "b0de16c327b5ae8e16bfaca71c5a5360" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "25b9672e3ad47b7bed14d5b855ce3c8f" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "8d5f13f5ebc931d7f8379f8a464ff52c" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "aa93de349fb7fb322e4a1809ab23c8c8" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "dd5047e750c95434af8410d6d572958c" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "ef46af0fe615e4fd19c10aabde511b15" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "9fe1a500c2afcf150aec9b56f260fa2f" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "9ad0800e54c4b51631fff982e3e5cfed" >}}

{{< /tab >}}

{{< /tabs >}}

#### **Case 2: Get list of HTML fragments matching the specified XPath query by the source page URL:**

{{< tabs tabTotal="9" tabID="6" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "aaf4579bf9cfd6201ab7dff42113c095" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "98fcfdaf6a6a67890dc93c961c77e330" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "8fdcd43382039a37fcab43548389aac7" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "d4f82cebf7436ab0c77f4831b3115c3a" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "0c95a45b689c7b607bc0da09d5a4ead7" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "d1db9e1385e08e781710e2d197dd3e9f" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "315dd52dc842d2b63add5efebcb3d652" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "f989ffe083054c3fc644375fd1ceceb4" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "0732817e88b0f68447d54205ed40d3af" >}}

{{< /tab >}}

{{< /tabs >}}
