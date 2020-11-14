---
title: "Working with Files and Storage using Aspose.HTML Cloud"
type: docs
url: /working-with-files-and-storage-using-aspose-html-cloud/
weight: 70
---

## **Introduction**
Aspose.HTML Cloud provides helper functions to work with files uploaded to Aspose.HTML Cloud Storage or any other Cloud Storage of your choice. If you need any help getting started with setting third party storage please refer to [Aspose Cloud UI Help Topics](https://docs.aspose.cloud/total/aspose-cloud-ui-help-topics/).

## **Download a file from Cloud Storage**
### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/storage/file/{path}|GET|Download a File from Storage|[DownloadFile](https://apireference.aspose.cloud/html/#/File/DownloadFile)|

### **cURL Example**
{{< tabs tabTotal="1" tabID="1" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl  -v -X GET "https://api.aspose.cloud/v3.0/html/storage/file/sample.html" -H "Content-Type: application/json"

```

{{< /tab >}}

{{< /tabs >}}

## **Uploading a file to Cloud Storage**
### **API Information**

| **API** | **Type** | **Description** | **Swagger Link** |
| :- | :- | :- | :- |
|/html/storage/file/{path}|PUT|Upload a file to Cloud Storage|[UploadFile](https://apireference.aspose.cloud/html/#/File/UploadFile)|

### **cURL Example**
{{< tabs tabTotal="2" tabID="4" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXXX&client_secret=XXXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl  -v -X PUT "https://api.aspose.cloud/v3.0/html/storage/file/input.html" -H "Content-Type:application/octet-stream" 

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

{
   "uploaded":[
      "input_1.html"
   ],

   "errors":[
   ]
}

```

{{< /tab >}}

{{< /tabs >}}

## **Copying a file to a new location on Cloud Storage**
### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/storage/file/copy/{srcPath}|PUT|Duplicate a file to a new location on Cloud Storage|[CopyFile](https://apireference.aspose.cloud/html/#/File/CopyFile)|

### **cURL Example**
{{< tabs tabTotal="1" tabID="8" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v -X PUT "https://api.aspose.cloud/v3.0/html/storage/file/copy/input.html" -H "Content-Type:application/json" 

```

{{< /tab >}}

{{< /tabs >}}

## **Moving a file to a new location on Cloud Storage**
### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/storage/file/MOVE/{srcPath}|PUT|Move a file to a new location on Cloud Storage|[MoveFile](https://apireference.aspose.cloud/html/#/File/MoveFile)|

### **cURL Example**
{{< tabs tabTotal="1" tabID="11" tabName1="Request" >}}

{{< tab tabNum="1" >}}


```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v -X PUT "https://api.aspose.cloud/v3.0/html/storage/file/move/input.html" -H "Content-Type:application/json"

```

{{< /tab >}}

{{< /tabs >}}

## **Deleting a file on Cloud Storage**
### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/storage/file/{path}|DELETE|Delete a file from Cloud Storage|[DeleteFile](https://apireference.aspose.cloud/html/#/File/DeleteFile)|

### **cURL Example**
{{< tabs tabTotal="1" tabID="14" tabName1="Request" >}}

{{< tab tabNum="1" >}}


```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v -X DELETE "https://api.aspose.cloud/v3.0/html/storage/file/sample.html" -H "Content-Type:application/json" 
```

{{< /tab >}}

{{< /tabs >}}
