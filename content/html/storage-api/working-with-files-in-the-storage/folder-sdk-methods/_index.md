---
title: "Folder SDK methods"
type: docs
url: /storage-api/working-with-folders-in-the-storage/folder-sdk-methods
keywords: "cloud storage, cloud storage api, cloud storage folder, get folder content, create folder, delete folder, copy folder, move folder, python, java , .net,  c#,  android, swift ,Perl, Node.js"
description: "Article explains how to manipulate folders in the cloud storage using Aspose.HTML Cloud API v.4.0. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 10
---

This article provides a detailed description of operations to manipulate folders (directories) in the cloud storage using Aspose.HTML Cloud API v.4.0. SDKs.

{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/). Complete source code of Aspose.HTML SDK for .NET is freely available on the [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

{{% /alert %}}  

## **Folder SDK methods**

Aspose.HTML Cloud allows you to work and manipulate folders in the cloud storage. All storage access methods are divided into three groups: storage information methods, directory manipulation methods and file manipulation methods. Let's consider methods that allow you to get information about folder operations:

### **DirectoryExists**

```c#
bool DirectoryExists(string directoryUri, string storageName = null)
```

Checks if a directory specified by the path exists in the specified or default storage.

```c#
bool DirectoryExists(RemoteDirectory dir)
```

Overloaded method. Checks if a directory specified by RemoteDirectory descriptor object exists.

### **GetDirectories**

```c#
IReadOnlyList<RemoteDirectory> GetDirectories(string rootDirectoryUri, string storageName = null)
```

Gets a list of directories that are direct children of the specified directory in the specified or default storage.

### **GetDirectory**

```c#
RemoteDirectory GetDirectory(string directoryUri, string storageName = null)
```

Gets a specified directory info, or null, if the directory doesn't exist.

### **CreateDirectory**

```c#
RemoteDirectory CreateDirectory(string directoryUri, 
                                string storageName = null, 
                                NameCollisionOption option = NameCollisionOption.FailIfExists)
```

Creates a directory in the specified or default storage; all parent directories specified in the directoryUri path will be created too if they don't exist.

### **DeleteDirectory**

```c#
bool DeleteDirectory(string directoryUri, string storageName = null, bool recursive = false)
```

Deletes a directory by the specified path from the specified or default storage.

```c#
bool DeleteDirectory(RemoteDirectory directory, bool recursive = false)
```

Overloaded method. Deletes a directory by the path specified by RemoteDirectory object.

### **CopyDirectory**

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

### **MoveDirectory**

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



## **SDK Examples**

Aspose.HTML Cloud  SDKs don't require you to receive tokens as they become obsolete. You need only pass your **Client Id** and **Client Secret** as the parameters to initialize an SDK entry point object.

{{% alert color="primary" %}} 
Please check the [QuickStart](/html/quickstart/) article to learn how to obtain the **Client Id** and **Client Secret** .
{{% /alert %}} 

### **Example 1: How to check if a folder exists in the storage**

The example below demonstrates how to check if a folder exists in the storage.

{{< tabs tabTotal="1" tabID="1" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```c#
string folder = "/HtmlTestData";

// here the ConfigurationBuilder is used to initialize the SDK API object
using(var api = new HtmlApi(cb => cb
                      .WithClientId(clientId)
                      .WithClientSecret(clientSecret)))
{
    StorageProvider storageApi = api.Storage;  // Storage API entry point
    bool exist = storageApi.DirectoryExists(folder);   // true
}
			
```

{{</ tab >}}

{{</ tabs >}}

In the example, the SDK API object is initialized using the ConfigurationBuilder. The **DirectoryExists**(`directoryUri`, `storageName = null`) method checks if a directory specified by the path exists in the specified or default storage. 


### **Example 2: How to create a folder**

The example below demonstrates how to create a folder in the storage.

{{< tabs tabTotal="1" tabID="2" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```c#
string storageName = ""; // default storage
string folderPath = "/newFolder";

using(var api = new HtmlApi(clientId, clientSecret))
{
    var storageApi = api.Storage;  // Storage API entry point 
    RemoteDirectory remoteDir = storageApi.CreateDirectory(folderPath, storageName);
}

```

{{</ tab >}}

{{</ tabs >}}

The **HtmlApi** (` clientId`, `clientSecret`) method initializes a class instance with user Credentials. The **CreateDirectory**(`folderPath`, `storageName`) method creates a directory in the specified storage; all parent directories specified in the `folderPath` will be created too if they don’t exist.

### **Example 3: How to get the folder content**

The example below demonstrates how to get a list of direct child folders and a list of files in the specified folder.

{{< tabs tabTotal="1" tabID="3" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```c#
const string TestDataFolder = "/HtmlTestData";
string storageName = ""; // default storage

using(var api = new HtmlApi(clientId, clientSecret))
{
    var storageApi = api.Storage;  // Storage API entry point 

    var dirsList = storageApi.GetDirectories(TestDataFolder, storageName);
    var filesList = storageApi.GetFiles(TestDataFolder, storageName);
}
```

{{</ tab >}}

{{</ tabs >}}

The **HtmlApi** (` clientId`, `clientSecret`) method initializes a class instance with user Credentials and default API server URL. The **GetDirectories**(`TestDataFolder`, `storageName`) method takes as parameters root directory URI, storage name and retrieves a list of directories that are direct children of the specified directory in the specified storage. The **GetFiles**(`TestDataFolder`, `storageName`) method takes as parameters directory URI, storage name and retrieves a list of files by specified directory path in the specified storage.

{{% alert color="primary" %}} 
The [GitHub repository for Aspose.HTML for Cloud](https://github.com/aspose-html-cloud) has a complete set of examples, demonstrating our API capabilities.
{{% /alert %}} 



