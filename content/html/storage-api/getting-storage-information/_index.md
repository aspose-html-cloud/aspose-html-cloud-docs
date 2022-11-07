---
title: Getting Storage Information
type: docs
aliases: /storage-api/getting-storage-information/
keywords: "cloud storage, cloud storage api, SDK example, SDK, cURL, cURL example, cURL GET request, REST API, Credentials, Client ID, Client Secret, Python, Java, .NET,  C#,  Android, Swift, Perl, Node.js"
description: "The article explains how to get a user associated cloud storage info such as disc usage, an object existence etc. using Aspose.HTML Cloud API v.4.0. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 20
---

## **Summary**

Cloud storage allows keeping and retrieving data worldwide at any time. You can use storage for various scenarios, including storing data for archival or disaster recovery.

Aspose.HTML Cloud provides a set of functions to work with objects uploaded to Aspose.HTML Cloud Storage or any other Cloud Storage of your choice. If you need any help to get started with setting third party storage, please refer to [Aspose Cloud UI Help Topics](https://docs.aspose.cloud/total/aspose-cloud-ui-help-topics/). 

This section provides a detailed description of SDK methods and REST API storage-wide operations using Aspose.HTML Cloud API v.4.0. You find out how to get a user associated cloud storage info such as disc usage, an object existence, etc.



## **Cloud Family**

 Aspose.HTML Cloud SDKs and RESt API allow you to incorporate Aspose.HTML Cloud services in your applications quickly and easily. SDKs are available in C #, PHP, Perl, Android, Swift, Java, and other languages to help developers speed up development. 


### **Examples**

#### **Example 1: How to check if the storage exists**


{{< tabs tabTotal="10" tabID="4" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

```c#
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Check if exists
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
// Initialize 
var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").StorageApi;

// Check if exists
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
The [GitHub repository for Aspose.HTML for Cloud](https://github.com/aspose-html-cloud) has a complete set of examples, demonstrating our API capabilities.
{{% /alert %}} 


