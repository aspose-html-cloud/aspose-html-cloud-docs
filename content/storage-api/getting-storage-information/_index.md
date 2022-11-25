---
title: How to Get Storage Information - Cloud APIs
linktitle: Getting Storage Information
type: docs
aliases: /storage-props-api/
keywords: cloud storage, storage information, sdk example, cURL example, rest api, python, java, .net,  c#,  android, swift, perl, node.js
description: Learn how to get user-associated cloud storage information such as disc usage, an object existence, etc. using Aspose.HTML Cloud API v.4.0. 
weight: 20
url: /storage-api/getting-storage-information/
lastmod: 2022-11-09
---

## **Cloud Storage Information**

Cloud storage allows keeping and retrieving data worldwide at any time. You can use storage for various scenarios, including storing data for archival or disaster recovery.

Aspose.HTML Cloud provides a set of functions to work with objects uploaded to Aspose.HTML Cloud Storage or any other Cloud Storage of your choice. This section provides a description of SDK methods and REST API storage-wide operations using Aspose.HTML Cloud API v.4.0. You find out how to get user associated cloud storage information such as disc usage, object existence, etc.

Aspose.HTML Cloud SDKs and REST API allow you to incorporate Aspose.HTML Cloud services in your applications quickly and easily. SDKs are available in C #, PHP, Perl, Android, Swift, Java, and other languages to help developers speed up development. 

### **Examples**

All storage access methods are divided into three groups: storage information methods, directory manipulation methods and file manipulation methods. Let’s consider a few examples that allow you to get storage information.

#### **Example 1: How to check if the storage exists**

{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

ExistsAsync() method checks if specified cloud storage exists or is available for the user.

```c#
// Initialize an SDK API object
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Check if the storage exists
var exists = await api.ExistsAsync("STORAGE_NAME");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java
Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
StorageApi storageApi = new ApiClient().createService(StorageApi.class);

Call<StorageExist> call = storageApi.storageExists("STORAGE_NAME");

Response<StorageExist> res = call.execute();
StorageExist result = res.body();
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
utility::string_t storage = L"StorageName";

auto result = api->storageExists(storage).get();
bool exist = result->isExists();

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

res = api.storage_exists("StorageName")
res = res.to_dict()

exist = res['exists']
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

$result = $api_stor->storageExists("StorageName");
$isExist = $result->getExists();
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

Call<StorageExist> call = storageApi.storageExists("STORAGE_NAME");

Response<StorageExist> res = call.execute();
StorageExist result = res.body();
```

{{< /tab >}}

{{< tab tabNum="10" >}}

```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/storage/exists/storage?storageName=STORAGE_NAME" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}		


#### **Example 2: How to get the storage disc usage**

{{< tabs tabTotal="10" tabID="3" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

```c#
// Initialize an SDK API object 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Get storage information by specified storage name, including total and used disc space
var exists = await api.GetStorageAsync("STORAGE_NAME");
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java
Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
StorageApi storageApi = new ApiClient().createService(StorageApi.class);

Call<DiscUsage> call = storageApi.getDiscUsage(null);

Response<DiscUsage> res = call.execute();
DiscUsage result = res.body();
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

utility::string_t storage = L"StorageName";

auto result = api->getDiscUsage(storage).get();

int64_t total = result->getTotalSize();
int64_t used = result->getUsedSize();

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

# default storage
res = api.get_disc_usage().to_dict()

total_size = res['total_size']
used_size = res['used_size']
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

// Default storage
$storage_name = null;
$result = $api_stor->getDiscUsage($storage_name);

$used = $result->getUsedSize();
$total = $result->getTotalSize();
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

Call<DiscUsage> call = storageApi.getDiscUsage(null);

Response<DiscUsage> res = call.execute();
DiscUsage result = res.body();
```

{{< /tab >}}

{{< tab tabNum="10" >}}

```bash
curl -X POST -v \
	"https://api.aspose.cloud/v4.0/html/storage/disc/usage?storageName=STORAGE_NAME" \
    -H "Content-Type: application/json" \
    -H "Authorization:Bearer <JWT_token>"
```

{{< /tab >}}

{{< /tabs >}}	


{{% alert color="primary" %}} 
If you have questions about how to get a JWT token, please see the [Authentication](/html/getting-started/authentication/) article.

Detailed information about getting access token for Aspose Cloud API requests authentication, you find out in the [Authenticating API Requests](https://docs.aspose.cloud/total/getting-started/rest-api-overview/authenticating-api-requests/) article.

The [GitHub repository for Aspose.HTML for Cloud](https://github.com/aspose-html-cloud) has a complete set of examples, demonstrating our API capabilities.
{{% /alert %}} 
