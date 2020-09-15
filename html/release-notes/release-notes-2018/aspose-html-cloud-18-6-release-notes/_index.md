---
title: "Aspose.HTML Cloud 18.6 Release Notes"
type: docs
url: /aspose-html-cloud-18-6-release-notes/
weight: 70
---

{{% alert color="primary" %}} 

The page contains release notes for Aspose.HTML Cloud 18.6 – [API Reference](https://apireference.aspose.cloud/html/)

{{% /alert %}} 
## **Enhancements**
- A group of REST API endpoints has been added: conversion PUT methods that provide possibility to upload conversion results to specified storage folder (see v18.6 - API Changes below)
- API documentation refinement: descriptions of existing methods and parameters have been clarified (conversion API)
## **v18.6 - API Changes**
All URIs are related to <https://api.aspose.cloud/v1.1/html>
#### **Added APIs**
- PUT: Converts the HTML document (located on storage) to the specified image format and uploads resulting file to storage

```html

/{name}/convert/image/{outFormat}?appSID={appSID}&outPath={outPath}&width={width}&height={height}&resolution={resolution}&leftMargin={leftMargin}&topMargin={topMargin}&rightMargin={rightMargin}&bottomMargin={bottomMargin}

```

- PUT: Converts the HTML document (in request content) to the specified image format and uploads resulting file to storage

```html

/convert/image/{outFormat}?appSID={appSID}&outPath={outPath}&width={width}&height={height}&resolution={resolution}&leftMargin={leftMargin}&topMargin={topMargin}&rightMargin={rightMargin}&bottomMargin={bottomMargin}

```

- PUT: Converts the HTML document (located on storage) to PDF and uploads resulting file to storage

```html

/{name}/convert/pdf?appSID={appSID}&outPath={outPath}&width={width}&height={height}&leftMargin={leftMargin}&topMargin={topMargin}&rightMargin={rightMargin}&bottomMargin={bottomMargin}

```

- PUT: Converts the HTML document (in request content) to PDF and uploads resulting file to storage

```html

/convert/pdf?appSID={appSID}&outPath={outPath}&width={width}&height={height}&leftMargin={leftMargin}&topMargin={topMargin}&rightMargin={rightMargin}&bottomMargin={bottomMargin}

```

- PUT: Converts the HTML document (located on storage) to XPS and uploads resulting file to storage

```html

/{name}/convert/xps?appSID={appSID}&outPath={outPath}&width={width}&height={height}&leftMargin={leftMargin}&topMargin={topMargin}&rightMargin={rightMargin}&bottomMargin={bottomMargin}

```

- PUT: Converts the HTML document (in request content) to XPS and uploads resulting file to storage

```html

/convert/xps?appSID={appSID}&outPath={outPath}&width={width}&height={height}&leftMargin={leftMargin}&topMargin={topMargin}&rightMargin={rightMargin}&bottomMargin={bottomMargin}

```


