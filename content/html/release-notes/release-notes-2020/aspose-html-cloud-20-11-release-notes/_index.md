---
title: "Aspose.HTML Cloud 20.11 Release Notes"
type: docs
aliases: /aspose-html-cloud-20-11-release-notes/
keywords: "release notes, .net, conversion, cloud storage, cqrs, asynchronous conversion"
description: "Aspose.HTML Cloud 20.11 release"
weight: 20
---

## **Aspose.HTML Cloud for .NET**

We are pleased to announce that the Aspose.HTML Cloud API version has been upgraded to v4.0, due to significant extension of the cloud API.
The following features has been exposed as API version 4.0 (for details, see  [**v.20.11 Api Changes**](/20-11-api-changes) ):

- a group of conversion API methods has been implemented to complete the following goals:
	- a big variety of v3.0 conversion methods has been replaced with unified interface for all supported conversion cases;
	- conversion operation may be long-time, so it has been implemented as asynchronous, following CQRS pattern. So the conversion API is reduced to 3 entry points: 1) command that starts a long-time processing; 2) query that checks the previously started operation state; 3) query that cancels the running operation.
-alternative storage access API has been implemented; it has some advantages compared with existing Storage API v3.0 

Old style API of version 3.0 is still available.



