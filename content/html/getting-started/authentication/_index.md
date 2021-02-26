---
title: Authentication
type: docs
aliases: /getting-started/authentication/
keywords: authentication, credentials, client id, client secret, access token,
  JWT token, REST API, JWT authentication
description: This article explains how to obtain an authentication token and
  apply it for REST API calls; you find out in details about how to use user's
  Credentials for JWT token gets.
weight: 30

---

## **Summary**

The Aspose.HTML Cloud APIs are secure and require **JWT authentication**. Authentication is the process of verifying the user's Credentials. Based on the Credentials  (**Client Id** and **Client Secret**), you receive a **JWT token** and can send requests to Aspose Cloud APIs.

This article explains how to obtain an authentication token and apply it for REST API calls.

## **Use of Credentials and Service URLs**

There are two ways to authorize Aspose.HTML Cloud REST API calls provided by SDK for .NET: by user Credentials or by externally provided access token.

The Client Credentials (**Client Id** and **Client Secret**) you can use to invoke Aspose Cloud APIs.

If you don't already have the Credentials, to get the **Client Secret** and **Client Id**,  open the [Aspose.Cloud Dashboard]( https://dashboard.aspose.cloud/#/ ) and perform the following steps:

1. Create your Aspose Cloud Account (if not already created).
2. Create a new Application.
3. Get the Credentials (Client id and Client secret ) for your Application.
4. Now, you are ready to call Aspose REST APIs.

More detailed information about the Credentials obtaining you find in [Create an Account and Get Credentials](/html/overview/create-an-account-and-get-credentials/) and [Dashboard](https://docs.aspose.cloud/total/getting-started/dashboard/) articles.  

### **REST API**

The Credentials (**Client Id** and **Client Secret**) are used when applications request a **JWT token** to access their resources.

Let's consider an example of how to obtain a JWT token using cURL request:

#### **Step 1. Get a JWT token**

You can obtain an access token by sending a POST request to the token endpoint  ([https://api.aspose.cloud/connect/token](https://api.aspose.cloud/connect/token)) and proving your request using Client Credentials authorization.

{{< tabs tabTotal="2" tabID="1" tabName1="Request" tabName2="Response" >}}

{{< tab tabNum="1" >}}

The `curl --data` command posts data about client credentials to the server.  Put your Aspose Client Credentials (Client ID and Client Secret) as values of `client_id` and `client_secret` parameters respectively, and use the POST method:

```bash
curl -X POST -v "https://api.aspose.cloud/connect/token" --data "client_id=xxxxxx-xxxxx-xxx&client_secret=xxxxxxxxxxx&grant_type=client_credentials"  
```

{{< /tab >}}

{{< tab tabNum="2" >}}

The following example is the response to the token request. It contains a JWT token in the `access_token` field; this token should be used in subsequent API calls as a value of *Authorization* HTTP header (see steps below).  

```json
{ "access_token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MTA5NzU3NzUsImV4cCI6MTYxMDk3OTM3NSwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6ImI0NzRlNGNjLTRhNTQtNGM0Zi1iYTE1LTkzZWQ1YWNhOTJlNCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhOTI4MDllNi1jN2FkLTQyODUtODE5ZS03NmRiZTA1OTQ3NGUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijg0NjIxNSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.XBF6H5LowDdobghyJtqj275UGDeXsPwPcVFDQe-ywgvH5E2F5MUkmb8os8eLPMbJODTXkr5j74wqGHzxjRC8rpBUTc6qca_sqTLTDZkaV3275zZg0VMMC1EG1nm2GacXLIiO5SRv2FS2zGGFXnf9WIqqemt0OvIBMPReBYGJ6S48xSU9PksVNulDiwH_BrRBQ7cT2XiJEeBrgr-NqGkZeDukLs8TKd0lz4bHWSJLg5AbXjCoHO2kMkKevTNhVMkPN6Vfkma-aipK7OQwTCrWrvsYdPZeUHE-jwyKCkV5-Q-_AHdONUOBfpxfpZkYNVw7yKNXusdK9z8WGTfSryK1Bw",
 "expires_in":3600,
 "token_type":"Bearer"
}
```

{{< /tab >}}

{{< /tabs >}}



In user authentication, when the **Credentials** were successfully used, the **JWT token** is returned. Since tokens are Client Credentials, great care must be taken to prevent security issues.

JSON Web Token (JWT) is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) that defines a compact and autonomous way for securely transmitting information between a client and server. It is a JSON object represented as a sequence of base64url encoded values.  JWT token contains three blocks, separated by periods: header, payload, and signature. Accordingly, it looks like the following: **header.payload.signature.**

It would help if you kept in mind that the time of the token is finite. By default, the access token lifetime is one day for Aspose.HTML Cloud. Please check the [Authenticating API Requests](https://docs.aspose.cloud/total/getting-started/rest-api-overview/authenticating-api-requests/) article for more details about the JWT token-based authentication. 



#### **Step 2. Use a JWT token in API call**

Using Credentials (**Client Id** and **Client Secret**), you have obtained an access token and can make API calls and authorize by adding the access token to the "Authorization" header.

Consider some requests with JWT token usage: 
 - curl request to return a list of files and folders in the specified folder of the storage;
 - REST API call to check if an object exists in the storage.

Put the `access_token` field value obtained in Step 1 into the Authorization HTTP header as it's shown in the examples below.

```bash
curl -X GET \
-v "https://api.aspose.cloud/v4.0/html/folder?path=/testdata" \
-H "Authorization:Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MTA5NzU3NzUsImV4cCI6MTYxMDk3OTM3NSwiaXNzIjoiaHR0cHM6Ly9hcGkuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6ImI0NzRlNGNjLTRhNTQtNGM0Zi1iYTE1LTkzZWQ1YWNhOTJlNCIsImNsaWVudF9kZWZhdWx0X3N0b3JhZ2UiOiJhOTI4MDllNi1jN2FkLTQyODUtODE5ZS03NmRiZTA1OTQ3NGUiLCJjbGllbnRfaWRlbnRpdHlfdXNlcl9pZCI6Ijg0NjIxNSIsInNjb3BlIjpbImFwaS5iaWxsaW5nIiwiYXBpLmlkZW50aXR5IiwiYXBpLnByb2R1Y3RzIiwiYXBpLnN0b3JhZ2UiXX0.XBF6H5LowDdobghyJtqj275UGDeXsPwPcVFDQe-ywgvH5E2F5MUkmb8os8eLPMbJODTXkr5j74wqGHzxjRC8rpBUTc6qca_sqTLTDZkaV3275zZg0VMMC1EG1nm2GacXLIiO5SRv2FS2zGGFXnf9WIqqemt0OvIBMPReBYGJ6S48xSU9PksVNulDiwH_BrRBQ7cT2XiJEeBrgr-NqGkZeDukLs8TKd0lz4bHWSJLg5AbXjCoHO2kMkKevTNhVMkPN6Vfkma-aipK7OQwTCrWrvsYdPZeUHE-jwyKCkV5-Q-_AHdONUOBfpxfpZkYNVw7yKNXusdK9z8WGTfSryK1Bw"
```



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



### **SDK** 

The Cloud client application provides user Credentials (Client Id and Client Secret). Then SDK authorizes the REST API calls internally: it obtains an access token, uses it for API calls and handles the token expiration itself acquiring it again.

{{% alert color="primary" %}} 
Using SDK, you don't need to know the authentication service URL. All routine work of API call authentication is done by SDK internally.

{{% /alert %}}  

## **Use of Externally Obtained JWT Token**

Authentication by user credentials is a standard way of Aspose.HTML Cloud SDK family. But also the SDKs provide a possibility to authenticate using a token that has been obtained from some external source. 

For example, an application calls the authentication service itself and uses an obtained token to call SDK methods without providing user credentials. Use externally obtained token creating SDK API entry point object.


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

{{% alert color="primary" %}} 
**NOTE**: Authentication with an externally obtained token is available only using **Configuration** or **ConfigurationBuilder**. 

{{% /alert %}} 





