---
title: File REST API operations
type: docs
keywords: "cloud storage, cloud storage api, REST API, cURL example, cURL GET request, cURL POST request, cURL PUT request, cloud storage file, upload file, download file, delete file, copy file, move file, Python, Java, .NET, C#, Android, Swift, Perl, Node.js"
description: "The article explains how to manipulate files in the cloud storage using Aspose.HTML Cloud API v.4.0. SDKs are also available in PHP, Perl, Android, Swift, C#, Java and more to help developers speed up their
  development."
weight: 20
---

## **Summary**

Aspose.HTML Cloud allows you to work with documents saved on the cloud storage. The Aspose.HTML Cloud API is a REST-based API for wide usability on the web across platforms. 

This article provides a detailed description of REST API operations to manipulate files in the cloud storage, i.e. upload, download, copy, move or delete files. If storage supports file versioning, it is an option to operate with a specified file version.



## **REST API description**

Aspose.HTML RESTful API uses HTTP requests to access and manage data. The data can be handled by invoking GET, PUT, POST and DELETE methods, which refers to the reading, updating, creating and deleting operations concerning resources.

A call to the REST API consists of a request performed by the client, and a response returned by the service. In the request, you send a URL with information about which operation you want to call, the resource to act upon, query parameters, etc. More detailed information about REST URLs’ structure and specific behavior linked to the API such as Authentication, Request Queuing, and Storage you can find in the [REST API Overview](https://docs.aspose.cloud/total/getting-started/rest-api-overview/) article.

### **How to download a file**

All URIs are relative to https://api.aspose.cloud/v4.0/html.

 cURL is an excellent choice for when you need to download a file to your local system. It is generally available and lets you quickly download data from a remote system. 

- **GET**: download a file. The response object contains the raw data of the file. 

```
/file?path={path}&storageName={storageName}&versionId={versionId}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | File path to be downloaded.                       | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |
| versionId   | File version ID or the last version by default.   | Query     | -        |

Using the RESTful API, an object storage protocol stores a file and its associated metadata as a single object and assigns it an ID number.

**cURL example**

If you want to download data to your computer, you can save them into a local file using the `--output` flag. 

Use the **cURL GET request**; write the URL; specify the `--output` options; put your JWT token value into Authorization HTTP header as it’s shown in the example below.

```bash
curl -X GET \
	-v "https://api.aspose.cloud/v4.0/html/file?path=/Html/TestData/file.txt&storageName=MyStorage" \
	--output d:\Work\testout\file.txt \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
	
```



{{% alert color="primary" %}} 
If you have questions about how to get a JWT token, please see the [Authentication](/html/getting-started/authentication/) article.

{{% /alert %}} 

### **How to upload a file**

All URIs are relative to https://api.aspose.cloud/v4.0/html.

- **POST**: upload a file. If the file exists, a new version of the file will be added on the same location.

```
/file?path={path}&storageName={storageName}
```

**Parameters:**

| Name        | Description                                                  | Passed in | Required |
| :---------- | :----------------------------------------------------------- | :-------- | :------- |
| path        | File uploading path.                                         | Query     | +        |
| storageName | Storage name or default storage if not specified.            | Query     | -        |
| -           | File content to upload; it must be passed in the HTTP request body.<br /> Requires an HTTP header Content-Type=application/multipart-data. | Body      | +        |

**cURL example**

POST is the HTTP method that sends data to a receiver. You send such data with cURL's `-d` or `--data` option. Use `--data-binary` if you want the cURL to read and use the given file in binary. 

Use the **cURL POST request**; write the URL; specify the `--data-binary` options; put your JWT token value into Authorization HTTP header as it’s shown in the example below.

```bash
curl -X POST \
	-v "https://api.aspose.cloud/v4.0/html/file?path=/Html/TestData/Map-World.svgt&storageName=MyStorage" \
	--data-binary @d:\Work\testdata\Map-World.svg \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



### **How to copy a file**

All URIs are relative to https://api.aspose.cloud/v4.0/html.

- **PUT**: copy the specified file to another path (if *versionId* is specified, this version will be copied).

```
/file/copy?srcpath={srcPath}&destpath={destPath}&srcstoragename={srcStorageName}&srcstoragename={destStorageName}&versionId={versionId}
```

**Parameters:**

| Name            | Description                                                  | Passed in | Required |
| :-------------- | :----------------------------------------------------------- | :-------- | :------- |
| srcPath         | Source file path to be copied.                               | Query     | +        |
| destPath        | Destination file/folder path.                                | Query     | +        |
| srcStorageName  | Source file storage name or default storage if not specified. | Query     | -        |
| destStorageName | Destination file storage name or default storage if not specified. | Query     | -        |
| versionId       | File version ID or the last version by default.              | Query     | -        |

**cURL example**

Use the **cURL PUT request**; write the URL; put your JWT token value into Authorization HTTP header as it’s shown in the example below.

```bash
curl -X PUT \
	-v "https://api.aspose.cloud/v4.0/html/file/copy?srcpath=/Html/TestData/file.txt&destpath=/Testout/Copy/file.txt" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



### **How to move a file**

All URIs are relative to https://api.aspose.cloud/v4.0/html.

- **PUT**: move the specified file to another path (if *versionId* is specified, this version will be copied to a new location and deleted).

```
/file/move?srcpath={srcPath}&destpath={destPath}&srcstoragename={srcStorageName}&srcstoragename={destStorageName}&versionId={versionId}
```

**Parameters:**

| Name            | Description                                                  | Passed in | Required |
| :-------------- | :----------------------------------------------------------- | :-------- | :------- |
| srcPath         | Source file path to be moved.                                | Query     | +        |
| destPath        | Destination file/folder path.                                | Query     | +        |
| srcStorageName  | Source file storage name or default storage if not specified. | Query     | -        |
| destStorageName | Destination file storage name or default storage if not specified. | Query     | -        |
| versionId       | File version ID or the last version by default.              | Query     | -        |

**cURL example**

Use the **cURL PUT request**; write the URL; put your JWT token value into Authorization HTTP header as it’s shown in the example below.

```bash
curl -X PUT \
	-v "https://api.aspose.cloud/v4.0/html/file/move?srcpath=/Html/TestData/file.txt&destpath=/Testout/Move/file.txt" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```



### **How to delete a file**

All URIs are relative to https://api.aspose.cloud/v4.0/html.

- **DELETE**: delete a file. Only last version will be deleted by default; if *versionId* is specified, only this version will be deleted. 

```
/file?path={path}&storageName={storageName}&versionId={versionId}
```

**Parameters:**

| Name        | Description                                       | Passed in | Required |
| :---------- | :------------------------------------------------ | :-------- | :------- |
| path        | File path to be deleted.                          | Query     | +        |
| storageName | Storage name or default storage if not specified. | Query     | -        |
| versionId   | File version ID or the last version by default.   | Query     | -        |

**cURL example**

Use the **cURL DELETE request**; write the URL; put your JWT token value into Authorization HTTP header as it’s shown in the example below.

```bash
curl -X DELETE \
	-v "https://api.aspose.cloud/v4.0/html/file?path=/Html/TestData/filetodelete.txt&storageName=MyStorage" \
	-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkxNzQ2MjIsImV4cCI6MTYwOTI2MTAyMiwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6IjZjZTliNmQwLTUxMzUtNDU0Ny1iYWZiLTE3NmU0NGM4ZDYzMCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhODg1MmY0Yi1jMjBmLTQ1YmUtYTg3Yi02ODlhNTQ5MGM4YWUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijc0MzQyMSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.fxKq8jU-veiyumnEm3tEdlcGFcQjHZKa7jCI8q0N_7JK7p7HyvuG0RwS7YRq7bRuN261D6woQGj0vk1BCavnzqvRfYqJvVwOK3EJIenF0zOAizAlhh9KueFS4-UFHFJ128AQxslQ-NRcXImNKr8_oPGzmmMxbCD6dc_lQYFtuJkX5Q6HL7fU2sICJT_XVqhiEDdYj7BBYruBZkMbq-M-OV9qPQH6txxYKU1Nn5D7g98p_S_F_bCEe_fRAg_chcj4FTe4ElBbRv4kYPDstwFee5YGPKxfyXG0Og_bhZPKNpKG72Inms93W7feXctF3Lz5wIKuia5604tvkgaj5pbRKQ"
```

{{% alert color="primary" %}} 
You can get information about all the API resources from the [Aspose.HTML for Cloud API Reference](https://apireference.aspose.cloud/html/).

{{% /alert %}} 





