---
title: "Aspose.HTML Cloud 19.01 Release Notes"
type: docs
weight: 60
---

{{% alert color="primary" %}} 

The following section contains information regarding Aspose.HTML Cloud 19.01 release

{{% /alert %}} 
## **New features**
We are pleased to announce that the Aspose.HTML Cloud functionality has been extended with the following features:

- New Conversion API has been added: Convert HTML page from Web by its URL to MHTML 
## **API review**
The existing Aspose.HTML Cloud has been reviewed and the following API changes have been done:

- Conversion to MHTML APIs have been excluded 
## **Issue fixes**
- HTMLCLOUD-831: HTML to Markdown conversion PUT method: missed *storage* parameter, so a result can be stored to default storage only. Also, *the **storage*** parameter has been added to other PUT conversion APIs
- HTMLCLOUD-832: HTML to Markdown conversion PUT method: file being saved to the storage has zero sizes (it occurred only if source file in the request body was a plain HTML; if zipped HTML - OK)
- HTML to Markdown, all methods: ***useGit*** parameter type has been changed to string since bool type using produced conversion and performance issues
