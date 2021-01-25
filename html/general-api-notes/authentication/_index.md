---
title: "Authentication"
type: docs
url: /general-api-notes/authentication/
weight: 30
---

## Summary

Aspose.HTML Cloud API uses JWT authentication.  This article explains how to obtain an authentication token and to use it by REST API and client SDKs. 



## Use credentials and service URLs

### REST API

#### Step 1. Get JWT token

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

The `curl --data` command posts data about client credentials to the server.  Put your Aspose application credentials (Client ID and Client Secret) as values of `client_id` and `client_secret` parameters respectively, and use the POST method:

```bash
curl -X POST -v "https://api.aspose.cloud/connect/token" --data "client_id=xxxxxx-xxxxx-xxx&client_secret=xxxxxxxxxxx&grant_type=client_credentials"  
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example is the response of the token request. It contains a JWT token in the `access_token` field; this token should be used in subsequent API calls as a value of *Authorization* HTTP header (see steps below).  

```json
{ "access_token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MTA5NzU3NzUsImV4cCI6MTYxMDk3OTM3NSwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6ImI0NzRlNGNjLTRhNTQtNGM0Zi1iYTE1LTkzZWQ1YWNhOTJlNCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhOTI4MDllNi1jN2FkLTQyODUtODE5ZS03NmRiZTA1OTQ3NGUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijg0NjIxNSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.XBF6H5LowDdobghyJtqj275UGDeXsPwPcVFDQe-ywgvH5E2F5MUkmb8os8eLPMbJODTXkr5j74wqGHzxjRC8rpBUTc6qca_sqTLTDZkaV3275zZg0VMMC1EG1nm2GacXLIiO5SRv2FS2zGGFXnf9WIqqemt0OvIBMPReBYGJ6S48xSU9PksVNulDiwH_BrRBQ7cT2XiJEeBrgr-NqGkZeDukLs8TKd0lz4bHWSJLg5AbXjCoHO2kMkKevTNhVMkPN6Vfkma-aipK7OQwTCrWrvsYdPZeUHE-jwyKCkV5-Q-_AHdONUOBfpxfpZkYNVw7yKNXusdK9z8WGTfSryK1Bw",
 "expires_in":3600,
 "token_type":"Bearer"
}
```

{{< /tab >}}

{{< /tabs >}}

#### Step 2. Use JWT token in API call

Put `access_token` field value obtained in the Step 1 into Authorization HTTP header as it's shown in examples below.

{{< tabs tabTotal="2" tabID="2" tabName1="cURL" tabName2="C#" >}}

{{< tab tabNum="1" >}}

```bash
curl -X GET \
-v "https://api.aspose.cloud/v4.0/html/folder?path=/testdata" \
-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MTA5NzU3NzUsImV4cCI6MTYxMDk3OTM3NSwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6ImI0NzRlNGNjLTRhNTQtNGM0Zi1iYTE1LTkzZWQ1YWNhOTJlNCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhOTI4MDllNi1jN2FkLTQyODUtODE5ZS03NmRiZTA1OTQ3NGUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijg0NjIxNSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.XBF6H5LowDdobghyJtqj275UGDeXsPwPcVFDQe-ywgvH5E2F5MUkmb8os8eLPMbJODTXkr5j74wqGHzxjRC8rpBUTc6qca_sqTLTDZkaV3275zZg0VMMC1EG1nm2GacXLIiO5SRv2FS2zGGFXnf9WIqqemt0OvIBMPReBYGJ6S48xSU9PksVNulDiwH_BrRBQ7cT2XiJEeBrgr-NqGkZeDukLs8TKd0lz4bHWSJLg5AbXjCoHO2kMkKevTNhVMkPN6Vfkma-aipK7OQwTCrWrvsYdPZeUHE-jwyKCkV5-Q-_AHdONUOBfpxfpZkYNVw7yKNXusdK9z8WGTfSryK1Bw"
```

{{< /tab >}}

{{< tab tabNum="2" >}}

```c#
var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MTA5NzU3NzUsImV4cCI6MTYxMDk3OTM3NSwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6ImI0NzRlNGNjLTRhNTQtNGM0Zi1iYTE1LTkzZWQ1YWNhOTJlNCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhOTI4MDllNi1jN2FkLTQyODUtODE5ZS03NmRiZTA1OTQ3NGUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijg0NjIxNSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.XBF6H5LowDdobghyJtqj275UGDeXsPwPcVFDQe-ywgvH5E2F5MUkmb8os8eLPMbJODTXkr5j74wqGHzxjRC8rpBUTc6qca_sqTLTDZkaV3275zZg0VMMC1EG1nm2GacXLIiO5SRv2FS2zGGFXnf9WIqqemt0OvIBMPReBYGJ6S48xSU9PksVNulDiwH_BrRBQ7cT2XiJEeBrgr-NqGkZeDukLs8TKd0lz4bHWSJLg5AbXjCoHO2kMkKevTNhVMkPN6Vfkma-aipK7OQwTCrWrvsYdPZeUHE-jwyKCkV5-Q-_AHdONUOBfpxfpZkYNVw7yKNXusdK9z8WGTfSryK1Bw";
//
var uri = "https://api.aspose.cloud/v4.0/html/storage/exists?path=/Html";
var request = new HttpRequestMessage(HttpMethod.Get, uri);
request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);

var client = new HttpClient();
var response = SendAsync(request).Result;
response.EnsureSuccessStatusCode();

```

{{< /tab >}}

{{< /tabs >}}

### SDK 

Using SDK, you don't need to know the authentication service URL. All routine work of API call authentication is done by SDK internally.



## Use externally obtained JWT token

Authentication by user credentials is a standard way of Aspose.HTML Cloud SDK family. But also the SDKs provide possibility to authenticate using a token that has been obtained from some external source. 

For example, an application calls the authentication service itself and uses an obtained token to call SDK methods without providing user credentials.

{{< tabs tabTotal="1" tabID="3" tabName1="C#"  >}}

{{< tab tabNum="1" >}}

```c#
var token = "......"; // JWT token obtained before

using(var api = new HtmlApi(Configuration
                      .NewDefault()
                      .WithExternalAuthentication(token)))
{
	// .... your code
}
```

{{< /tab >}}

{{< /tabs >}}



