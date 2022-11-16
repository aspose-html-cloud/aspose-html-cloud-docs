---
title: Storage API - Aspose.HTML Cloud API
linktitle: Storage API
type: docs
aliases: /storage/
keywords: cloud storage, storage api, cloud storage api, REST API, cloud sdks, Python, PHP, Perl, Android, Swift, C#, Java, Node.js
description: The article provides common information about Aspose.HTML Cloud Storage API v.4.0 usage, explains how to use File and Folder Operations.
weight: 100
url: /storage-api/
lastmod: 2022-11-09
---

## **Cloud Storage API**

Cloud file storage provides a simple way to save and retrieve information securely at any time from any location. Besides giving space, cloud storage can protect your files and data from computer failure or other events that may cause the information to be lost. Storage services enable developers to store data in the cloud, relying on authentication and other access features that control who can get to the data. Aspose.HTML Cloud API allows you to work with files and folders in cloud storage. 

{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/).
{{% /alert %}}  

Aspose.HTML Cloud gives the API to access files and folders stored in the user associated Aspose cloud storage. The article provides common information about Cloud Storage API v.4.0 usage and explains how to use file and folder operations.

Storage API is divided into the following groups:

- [Storage common information access API](/html/storage-api/getting-storage-information/)
- [Storage folder manipulation API](/html/storage-api/working-with-folders-in-storage/)
- [Storage file manipulation API](/html/storage-api/working-with-files-in-storage/)

 To obtain more information about each group of APIs and SDK usage examples, click the correspondent link. 

## **REST API Information**

To create a correctly constructed HTTP request, you should build a URI with the following syntax.

| **API**                                                      | **Type** | **Description**                                              | Link**                                             |
| :----------------------------------------------------------- | :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ***Storage***                                                |          |                                                              |                                                              |
| /storage/exist/storage?storageName={**storageName**}         | GET      | Check if storage exists                                      | 
| /storage/exist?path={**path**}&storageName={*storageName*}   | GET      | Check if a file or folder exists                             | 
| /storage/disc/usage?storageName={**storageName**}                  | GET      | Get disc usage in the storage                                |                                                           |
| ***Folder***                                                 |          |                                                              |                                                              |
| /folder?path={**path**}&storageName={*storageName*}          | GET      | Return a list of files and folders in the specified folder (or in the root folder by default) of the storage | 
| /folder?path={**path**}&storageName={*storageName*}          | POST     | Create a folder                                              |                                             | 
| /folder?path={**path**}&storageName={*storageName*}          | DELETE   | Delete the folder                                            | 
|                                                              |          |                                                              |                                                              |
| ***File***                                                   |          |                                                              |                                                              |
| /file?path={**path**}&storageName={*storageName*}&versionId={*versionId*} | GET      | Download the file                                            | 
| /file?path={**path**}&storageName={*storageName*}            | POST     | Upload the file                                              |                                                | 
| /file?path={***path***}&storageName={*storageName*}&versionId={*versionId*} | DELETE   | Delete the file                                              | [DeleteFolder](https://apireference.aspose.cloud/html/#/FolderV4/DeleteFolder) |



## **Available Cloud SDKs**

Using an SDK (API client) is the quickest way for a developer to speed up the development. An SDK takes care of a lot of low-level details of making requests and handling responses and lets you focus on writing code specific to your particular project. 

Check out our [GitHub repository](https://github.com/aspose-html-cloud) for a complete list of Aspose.HTML SDKs along with working examples to get you started in no time. SDKs tools include libraries, documentation, code samples, and guides that developers can apply and integrate into their own apps. 

Aspose.HTML Cloud SDKs are platform-independent and developed on REST-based APIs. You can use SDKs on any platform and integrate them with other cloud services to give you the flexibility you need when processing documents. You can perform a wide range of file processing operations, including creation, manipulation, conversion and rendering of HTML file in the cloud in various programming languages: .NET, Java, PHP, Android, Python, Ruby, Node.js, Swift, and more. SDKs also support HTML conversion to fixed layout document formats such as  {{%PDF%}}, {{%XPS%}}, {{%DOC%}}, {{%DOCX%}}; to raster image formats including {{%JPEG%}}, {{%PNG%}}, {{%TIFF%}}, {{%BMP%}}, {{%GIF%}}  and  to  {{%MD%}}, {{%MHTML%}} formats.

{{% alert color="primary" %}} 
Please check the [Available SDKs](/html/available-sdks/) article to learn how to add an SDK to your project.
{{% /alert %}}  