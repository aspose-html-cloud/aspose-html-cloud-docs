---
title: Working with Files in the Storage
type: docs
aliases: /storage-api/working-with-files-in-the-storage/
keywords: "cloud storage, cloud storage api, REST API, cloud storage folder, get folder content, create folder, delete folder, copy folder, move folder, Python, Java, .NET, C#, Android, Swift, Perl, Node.js"
description: "The article explains how to manipulate folders in the cloud storage using Aspose.HTML Cloud API v.4.0. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their
  development."
weight: 30
---

## **Summary**

Aspose.HTML Cloud v4.0 allows you to work and manipulate folders in the cloud storage and provides the ability to use its functionality both by the REST API directly or by the set of wrappers implemented as SDKs on the various programming languages.

This article provides a detailed description of SDK and REST methods to manipulate files in the cloud storage, i.e. upload, download or delete files.


## **Examples**

### **Example 1: Check if file exists**


{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

```c#
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Check if exists
var exists = await api.FileExistsAsync("/test.html");
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

```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/storage/exists?path=test.html&storageName=STORAGE_NAME" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}	


### **Example 2: Upload file from local file system to the specified storage**


{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

```c#
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Upload local file test.html to "files" folder in the cloud storage
var exists = await api.UploadFileAsync("test.html", "files/test.html", "STORAGE_NAME");
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

```bash
curl -X POST \
	-v "https://api.aspose.cloud/v4.0/html/file?path=/files/test.html&storageName=MyStorage" \
	--data-binary test.html \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}	

### **Example 3: Download file from cloud storage to local file system**


{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

```c#
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Download test.html file from cloud folder "files" to local file system
var exists = await api.DownloadFileAsync("files/test.html", "test.html", "STORAGE_NAME");
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

```bash
curl -X GET \
	-v "https://api.aspose.cloud/v4.0/html/file?path=/files/test.html&storageName=MyStorage" \
	--output test.html \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}	

### **Example 4: Delete a storage file by its path from the specified or default storage.**


{{< tabs tabTotal="10" tabID="5" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

```c#
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Delete test.html file located in the cloud folder named "files"
var exists = await api.DeleteFileAsync("files/test.html", "STORAGE_NAME");
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

```bash
curl -X DELETE \
	-v "https://api.aspose.cloud/v4.0/html/file?path=/files/test.html&storageName=MyStorage" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}	

