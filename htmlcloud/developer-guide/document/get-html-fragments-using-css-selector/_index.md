---
title: "Get HTML fragments using CSS Selector"
type: docs
url: /get-html-fragments-using-css-selector/
weight: 40
---

## **Introduction**
This article explain how to get the HTML fragments from the HTML document that match the specified CSS selector. Aspose.HTML Cloud provide two APIs to get the list of HTML fragments:
### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/{name}/fragments/css/{outFormat}|GET|Return list of HTML fragments matching the specified CSS selector|[GetDocumentFragmentsByCSSSelector](https://apireference.aspose.cloud/html/#!/Document/GetDocumentFragmentsByCSSSelector)|
|/html/fragments/css/{outFormat}|GET|Return list of HTML fragments matching the specified CSS selector by the source page URL|[GetDocumentFragmentsByCSSSelectorByUrl](https://apireference.aspose.cloud/html/#!/Document/GetDocumentFragmentsByCSSSelectorByUrl)|
### **cURL Example**
{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/oauth2/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/fragments/css/json?sourceUrl=https://www.le.ac.uk/oerresources/bdra/html/page\_09.htm&selector=table" -X GET -H "Content-Type:application/json" -H "Accept:application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE2NzI1ODEsImV4cCI6MTU2MTc1ODk4MSwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.giiO1-D9Zw6q9RhEkm-fmCjRV1GuyTHr4Db-o0jCjZMoQfHddSAG1IpBmuDZHvLSSr6lp2yqCHDSAaNNoGdH\_AaCKdT73VfeiCQIOzxbMEzF53N304\_GQ39gr2-Zq6fgHW8uD\_Sd-BiHwDvt5PkGJR23NUPF7US8ZWhvHpiTrZEzpSiNZEiLISA1bh\_L8SiJtLGKgzXn2BgyR\_Kxw\_i\_WXYmbqtPry8w-P25gUjcthHbqzqO6VITzAFAt2jKMQ25YYXnhigNDfPYrc9iTmbKoEggaitR-sz8YIyxEctEcdoECyQo2Dibxf6-a8iVxlsKNfStsnymyfEl1WvyzQyzxA" --ssl-no-revoke

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

[

   {

      "fragment\_number":1,

      "value":"\u003ctable width=\u0022100%\u0022 cellspacing=\u00220\u0022 summary=\u0022Main layout table for two-column layout\u0022 dir=\u0022ltr\u0022\u003e\u003ctbody\u003e\u003ctr\u003e\n\u003ctd width=\u0022180\u0022 valign=\u0022top\u0022 id=\u0022maintable-toc\u0022\u003e\n\n\u003cdiv id=\u0022toc\u0022\u003e\n\n\u003ch2\u003e\u003ca id=\u0022toc-title\u0022 href=\u0022index.htm\u0022\u003eTable of Contents\u003c/a\u003e\u003c/h2\u003e\n\n\u003col class=\u0022section\u0022\u003e\n\u003cli\u003e\u003ca href=\u0022page\_01.htm\u0022\u003eIntroduction to HTML/XHTML \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\n\u003ca href=\u0022page\_06.htm\u0022\u003eStructure of an HTML Document  \u003c/a\u003e\n\u003col\u003e\n\u003cli\u003e\u003ca href=\u0022page\_07.htm\u0022\u003epic001.gifHead of an HTML Document  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page\_08.htm\u0022\u003eBody of an HTML Document  \u003c/a\u003e\u003c/li\u003e\n\u003cli class=\u0022currentpage\u0022\u003eExample HTML Document  \u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page\_10.htm\u0022\u003eGood Working Practices  \u003c/a\u003e\u003c/li\u003e\n\u003c/ol\u003e\n\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page\_11.htm\u0022\u003eGetting Started with HTML  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page\_19.htm\u0022\u003eHypertext Links  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page\_24.htm\u0022\u003eIncluding Pictures  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page\_28.htm\u0022\u003eA bit more on XHTML  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page\_29.htm\u0022\u003eUpdating Existing HTML Documents to XHTML  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page\_30.htm\u0022\u003eCascading Style Sheets  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page\_33.htm\u0022\u003eStyle Properties for Text  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page\_40.htm\u0022\u003eUtilities  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page\_41.htm\u0022\u003eBooks and Further Reading  \u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\u0022page\_42.htm\u0022\u003eThe End  \u003c/a\u003e\u003c/li\u003e\n\u003c/ol\u003e\n\n\u003c/div\u003e\n\n\u003c/td\u003e\n\u003ctd width=\u0022\*\u0022 valign=\u0022top\u0022 id=\u0022maintable-content\u0022\u003e\n\n\u003cdiv id=\u0022main-content-withtoc\u0022\u003e\n\n\u003ca name=\u0022Main\u0022\u003e\u003c/a\u003e\n\n\u003ch2\u003eExample HTML Document\u003c/h2\u003e\n\n\u003cp class=\u0022bodycopy\u0022\u003eThe following text should be typed in to a local file on a\nsystem which is equipped with a Web browser.\u003c/p\u003e\n\n\u003cpre class=\u0022bodycopy\u0022\u003e\n\u003chtml\u003e\n\u003chead\u003e\n\u003ctitle\u003e\nA Simple HTML Document\n\u003c/title\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n\u003cp\u003eThis is a very simple HTML document\u003c/p\u003e\n\u003cp\u003eIt only has two paragraphs\u003c/p\u003e\n\u003c/body\u003e\n\u003c/html\u003e\n\u003c/pre\u003e\n\n\u003cp class=\u0022bodycopy\u0022\u003eWhen authoring a Web/HTML document there are several stages\nwhich will be repeated time and time again.\u003c/p\u003e\n\n\u003col class=\u0022bodycopy\u0022\u003e\n\u003cli\u003eUsing a local editor (or word processor) create the HTML\nfile.\u003c/li\u003e\n\n\u003cli\u003eView the local file by using the \u003ctt\u003e\u003cstrong\u003eOpen\nfile...\u003c/strong\u003e\u003c/tt\u003e option on the\n\u003ctt\u003e\u003cstrong\u003eFile\u003c/strong\u003e\u003c/tt\u003e menu.\u003c/li\u003e\n\n\u003cli\u003eIf you see any errors, go back to (1) and repeat the\nexercise. \u003cstrong\u003eNote:\u003c/strong\u003e most Web viewers will store\npreviously viewed pages and sometimes gives the impression that\ncorrections to the original HTML documents have not been made.\nAlways \u003ctt\u003e\u003cstrong\u003eReload\u003c/strong\u003e\u003c/tt\u003e HTML documents after they\nhave been edited.\u003c/li\u003e\n\u003c/ol\u003e\n\n\u003cp class=\u0022bodycopy\u0022\u003eIf there are no errors in your typing etc. the above tags\nshould be interpreted as:\u003c/p\u003e\n\n\u003chr class=\u0022bodycopy\u0022\u003e\n\u003cp class=\u0022bodycopy\u0022\u003e\u003cfont face=\u0022Times New Roman\u0022\u003eThis is a very simple HTML\ndocument\u003c/font\u003e\u003c/p\u003e\n\n\u003cp class=\u0022bodycopy\u0022\u003e\u003cfont face=\u0022Times New Roman\u0022\u003eIt only has two\nparagraphs\u003c/font\u003e\u003c/p\u003e\n\n\u003chr class=\u0022bodycopy\u0022\u003e\n\u003cp class=\u0022bodycopy\u0022\u003eThe document\u0027s title will appear as the viewing windows name\nand the text will appear in the default font for your browser,\nwhich is usually a Times Roman typeface with font size 12\u003ca href=\u0022resources/point.html\u0022 target=\u0022\_blank\u0022\u003epoint\u003c/a\u003e.\u003c/p\u003e\n\n\u003cp class=\u0022bodycopy\u0022\u003eAdding headings and further character attributes to your HTML\ndocuments will be discussed in the following sections of this\ncourse.\u003c/p\u003e\n\n\n\u003c/div\u003e\n\n\u003c/td\u003e\n\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e"

   }

]

```

{{< /tab >}}

{{< /tabs >}}
## **Available SDKs**
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Checkout our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
**Case 1: Get list of HTML fragments matching the specified CSS selector:**

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

**Case 2: Get list of HTML fragments matching the specified CSS selector by the source page URL:**

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




