---
title: "Folder Operations"
type: docs
url: /folder-operations/
weight: 60
---

## **Introduction**
This article explains how to use Folder Operation with Aspose.HTML Cloud
## **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/storage/folder/{path}|GET|Get all files and folder list|[GetFilesList](https://apireference.aspose.cloud/html/#!/Folder/GetFilesList)|
|/html/storage/folder/{path}|PUT|Create a Folder|[CreateFolder](https://apireference.aspose.cloud/html/#!/Folder/CreateFolder)|
|/html/storage/folder/{path}|DELETE|Delete a Folder|[DeleteFolder](https://apireference.aspose.cloud/html/#!/Folder/DeleteFolder)|
|/html/storage/folder/copy/{srcPath}|PUT|Copy a Folder|[CopyFolder](https://apireference.aspose.cloud/html/#!/Folder/CopyFolder)|
|/html/storage/folder/move/{srcPath}|PUT|Move a Folder|[MoveFolder](https://apireference.aspose.cloud/html/#!/Folder/MoveFolder)|
### **cURL Example**
All of these requests require you obtain a connect token befor you proceede

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant_type=client_credentials&client_id=XXXXX&client_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

#### **Example for getting list of all files and folder on Cloud Storage**

{{< tabs tabTotal="2" tabID="2" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/v3.0/html/storage/folder/new_slides_folder" -X GET -H "Accept: application/json"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

{
  "value":[]
}

```

{{< /tab >}}

{{< /tabs >}}

#### **Example for creating a folder on Cloud Storage**

{{< tabs tabTotal="2" tabID="5" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/v3.0/html/storage/folder/new_html_folder" -X PUT -H "Accept: application/json" 

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

{
  "uploaded":["test23.html"],
  "errors":[]
}

```

{{< /tab >}}

{{< /tabs >}}

#### **Example for deleting a file from Cloud Storage**

{{< tabs tabTotal="1" tabID="8" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/v3.0/html/storage/folder/new_html_folder" -X DELETE -H "Accept: application/json" 

```

{{< /tab >}}

{{< /tabs >}}

#### **Example for copying a folder to a new location on Cloud Storage**

{{< tabs tabTotal="1" tabID="10" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/v3.0/html/storage/folder/copy/new_slides_folder" -X PUT -H "Accept: application/json" 

```

{{< /tab >}}

{{< /tabs >}}

#### **Example for moving a file to a new location on Cloud Storage**

{{< tabs tabTotal="1" tabID="12" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/v3.0/html/storage/folder/move/new_slides_folder" -X PUT -H "Accept: application/json" 

```

{{< /tab >}}

{{< /tabs >}}
