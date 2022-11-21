---
title: "Get HTML fragments using CSS Selector"
type: docs
aliases: /archive_v_3_0/developer-guide/document/get-html-fragments-using-css-selector/
weight: 40
url: /get-html-fragments-using-css-selector/
---

## **Introduction**
This article explain how to get the HTML fragments from the HTML document that match the specified CSS selector. Aspose.HTML Cloud provide two APIs to get the list of HTML fragments:
## **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/{name}/fragments/css/{outFormat}|GET|Return list of HTML fragments matching the specified CSS selector|[GetDocumentFragmentsByCSSSelector](https://apireference.aspose.cloud/html/#!/Document/GetDocumentFragmentsByCSSSelector)|
|/html/fragments/css/{outFormat}|GET|Return list of HTML fragments matching the specified CSS selector by the source page URL|[GetDocumentFragmentsByCSSSelectorByUrl](https://apireference.aspose.cloud/html/#!/Document/GetDocumentFragmentsByCSSSelectorByUrl)|
### **cURL Example**
{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/oauth2/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v "https://api.aspose.cloud/v3.0/html/fragments/css/json?sourceUrl=https://www.le.ac.uk/oerresources/bdra/html/page_09.htm&selector=table" -X GET -H "Content-Type:application/json" -H "Accept:application/json"

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
Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Checkout our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/html/available-sdks/) article to learn how to add an SDK to your project.
### **SDK Examples**
#### **Case 1: Get list of HTML fragments matching the specified CSS selector:**

{{< tabs tabTotal="9" tabID="5" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "826b290f7612f5112e85201283f49205" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "167b6fcf6517ae4bd3460119d4a2d6a7" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "83e4c5aa50c34441748e02f3942595a7" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "e530b55819cf65f12572b64fddee2a38" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "647068c9ea1228fd2d7f5e06cc5e5971" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "df88f06442658316cb6f7f6a446c85d5" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "8ca3cb5e4992bfb4c8642818adf21096" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "b6c827de0d2b5d45e7a2d5fbd6cf04b6" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "cde67313c96e62e766750dfad8a19fa8" >}}

{{< /tab >}}

{{< /tabs >}}

#### **Case 2: Get list of HTML fragments matching the specified CSS selector by the source page URL:**

{{< tabs tabTotal="9" tabID="6" tabName1="C#" tabName2="Python" tabName3="PHP" tabName4="Ruby" tabName5="Node.js" tabName6="Android" tabName7="Java" tabName8="Swift" tabName9="C++" >}}

{{< tab tabNum="1" >}}

{{< gist "aspose-cloud" "4434ed553a62344f9725ec5048681fb0" >}}

{{< /tab >}}

{{< tab tabNum="2" >}}

{{< gist "aspose-cloud" "00b38b0ec9c5b5503639944462128f80" >}}

{{< /tab >}}

{{< tab tabNum="3" >}}

{{< gist "aspose-cloud" "fdb14d4479d876df5e9a659260d81aaf" >}}

{{< /tab >}}

{{< tab tabNum="4" >}}

{{< gist "aspose-cloud" "bfecfdbbefbd532b9c1e9e1d55307302" >}}

{{< /tab >}}

{{< tab tabNum="5" >}}

{{< gist "aspose-cloud" "5ff02cb48c4339bfbca499f94555dfc7" >}}

{{< /tab >}}

{{< tab tabNum="6" >}}

{{< gist "aspose-cloud" "a30ec761b6b8f5df99f94a48ca641605" >}}

{{< /tab >}}

{{< tab tabNum="7" >}}

{{< gist "aspose-cloud" "c8e104f5d67b163db5890dbddbd20e68" >}}

{{< /tab >}}

{{< tab tabNum="8" >}}

{{< gist "aspose-cloud" "133c288421463205fcf389e16e5b7add" >}}

{{< /tab >}}

{{< tab tabNum="9" >}}

{{< gist "aspose-cloud" "4d01d3fdc13a26feca900e5040c3ac4b" >}}

{{< /tab >}}

{{< /tabs >}}




