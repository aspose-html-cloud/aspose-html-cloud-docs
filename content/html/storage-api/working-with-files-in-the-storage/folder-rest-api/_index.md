---
title: Folder REST API operations
type: docs
keywords: "cloud storage, REST API, cloud storage api, cURL example, cloud storage folder, get folder content, create folder, delete folder, copy folder, move folder, Python, Java, .NET, C#, Android, Swift, Perl, Node.js"
description: "The article explains how to manipulate folders in the cloud storage using Aspose.HTML Cloud API v.4.0. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their
  development."
weight: 20
---


Aspose.HTML Cloud allows you to work with objects saved on the cloud storage that has a clear and simple interface to manage folders and files.

This article provides a detailed description of operations to manipulate folders (directories) in the cloud storage using the REST API requests.

## **REST API**

A call to the REST API consists of a request performed by the client, and a response returned by the service. In the request, you send a URL with information about which operation you want to call, the resource to act upon, query parameters, etc. The most common methods include GET, POST, PUT and DELETE. GET retrieves resources. POST submits new data to the server. PUT updates existing data. DELETE removes data.

You can call REST API from any platform that supports HTTP / HTTPS and it does not depend on the software running on the server or client. To create a correctly constructed HTTP request, you should build URI relative to https://api.aspose.cloud/v4.0/html.

{{% alert color="primary" %}} 
More detailed information about REST URLs’ structure and specific behavior linked to the API such as Authentication, Request Queuing, and Storage you can find in the [REST API Overview](https://docs.aspose.cloud/total/getting-started/rest-api-overview/) article.
{{% /alert %}} 



### **Get a list of folder files and subfolders**

You can use cURL command-line tool to access Aspose.HTML web services quickly and easily. Let's review an example of the GET method applying: we use the **GET method** to obtain a list of folder files and subfolders. Requests using GET should only retrieve data. GET is one of the most common HTTP methods.

For a correct request constructing you should build a URL with information about the path to a specified folder in the storage and the storage name. All URIs are relative to https://api.aspose.cloud/v4.0/html.

- **cURL GET request**: return a list of files and folders in the specified folder (or in the root folder by default) of the storage. 

```
/folder?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | Folder path in the storage.                       | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |

**cURL example**

Use the **cURL GET request**; write the URL; put your JWT token value into Authorization HTTP header as it’s shown in the example below.

```bash
curl -X GET \
	-v "https://api.aspose.cloud/v4.0/html/folder?path=/Html/TestData" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```

Detailed information about getting access token for Aspose Cloud API requests authentication, you find out in the [Authenticating API Requests](https://docs.aspose.cloud/total/getting-started/rest-api-overview/authenticating-api-requests/) article.

### **Create a folder**

Aspose Cloud.HTML API requests are produced by sending HTTP requests to the following address, where, as a part of the URL route, the version of HTML product is indicated: https://api.aspose.cloud/v4.0/html.

The **POST method** is used to send data to a server to create or update a resource. It is one of the most common HTTP methods, but it often causes a change in state or side effects on the server. Let's examine a case of folder making using a cURL POST request:

- **cURL POST request**: create a folder.

```
/folder?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | Folder path to be created.                        | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |

**cURL example**

Use the **cURL POST request**; write the URL; put " Content-Length: 0" into HTTP header (there is no payload to read); put your JWT token value into Authorization HTTP header as it’s shown in the example below.

```bash
curl -X POST \
	-v "https://api.aspose.cloud/v4.0/html/folder?path=/Html/NewFolder_111" \
	-H "Content-Length:0" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



### **Copy a folder**

All URIs are relative to https://api.aspose.cloud/v4.0/html.

The **PUT method** is used to send data to a server to create or update a resource. It replaces all current representations of the resource with the request payload.

- **PUT**: copy the specified folder with files and subfolders to the new path.

```
/folder/copy?srcpath={srcPath}&destpath={destPath}&srcstoragename={srcStorageName}&srcstoragename={destStorageName}
```

**Parameters:**

| Name            | Description                                                  | Passed in | Required |
| :-------------- | :----------------------------------------------------------- | :-------- | :------- |
| srcPath         | Source folder path to be copied.                             | Query     | +        |
| destPath        | Destination folder path.                                     | Query     | +        |
| srcStorageName  | Source folder storage name or default storage if not specified. | Query     | -        |
| destStorageName | Destination folder storage name or default storage if not specified. | Query     | -        |

**cURL example**

Use the **cURL PUT request**; write the URL; put your JWT token value into Authorization HTTP header as shown in the example below.

```bash
curl -X PUT \
	-v "https://api.aspose.cloud/v4.0/html/folder/copy?srcpath=/Html/Folder1&destpath=/Testout/Copy/Folder1" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```

{{% alert color="primary" %}} 
If you have questions about how to get a JWT token, please see the [Authentication](/html/getting-started/authentication/) article.

{{% /alert %}}

### **Move a folder**

All URIs are relative to https://api.aspose.cloud/v4.0/html.

- **PUT**: move the specified folder with files and subfolders to the new path.

```
/folder/move?srcpath={srcPath}&destpath={destPath}&srcstoragename={srcStorageName}&srcstoragename={destStorageName}
```

**Parameters:**

| Name            | Description                                                  | Passed in | Required |
| :-------------- | :----------------------------------------------------------- | :-------- | :------- |
| srcPath         | Source folder path to be moved.                              | Query     | +        |
| destPath        | Destination folder path.                                     | Query     | +        |
| srcStorageName  | Source folder storage name or default storage if not specified. | Query     | -        |
| destStorageName | Destination folder storage name or default storage if not specified. | Query     | -        |

**cURL example**

Use the **cURL PUT request**; write the URL; put your JWT token value into Authorization HTTP header as it’s shown in the example below.

```bash
curl -X PUT \
	-v "https://api.aspose.cloud/v4.0/html/folder/move?srcpath=/Html/Folder1&destpath=/Testout/Move/Folder1" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



### **Delete a folder**

All URIs are relative to https://api.aspose.cloud/v4.0/html.

- **DELETE**: delete the specified folder.

```
/folder?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | Folder path to be deleted.                        | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |

**cURL example**

Use the **cURL DELETE request**; write the URL; put your JWT token value into Authorization HTTP header as it’s shown in the example below.

```bash
curl -X DELETE \
	-v "https://api.aspose.cloud/v4.0/html/folder?path=/Html/FolderToDelete/" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```

{{% alert color="primary" %}} 
You can get information about all the API resources from the [Aspose.HTML for Cloud API Reference](https://apireference.aspose.cloud/html/).

{{% /alert %}} 

