---
title: Working with Files in Storage - Cloud APIs
linktitle: Working with Files in Storage
type: docs
aliases: /storage-file-api/
keywords: cloud storage, sdk, storage file, REST API, file exists, upload file, download file, delete file, copy file, move file, Python, Java, .NET, C#, Android, Swift, Perl, Node.js
description: Learn how to manipulate files in the cloud storage using Aspose.HTML Cloud API v.4.0. - how to upload files, download files, delete files.
weight: 30
url: /storage-api/working-with-files-in-storage/
lastmod: 2022-11-09
---

## **Storage Files**

Aspose.HTML Cloud allows you to work with storage files - documents saved on the cloud storage and use the storage for various scenarios. The most common use cases are cloud backup, disaster recovery and archiving infrequently accessed data. Having your files into cloud storage will also give you the ability to share them with friends or co-workers.

Storage services enable developers to store data in the cloud, relying on authentication and other access features that control who can get to the data. If you need any information about getting started with Aspose.HTML Cloud, please refer to the [Create an Account and Get Credentials](/html/create-an-account-and-get-credentials/) article.

## **Examples of Working with Storage Files**

This article provides a description of SDK and REST methods to manipulate files in the cloud storage, i.e. upload, download or delete files.

### **Example 1: Check if a file exists in the storage**

The following example demonstrates how to check if a file exists in the storage.

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}
Aspose.HTML Cloud for .NET API provides the FileExistsAsync() method that checks if a file specified by the path exists in the storage.

```c#
// Initialize an SDK API object
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Check if a file exists in the storage
var exists = await api.FileExistsAsync("/test.html");
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

utility::string_t file = L"FolderInStorage/file.txt";
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
configuration = Configuration(
    basePath="https://api.aspose.cloud/v4.0",
    authPath="https://api.aspose.cloud/connect/token",
    apiKey="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    appSid="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    debug=True)

client = Client(configuration)
api = StorageApi(client)

res = api.object_exists("fileInStorage.txt").to_dict()

exist = res['exists']
is_folder = res['is_folder']
print(res)
```

{{< /tab >}}

{{< tab tabNum="5" >}}

```php
$configuration = array(
    "basePath" => "https://api.aspose.cloud/v4.0",
    "authPath" => "https://api.aspose.cloud/connect/token",
    "apiKey" => "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID" => "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent" => "Webkit"
);

$api_stor = new StorageApi($configuration);

// Path to the file
$path = "FolderInStorage/file.txt";

//Default storage
$storage_name = null;

//Last version
$version_id = null;

$result = $api_stor->objectExists($path, $storage_name, $version_id);

$is_exist = $result->$result->getExists();
$is_folder = $result->getIsFolder();
```

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby
# load the gem
require 'aspose_html_cloud'

CONFIG = {
  "basePath": "https://api.aspose.cloud/v4.0",
  "authPath": "https://api.aspose.cloud/connect/token",
  "apiKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "appSID": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
  "debug": true
}

api = AsposeHtml::StorageApi.new CONFIG

name = "test.txt"
path = "FolderInStorage/" + name
opts = {storage_name: nil, version_id: nil}

res = api.object_exists(path, opts)

exist = res.exists
```

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript
// Get keys from aspose site.
// There is free quota available. 
// For more details, see https://purchase.aspose.cloud/pricing
	
var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"NodeJsWebkit"
};

var api = require('@asposecloud/aspose-html-cloud');

// Create Storage Api object
var instance = new api.StorageApi(conf);

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);  
  }
};

var file = "folderInStorage/file.txt";
var opts = {
    'versionId': null,
    'storageName': null
};

instance.objectExists(file, opts, callback);
```

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift
import Alamofire
import Foundation
import XCTest
import AsposeHtmlCloud

ClientAPI.setConfig(
	basePath: "https://api.aspose.cloud/v4.0", 
	authPath: "https://api.aspose.cloud/connect/token", 
	apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", 
	appSID: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", 
	debugging: true
)

let expectation = self.expectation(description: "Test is not exist file")

let not_exist_file = "non_exist.gif"

StorageAPI.objectExists(path: not_exist_file, storageName: nil, versionId: nil) {(data, error) in
    guard error == nil else {
        XCTFail("Error objectExists not exist. Error=\(error!.localizedDescription)")
        return
    }
    XCTAssertFalse(data!.exists)
    XCTAssertFalse(data!.isFolder)
    expectation.fulfill()
}

self.waitForExpectations(timeout: 100.0, handler: nil)
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

```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/storage/exists?path=test.html&storageName=STORAGE_NAME" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}	


### **Example 2: Upload file from local file system to the specified storage**

The following example demonstrates how to upload a file by its local file system path to the specified storage.
{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

```c#
// Initialize an SDK API object
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Upload file test.html to "files" folder in the cloud storage
var exists = await api.UploadFileAsync("test.html", "files/test.html", "STORAGE_NAME");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java
Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
StorageApi storageApi = new ApiClient().createService(StorageApi.class);

File f = new File("PathToFile", "test.txt");
RequestBody requestBody = RequestBody.create( MediaType.parse("multipart/form-data"), f);
MultipartBody.Part fileToUpload = MultipartBody.Part.createFormData("file", f.getName(), requestBody);

Call<FilesUploadResult> call = storageApi.uploadFile(fileToUpload, "FolderInStorage", null);

Response<FilesUploadResult> res = call.execute();
FilesUploadResult result = res.body();
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

const utility::string_t testSource = L"C:\\WORK\\TEST\\";
const utility::string_t name = _XPLATSTR("test.jpg");
std::shared_ptr<HttpContent> file(new HttpContent(testSource, name));

utility::string_t folder = L"FolderInStorage";
boost::optional<utility::string_t> storageName = L"";

auto result = api->uploadFile(folder, file, storageName).get();

bool isError = result->errorsIsSet();

delete api;
```

{{< /tab >}}

{{< tab tabNum="4" >}}


```python
configuration = Configuration(
    basePath="https://api.aspose.cloud/v4.0",
    authPath="https://api.aspose.cloud/connect/token",
    apiKey="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    appSid="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    debug=True)

client = Client(configuration)
api = StorageApi(client)

result = api.upload_file("FolderInStorage", "full/path/to/the/file.txt")
ok = len(result.uploaded) == 1 and len(result.errors) == 0 
```

{{< /tab >}}

{{< tab tabNum="5" >}}

```php
$configuration = array(
    "basePath" => "https://api.aspose.cloud/v4.0",
    "authPath" => "https://api.aspose.cloud/connect/token",
    "apiKey" => "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID" => "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent" => "Webkit"
);

$api_stor = new StorageApi($configuration);

$file = new SplFileObject("full/path/to/the/file.txt");

//Default storage
$storage_name = null;

$response = $api_stor->uploadFile("FolderInStorage", $file, $storage_name);

$isOK = count($response->getUploaded()) == 1 && count($response->getErrors()) == 0
```

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby
# load the gem
require 'aspose_html_cloud'

CONFIG = {
  "basePath": "https://api.aspose.cloud/v4.0",
  "authPath": "https://api.aspose.cloud/connect/token",
  "apiKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "appSID": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
  "debug": true
}

api = AsposeHtml::StorageApi.new CONFIG

folder = "FolderInStorage"
file = File.realpath('path/to/local/file.txt')

opts = {storage_name: nil, version_id: nil}

res = api.upload_file(folder, file, opts)

isOk = res.uploaded.length == 1
```

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript
// Get keys from aspose site.
// There is free quota available. 
// For more details, see https://purchase.aspose.cloud/pricing
	
var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"NodeJsWebkit"
};

var api = require('@asposecloud/aspose-html-cloud');

// Create Storage Api object
var instance = new api.StorageApi(conf);

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);  
  }
};

var folder = "FolderInStorage";
var file = fs.createReadStream(path.normalize('path/to/loca;/file.txt'));
var opts = { 'storageName': null };

instance.uploadFile(folder, file, opts, callback);
```

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift
import Alamofire
import Foundation
import XCTest
import AsposeHtmlCloud

static let fm = FileManager.default
let resourceDir = fm.homeDirectoryForCurrentUser.appendingPathComponent("Documents/Aspose.HTML.Cloud.SDK.Swift/Tests/AsposeHtmlCloudTests/Resources")

func url(forResource fileName: String) -> URL {
	return resourceDir.appendingPathComponent(fileName)
}

ClientAPI.setConfig(
	basePath: "https://api.aspose.cloud/v4.0", 
	authPath: "https://api.aspose.cloud/connect/token", 
	apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", 
	appSID: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", 
	debugging: true
)

let expectation = self.expectation(description: "Test is uploadFile")

let fileName = "test.jpg"

let urlTest = url(forResource: fileName)

StorageAPI.uploadFile(file: urlTest, path: "HtmlTesting", storageName: nil) {(data, error) in
    guard error == nil else {
        XCTFail("Error uploadFile. Error=\(error!.localizedDescription)")
        return
    }

    XCTAssertEqual(data!.uploaded!.count, 1)
    XCTAssertEqual(data!.errors!.count, 0)

    expectation.fulfill()
}

self.waitForExpectations(timeout: 100.0, handler: nil)
```

{{< /tab >}}

{{< tab tabNum="9" >}}

```java
Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
StorageApi storageApi = new ApiClient().createService(StorageApi.class);

File f = new File("PathToFile", "test.txt");
RequestBody requestBody = RequestBody.create( MediaType.parse("multipart/form-data"), f);
MultipartBody.Part fileToUpload = MultipartBody.Part.createFormData("file", f.getName(), requestBody);

Call<FilesUploadResult> call_create = storageApi.uploadFile(fileToUpload, "FolderInStorage", null);

Response<FilesUploadResult> res = call_create.execute();
FilesUploadResult result = res.body();
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

The examples below show how to download a file from storage to the local file system using SDKs and REST API calls.

{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

```c#
// Initialize an SDK API object
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Download file test.html from cloud folder "files" to local file system
var exists = await api.DownloadFileAsync("files/test.html", "test.html", "STORAGE_NAME");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java
Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
StorageApi storageApi = new ApiClient().createService(StorageApi.class);

Call<ResponseBody> call = storageApi.downloadFile("FolderInStorage/fileInStorage.txt", null, null);

Response<ResponseBody> res = call.execute();
ResponseBody res_download = res.body();
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

utility::string_t file = L"FolderInStorage/file.txt";
boost::optional<utility::string_t> versionId = L"";
boost::optional<utility::string_t> storageName = L"";

auto result_download = api->downloadFile(file, versionId, storageName).get();

utility::string_t save = L"PathToSave/testDowmloadFile.txt";
std::ofstream saved_data(save, std::ios::out | std::ios::binary);

//Save file locally
if (saved_data.is_open()) 
{
	result_download.writeTo(saved_data);
	saved_data.close();
}
else
{
	std::cout << "Unable to open file";
}

delete api;
```

{{< /tab >}}

{{< tab tabNum="4" >}}


```python
configuration = Configuration(
    basePath="https://api.aspose.cloud/v4.0",
    authPath="https://api.aspose.cloud/connect/token",
    apiKey="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    appSid="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    debug=True)

client = Client(configuration)
api = StorageApi(client)

result = api.download_file("PathInStorage/file.txt")
copy2(result, "path/to/save/file.txt")
os.remove(result)
```

{{< /tab >}}

{{< tab tabNum="5" >}}

```php
$configuration = array(
    "basePath" => "https://api.aspose.cloud/v4.0",
    "authPath" => "https://api.aspose.cloud/connect/token",
    "apiKey" => "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID" => "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent" => "Webkit"
);

$api_stor = new StorageApi($configuration);

// Default storage
$storage_name = null;

// Last version
$version_id = null;

$result = $api_stor->downloadFile("/FileInStorage/file.txt", $storage_name, $version_id);

copy($result->getRealPath(), "/path/to/local/file.txt");
```

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby
# load the gem
require 'aspose_html_cloud'

CONFIG = {
  "basePath": "https://api.aspose.cloud/v4.0",
  "authPath": "https://api.aspose.cloud/connect/token",
  "apiKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "appSID": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
  "debug": true
}

api = AsposeHtml::StorageApi.new CONFIG

file = "FolderInStorage/file.txt"

opts = {storage_name: nil, version_id: nil}

res = api.download_file(file, opts)

# save to a local disk
FileUtils.mv(res.path, '/path/to/result/file.txt')
```

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript
// Get keys from aspose site.
// There is free quota available. 
// For more details, see https://purchase.aspose.cloud/pricing
	
var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"NodeJsWebkit"
};

var api = require('@asposecloud/aspose-html-cloud');

// Create Storage Api object
var instance = new api.StorageApi(conf);

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);  
  }
};

var options = {
'versionId' : null, // last version
'storageName': null // default storage
};

instance.downloadFile('path/to/file.txt' options, callback);
```

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift
import Alamofire
import Foundation
import XCTest
import AsposeHtmlCloud

ClientAPI.setConfig(
	basePath: "https://api.aspose.cloud/v4.0", 
	authPath: "https://api.aspose.cloud/connect/token", 
	apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", 
	appSID: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", 
	debugging: true
)

static let fm = FileManager.default
let resourceDir = fm.homeDirectoryForCurrentUser.appendingPathComponent("Documents/Aspose.HTML.Cloud.SDK.Swift/Tests/AsposeHtmlCloudTests/Resources")
let resultDir = fm.homeDirectoryForCurrentUser.appendingPathComponent("Documents/Aspose.HTML.Cloud.SDK.Swift/Tests/AsposeHtmlCloudTests/TestResult")

func url(forResource fileName: String) -> URL {
	return resourceDir.appendingPathComponent(fileName)
}

func fileExist(name: String) -> Bool {
	return FileManager.default.fileExists(atPath: name)
}

func saveFile(what data: Data?, fileName name: String) {
    
    let pathFile = resultDir.appendingPathComponent(name)

    do{
        _ = try data!.write(to: pathFile)
    }catch{
        print("Error save file.\(error)")
    }
}

ClientAPI.setConfig(
	basePath: "https://api.aspose.cloud/v4.0", 
	authPath: "https://api.aspose.cloud/connect/token", 
	apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", 
	appSID: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", 
	debugging: true
)

let expectation = self.expectation(description: "Test download file")

let fileName = "test.jpg"

let urlTest = url(forResource: fileName)

StorageAPI.uploadFile(file: urlTest, path: "/", storageName: nil) {(data, error) in
    guard error == nil else {
        XCTFail("Error uploadFile. Error=\(error!.localizedDescription)")
        return
    }
    
    XCTAssertEqual(data!.uploaded!.count, 1)
    XCTAssertEqual(data!.errors!.count, 0)

    StorageAPI.downloadFile(path: fileName, storageName: nil, versionId: nil) {(data, error) in
        guard error == nil else {
            XCTFail("Error download file. Error=\(error!.localizedDescription)")
            return
        }
    
        saveFile(what: data, fileName: "downloaded_file.jpg")
        expectation.fulfill()
    }
}
self.waitForExpectations(timeout: 300.0, handler: nil)
```

{{< /tab >}}

{{< tab tabNum="9" >}}

```java
Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
StorageApi storageApi = new ApiClient().createService(StorageApi.class);

Call<ResponseBody> call = storageApi.downloadFile("FolderInStorage/fileInStorage.txt", null, null);

Response<ResponseBody> res = call.execute();
ResponseBody res_download = res.body();
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
// Initialize an SDK API object 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Delete file test.html that is located in the cloud folder named "files"
var exists = await api.DeleteFileAsync("files/test.html", "STORAGE_NAME");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java
Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
StorageApi storageApi = new ApiClient().createService(StorageApi.class);

Call<ResponseBody> call = storageApi.deleteFile("FolderInStorage/fileInStorage.txt", null, null);

Response<ResponseBody> res = call.execute();
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

utility::string_t file = L"FolderInStorage/file.txt";
boost::optional<utility::string_t> versionId = L"";
boost::optional<utility::string_t> storageName = L"";

auto result_delete = api->deleteFile(file, versionId, storageName).get();

bool success = result_delete->getCode() == 200;

delete api;
```

{{< /tab >}}

{{< tab tabNum="4" >}}


```python
configuration = Configuration(
    basePath="https://api.aspose.cloud/v4.0",
    authPath="https://api.aspose.cloud/connect/token",
    apiKey="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    appSid="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    debug=True)

client = Client(configuration)
api = StorageApi(client)

api.delete_file('FolderInStorage/file.txt')
```

{{< /tab >}}

{{< tab tabNum="5" >}}

```php
$configuration = array(
    "basePath" => "https://api.aspose.cloud/v4.0",
    "authPath" => "https://api.aspose.cloud/connect/token",
    "apiKey" => "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID" => "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent" => "Webkit"
);

$api_stor = new StorageApi($configuration);

// Default storage
$storage_name = null;

// Last version
$version_id = null;

$api_stor->deleteFile("FileInStorage.txt", $storage_name, $version_id);
```

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby
# load the gem
require 'aspose_html_cloud'

CONFIG = {
  "basePath": "https://api.aspose.cloud/v4.0",
  "authPath": "https://api.aspose.cloud/connect/token",
  "apiKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "appSID": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
  "debug": true
}

api = AsposeHtml::StorageApi.new CONFIG

file = "FolderInStorage/file.txt"

opts = {storage_name: nil, version_id: nil}

res = api.delete_file(file, opts)
```

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript
// Get keys from aspose site.
// There is free quota available. 
// For more details, see https://purchase.aspose.cloud/pricing
	
var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"NodeJsWebkit"
};

var api = require('@asposecloud/aspose-html-cloud');

// Create Storage Api object
var instance = new api.StorageApi(conf);

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);  
  }
};

var options = {
'versionId' : null, // last version
'storageName': null // default storage
};

instance.deleteFile('path/to/file.txt' options, callback);
```

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift
import Alamofire
import Foundation
import XCTest
import AsposeHtmlCloud

ClientAPI.setConfig(
	basePath: "https://api.aspose.cloud/v4.0", 
	authPath: "https://api.aspose.cloud/connect/token", 
	apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", 
	appSID: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", 
	debugging: true
)

static let fm = FileManager.default
let resourceDir = fm.homeDirectoryForCurrentUser.appendingPathComponent("Documents/Aspose.HTML.Cloud.SDK.Swift/Tests/AsposeHtmlCloudTests/Resources")

func url(forResource fileName: String) -> URL {
	return resourceDir.appendingPathComponent(fileName)
}

let expectation = self.expectation(description: "Test delete file")

let fileName = "test.jpg"

let urlTest = url(forResource: fileName)

    // Upload test file to storage
StorageAPI.uploadFile(file: urlTest, path: "HtmlTesting", storageName: nil) {(data, error) in
    guard error == nil else {
        XCTFail("Error uploadFile. Error=\(error!.localizedDescription)")
        return
    }

    XCTAssertEqual(data!.uploaded!.count, 1)
    XCTAssertEqual(data!.errors!.count, 0)

    StorageAPI.deleteFile(path: "HtmlTesting/\(fileName)") {(data, error) in
        guard error == nil else {
            XCTFail("Error delete file. Error=\(error!.localizedDescription)")
            return
        }
        expectation.fulfill()
    }
}
self.waitForExpectations(timeout: 100.0, handler: nil)
```

{{< /tab >}}

{{< tab tabNum="9" >}}

```java
Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
StorageApi storageApi = new ApiClient().createService(StorageApi.class);

Call<ResponseBody> call = storageApi.deleteFile("FolderInStorage/fileInStorage.txt", null, null);

Response<ResponseBody> res = call.execute();
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

{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/). Complete source code of Aspose.HTML SDK for .NET is freely available on the [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet) repository.

Aspose.HTML provides the [Cloud SDK Family](https://products.aspose.cloud/html/family) to access files and folders stored in the user associated Aspose Cloud Storage or any other Cloud Storage of your choice. 
{{% /alert %}} 