---
title: "Storage API - general information"
type: docs
url: /storage-api/
keywords: "cloud storage, cloud storage api, python, java , .net,  c#,  android, swift ,Perl, Node.js"
description: "Article provides common information about Aspose.HTML Cloud API v.4.0 usage. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 10
---

[TOC]

## Introduction

Aspose.HTML Cloud provides the API to access files and folders stored in the user associated Aspose cloud storage. 

The provided storage API of version 4.0 is an alternative interface to the same functionality as in API v.3.0. 

Storage API is divided into the following groups:

- [Storage common info access API](/storage-props-api/)
- [Storage folder manipulation API](/storage-folder-api/)
- [Storage file manipulation API](/storage-file-api/)

 To obtain more information about each group of APIs and SDK usage examples, click the correspondent link. 

{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/).
{{% /alert %}}  

## API Information

All URIs are relative to https://api.aspose.cloud/v4.0/html.

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



## Available SDKs

Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. Check out our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples, to get you started in no time. Please check [Available SDKs](/available-sdks/) article to learn how to add an SDK to your project.