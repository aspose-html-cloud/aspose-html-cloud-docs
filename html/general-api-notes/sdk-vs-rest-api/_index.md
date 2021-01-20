---
title: "SDK vs. REST API"
type: docs
url: /sdk-vs-rest-api/
weight: 10
---



Aspose.HTML Cloud v4.0 provides ability to use its functionality both by the REST API directly or by the set of wrappers implemented as [SDKs](/html/available-sdks/) on the various programming languages.

It's more preferable to use SDKs than a direct call of REST API. The SDK usage provides the following preferences:

- SDK functions are wrappers upon the respective REST API method calls, so they hide from the user the routine details of preparative work needed to call REST API, such as:
  -  authentication; 
  - setup of query parameters in the API URL;
  - setup of HTTP headers and request body content if needed and so on.
- SDKs provides default values to setup access to the API services where the end user has its account (Production authentication and product API services), else an application developer would have to do it explicitly. 
- Some SDK methods wrap more that one REST API call, i.e. the are batches of a number of elementary operations; for example: upload a file to the storage, convert it to other format and download a result from a temporary storage to the local file system. So an application developer gets rid of necessity to do a number of API calls consecutively and handle their results.
- SDK allows to work with files located in the local file system as well as with the cloud storage files and web pages and save the result files locally.
- SDK provides a set of ready-to-use methods for some partial use cases.
- All numbered factors make application code using SDK more compact and readable.

Anyway, a developer that wants to to have more flexibility and direct control on the API execution always can decide to use Aspose.HTML Cloud REST API directly. 



