---
title: "Folder operations"
type: docs
url: /storage-folder-api/
keywords: "cloud storage, cloud storage api, cloud storage folder, get folder content, create folder, delete folder, copy folder, move folder, python, java , .net,  c#,  android, swift ,Perl, Node.js"
description: "Article explains how to manipulate folders in the cloud storage using Aspose.HTML Cloud API v.4.0. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 30
---

## Summary

This article provides a detailed description of REST API operations to manipulate folders in the cloud storage using Aspose.HTML Cloud API v.4.0. SDKs.

{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/).
{{% /alert %}}  

## API description

A call to the REST API consists of a request performed by the client, and a response returned by the service. In the request, you send a URL with information about which operation you want to call, the resource to act upon, query parameters, etc.

All URIs are relative to https://api.aspose.cloud/v4.0/html.

### Get a list of folder files and subfolders

- GET: return a list of files and folders in the specified folder (or in the root folder by default) of the storage. 

```
/folder?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | Folder path in the storage.                       | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |



### Create a folder

- POST: create a folder.

```
/folder?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | Folder path to be created.                        | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |



### Copy a folder

- PUT: copy the specified folder with files and subfolders to the new path.

```
/folder/copy?srcpath={srcPath}&destpath={destPath}&srcstoragename={srcStorageName}&srcstoragename={destStorageName}
```

**Parameters:**

| Name            | Description                                                  | Passed in | Required |
| :-------------- | :----------------------------------------------------------- | :-------- | :------- |
| srcPath         | Source folder path to be copied.                             | Query     | +        |
| destPath        | Destination folder path.                                     | Query     | +        |
| srcStorageName  | Source folder storage name or default storage if not specified. | Query     | -        |
| destStorageName | Destination folder storage name or default storage if not specified. | Query     | -        |



### Move a folder

- PUT: move the specified folder with files and subfolders to the new path.

```
/folder/move?srcpath={srcPath}&destpath={destPath}&srcstoragename={srcStorageName}&srcstoragename={destStorageName}
```

**Parameters:**

| Name            | Description                                                  | Passed in | Required |
| :-------------- | :----------------------------------------------------------- | :-------- | :------- |
| srcPath         | Source folder path to be moved.                              | Query     | +        |
| destPath        | Destination folder path.                                     | Query     | +        |
| srcStorageName  | Source folder storage name or default storage if not specified. | Query     | -        |
| destStorageName | Destination folder storage name or default storage if not specified. | Query     | -        |



### Delete a folder

- DELETE: delete the specified folder.

```
/folder?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | Folder path to be deleted.                        | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |



## SDK Examples

### Example 1: How to create a folder

The example below demonstrates how to create a folder in the storage.

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
 			var storageName = ""; // default storage
 			var folderPath = "/newFolder";
 			
			var api = new HtmlApi(appSID, appKey, SERVICE_API_HOST);  
			var storageApi = api.Storage;  // Storage API entry point 
 			
 			try
 			{
 				var remoteDir = storageApi.CreateDirectory(folderPath, storageName);
 				Console.WriteLine($"Folder created: {remoteDir.Path}");
 			}
 			catch(Exception ex)
 			{
 				Console.WriteLine($"Error: {ex.Message}");
 			}
			Console.WriteLine("Press any key to exit:");
			Console.In.Read();
 		}
	}
}        
```

{{< /tab >}}

{{< /tabs >}}

The **CreateDirectory**(`folderPath`, `storageName`) method creates a directory in the specified storage; all parent directories specified in the `folderPath` will be created too if they don't exist.



### Example 2: How to get the folder content

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
        
        const string TestDataFolder = "/HtmlTestData";
 
  		static void Main(string[] args)
 		{
 			var storageName = ""; // default storage
			var api = new HtmlApi(appSID, appKey, SERVICE_API_HOST);  
			var storageApi = api.Storage;  // Storage API entry point 
 
 			var dirs = storageApi.GetDirectories(TestDataFolder, storageName);
 			var files = storageApi.GetFiles(TestDataFolder, storageName);
 			Console.WriteLine($" {TestDataFolder}: SUBFOLDERS");
 			foreach(var d in dirs)
 			{
 				Console.WriteLine($"Name: {d.Name}; Path: {d.Path}");
 			}
 			Console.WriteLine($"\r\n {TestDataFolder}: FILES");
 			foreach(var f in files)
 			{
 				Console.WriteLine(
 					$"Name: {f.Name}; Path: {f.Path}; Size: {f.Info.Size};  LastModified: {f.Info.LastModifiedDate}");
 			} 			
 		}
	}
}    
```

{{< /tab >}}

{{< /tabs >}}

Тhe **GetDirectories**(`TestDataFolder`, `storageName`) method allows you to get a list of direct children directories of the specified directory in the defined storage. The **GetFiles**(`TestDataFolder`, `storageName`) method allows you to get a list of files by specified directory path in the specified storage.

Complete source code of Aspose.HTML SDK for .NET is freely available on the [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).