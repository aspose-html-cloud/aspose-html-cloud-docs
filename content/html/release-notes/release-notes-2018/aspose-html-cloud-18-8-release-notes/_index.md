---
title: "Aspose.HTML Cloud 18.8 Release Notes"
type: docs
aliases: /aspose-html-cloud-18-8-release-notes/
weight: 50
---

{{% alert color="primary" %}} 

The page contains release notes for Aspose.HTML Cloud 18.8 – [API Reference](https://apireference.aspose.cloud/html/)

{{% /alert %}} 
## **Enhancements**
- Selection of the HTML layout fragments that match criteria specified by using [CSS selectors](https://www.w3.org/TR/CSS/) (see below v.18.8 - API Changes)
## **Fixed bugs**
- GET images by URL - invalid Content-Disposition header value (similar issue was found in other APIs using source page URL as parameter).
## **v18.8 - API Changes**
All URLs are related to <https://api.aspose.cloud/v1.1/html>

- GET: Selects HTML fragments by CSS selector from HTML document (located in storage by its name and folder path, like /folder1/folder2/name.html) and returns them as plain text or JSON.

```html

/{name}/fragments/css/{outFormat}?selector={selector}&folder={folder}&storage={storage} 

```

- GET: Selects HTML fragments by CSS selector from the HTML page (located in Web by its URL) and returns them as plain text or JSON.

```html

/fragments/css/{outFormat}?sourceUrl={sourceUrl}&selector={selector}

```


