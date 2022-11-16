---
title: "Aspose.HTML Cloud 18.7 Release Notes"
type: docs
aliases: /aspose-html-cloud-18-7-release-notes/
weight: 60
---

{{% alert color="primary" %}} 

The page contains release notes for Aspose.HTML Cloud 18.7 – [API Reference](https://apireference.aspose.cloud/html/)

{{% /alert %}} 
## **Enhancements**
- New REST API endpoints added (see below v18.7 - API Changes):
  - GET: Selects HTML fragments by XPath query from the HTML page (located in Web by its URL)
  - GET: Extracts all images from HTML page (located in Web by its URL)
## **Fixed bugs**
- HTMLCLOUD-440: Passing a URL with query parameters as a value to sourceUrl parameter; partially fixed - for static and server-side dynamically generated HTML pages
## **Known issues**
- HTMLCLOUD-440: Web pages with client-side dynamic content are not supported - this case will be handled in the future releases
## **v18.7 - API Changes**
All URLs are related to <https://api.aspose.cloud/v1.1/html>

- GET: Selects HTML fragments by XPath query from the HTML page (located in Web by its URL) and returns as plain text or JSON

```html

/fragments/{outFormat}?sourceUrl={sourceUrl}&xPath={xPath}

```

- GET: Extracts all images from HTML page (located in Web by its URL) and returns them as a ZIP archive

```html

/images/all?sourceUrl={sourceUrl}

```


