---
title: "Cloud storage info operations"
type: docs
url: /storage-api/storage-props-api/
keywords: "cloud storage, cloud storage api, python, java , .net,  c#,  android, swift, Perl, Node.js"
description: "Article explains how to get a user associated cloud storage info such as disc usage, an object existence etc. using Aspose.HTML Cloud API v.4.0. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their development."
weight: 20
---

## Summary

Aspose.HTML Cloud provides helper functions to work with files uploaded to Aspose.HTML Cloud Storage or any other Cloud Storage of your choice. If you need any help getting started with setting third party storage please refer to [Aspose Cloud UI Help Topics](https://docs.aspose.cloud/total/aspose-cloud-ui-help-topics/).

Cloud storage allows world-wide storage and retrieval of data at any time. You can use storage for various scenarios including storing data for archival or disaster recovery.

This article provides a detailed description of REST API storage-wide operations using Aspose.HTML Cloud API v.4.0. SDKs. You find out how to get a user associated cloud storage info such as disc usage, an object existence, etc. 

## Cloud SDK Family

{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/).

Complete source code of Aspose.HTML SDK for .NET is freely available on the [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

{{% /alert %}}  

### Storage info SDK methods

#### **Exists**

```c#
bool Exists(string storageName)
```

Checks if specified cloud storage exists or is available for the user.

#### **GetStorage**

```c#
Storage GetStorage(string storageName)
```

Gets storage info by specified storage name, including total and used disc space.



### SDK Examples

#### Example 1: How to check if an object exists in the storage

{{< tabs tabTotal="1" tabID="1" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```c#
string folder = "/HtmlTestData";
string name = "testpage1.html";
string name_ = "fake.html";

// here the ConfigurationBuilder is used to initialize the SDK API object
var api = new HtmlApi(cb => cb
                      .WithClientId(clientId)
                      .WithClientSecret(clientSecret));
StorageProvider storageApi = api.Storage;  // Storage API entry point

string storagePath = $"{folder}/{name}";     

bool exist = storageApi.DirectoryExists(folder);   // true
exist = storageApi.FileExists(storagePath);        // true

storagePath = $"{folder}/{name_}";
storageApi.FileExists(storagePath);                // false
			
```

{{</ tab >}}

{{</ tabs >}}

#### Example 2: How to get the storage disc usage

{{< tabs tabTotal="1" tabID="1" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```c#
var api = new HtmlApi(cb => cb
                      .WithClientId(clientId)
                      .WithClientSecret(clientSecret));
StorageProvider storageApi = api.Storage;  // Storage API entry point
Storage storageInfo = storageApi.GetStorage("My Storage");

```

{{< /tab >}}

{{< /tabs >}}



## REST API

REST API is one of the most common web services available today. It can be called from any platform that supports HTTP / HTTPS and it does not depend on the software running on the server or client. 

The action must be recorded by the HTTP request method that you make. The most common methods include GET, POST, PUT and DELETE. More detailed information about REST URLs' structure and specific behavior linked to the API such as Authentication, Request Queuing, and Storage you can find in the [REST API Overview](https://docs.aspose.cloud/total/getting-started/rest-api-overview/) article.

All URIs are relative to https://api.aspose.cloud/v4.0/html.

### REST API methods

#### Check if a named storage exists

- GET: check if specified storage exists and is associated with application user.

```
/storage/exist/storage?storageName={storageName}
```

**Parameters:**

| Name        | Description   | Passed in | Required |
| :---------- | :------------ | :-------- | :------- |
| storageName | Storage name. | Query     | +        |

##### cURL example

```bash
curl -X GET \
	-v "https://api.aspose.cloud/v4.0/html/storage/exist/storage?storageName=MyStorage" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



#### Check if an object exists in the storage

- GET: check if specified file or folder exists in the specified or default storage.

```
/storage/exist?path={path}&storageName={storageName}&versionId={versionId}
```

**Parameters:**

| Name        | Description                                                  | Passed in | Required |
| :---------- | :----------------------------------------------------------- | :-------- | :------- |
| path        | Object (file or folder) path in the storage.                 | Query     | +        |
| storageName | Storage name or default storage if not specified.            | Query     | -        |
| versionId   | Version ID of the specified file or last version by default. Ignored for folders. | Query     | -        |

##### cURL example

```bash
curl -X GET \
	-v "https://api.aspose.cloud/v4.0/html/storage/exist?path=/Html/TestData/testpage1.html&storageName=MyStorage" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



#### Get a storage disc usage

- GET: return a total and used disc space in bytes of the specified storage. 

```
/storage/disc?storageName={storageName}
```

**Parameters:**

| Name        | Description   | Passed in | Required |
| :---------- | :------------ | :-------- | :------- |
| storageName | Storage name. | Query     | +        |

##### cURL example

```bash
curl -X GET \
	-v "https://api.aspose.cloud/v4.0/html/storage/disc?storageName=MyStorage" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



#### Get a list of file versions

- GET: return a list of versions of specified file, if versioning is supported by the specified or default storage.

```
/storage/versions?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | File path in the storage.                         | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |

##### cURL example

```bash
curl -X GET \
	-v "https://api.aspose.cloud/v4.0/html/storage/versions?path=/Html/TestData/testpage1.html&storageName=MyStorage" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```

