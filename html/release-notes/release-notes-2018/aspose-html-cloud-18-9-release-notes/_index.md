---
title: "Aspose.HTML Cloud 18.9 Release Notes"
type: docs
url: /aspose-html-cloud-18-9-release-notes/
weight: 40
---

{{% alert color="primary" %}} 

The page contains release notes for Aspose.HTML Cloud 18.9 – [API Reference](https://apireference.aspose.cloud/html/)

{{% /alert %}} 
## **New Features**
- HTMLCLOUD-506: HTML template merge with external data (see below v.18.9 - API Changes)

In this release an initial limited implementation of this feature has been provided. It will be extended with new options in nearest releases.
## **Fixed bugs**
- HTMLCLOUD-646: deleting deprecated code: microservice connections using ZeroMQ have been removed as unused
- GetDocument endpoint has been considered as redundant and unclear and removed from API
## **v18.9 - API Changes**
All URLs are related to <https://api.aspose.cloud/v1.1/html>
#### **Added APIs**
- GET: Merge HTML template with data and return resulting HTML document in the response content; both template and source data are stored in the cloud storage

```html

/{templateName}/merge?appSID={appSID}&dataPath={dataPath}&options={options}&folder={folder}&storage={storage} 

```

- PUT: Merge HTML template with data and save resulting HTML document to cloud storage; a template is stored in the storage, and source data are passed in the request content

```html

/{templateName}/merge?appSID={appSID}&outPath={outPath}&options={options}&folder={folder}&storage={storage}

```
#### **Removed API**
- GET: Get HTML document from storage by its name and folder path

```html

/{name}?appSID={appSID}&folder={folder}&storage={storage}

```
