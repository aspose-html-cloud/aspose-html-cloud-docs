---
title: "File operations"
type: docs
url: /storage-file-api/
keywords: "cloud storage, cloud storage api, cloud storage file, upload file, download file, delete file, copy file, move file, python, java , .net,  c#,  android, swift ,Perl, Node.js"
description: "Article explains how to manipulate files in the cloud storage using Aspose.HTML Cloud API v.4.0. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 40
---

## Summary

Aspose.HTML Cloud allows you to work with documents saved on the cloud storage. The Aspose.HTML Cloud API is a REST-based API for wide usability on the web across platforms. 

This article provides a detailed description of REST API operations to manipulate files in the cloud storage, i.e. upload, download, copy, move or delete files. If storage supports file versioning, the is an option to operate with a specified file version.

Cloud file storage provides a simple way to save and retrieval information securely at any time from any location. Besides giving space, cloud storage can protect your files and data from computer failure or other events that may cause the information to be lost. Storage services enable developers to store data in the cloud, relying on the authentication and other access features that control who can get to the data. If you need any information getting started with setting third party storage please refer to [Aspose Cloud UI Help Topics](https://docs.aspose.cloud/total/aspose-cloud-ui-help-topics/).

{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/).
{{% /alert %}}  



## API description

All URIs are relative to https://api.aspose.cloud/v4.0/html.

### Download a file

- GET: download a file. The response object contains the raw data of the file. 

```
/file?path={path}&storageName={storageName}&versionId={versionId}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | File path to be downloaded.                       | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |
| versionId   | File version ID or the last version by default.   | Query     | -        |


### Upload a file

- POST: upload a file. If the file exists, a new version of the file will be added on the same location.

```
/file?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                                  | Passed in | Required |
| :---------- | :----------------------------------------------------------- | :-------- | :------- |
| path        | File uploading path.                                         | Query     | +        |
| storageName | Storage name or default storage if not specified.            | Query     | -        |
| -           | File content to upload; it must be passed in the HTTP request body.<br /> Requires an HTTP header Content-Type=application/multipart-data. | Body      | +        |



### Copy a file

- PUT: copy the specified file to another path (if *versionId* is specified, this version will be copied).

```
/file/copy?srcpath={srcPath}&destpath={destPath}&srcstoragename={srcStorageName}&srcstoragename={destStorageName}&versionId={versionId}
```

**Parameters:**

| Name            | Description                                                  | Passed in | Required |
| :-------------- | :----------------------------------------------------------- | :-------- | :------- |
| srcPath         | Source file path to be copied.                               | Query     | +        |
| destPath        | Destination file/folder path.                                | Query     | +        |
| srcStorageName  | Source file storage name or default storage if not specified. | Query     | -        |
| destStorageName | Destination file storage name or default storage if not specified. | Query     | -        |
| versionId       | File version ID or the last version by default.              | Query     | -        |



### Move a file

- PUT: move the specified file to another path (if *versionId* is specified, this version will be copied to a new location and deleted).

```
/file/move?srcpath={srcPath}&destpath={destPath}&srcstoragename={srcStorageName}&srcstoragename={destStorageName}&versionId={versionId}
```

**Parameters:**

| Name            | Description                                                  | Passed in | Required |
| :-------------- | :----------------------------------------------------------- | :-------- | :------- |
| srcPath         | Source file path to be moved.                                | Query     | +        |
| destPath        | Destination file/folder path.                                | Query     | +        |
| srcStorageName  | Source file storage name or default storage if not specified. | Query     | -        |
| destStorageName | Destination file storage name or default storage if not specified. | Query     | -        |
| versionId       | File version ID or the last version by default.              | Query     | -        |



### Delete a file

- DELETE: delete a file. Only last version will be deleted by default; if *versionId* is specified, only this version will be deleted. 

```
/file?path={path}&storageName={storageName}&versionId={versionId}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | File path to be deleted.                          | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |
| versionId   | File version ID or the last version by default.   | Query     | -        |



## SDK Examples

### Example 1: How to upload a file

The following example demonstrates how to upload a file by its local file system path to the specified storage.

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
			var api = new HtmlApi(appSID, appKey, SERVICE_API_HOST);  
			var storageApi = api.Storage;  // Storage API entry point

			var storageName = "";       // default storage
			var dataDir = "c:\\work\\testdata";
 			var folder = "/HtmlTestData/Upload";
 			var name = "testpage1.html";
 			var localPath = Path.Combine(dataDir, name);

			try
			{
				var uploadPath = $"{folder}/{name}"; 
				if(File.Exists(localPath))
				{
					storageApi.UploadFile(localPath, uploadPath, storageName);
				}
				else
					throw new Exception($"{localPath}: file not found");
			
			}
			catch(Exception ex)
			{
				Console.WriteLine($"Error: {ex.Message}");
			}
			Console.WriteLine($"Press any key to exit");
			Console.In.Read();
 		} 
	}
}        
```

{{< /tab >}}

{{< /tabs >}}



### Example 2: How to download a file

The example below shows how to download a file from storage to the local file system.

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
 			var storageName = "";       // default storage
 			var folder = "/HtmlTestData";
 			var name = "testpage1.html";
 			var localPath = "c:\\work\\download";
 			
 			// here the ConfigurationBuilder is used to initialize the SDK API object
			var api = new HtmlApi(cb => cb
                .WithAppSid(appSID)
                .WithAppKey(appKey)
                .WithAuthUrl(SERVICE_API_HOST)
                .WithBaseUrl(SERVICE_API_HOST));  
 			var storageApi = api.Storage;  // Storage API entry point
 			
 			var storagePath = $"{folder}/{name}";
 			
 			try
 			{
                storageApi.Download(storagePath, Path.Combine(localPath, name), storageName)
                if(File.Exists(Path.Combine(localPath, name)))
                {
					Console.WriteLine($"File {storagePath} downloaded to: {Path.Combine(localPath, name)}");
                } 			
 			}
 			catch(Exception ex)
 			{
 				Console.WriteLine($"Error: {ex.Message}");
 			}
			Console.WriteLine($"Press any key to exit");
			Console.In.Read();
 		} 
	}
}    
```

{{< /tab >}}

{{< /tabs >}}

Complete source code of Aspose.HTML SDK for .NET is freely available on the [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

