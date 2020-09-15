---
title: "Working with Files and Storage using Aspose.HTML Cloud"
type: docs
url: /working-with-files-and-storage-using-aspose-html-cloud/
weight: 70
---

## **Introduction**
Aspose.HTML Cloud provides helper functions to work with files uploaded to Aspose.HTML Cloud Storage or any other Cloud Storage of your choice. If you need any help getting started with setting third party storage please refer to [Aspose Cloud UI Help Topics](https://docs.aspose.cloud/display/totalcloud/Aspose+Cloud+UI+Help+Topics).
### **Download a file from Cloud Storage**
#### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/storage/file/{path}|GET|Download a File from Storage|[DownloadFile](https://apireference.aspose.cloud/html/#/File/DownloadFile)|
#### **cURL Example**
{{< tabs tabTotal="1" tabID="1" tabName1="Request" >}}

{{< tab tabNum="1" >}}

**Create Request Token**

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl  -v -X GET "https://api.aspose.cloud/v3.0/html/storage/file/sample.html" -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjAwOTI3OTcsImV4cCI6MTU2MDE3OTE5NywiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.rFS4KehYAg1yOVGmteeinIh-AFq7nVEmtUr\_cDltIfk0iN0JJJ3o6TK1StpnItAAqlkb\_QtF0WcY5D8NCjeyTVKL1oewdIshjjODoPEN1tmCsRXceHGYTG5f--B8sWrMuZtOqSzlbr-x3\_Mat9Fy7xcNbS6nNNmBv7mo3suRDF4xdUZWdIY7bO6yBptc-qyhIFb0olNMxdeAZPsN8sPLW0XIbEGf8CaE16p9al\_O5SjWLtEZT7APuvDesJwWYOSPtG6hCsXtHItphKDAcMULEnqJ-QW\_QpzBxybTnQ1VNzundQWOYM\_viYzU8hOlf6VTE4YQKyCmgz72Ena8KZx0VA"

```

{{< /tab >}}

{{< /tabs >}}
### **Uploading a file to Cloud Storage**
#### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/storage/file/{path}|PUT|Upload a file to Cloud Storage|[UploadFile](https://apireference.aspose.cloud/html/#/File/UploadFile)|
#### **cURL Example**
{{< tabs tabTotal="2" tabID="4" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

**Create Request Token**

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXXX&client\_secret=XXXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl  -v -X PUT "https://api.aspose.cloud/v3.0/html/storage/file/input.html" -H "Content-Type:application/octet-stream" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjAwOTI3OTcsImV4cCI6MTU2MDE3OTE5NywiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.rFS4KehYAg1yOVGmteeinIh-AFq7nVEmtUr\_cDltIfk0iN0JJJ3o6TK1StpnItAAqlkb\_QtF0WcY5D8NCjeyTVKL1oewdIshjjODoPEN1tmCsRXceHGYTG5f--B8sWrMuZtOqSzlbr-x3\_Mat9Fy7xcNbS6nNNmBv7mo3suRDF4xdUZWdIY7bO6yBptc-qyhIFb0olNMxdeAZPsN8sPLW0XIbEGf8CaE16p9al\_O5SjWLtEZT7APuvDesJwWYOSPtG6hCsXtHItphKDAcMULEnqJ-QW\_QpzBxybTnQ1VNzundQWOYM\_viYzU8hOlf6VTE4YQKyCmgz72Ena8KZx0VA"

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

{

   "uploaded":[

      "input\_1.html"

   ],

   "errors":[

   ]

}

```

{{< /tab >}}

{{< /tabs >}}
### **Copying a file to a new location on Cloud Storage**
#### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/storage/file/copy/{srcPath}|PUT|Duplicate a file to a new location on Cloud Storage|[CopyFile](https://apireference.aspose.cloud/html/#/File/CopyFile)|
#### **cURL Example**
{{< tabs tabTotal="1" tabID="8" tabName1="Request" >}}

{{< tab tabNum="1" >}}

**Create Request Token**

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v -X PUT "https://api.aspose.cloud/v3.0/html/storage/file/copy/input.html" -H "Content-Type:application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjAxMDY1MDcsImV4cCI6MTU2MDE5MjkwNywiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.FeU2K-qTf4meenSv1IQZqUpSPQREk0MmYK5oMMRx2t\_LqELHMRnBawHC8nJ5DzGKsK\_xyZwPpIANRA8eWHPoPICMoZnDZtUbLagxvSbFMZPReV2Ip3sVTTSvQXA-UOaLC6BbWnyHWDAbAGPv92AFMu\_A0wiEBVs68vx\_ZOOhjhZkX1rKfJFbJjWr8tJC9HVkEGubfiqXAb6ejL2ISwWcvUr49napuPPVrejJkAbj27z1oGSjmzYvoUuN4tP8Tb2VwD6L4B\_Q99EOAs0y4VownW1BE3Ku\_rKUgGAOa7OKZKtzOgKrtWqSc9oQ9h0DuiIkmKhn5I\_PczHwigZ-ytb3OQ" --ssl-no-revoke -d {}

```

{{< /tab >}}

{{< /tabs >}}
### **Moving a file to a new location on Cloud Storage**
#### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/storage/file/MOVE/{srcPath}|PUT|Move a file to a new location on Cloud Storage|[MoveFile](https://apireference.aspose.cloud/html/#/File/MoveFile)|
#### **cURL Example**
{{< tabs tabTotal="1" tabID="11" tabName1="Request" >}}

{{< tab tabNum="1" >}}

**Create Request Token**

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v -X PUT "https://api.aspose.cloud/v3.0/html/storage/file/move/input.html" -H "Content-Type:application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjAxMDY1MDcsImV4cCI6MTU2MDE5MjkwNywiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.FeU2K-qTf4meenSv1IQZqUpSPQREk0MmYK5oMMRx2t\_LqELHMRnBawHC8nJ5DzGKsK\_xyZwPpIANRA8eWHPoPICMoZnDZtUbLagxvSbFMZPReV2Ip3sVTTSvQXA-UOaLC6BbWnyHWDAbAGPv92AFMu\_A0wiEBVs68vx\_ZOOhjhZkX1rKfJFbJjWr8tJC9HVkEGubfiqXAb6ejL2ISwWcvUr49napuPPVrejJkAbj27z1oGSjmzYvoUuN4tP8Tb2VwD6L4B\_Q99EOAs0y4VownW1BE3Ku\_rKUgGAOa7OKZKtzOgKrtWqSc9oQ9h0DuiIkmKhn5I\_PczHwigZ-ytb3OQ" --ssl-no-revoke -d {}

```

{{< /tab >}}

{{< /tabs >}}
### **Deleting a file on Cloud Storage**
#### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/storage/file/{path}|DELETE|Delete a file from Cloud Storage|[DeleteFile](https://apireference.aspose.cloud/html/#/File/DeleteFile)|
#### **cURL Example**
{{< tabs tabTotal="1" tabID="14" tabName1="Request" >}}

{{< tab tabNum="1" >}}

**Create Request Token**

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

```java

curl -v -X DELETE "https://api.aspose.cloud/v3.0/html/storage/file/sample.html" -H "Content-Type:application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjAxMDY1MDcsImV4cCI6MTU2MDE5MjkwNywiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.FeU2K-qTf4meenSv1IQZqUpSPQREk0MmYK5oMMRx2t\_LqELHMRnBawHC8nJ5DzGKsK\_xyZwPpIANRA8eWHPoPICMoZnDZtUbLagxvSbFMZPReV2Ip3sVTTSvQXA-UOaLC6BbWnyHWDAbAGPv92AFMu\_A0wiEBVs68vx\_ZOOhjhZkX1rKfJFbJjWr8tJC9HVkEGubfiqXAb6ejL2ISwWcvUr49napuPPVrejJkAbj27z1oGSjmzYvoUuN4tP8Tb2VwD6L4B\_Q99EOAs0y4VownW1BE3Ku\_rKUgGAOa7OKZKtzOgKrtWqSc9oQ9h0DuiIkmKhn5I\_PczHwigZ-ytb3OQ" --ssl-no-revoke -d {}

```

{{< /tab >}}

{{< /tabs >}}
