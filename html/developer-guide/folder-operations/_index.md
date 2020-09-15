---
title: "Folder Operations"
type: docs
url: /folder-operations/
weight: 60
---

## **Introduction**
This article explains how to use Folder Operation with Aspose.HTML Cloud
### **API Information**

|**API**|**Type**|**Description**|**Swagger Link**|
| :- | :- | :- | :- |
|/html/storage/folder/{path}|GET|Get all files and folder list|[GetFilesList](https://apireference.aspose.cloud/html/#!/Folder/GetFilesList)|
|/html/storage/folder/{path}|PUT|Create a Folder|[CreateFolder](https://apireference.aspose.cloud/html/#!/Folder/CreateFolder)|
|/html/storage/folder/{path}|DELETE|Delete a Folder|[DeleteFolder](https://apireference.aspose.cloud/html/#!/Folder/DeleteFolder)|
|/html/storage/folder/copy/{srcPath}|PUT|Copy a Folder|[CopyFolder](https://apireference.aspose.cloud/html/#!/Folder/CopyFolder)|
|/html/storage/folder/move/{srcPath}|PUT|Move a Folder|[MoveFolder](https://apireference.aspose.cloud/html/#!/Folder/MoveFolder)|
### **cURL Example**
All of these requests require you obtain a connect token befor you proceede

**Create Authentication Header**

```java

curl -v "https://api.aspose.cloud/connect/token" -X POST -d "grant\_type=client\_credentials&client\_id=XXXXX&client\_secret=XXXXX" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json"

```

**Example for getting list of all files and folder on Cloud Storage**

{{< tabs tabTotal="2" tabID="2" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/v3.0/html/storage/folder/new\_slides\_folder" -X GET -H "Accept: application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE4NDIzMDAsImV4cCI6MTU2MTkyODcwMCwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.YykZ\_TwQsmw5uOJSsthSOXIxC\_xJeMEE5a3xxflOZOtEyUYfp5EhYNE5G0rZ4qrXCMmccRT7Bbcc\_xj1rzjri2WIb1oLq6ugKmKnkrN2xUO0DAGHXYkK\_MCHcfByp\_8RrCqfLet4zdN9Li6WeWQNd0DKujlzOZ1niGkSQRf7DRC6OzesVOqLFfDl-tM\_vSmg20zgQKsIEjXr9arjKT7GSLP4Yap1nfHhAZQKbd1r8g5bppVkgGVf920RvzcSd6bbS9uoPjI5-xcgFte4-y3WwEM4JjBX2OvGLPyPwrhrjpMG78YbVSavzjrWyRkpKP6FADuS8vVZLrlZnEv\_zseiRw" --ssl-no-revoke

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

{"value":[]}

```

{{< /tab >}}

{{< /tabs >}}

**Example for creating a folder on Cloud Storage**

{{< tabs tabTotal="2" tabID="5" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/v3.0/html/storage/folder/new\_html\_folder" -X PUT -H "Accept: application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE4NDIzMDAsImV4cCI6MTU2MTkyODcwMCwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.YykZ\_TwQsmw5uOJSsthSOXIxC\_xJeMEE5a3xxflOZOtEyUYfp5EhYNE5G0rZ4qrXCMmccRT7Bbcc\_xj1rzjri2WIb1oLq6ugKmKnkrN2xUO0DAGHXYkK\_MCHcfByp\_8RrCqfLet4zdN9Li6WeWQNd0DKujlzOZ1niGkSQRf7DRC6OzesVOqLFfDl-tM\_vSmg20zgQKsIEjXr9arjKT7GSLP4Yap1nfHhAZQKbd1r8g5bppVkgGVf920RvzcSd6bbS9uoPjI5-xcgFte4-y3WwEM4JjBX2OvGLPyPwrhrjpMG78YbVSavzjrWyRkpKP6FADuS8vVZLrlZnEv\_zseiRw" --ssl-no-revoke

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

{"uploaded":["test23.html"],"errors":[]}

```

{{< /tab >}}

{{< /tabs >}}

**Example for deleting a file from Cloud Storage**

{{< tabs tabTotal="1" tabID="8" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/v3.0/html/storage/folder/new\_html\_folder" -X DELETE -H "Accept: application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE4NDIzMDAsImV4cCI6MTU2MTkyODcwMCwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.YykZ\_TwQsmw5uOJSsthSOXIxC\_xJeMEE5a3xxflOZOtEyUYfp5EhYNE5G0rZ4qrXCMmccRT7Bbcc\_xj1rzjri2WIb1oLq6ugKmKnkrN2xUO0DAGHXYkK\_MCHcfByp\_8RrCqfLet4zdN9Li6WeWQNd0DKujlzOZ1niGkSQRf7DRC6OzesVOqLFfDl-tM\_vSmg20zgQKsIEjXr9arjKT7GSLP4Yap1nfHhAZQKbd1r8g5bppVkgGVf920RvzcSd6bbS9uoPjI5-xcgFte4-y3WwEM4JjBX2OvGLPyPwrhrjpMG78YbVSavzjrWyRkpKP6FADuS8vVZLrlZnEv\_zseiRw" --ssl-no-revoke

```

{{< /tab >}}

{{< /tabs >}}

**Example for copying a folder to a new location on Cloud Storage**

{{< tabs tabTotal="1" tabID="10" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/v3.0/html/storage/folder/copy/new\_slides\_folder" -X PUT -H "Accept: application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE4NDIzMDAsImV4cCI6MTU2MTkyODcwMCwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.YykZ\_TwQsmw5uOJSsthSOXIxC\_xJeMEE5a3xxflOZOtEyUYfp5EhYNE5G0rZ4qrXCMmccRT7Bbcc\_xj1rzjri2WIb1oLq6ugKmKnkrN2xUO0DAGHXYkK\_MCHcfByp\_8RrCqfLet4zdN9Li6WeWQNd0DKujlzOZ1niGkSQRf7DRC6OzesVOqLFfDl-tM\_vSmg20zgQKsIEjXr9arjKT7GSLP4Yap1nfHhAZQKbd1r8g5bppVkgGVf920RvzcSd6bbS9uoPjI5-xcgFte4-y3WwEM4JjBX2OvGLPyPwrhrjpMG78YbVSavzjrWyRkpKP6FADuS8vVZLrlZnEv\_zseiRw" --ssl-no-revoke -d {}

```

{{< /tab >}}

{{< /tabs >}}

**Example for moving a file to a new location on Cloud Storage**

{{< tabs tabTotal="1" tabID="12" tabName1="Request" >}}

{{< tab tabNum="1" >}}

```java

curl -v "https://api.aspose.cloud/v3.0/html/storage/folder/move/new\_slides\_folder" -X PUT -H "Accept: application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NjE4NDIzMDAsImV4cCI6MTU2MTkyODcwMCwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkucGxhdGZvcm0iLCJhcGkucHJvZHVjdHMiXSwiY2xpZW50X2lkIjoiNzg5NDZmYjQtM2JkNC00ZDNlLWIzMDktZjllMmZmOWFjNmY5Iiwic2NvcGUiOlsiYXBpLnBsYXRmb3JtIiwiYXBpLnByb2R1Y3RzIl19.YykZ\_TwQsmw5uOJSsthSOXIxC\_xJeMEE5a3xxflOZOtEyUYfp5EhYNE5G0rZ4qrXCMmccRT7Bbcc\_xj1rzjri2WIb1oLq6ugKmKnkrN2xUO0DAGHXYkK\_MCHcfByp\_8RrCqfLet4zdN9Li6WeWQNd0DKujlzOZ1niGkSQRf7DRC6OzesVOqLFfDl-tM\_vSmg20zgQKsIEjXr9arjKT7GSLP4Yap1nfHhAZQKbd1r8g5bppVkgGVf920RvzcSd6bbS9uoPjI5-xcgFte4-y3WwEM4JjBX2OvGLPyPwrhrjpMG78YbVSavzjrWyRkpKP6FADuS8vVZLrlZnEv\_zseiRw" --ssl-no-revoke

```

{{< /tab >}}

{{< /tabs >}}
