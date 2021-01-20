---
title: "File operations"
type: docs
url: /storage-api/storage-file-api/
keywords: "cloud storage, cloud storage api, cloud storage file, upload file, download file, delete file, copy file, move file, python, java , .net,  c#,  android, swift ,Perl, Node.js"
description: "Article explains how to manipulate files in the cloud storage using Aspose.HTML Cloud API v.4.0. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 40
---

## Summary

Aspose.HTML Cloud allows you to work with documents saved on the cloud storage. The Aspose.HTML Cloud API is a REST-based API for wide usability on the web across platforms. 

This article provides a detailed description of REST API operations to manipulate files in the cloud storage, i.e. upload, download, copy, move or delete files. If storage supports file versioning, the is an option to operate with a specified file version.

## Cloud SDK family

{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/).

Complete source code of Aspose.HTML SDK for .NET is freely available on the [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

{{% /alert %}}  

### File SDK methods

#### FileExists

```c#
bool FileExists(string fileUri, string storageName = null)
```

Checks if a file specified by the path exists in the specified or default storage.

```c#
bool FileExists(RemoteFile file)
```

Overloaded method. Checks if a file specified by the Path property of RemoteFile object exists.

#### GetFiles

```c#
IReadOnlyList<RemoteFile> GetFiles(string directoryUri, string storageName = null)
```

Gets a list of files by specified directory path in the specified or default storage.

```c#
IReadOnlyList<RemoteFile> GetFiles(RemoteDirectory directory)
```

Overloaded method. Gets a list of files in the directory specified by RemoteDirectory object.

#### GetFileInfo

```c#
RemoteFile GetFileInfo(string fileUri, string storageName = null)
```

Gets the file info by its path in the specified or default storage. 

```c#
RemoteFile GetFileInfo(RemoteDirectory directory, string fileName)
```

Overloaded method. Gets the file info by its name in the directory specified by RemoteDirectory object.

#### UploadFile

```c#
RemoteFile UploadFile(string file, 
                      string remoteFileUri, 
                      string storageName = null, 
                      NameCollisionOption option = NameCollisionOption.FailIfExists)
```

Uploads a file synchronously by its local file system path to the specified storage.

#### UploadFileAsync

```c#
AsyncResult<RemoteFile> UploadFileAsync(string file, 
                                        string remoteFileUri, 
                                        string storageName = null,
                                        NameCollisionOption option = NameCollisionOption.FailIfExists,
                                        IProgress<object> progressCallback = null)
```

Starts asynchronous upload of a file by its local file system path to the specified storage.

#### UploadData

```c#
RemoteFile UploadData(byte[] data, 
                      string fileUri, 
                      string storageName = null, 
                      NameCollisionOption option = NameCollisionOption.FailIfExists)
```

Uploads a byte array as a file into storage synchronously.

#### UploadDataAsync

```c#
public AsyncResult<RemoteFile> UploadDataAsync(byte[] data, 
                                               string fileUri, 
                                               string storageName = null,
                                               NameCollisionOption option = NameCollisionOption.FailIfExists,
                                               Progress<VoidResult> progressCallback = null)
```

Starts asynchronous upload of a byte array as a file into storage.

#### DownloadFile

```c#
void DownloadFile(string fileUri, string localFilePath, string storageName = null, string versionId = null)
```

Downloads a storage file synchronously by its storage path and saves by a local file system path.

```c#
DownloadFile(RemoteFile file, string localFilePath, string versionId = null)
```

Overloaded method. Downloads a storage file synchronously by its storage path from RemoteFile object and saves by a local file system path.

#### DownloadFileAsync

```c#
AsyncResult DownloadFileAsync(string fileUri, 
                              string localFilePath, 
                              string storageName = null, 
                              string versionId = null, 
                              IProgress<object> progressCallback = null)
```

Starts asynchronous download of a storage file into a local file.

```c#
AsyncResult DownloadFileAsync(RemoteFile file, 
                              tring localFilePath, 
                              string versionId = null, 
                              IProgress<object> progressCallback = null)
```

Overloaded method. Starts asynchronous download of a storage file into a local file.

#### DownloadData

```c#
byte[] DownloadData(string fileUri, string storageName = null, string versionId = null)
```

Downloads a storage file into a byte array synchronously by its storage path and saves by a local file system path.

```c#
byte[] DownloadData(RemoteFile file, string versionId = null)
```

Overloaded method. Downloads a storage file into a byte array synchronously by RemoteFile object.

#### DownloadDataAsync

```c#
AsyncResult<byte[]> DownloadDataAsync(string fileUri, 
            string storageName = null, 
            string versionId = null,
            IProgress<ProgressData> progressCallback = null )
```

Starts asynchronous download of a storage file into a byte array.

```c#
AsyncResult<byte[]> DownloadDataAsync(RemoteFile file, 
                                      string versionId = null, 
                                      IProgress < ProgressData > progressCallback = null)
```

Overloaded method. Starts asynchronous download of a storage file into the byte array.







### SDK examples

#### Example 1: How to upload a file



The following example demonstrates how to upload a file by its local file system path to the specified storage.

```c#
HtmlApi api = new HtmlApi(clientId, clientSecret);  
StorageProvider storageApi = api.Storage;  // Storage API entry point

var storageName = "";       // default storage
var dataDir = "c:\\work\\testdata";
var name = "testpage1.html";
var remotefolder = "/HtmlTestData/Upload";
var localPath = Path.Combine(dataDir, name);

```

#### Example 2: How to download a file

The example below shows how to download a file from storage to the local file system.

```c#
var storageName = "";       // default storage
var folder = "/HtmlTestData";
var name = "testpage1.html";
var localPath = "c:\\work\\download";

// here the ConfigurationBuilder is used to initialize the SDK API object
var api = new HtmlApi(cb => cb
                      .WithClientId(clientId)
                      .WithClientSecret(clientSecret));  
var storageApi = api.Storage;  // Storage API entry point

var storagePath = $"{folder}/{name}";

storageApi.Download(storagePath, Path.Combine(localPath, name), storageName)
if(File.Exists(Path.Combine(localPath, name)))
{
    // ... check if file has been downloaded
}
```



## REST API

### REST API description

All URIs are relative to https://api.aspose.cloud/v4.0/html.

#### Download a file

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

##### cURL example

```bash
curl -X GET \
	-v "https://api.aspose.cloud/v4.0/html/file?path=/Html/TestData/file.txt&storageName=MyStorage" \
	--output d:\Work\testout\file.txt \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
	
```



#### Upload a file

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

##### cURL example

```bash
curl -X POST \
	-v "https://api.aspose.cloud/v4.0/html/file?path=/Html/TestData/Map-World.svgt&storageName=MyStorage" \
	--data-binary @d:\Work\testdata\Map-World.svg \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



#### Copy a file

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

##### cURL example

```bash
curl -X PUT \
	-v "https://api.aspose.cloud/v4.0/html/file/copy?srcpath=/Html/TestData/file.txt&destpath=/Testout/Copy/file.txt" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



#### Move a file

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

##### cURL example

```bash
curl -X PUT \
	-v "https://api.aspose.cloud/v4.0/html/file/move?srcpath=/Html/TestData/file.txt&destpath=/Testout/Move/file.txt" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



#### Delete a file

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

##### cURL example

```bash
curl -X DELETE \
	-v "https://api.aspose.cloud/v4.0/html/file?path=/Html/TestData/filetodelete.txt&storageName=MyStorage" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```





