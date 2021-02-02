---
title: "File SDK methods"
type: docs
url: /storage-api/working-with-files-in-the-storage/file-sdk-methods/
keywords: "cloud storage, cloud storage api, cloud storage file, upload file, download file, delete file, copy file, move file, python, java , .net,  c#,  android, swift ,Perl, Node.js"
description: "Article explains how to manipulate files in the cloud storage using Aspose.HTML Cloud API v.4.0. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 10
---

## **Summary**

Aspose.HTML Cloud allows you to work with documents saved on the cloud storage. The Aspose.HTML Cloud API is a REST-based API for wide usability on the web across platforms. 

This article provides a detailed description of SDK methods to manipulate files in the cloud storage, i.e. upload, download, copy, move or delete files. If storage supports file versioning, this is an option to operate with a specified file version.

## **Cloud SDK family**

{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/). Complete source code of Aspose.HTML SDK for .NET is freely available on the [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

{{% /alert %}}  

## **File SDK methods**

All storage access methods are divided into three groups: storage information methods, directory manipulation methods and file manipulation methods. Let's consider methods that allow you to get information about file operations:

### **FileExists**

```c#
bool FileExists(string fileUri, string storageName = null)
```

Checks if a file specified by the path exists in the specified or default storage.

```c#
bool FileExists(RemoteFile file)
```

Overloaded method. Checks if a file specified by the Path property of RemoteFile object exists.

### **GetFiles**

```c#
IReadOnlyList<RemoteFile> GetFiles(string directoryUri, string storageName = null)
```

Gets a list of files by specified directory path in the specified or default storage.

```c#
IReadOnlyList<RemoteFile> GetFiles(RemoteDirectory directory)
```

Overloaded method. Gets a list of files in the directory specified by RemoteDirectory object.

### **GetFileInfo**

```c#
RemoteFile GetFileInfo(string fileUri, string storageName = null)
```

Gets the file info by its path in the specified or default storage. 

```c#
RemoteFile GetFileInfo(RemoteDirectory directory, string fileName)
```

Overloaded method. Gets the file info by its name in the directory specified by RemoteDirectory object.

### **UploadFile**

```c#
RemoteFile UploadFile(string file, 
                      string remoteFileUri, 
                      string storageName = null, 
                      NameCollisionOption option = NameCollisionOption.FailIfExists)
```

Uploads a file synchronously by its local file system path to the specified storage.

### **UploadFileAsync**

```c#
AsyncResult<RemoteFile> UploadFileAsync(string file, 
                                        string remoteFileUri, 
                                        string storageName = null,
                                        NameCollisionOption option = NameCollisionOption.FailIfExists,
                                        IProgress<object> progressCallback = null)
```

Starts asynchronous upload of a file by its local file system path to the specified storage.

### **UploadData**

```c#
RemoteFile UploadData(byte[] data, 
                      string fileUri, 
                      string storageName = null, 
                      NameCollisionOption option = NameCollisionOption.FailIfExists)
```

Uploads a byte array as a file into storage synchronously.

### **UploadDataAsync**

```c#
public AsyncResult<RemoteFile> UploadDataAsync(byte[] data, 
                                               string fileUri, 
                                               string storageName = null,
                                               NameCollisionOption option = NameCollisionOption.FailIfExists,
                                               Progress<VoidResult> progressCallback = null)
```

Starts asynchronous upload of a byte array as a file into storage.

### **DownloadFile**

```c#
void DownloadFile(string fileUri, string localFilePath, string storageName = null, string versionId = null)
```

Downloads a storage file synchronously by its storage path and saves by a local file system path.

```c#
DownloadFile(RemoteFile file, string localFilePath, string versionId = null)
```

Overloaded method. Downloads a storage file synchronously by its storage path from RemoteFile object and saves by a local file system path.

### **DownloadFileAsync**

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

### **DownloadData**

```c#
byte[] DownloadData(string fileUri, string storageName = null, string versionId = null)
```

Downloads a storage file into a byte array synchronously by its storage path and saves by a local file system path.

```c#
byte[] DownloadData(RemoteFile file, string versionId = null)
```

Overloaded method. Downloads a storage file into a byte array synchronously by RemoteFile object.

### **DownloadDataAsync**

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



## **SDK examples**

### **Example 1: How to check if a file exists in the storage**

The following example demonstrates how to to check if a file exists in the storage.

{{< tabs tabTotal="1" tabID="1" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```c#
string folder = "/HtmlTestData";
string name = "testpage1.html";
string name_ = "fake.html";

// here the ConfigurationBuilder is used to initialize the SDK API object
using(var api = new HtmlApi(cb => cb
                      .WithClientId(clientId)
                      .WithClientSecret(clientSecret)))
{
    StorageProvider storageApi = api.Storage;  // Storage API entry point

    string storagePath = $"{folder}/{name}";     

    bool exist = storageApi.FileExists(storagePath);        // true

    storagePath = $"{folder}/{name_}";
    storageApi.FileExists(storagePath);                // false
}
			
```

{{</ tab >}}

{{</ tabs >}}

In the example, the **HtmlApi** object configures with the **ConfigurationBuilder**. You should pass Credentials (Client ID and Client Secret) to builder-style methods **WithClientId**(`clientId`) and **WithClientSecret**(`clientSecret`). Aspose.HTML Cloud for .NET API provides the **StorageProvider** class that is a common SDK facade of cloud storage access.

The **FileExists**(`fileUri`) method checks if a file specified by the path exists in the storage.

### **Example 2: How to upload a file**

The following example demonstrates how to upload a file by its local file system path to the specified storage.

{{< tabs tabTotal="1" tabID="2" tabName1="C#" >}}

{{< tab tabNum="1" >}}


```c#
var storageName = "";       // default storage
var dataDir = "c:\\work\\testdata";
var name = "testpage1.html";
var remotefolder = "/HtmlTestData/Upload";
var localPath = Path.Combine(dataDir, name);

// here the ConfigurationBuilder is used to initialize the SDK API object
using(var api = new HtmlApi(cb => cb
                      .WithClientId(clientId)
                      .WithClientSecret(clientSecret)))
{
    var storageApi = api.Storage;  // Storage API entry point
    var storagePath = "storage://{storageName}{remotefolder}/{name}";

    // upload file
    var file = storageApi.UploadFile(localPath, storagePath);
	// check if a storage file exists
    bool exists = storageApi.FileExists(storagePath);
}

```

{{</ tab >}}

{{</ tabs >}}


In the example, we use the **UploadFile**(`localPath`, `storagePath`) method that uploads a file synchronously by its local file system path to the specified storage.

### **Example 3: How to download a file**

The example below shows how to download a file from storage to the local file system.

{{< tabs tabTotal="1" tabID="3" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```c#
var storageName = "";       // default storage
var folder = "/HtmlTestData";
var name = "testpage1.html";
var localPath = "c:\\work\\download";

// here the ConfigurationBuilder is used to initialize the SDK API object
using(var api = new HtmlApi(cb => cb
                      .WithClientId(clientId)
                      .WithClientSecret(clientSecret)))
{
    var storageApi = api.Storage;  // Storage API entry point
    var storagePath = $"storage://{storageName}{folder}/{name}";

    storageApi.DownloadFile(storagePath, Path.Combine(localPath, name), storageName)
    if(File.Exists(Path.Combine(localPath, name)))
    {
        // ... check if file has been downloaded
    }
}

```

{{</ tab >}}

{{</ tabs >}}

In the example, the SDK API instance has been created with Configuration object initialized in the builder style. The **DownloadFile**(` fileUri`, `localFilePath`, `storageName`) method  downloads a storage file synchronously by its storage path and saves by a local file system path.

{{% alert color="primary" %}} 
Please check [Available SDKs](/html/available-sdks/) article to learn how to add an SDK to your project.

The [GitHub repository](https://github.com/aspose-html-cloud) has a complete list of Aspose.HTML SDKs with working examples for a quick start.

{{% /alert %}}  











