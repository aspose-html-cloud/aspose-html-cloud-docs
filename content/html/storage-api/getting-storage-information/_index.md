---
title: Getting Storage Information
type: docs
url: /storage-api/getting-storage-information/
keywords: cloud storage, cloud storage api, SDK example, cURL example, cURL GET
  request, REST API, Credentials, Client ID, Client Secret, Python, Java,
  .NET,  C#,  Android, Swift, Perl, Node.js
description: The article explains how to get a user associated cloud storage
  info such as disc usage, an object existence etc. using Aspose.HTML Cloud API
  v.4.0. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more
  to help developers speed up their development.
weight: 20
---

## **Summary**

Cloud storage allows keeping and retrieving data worldwide at any time. You can use storage for various scenarios including storing data for archival or disaster recovery.

Aspose.HTML Cloud provides a set of functions to work with objects uploaded to Aspose.HTML Cloud Storage or any other Cloud Storage of your choice. If you need any help getting started with setting third party storage please refer to [Aspose Cloud UI Help Topics](https://docs.aspose.cloud/total/aspose-cloud-ui-help-topics/). 

This section provides a detailed description of SDK methods and REST API storage-wide operations using Aspose.HTML Cloud API v.4.0. You find out how to get a user associated cloud storage info such as disc usage, an object existence, etc.



## **Cloud SDK Family**

 Aspose.HTML Cloud SDKs allows you to incorporate Aspose.HTML Cloud services in your applications quickly and easily. SDKs are available in C #, PHP, Perl, Android, Swift, Java, and other languages to help developers speed up development. 

{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/). Complete source code of Aspose.HTML SDK for .NET is freely available on the [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

{{% /alert %}}  

### **Storage information SDK methods**

All storage access methods are divided into three groups: storage information methods, directory manipulation methods and file manipulation methods. Let's consider a few methods that allow you to get storage information:

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



### **SDK Examples**

#### **Example 1: How to check if the storage exists**

{{< tabs tabTotal="1" tabID="1" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```c#
// here the ConfigurationBuilder is used to initialize the SDK API object
using(var api = new HtmlApi(cb => cb
                      .WithClientId(clientId)
                      .WithClientSecret(clientSecret)))
{
    StorageProvider storageApi = api.Storage;  // Storage API entry point
    bool exist = storageApi.Exists("My Storage");   
}
			
```

{{</ tab >}}

{{</ tabs >}}


Aspose.HTML Cloud for .NET API provides the **StorageProvider** class that is a common SDK facade of cloud storage access. 
In the example, the **HtmlApi** object configures with the **ConfigurationBuilder**. You should pass Credentials (Client ID and Client Secret) to builder-style methods **WithClientId**(`clientId`) and **WithClientSecret**(`clientSecret`).
The **Exists**(`storageName`) method checks if specified cloud storage exists or is available for the user.


#### **Example 2: How to get the storage disc usage**

{{< tabs tabTotal="1" tabID="1" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```c#
using(var api = new HtmlApi(cb => cb
                      .WithClientId(clientId)
                      .WithClientSecret(clientSecret)))
{
    StorageProvider storageApi = api.Storage;  // Storage API entry point
    Storage storageInfo = storageApi.GetStorage("My Storage");
}

```

{{< /tab >}}

{{< /tabs >}}

In the example, the SDK API entry point has been created with Configuration object initialized in the builder style. The **GetStorage**(`storageName`) method gets storage information, including total and used disc space.


{{% alert color="primary" %}} 
The [GitHub repository for Aspose.HTML for Cloud](https://github.com/aspose-html-cloud) has a complete set of examples, demonstrating our API capabilities.
{{% /alert %}} 



## **REST API**

REST API is one of the most common web services available today. It can be called from any platform that supports HTTP / HTTPS and it does not depend on the software running on the server or client. The action must be recorded by the HTTP request method that you make. The most common methods include GET, POST, PUT and DELETE. More detailed information about REST URLs' structure and specific behavior linked to the API such as Authentication, Request Queuing, and Storage you can find in the [REST API Overview](https://docs.aspose.cloud/total/getting-started/rest-api-overview/) article.

### **REST API methods**

Aspose Cloud.HTML API requests are produced by sending HTTP requests to the following address, where, as a part of the URL route, the version of HTML product is indicated: https://api.aspose.cloud/v4.0/html.

{{% alert color="primary" %}} 
If you have questions about how to get a JWT token, please see the [Authentication](/html/getting-started/authentication/) article.

{{% /alert %}}  

HTTP **GET method** is commonly used to retrieve resources. Let's examine a few examples of the **GET method** applying: you can check if named storage exists; check if an object exists in the storage; get a storage disc usage and get a list of file versions.

#### **Check if named storage exists**

To create a correctly constructed HTTP request, you should build URI relative to https://api.aspose.cloud/v4.0/html.

- **GET**: check if specified storage exists and is associated with application user.

```
/storage/exist/storage?storageName={storageName}
```

**Parameters:**

| Name        | Description   | Passed in | Required |
| :---------- | :------------ | :-------- | :------- |
| storageName | Storage name. | Query     | +        |

**cURL example**

Use the **cURL GET request**; write the URL; put your JWT token value into Authorization HTTP header as it’s shown in the example below.

```bash
curl -X GET \
	-v "https://api.aspose.cloud/v4.0/html/storage/exist/storage?storageName=MyStorage" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```

Detailed information about getting access token for Aspose Cloud API requests authentication, you find out in the [Authenticating API Requests](https://docs.aspose.cloud/total/getting-started/rest-api-overview/authenticating-api-requests/) article.

#### **Check if an object exists in the storage**

All URIs are relative to https://api.aspose.cloud/v4.0/html.

- **GET**: check if specified file or folder exists in the specified or default storage.

```
/storage/exist?path={path}&storageName={storageName}&versionId={versionId}
```

**Parameters:**

| Name        | Description                                                  | Passed in | Required |
| :---------- | :----------------------------------------------------------- | :-------- | :------- |
| path        | Object (file or folder) path in the storage.                 | Query     | +        |
| storageName | Storage name or default storage if not specified.            | Query     | -        |
| versionId   | Version ID of the specified file or last version by default. Ignored for folders. | Query     | -        |

**cURL example**

Use the **cURL GET request**; write the URL; put your JWT token value into Authorization HTTP header as shown in the example below.

```bash
curl -X GET \
	-v "https://api.aspose.cloud/v4.0/html/storage/exist?path=/Html/TestData/testpage1.html&storageName=MyStorage" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



#### **Get a storage disc usage**

All URIs are relative to https://api.aspose.cloud/v4.0/html.

- **GET**: return a total and used disc space in bytes of the specified storage. 

```
/storage/disc?storageName={storageName}
```

**Parameters:**

| Name        | Description   | Passed in | Required |
| :---------- | :------------ | :-------- | :------- |
| storageName | Storage name. | Query     | +        |

**cURL example** 

Use the **cURL GET request**; write the URL; put your JWT token value into Authorization HTTP header as shown in the example below.

```bash
curl -X GET \
	-v "https://api.aspose.cloud/v4.0/html/storage/disc?storageName=MyStorage" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



#### **Get a list of file versions**

All URIs are relative to https://api.aspose.cloud/v4.0/html.

- **GET**: return a list of versions of specified file, if versioning is supported by the specified or default storage.

```
/storage/versions?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | File path in the storage.                         | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |

**cURL example**

Use the **cURL GET request**; write the URL; put your JWT token value into Authorization HTTP header as it’s shown in the example below.

```bash
curl -X GET \
	-v "https://api.aspose.cloud/v4.0/html/storage/versions?path=/Html/TestData/testpage1.html&storageName=MyStorage" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```

