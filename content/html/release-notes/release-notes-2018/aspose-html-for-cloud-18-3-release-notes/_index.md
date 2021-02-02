---
title: "Aspose.HTML for Cloud 18.3 - Release Notes"
type: docs
url: /aspose-html-for-cloud-18-3-release-notes/
weight: 100
---

{{% alert color="primary" %}} 

The page contains release notes for Aspose.HTML for Cloud 18.4 – [API Reference](https://apireference.aspose.cloud/html/)

{{% /alert %}} 
## **Enhancements**
- A group of REST API methods (conversion & translation PUT methods) has been considered as redundant and removed from API- see **API Changes** section below
- Unneeded parameters have been removed from a number of API methods - see **API Changes** section below
- GET all images of HTML document: the result ZIP archive folder structure changed - all images that are referenced by the absolute web links are placed in the archive in the *__Web_Images* folder (instead of full web path).
- API documentation enhancement: descriptions of API methods and parameters in the [API Reference page](https://apireference.aspose.cloud/html/) have been extended
## **Fixed issues**
- HTMLAI-229: Translate - encoding issue: if the source HTML charset is not Unicode, the result document may display incorrectly some language-specific characters
- HTMLAI-239: Document -> GET: get document: returns response with empty content
## **Known issues:**
- HTMLAI-215, 227: HTML conversion to image formats issues - it depends on related Aspose.HTML image conversion issues that will be fixed by our Aspose.HTML for .NET team soon
## **Changed APIs:**
- For the following API methods, *folder* and *storage* parameters have been removed as unneeded : 
  - GET: Convert the HTML page from the web by its URL to the specified image format

/convert/image/{outFormat}?appSID={appSID}&width={width}&height={height}&resolution={resolution}&leftMargin={leftMargin}&topMargin={topMargin}&rightMargin={rightMargin}&bottomMargin={bottomMargin}

- GET: Convert the HTML page from the web by its URL to PDF

/convert/pdf?appSID={appSID}&width={width}&height={height}&leftMargin={leftMargin}&topMargin={topMargin}&rightMargin={rightMargin}&bottomMargin={bottomMargin}

- GET: Convert the HTML page from the web by its URL to XPS

/convert/xps?appSID={appSID}&width={width}&height={height}&leftMargin={leftMargin}&topMargin={topMargin}&rightMargin={rightMargin}&bottomMargin={bottomMargin}

- For these API methods, *xResolution* and *yResolution* parameters were considered as redundant and replaced with a single *resolution* parameter:
  - GET: Convert the HTML document from the storage by its name to the specified image format

/{name}/convert/image/{outFormat}?appSID={appSID}&width={width}&height={height}&resolution={resolution}&leftMargin={leftMargin}&topMargin={topMargin}&rightMargin={rightMargin}&bottomMargin={bottomMargin}

- GET: Convert the HTML page from the web by its URL to the specified image format

/convert/image/{outFormat}?appSID={appSID}&width={width}&height={height}&resolution={resolution}&leftMargin={leftMargin}&topMargin={topMargin}&rightMargin={rightMargin}&bottomMargin={bottomMargin}
## **Removed APIs:**
- PUT: Translate the HTML document specified by the name from default or specified storage.
- PUT: Translate the HTML document from the Web specified by its URL.
- PUT: Convert the HTML document to the specified image format.
- PUT: Convert the HTML document to PDF.
- PUT: Convert the HTML document to XPS.
