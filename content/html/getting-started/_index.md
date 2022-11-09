---
title: Getting Started
type: docs
aliases: /html/quickstart/
keywords: SDK, REST API, REST API call, authentication, initialize API, SDK, HTTP requests
description: Aspose.HTML Cloud provides two main points - the conversion feature and the cloud storage access functionality. This article introduces you  with Aspose.HTML Cloud v4.0 abilities to use its functionality both by the REST API directly or by the set of wrappers implemented as SDKs on the various programming languages.
weight: 20
url: /getting-started/
lastmod: 2022-11-07
---

{{% alert color="primary" %}} 

These instructions guide you through to obtain an authentication token and initialize Aspose.HTML Cloud API:

 - [Authentication](/html/getting-started/authentication/) 
 - [Initialize SDK](/html/getting-started/initialize-sdk/) 

{{% /alert %}} 

Aspose.HTML Cloud v4.0 provides the ability to use its functionality both by the REST API directly or by the set of wrappers implemented as [SDKs](/html/available-sdks/) on the various programming languages.

REST API is a low-level interface to work directly with the Aspose.HTML Cloud product service by HTTP requests. It provides full control over the HTTP operation results, but it requires more routine work to prepare HTTP requests and handle responses. Aspose.HTML REST API offers many features to [manipulate directories](/html/storage-api/working-with-folders-in-the-storage/) and [files](/html/storage-api/working-with-files-in-the-storage/) stored in the cloud storage associated with user applications. 

It's more preferable to use SDKs than a direct call of REST API. The SDK usage provides the following preferences:

- SDK functions are wrappers upon the respective REST API method calls, so they hide from the user the routine details of preparative work needed to call REST API, such as:
  -  authentication; 
  -  setup of query parameters in the API URL;
  -  setup of HTTP headers and request body content if needed and so on.
- SDKs provides default values to setup access to the API services where the end-user has its account (Production authentication and product API services); else an application developer would have to do it explicitly. 
- Some SDK methods wrap more that one REST API call, i.e. the are batches of a number of elementary operations; for example: upload a file to the storage, convert it to other format and download a result from temporary storage to the local file system. So an application developer gets rid of the necessity to do a number of API calls consecutively and handle their results.
- SDK allows to work with files located in the local file system as well as with the cloud storage files and web pages and save the result files locally.
- SDK provides a set of ready-to-use methods for some partial use cases.
- All numbered factors make application code using SDK more compact and readable.

Anyway, a developer who wants to have more flexibility and direct control on the API execution can always decide to use Aspose.HTML Cloud REST API directly. 

{{% alert color="primary" %}} 
You can download Aspose.HTML Cloud SDKs of your required platform from [GitHub](https://github.com/aspose-html-cloud/).  
{{% /alert %}} 