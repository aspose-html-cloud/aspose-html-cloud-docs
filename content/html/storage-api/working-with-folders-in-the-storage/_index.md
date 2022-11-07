---
title: Working with Folders in the Storage
type: docs
aliases: /storage-api/working-with-folders-in-the-storage/
keywords: "cloud storage, cloud storage api, SDK, cloud storage file, upload file, download file, delete file, copy file, move file, REST API, SDK, Python, PHP, Perl, Android, Swift, C#, Java, Node.js"
description: "The chapter explains how to manipulate files in the cloud storage using Aspose.HTML Cloud API v.4.0. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their
  development."
weight: 40
---

## **Summary**

Aspose.HTML Cloud allows you to work with documents saved on the cloud storage and use the storage for various scenarios. The most common use cases are cloud backup, disaster recovery and archiving infrequently accessed data. Having your files into cloud storage will also give you the ability to share them with friends or co-workers.

 Storage services enable developers to store data in the cloud, relying on authentication and other access features that control who can get to the data. If you need any information about getting started with Aspose.HTML Cloud, please refer to the [Create an Account and Get Credentials](/html/overview/create-an-account-and-get-credentials/) article.


## **Cloud SDK family**

Cloud storage allows world-wide storage and retrieval of data at any time. Aspose.HTML provides the [Cloud SDK Family](https://products.aspose.cloud/html/family) to access files and folders stored in the user associated Aspose Cloud Storage or any other Cloud Storage of your choice. If you need any help to get started with setting third party storage, please refer to [Aspose Cloud UI Help Topics](https://docs.aspose.cloud/total/aspose-cloud-ui-help-topics/).


### **Examples**

### **Check if a directory specified by the path exists in the specified or default storage**


{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

```c#
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Check if directory "files" exists
var exists = await api.DirectoryExistsAsync("/files", "STORAGE_NAME");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}


```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

```
/storage/exists?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | Folder path                                       | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |

```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/storage/exists?path=/files&storageName=STORAGE_NAME" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}	


### **Example 2: Creates a directory in the specified or default storage**

All parent directories specified in the directoryUri path will be created too if they don't exist.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

```c#
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Create directory "files" in the cloud storage
var exists = await api.CreateDirectoryAsync("/files", "STORAGE_NAME");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}


```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

**cURL POST request**: create a folder.

```
/folder?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | Folder path to be created.                        | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |
```bash
curl -X POST \
	-v "https://api.aspose.cloud/v4.0/html/folder?path=/files" \
	-H "Content-Length:0" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}	

### **Example 3: Delete a directory by the specified path from the specified or default storage**


{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

```c#
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Delete "files" directory in the storage
var exists = await api.DeleteDirectoryAsync("/files", "STORAGE_NAME");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}


```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

```java

```

{{< /tab >}}

{{< tab tabNum="10" >}}

**DELETE**: delete the specified folder.

```
/folder?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | Folder path to be deleted.                        | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |

```bash
curl -X DELETE \
	-v "https://api.aspose.cloud/v4.0/html/folder?path=/files" \
  -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}	




