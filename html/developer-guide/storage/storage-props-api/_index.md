---
title: "Cloud storage info operations"
type: docs
url: /storage-props-api/
keywords: "cloud storage, cloud storage api, python, java , .net,  c#,  android, swift, Perl, Node.js"
description: "Article explains how to get a user associated cloud storage info such as disc usage, an object existence etc. using Aspose.HTML Cloud API v.4.0. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 20
---



## Summary

Cloud storage allows world-wide storage and retrieval of data at any time. You can use storage for various scenarios including storing data for archival or disaster recovery.

Aspose.HTML Cloud provides helper functions to work with files uploaded to Aspose.HTML Cloud Storage or any other Cloud Storage of your choice. If you need any help getting started with setting third party storage please refer to [Aspose Cloud UI Help Topics](https://docs.aspose.cloud/total/aspose-cloud-ui-help-topics/).

This article provides a detailed description of REST API storage-wide operations using Aspose.HTML Cloud API v.4.0. SDKs. You find out how to get a user associated cloud storage info such as disc usage, an object existence, etc. 



## API description

REST API is one of the most common web services available today. It can be called from any platform that supports HTTP / HTTPS and it does not depend on the software running on the server or client. 

The action must be recorded by the HTTP request method that you make. The most common methods include GET, POST, PUT and DELETE. More detailed information about REST URLs' structure and specific behavior linked to the API such as Authentication, Request Queuing, and Storage you can find in the [REST API Overview](https://docs.aspose.cloud/total/getting-started/rest-api-overview/) article.

All URIs are relative to https://api.aspose.cloud/v4.0/html.

### Check if a named storage exists

- GET: check if specified storage exists and is associated with application user.

```
/storage/exist/storage?storageName={storageName}
```

**Parameters:**

| Name        | Description   | Passed in | Required |
| :---------- | :------------ | :-------- | :------- |
| storageName | Storage name. | Query     | +        |



### Check if an object exists in the storage

- GET: check if specified file or folder exists in the specified or default storage.

```
/storage/exist?path={path}&storageName={storageName}&versionId={versionId}
```

**Parameters:**

| Name        | Description                                                  | Passed in | Required |
| :---------- | :----------------------------------------------------------- | :-------- | :------- |
| path        | Object (file or folder) path in the storage.                 | Query     | +        |
| storageName | Storage name or default storage if not specified.            | Query     | -        |
| versionId   | Version ID of the specified file or last version by default. Ignored for folders. | Query     | -        |



### Get a storage disc usage

- GET: return a total and used disc space in bytes of the specified storage. 

```
/storage/disc?storageName={storageName}
```

**Parameters:**

| Name        | Description   | Passed in | Required |
| :---------- | :------------ | :-------- | :------- |
| storageName | Storage name. | Query     | +        |



### Get a list of file versions

- GET: return a list of versions of specified file, if versioning is supported by the specified or default storage.

```
/storage/versions?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | File path in the storage.                         | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |



## SDK Examples

### Example 1: How to check if an object exists in the storage

The following example shows how to check if an object (file or folder) specified by the path exists in the storage.

{{< tabs tabTotal="1" tabID="1" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```
using System;
using System.IO;
using System.Net.Http;
using Aspose.HTML.Cloud.Sdk.Conversion;
using Aspose.HTML.Cloud.Sdk.Runtime.Core.Model;


namespace Aspose.Html.Cloud.Examples
{
	class Program
	{
		const string appSID = "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"; // apply user's appSID
        const string appKey = "xxxxxxxxxxxxxxxxxxxxxxxxx";           // apply user's key
        const string SERVICE_API_HOST = "https://api.aspose.cloud";
        
 		static void Main(string[] args)
 		{
 			var folder = "/HtmlTestData";
 			var name = "testpage1.html";
 			var name_ = "fake.html";
 			
 			// here the ConfigurationBuilder is used to initialize the SDK API object
			var api = new HtmlApi(cb => cb
                .WithAppSid(appSID)
                .WithAppKey(appKey)
                .WithAuthUrl(SERVICE_API_HOST)
                .WithBaseUrl(SERVICE_API_HOST));  
 			var storageApi = api.Storage;  // Storage API entry point
 			
 			var storagePath = $"{folder}/{name}";     
 			
 			var exist = storageApi.DirectoryExists(folder);  // true
 			Console.WriteLine($"Folder={folder} exists={exist}");
 			
            exist = storageApi.FileExists(storagePath);   // true
            Console.WriteLine($"File={storagePath} exists={exist}");
            
            storagePath = $"{folder}/{name_}";
            exist = storageApi.FileExists(storagePath);   // false
            Console.WriteLine($"File={storagePath} exists={exist}");
        }
    }
}
```

{{< /tab >}}

{{< /tabs >}}



### Example 2: How to get the storage disc usage

{{< tabs tabTotal="1" tabID="2" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```
using System;
using System.IO;
using System.Net.Http;
using Aspose.HTML.Cloud.Sdk.Conversion;
using Aspose.HTML.Cloud.Sdk.Runtime.Core.Model;


namespace Aspose.Html.Cloud.Examples
{
	class Program
	{
		const string appSID = "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"; // apply user's appSID
        const string appKey = "xxxxxxxxxxxxxxxxxxxxxxxxx";           // apply user's key
        const string SERVICE_API_HOST = "https://api.aspose.cloud";
        
 		static void Main(string[] args)
 		{
 			var folder = "/HtmlTestData";
 			var name = "testpage1.html";
 			var name_ = "fake.html";
 			
 			// here the ConfigurationBuilder is used to initialize the SDK API object
			var api = new HtmlApi(cb => cb
                .WithAppSid(appSID)
                .WithAppKey(appKey)
                .WithAuthUrl(SERVICE_API_HOST)
                .WithBaseUrl(SERVICE_API_HOST));  
 			var storageApi = api.Storage;  // Storage API entry point
 			
        }
    }
} 			
```

{{< /tab >}}

{{< /tabs >}}

For complete examples and data files, please go to [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).