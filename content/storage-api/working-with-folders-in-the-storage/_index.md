---
title: Working with Folders in Storage - Cloud APIs
linktitle: Working with Folders in Storage
type: docs
aliases: /storage-folder-api/
keywords: cloud storage, storage folder, cloud storage folder, storage directory, delete folder, delete directory create folder, create directory, directory exist, REST API, SDK, Python, PHP, Android, Swift, C#, Java, Node.js
description: Learn how to manipulate folders in cloud storage using Aspose.HTML Cloud API v.4.0. 
weight: 40
url: /storage-api/working-with-folders-in-storage/
lastmod: 2022-11-09
---

## **Summary**

Aspose.HTML Cloud allows you to work with files and folders in cloud storage. The most common storage use cases are cloud backup, disaster recovery and archiving infrequently accessed data. 

Aspose.HTML Cloud v4.0 allows you to work and manipulate folders in the cloud storage and provides the ability to use its functionality both by the REST API directly or by the set of wrappers implemented as SDKs on the various programming languages such as Python, PHP, Java/Android, Swift, C#, Node.js and Ruby.

## **Examples of Working with Storage Folders**

### **Example 1. Check if a directory specified by the path exists in the specified or default storage**

The examples below demonstrate how to check if a directory exists in the storage. The directory is specified by a path and the storage is specified by the storage name.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

```c#
// Initialize an SDK API object 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Check if "files" directory exists
var exists = await api.DirectoryExistsAsync("/files", "STORAGE_NAME");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java
Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
StorageApi storageApi = new ApiClient().createService(StorageApi.class);

Call<ObjectExist> call = storageApi.objectExists("FolderInStorage/file.txt", null, null);

Response<ObjectExist> res = call.execute();
ObjectExist result = res.body();
```

{{< /tab >}}

{{< tab tabNum="3" >}}

```c++
#include "AsposeHtmlCloud.h"

const utility::string_t clientId = L"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const utility::string_t clientSecret = L"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const utility::string_t basePath = L"https://api.aspose.cloud/v4.0";
const utility::string_t authPath = L"https://api.aspose.cloud/connect/token";

// Create configuration for authorization
std::shared_ptr<ApiConfiguration> apiConfig(new ApiConfiguration(clientId, clientSecret, basePath, authPath));

// Create client from configuration
std::shared_ptr<ApiClient> apiClient(new ApiClient(apiConfig));

// Create StorageApi
StorageApi* api = new StorageApi(apiClient);

utility::string_t file = L"/FolderInStorage";
boost::optional<utility::string_t> versionId = L"";
boost::optional<utility::string_t> storageName = L"";

auto result_exist = api->objectExists(file, versionId, storageName).get();

bool isExist = result_exist->isExists();
bool isFolder = result_exist->isFolder();

delete api;
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
Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
StorageApi storageApi = new ApiClient().createService(StorageApi.class);

Call<ObjectExist> call = storageApi.objectExists("FolderInStorage/file.txt", null, null);

Response<ObjectExist> res = call.execute();
ObjectExist result = res.body();
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


### **Example 2: Create a directory in the specified or default storage**

The examples below demonstrate how to create a directory in the storage. All parent directories specified in the directoryUri path will be created too if they don't exist.

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

```c#
// Initialize an SDK API object 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Create directory "files" in the cloud storage
var exists = await api.CreateDirectoryAsync("/files", "STORAGE_NAME");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java
Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
StorageApi storageApi = new ApiClient().createService(StorageApi.class);

String folderName = "CreateTestFolder";
Call<Void> call = storageApi.createFolder(folderName, null);

Response<Void> res = call.execute();
```

{{< /tab >}}

{{< tab tabNum="3" >}}

```c++
#include "AsposeHtmlCloud.h"

const utility::string_t clientId = L"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const utility::string_t clientSecret = L"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const utility::string_t basePath = L"https://api.aspose.cloud/v4.0";
const utility::string_t authPath = L"https://api.aspose.cloud/connect/token";

// Create configuration for authorization
std::shared_ptr<ApiConfiguration> apiConfig(new ApiConfiguration(clientId, clientSecret, basePath, authPath));

// Create client from configuration
std::shared_ptr<ApiClient> apiClient(new ApiClient(apiConfig));

// Create StorageApi
StorageApi* api = new StorageApi(apiClient);

utility::string_t path = L"HtmlTestDoc/TestFolder";
boost::optional<utility::string_t> storageName = L"";

auto result = api->createFolder(path, storageName).get();

bool isOk = result->getCode() == 200;

delete api;
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
Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
StorageApi storageApi = new ApiClient().createService(StorageApi.class);

String folderName = "CreateTestFolder";
Call<Void> call = storageApi.createFolder(folderName, null);

Response<Void> res = call.execute();
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
// Initialize an SDK API object 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Delete "files" directory in the storage
var exists = await api.DeleteDirectoryAsync("/files", "STORAGE_NAME");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java
Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
StorageApi storageApi = new ApiClient().createService(StorageApi.class);

String folderName = "DeletingFolder";

//Create remote folder
Call<Void> call = storageApi.deleteFolder(folderName, null, true)
Response<Void> res = call.execute();
```

{{< /tab >}}

{{< tab tabNum="3" >}}

```c++
#include "AsposeHtmlCloud.h"

const utility::string_t clientId = L"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const utility::string_t clientSecret = L"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const utility::string_t basePath = L"https://api.aspose.cloud/v4.0";
const utility::string_t authPath = L"https://api.aspose.cloud/connect/token";

// Create configuration for authorization
std::shared_ptr<ApiConfiguration> apiConfig(new ApiConfiguration(clientId, clientSecret, basePath, authPath));

// Create client from configuration
std::shared_ptr<ApiClient> apiClient(new ApiClient(apiConfig));

// Create StorageApi
StorageApi* api = new StorageApi(apiClient);

utility::string_t folder_name = L"HtmlTestDoc/TestDeleteFolder";
boost::optional<utility::string_t> storageName = L"";
boost::optional<bool> recursive = true;

//Delete folder
auto result_del = api->deleteFolder(folder_name, storageName, recursive).get();

bool isOk = result_del->getCode() == 200;

delete api;
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
Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
StorageApi storageApi = new ApiClient().createService(StorageApi.class);

String folderName = "DeletingFolder";

//Create remote folder
Call<Void> call = storageApi.deleteFolder(folderName, null, true)
Response<Void> res = call.execute();
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

{{% alert color="primary" %}} 
Cloud storage allows world-wide storage and retrieval of data at any time. Aspose.HTML provides the [Cloud SDK Family](https://products.aspose.cloud/html/family) to access files and folders stored in the user associated Aspose Cloud Storage or any other Cloud Storage of your choice. 

The [GitHub repository for Aspose.HTML for Cloud](https://github.com/aspose-html-cloud) has a complete set of examples, demonstrating our API capabilities.
{{% /alert %}} 