---
title: "Folder operations"
type: docs
url: /storage-api/storage-folder-api/
keywords: "cloud storage, cloud storage api, cloud storage folder, get folder content, create folder, delete folder, copy folder, move folder, python, java , .net,  c#,  android, swift ,Perl, Node.js"
description: "Article explains how to manipulate folders in the cloud storage using Aspose.HTML Cloud API v.4.0. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 30
---

## Summary

Aspose.HTML Cloud allows you to work with documents saved on the cloud storage. The Aspose.HTML Cloud API is a REST-based API for wide usability on the web across platforms. 

This article provides a detailed description of operations to manipulate folders (directories) in the cloud storage using Aspose.HTML Cloud API v.4.0. SDKs.

## Cloud SDK family

{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/).

Complete source code of Aspose.HTML SDK for .NET is freely available on the [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

{{% /alert %}}  

### Folder SDK methods

#### DirectoryExists

```c#
bool DirectoryExists(string directoryUri, string storageName = null)
```

Checks if a directory specified by the path exists in the specified or default storage.

```c#
bool DirectoryExists(RemoteDirectory dir)
```

Overloaded method. Checks if a directory specified by RemoteDirectory descriptor object exists.

#### GetDirectories

```c#
IReadOnlyList<RemoteDirectory> GetDirectories(string rootDirectoryUri, string storageName = null)
```

Gets a list of directories that are direct children of the specified directory in the specified or default storage.

#### GetDirectory

```c#
RemoteDirectory GetDirectory(string directoryUri, string storageName = null)
```

Gets a specified directory info, or null, if the directory doesn't exist.

#### CreateDirectory

```c#
RemoteDirectory CreateDirectory(string directoryUri, 
                                string storageName = null, 
                                NameCollisionOption option = NameCollisionOption.FailIfExists)
```

Creates a directory in the specified or default storage; all parent directories specified in the directoryUri path will be created too if they don't exist.

#### DeleteDirectory

```c#
bool DeleteDirectory(string directoryUri, string storageName = null, bool recursive = false)
```

Deletes a directory by the specified path from the specified or default storage.

```c#
bool DeleteDirectory(RemoteDirectory directory, bool recursive = false)
```

Overloaded method. Deletes a directory by the path specified by RemoteDirectory object.

#### CopyDirectory

```c#
RemoteDirectory CopyDirectory(string srcDirectoryUri, 
                              string destDirectoryUri, 
                              string srcStorageName = null, 
                              string destStorageName = null, 
                              NameCollisionOption option = NameCollisionOption.FailIfExists)
```

Copies a directory.

```c#
RemoteDirectory CopyDirectory(RemoteDirectory srcDirectory, 
                              string destDirectoryUri, 
                              string destStorageName = null, 
                              NameCollisionOption option = NameCollisionOption.FailIfExists)
```

Copies a directory - overloaded method.

```c#
RemoteDirectory CopyDirectory(RemoteDirectory srcDirectory, 
                              RemoteDirectory destDirectory, 
                              NameCollisionOption option = NameCollisionOption.FailIfExists)
```

Copies a directory - overloaded method.

#### MoveDirectory

```c#
RemoteDirectory MoveDirectory(string srcDirectoryUri, 
                              string destDirectoryUri, 
                              string srcStorageName = null, 
                              string destStorageName = null, 
                              NameCollisionOption option = NameCollisionOption.FailIfExists)
```

Moves a directory.

```c#
RemoteDirectory MoveDirectory(RemoteDirectory srcDirectory, 
                              string destDirectoryUri, 
                              string destStorageName = null, 
                              NameCollisionOption option = NameCollisionOption.FailIfExists)
```

Moves a directory - overloaded method.

```c#
RemoteDirectory MoveDirectory(RemoteDirectory srcDirectory, 
                              RemoteDirectory destDirectory, 
                              NameCollisionOption option = NameCollisionOption.FailIfExists)
```

Moves a directory - overloaded method.



### SDK Examples

#### Example 1: How to create a folder

The example below demonstrates how to create a folder in the storage.

```c#
string storageName = ""; // default storage
string folderPath = "/newFolder";

var api = new HtmlApi(clientId, clientSecret);  
var storageApi = api.Storage;  // Storage API entry point 

RemoteDirectory remoteDir = storageApi.CreateDirectory(folderPath, storageName);

```



#### Example 2: How to get the folder content

The example below demonstrates how to get a list of direct child directories

```c#
const string TestDataFolder = "/HtmlTestData";
string storageName = ""; // default storage

var api = new HtmlApi(clientId, clientSecret);  
var storageApi = api.Storage;  // Storage API entry point 

var dirsList = storageApi.GetDirectories(TestDataFolder, storageName);
var filesList = storageApi.GetFiles(TestDataFolder, storageName);
```

#### Example 3:  ???

```c#

```



## REST API

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

##### cURL example

```bash
curl -X GET \
	-v "https://api.aspose.cloud/v4.0/html/folder?path=/Html/TestData" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



#### Create a folder

- POST: create a folder.

```
/folder?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | Folder path to be created.                        | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |

##### cURL example

```bash
curl -X POST \
	-v "https://api.aspose.cloud/v4.0/html/folder?path=/Html/NewFolder_111" \
	-H "Content-Length:0" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



#### Copy a folder

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

##### cURL example

```bash
curl -X PUT \
	-v "https://api.aspose.cloud/v4.0/html/folder/copy?srcpath=/Html/Folder1&destpath=/Testout/Copy/Folder1" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



#### Move a folder

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

##### cURL example

```bash
curl -X PUT \
	-v "https://api.aspose.cloud/v4.0/html/folder/move?srcpath=/Html/Folder1&destpath=/Testout/Move/Folder1" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



#### Delete a folder

- DELETE: delete the specified folder.

```
/folder?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | Folder path to be deleted.                        | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |

##### cURL example

```bash
curl -X DELETE \
	-v "https://api.aspose.cloud/v4.0/html/folder?path=/Html/FolderToDelete/" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```

