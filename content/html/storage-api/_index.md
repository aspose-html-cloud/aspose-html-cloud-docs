---
title: Storage API
keywords: cloud storage, cloud storage api, REST API, SDK, Python, PHP, Perl,
  Android, Swift, C#, Java, Node.js
description: The article provides common information about Aspose.HTML Cloud API
  v.4.0 usage. SDKs are also available in PHP, Perl, Android, Swift, C#, Java
  and more to help developers speed up their development.
weight: 100
type: docs
---

## **Introduction**

Cloud file storage provides a simple way to save and retrieval information securely at any time from any location. Besides giving space, cloud storage can protect your files and data from computer failure or other events that may cause the information to be lost. Storage services enable developers to store data in the cloud, relying on the authentication and other access features that control who can get to the data. If you need any information getting started with setting third party storage please refer to [Aspose Cloud UI Help Topics](https://docs.aspose.cloud/total/aspose-cloud-ui-help-topics/).

{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/).
{{% /alert %}}  



Aspose.HTML Cloud gives the API to access files and folders stored in the user associated Aspose cloud storage. 

The provided storage API of version 4.0 is an alternative interface to the same functionality as in API v.3.0. 

Storage API is divided into the following groups:

- [Storage common information access API](/html/storage-api/getting-storage-information/)
- [Storage folder manipulation API](/html/storage-api/working-with-folders-in-the-storage/)
- [Storage file manipulation API](/html/storage-api/working-with-files-in-the-storage/)

 To obtain more information about each group of APIs and SDK usage examples, click the correspondent link. 

## **REST API Information**

The Aspose.HTML Cloud API is a REST-based API for wide usability on the web across platforms.  The REST API uses existing HTTP methods, such as: **GET** - to retrieve a resource; **PUT** - to change the state of or update a resource, which can be an object, file or block; **POST** - to create that resource, and **DELETE** - to remove it.

To create a correctly constructed HTTP request, you should build URI relative to https://api.aspose.cloud/v4.0/html.

| **API**                                                      | **Type** | **Description**                                              | **Swagger Link**                                             |
| :----------------------------------------------------------- | :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ***Storage***                                                |          |                                                              |                                                              |
| /storage/exist/storage?storageName={**storageName**}         | GET      | Check if storage exists                                      | [StorageExists](https://apireference.aspose.cloud/html/#/StorageV4/StorageExists) |
| /storage/exist?path={**path**}&storageName={*storageName*}   | GET      | Check if a file or folder exists                             | [ObjectExists](https://apireference.aspose.cloud/html/#/StorageV4/ObjectExists) |
| /storage/disc?storageName={**storageName**}                  | GET      | Get disc usage in the storage                                | [GetDiscUsage](https://apireference.aspose.cloud/html/#/StorageV4/GetDiscUsage) |
| /storage/version?path={**path**}&storageName={*storageName*} | GET      | Get list of file versions                                    | [GetFileVersions](https://apireference.aspose.cloud/html/#/StorageV4/GetFileVersions) |
|                                                              |          |                                                              |                                                              |
| ***Folder***                                                 |          |                                                              |                                                              |
| /folder?path={**path**}&storageName={*storageName*}          | GET      | Return a list of files and folders in the specified folder (or in the root folder by default) of the storage | [GetFilesList](https://apireference.aspose.cloud/html/#/FolderV4/GetFilesList) |
| /folder?path={**path**}&storageName={*storageName*}          | POST     | Create a folder                                              | [CreateFolder](https://apireference.aspose.cloud/html/#/FolderV4/CreateFolder) |
| /folder/copy?srcpath={**srcPath**}&destpath={**destPath**}&srcstoragename={*srcStorageName*}&srcstoragename={*destStorageName*} | PUT      | Copy the folder                                              | [CopyFolder](https://apireference.aspose.cloud/html/#/FolderV4/CopyFolder) |
| /folder/move?srcpath={**srcPath**}&destpath={*destPath*}&srcstoragename={*srcStorageName*}&srcstoragename={*destStorageName*} | PUT      | Move the folder                                              | [MoveFolder](https://apireference.aspose.cloud/html/#/FolderV4/MoveFolder) |
| /folder?path={**path**}&storageName={*storageName*}          | DELETE   | Delete the folder                                            | [DeleteFolder](https://apireference.aspose.cloud/html/#/FolderV4/DeleteFolder) |
|                                                              |          |                                                              |                                                              |
| ***File***                                                   |          |                                                              |                                                              |
| /file?path={**path**}&storageName={*storageName*}&versionId={*versionId*} | GET      | Download the file                                            | [DownloadFile](https://apireference.aspose.cloud/html/#/FileV4/DownloadFile) |
| /file?path={**path**}&storageName={*storageName*}            | POST     | Upload the file                                              | [UploadFile](https://apireference.aspose.cloud/html/#/FileV4/UploadFile) |
| /file/copy?srcpath={**srcPath**}&destpath={**destPath**}&srcstoragename={*srcStorageName*}&srcstoragename={*destStorageName*}&versionId={*versionId*} | PUT      | Copy the file                                                | [CopyFile](https://apireference.aspose.cloud/html/#/StorageV4/CopyFile) |
| /file/move?srcpath={**srcPath**}&destpath={**destPath**}&srcstoragename={*srcStorageName*}&srcstoragename={*destStorageName*}&versionId={*versionId*} | PUT      | Move the file                                                | [MoveFile](https://apireference.aspose.cloud/html/#/StorageV4/MoveFile) |
| /file?path={***path***}&storageName={*storageName*}&versionId={*versionId*} | DELETE   | Delete the file                                              | [DeleteFolder](https://apireference.aspose.cloud/html/#/FolderV4/DeleteFolder) |



## **Available SDKs**

Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. 

Check out our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples to get you started in no time. SDKs tools include libraries, documentation, code samples, and guides that developers can apply and integrate into their own apps. 

Aspose Cloud HTML SDKs are platform-independent and developed on REST-based APIs. You can use SDKs on any platform and integrate them with other cloud services to give you the flexibility you need when processing documents. You can perform a wide range of file processing operations including creation, manipulation, conversion and rendering of HTML file in the cloud in various programming languages: .NET, Java, PHP, Android, Python, Ruby, Node.js, Swift, and more. SDKs also support HTML conversion to fixed layout document formats such as  {{%PDF%}}, {{%XPS%}}, {{%DOC%}}, {{%DOCX%}}; to raster image formats including {{%JPEG%}}, {{%PNG%}}, {{%TIFF%}},  {{%BMP%}},  {{%GIF%}}  and  to {{%MD%}},  {{%MHTML%}} formats.

{{% alert color="primary" %}} 
Please check the [Available SDKs](/html/overview/available-sdks/) article to learn how to add an SDK to your project.

{{% /alert %}}  