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
