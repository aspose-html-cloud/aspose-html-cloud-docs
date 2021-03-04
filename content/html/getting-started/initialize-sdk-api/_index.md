---
title: Initialize SDK API
type: docs
aliases: /getting-started/initialize-sdk-api/
keywords: SDK examples, credentials, client id, client secret, access token, JWT
  token, REST API, JWT authentication, initialize API, entry point
description: This article covers examples that explain what methods you can use
  to create an SDK API entry point. In SDK examples the Client Id and Client
  Secret are used for authentication; the SDK automatically gets API access
  token.
weight: 20
---

## **Summary** 

An **HtmlApi** class is a common SDK facade of all HTML functionality that provides wrapper methods of Aspose.HTML Cloud REST API. Before starting to call the Aspose.HTML Cloud SDK functionality, you must create an **HtmlApi** class instance. This object is a main SDK entry point, it accepts user data needed for authentication and some optional parameters. 

This article covers examples that explain what methods you can use to create an SDK API entry point.

{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/). Complete source code of Aspose.HTML SDK for .NET is freely available on the [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet).

{{% /alert %}}

## **Initialize with Constructor Parameters**

Classic way to initialize an SDK entry point object is to call **HtmlApi()** constructor with [user Credentials](/html/create-an-account-and-get-credentials/) parameters.

### **SDK Examples**

The **HtmlApi** (` clientId`, `clientSecret`) method Initializes a class instance with user Credentials and default API server URL. We need to pass into the **HtmlApi()** constructor two required parameters: **Client Id** and **Client Secret**.

{{< tabs tabTotal="10" tabID="1" tabName1="C#/.NET" >}}

{{< tab tabNum="1" >}}

**Example 1**

```c#
var clientId = "aaaaaaaa-cccc-dddd-9999-1112222333dd";
var clientSecret = "60487a72d6325241191177e37ae5214";

using(var api = HtmlApi(clientId, clientSecret))
{
    // ... your code
}
```



**Example 2**  

In the following example, the SDK input point object initialization is the same as in Example 1, but the REST API service URL is specified explicitly.

{{% alert color="primary" %}} 
Usually, it is unnecessary to explicitly specify the service URLs; this possibility is used mainly for development/testing purposes.
{{% /alert %}}  

```c#
var clientId = "aaaaaaaa-cccc-dddd-9999-1112222333dd";
var clientSecret = "60487a72d6325241191177e37ae5214";
var baseApiUrl = "https://localhost:5001/v4.0/html";  // e.g. local service instance for debugging 

using(var api = HtmlApi(clientId, clientSecret, baseApiUrl))
{
    // ... your code
}
```

{{</ tab >}}

{{</ tabs >}}

## **Initialize with Configuration Object**

Another way to setup SDK is to call the HtmlApi with **Configuration** class instance. The Configuration class initializes API facade objects with needed settings, such as Credentials, timeout, etc.

This method looks more flexible, it provides more options, and it is more convenient to extend the SDK configuration with new options during future development. 

### **SDK Examples**

{{< tabs tabTotal="1" tabID="2" tabName1="C#"  >}}

{{< tab tabNum="1" >}}

**Example 1**

Create default Configuration instance and specify the user Credentials and HTTP connection timeout.

```c#
var clientId = "aaaaaaaa-cccc-dddd-9999-1112222333dd";
var clientSecret = "60487a72d6325241191177e37ae5214";

var conf = Configuration.NewDefault()
    .WithClientId(clientId)
    .WithClientSecret(clientSecret)
    .WithTimeout(new TimeSpan(0, 5, 0));

using(var api = HtmlApi(conf))
{
    // ... your code
}
```



**Example 2**

Create default **Configuration** class instance and specify the authentication token obtained from some external source.

{{% alert color="primary" %}} 
NOTE: Authentication with externally obtained token is available only using **Configuration** or **ConfigurationBuilder**. 

{{% /alert %}}  

```c#
var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDkzNTg5NTMsImV4cCI6MTYwOTQ0NTM1MywiaXNzIjoiaHR0cHM6Ly9hcGktcWEuYXNwb3NlLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vYXBpLXFhLmFzcG9zZS5jbG91ZC9yZXNvdXJjZXMiLCJhcGkuYmlsbGluZyIsImFwaS5pZGVudGl0eSIsImFwaS5wcm9kdWN0cyIsImFwaS5zdG9yYWdlIl0sImNsaWVudF9pZCI6Imh0bWwuY2xvdWQiLCJjbGllbnRfdXNhZ2UiOiJwb3N0IiwiY2xpZW50X3N0b3JhZ2UiOiJnZXQiLCJjbGllbnRfcmVzdHJpY3Rpb25zIjoiZ2V0IiwiY2xpZW50X2RlZmF1bHRfc3RvcmFnZSI6ImJiZDg3NTAxLTM5ZDgtNDQ1Yi05ZDIzLTlkYmNhYWJiMTFhOCIsImNsaWVudF9pZGVudGl0eV91c2VyX2lkIjoiMTg5MjA5Iiwic2NvcGUiOlsiYXBpLmJpbGxpbmciLCJhcGkuaWRlbnRpdHkiLCJhcGkucHJvZHVjdHMiLCJhcGkuc3RvcmFnZSJdfQ.DDX2U9-5Z2mLz8R322KhxPg8C9FyHB7lqdrZmbGP5sMPwFu9oqc2Ab61VTTTz3wsPfFYVYj_BSHW8lkr6QU0LPlwSqYoLo6hrEJd27QX1MCZ-1WnkGi1FtV_kjvXp1mjdsRqnlTy4y4-nmixY5mHcozIhJJd96QS8tVTvk_Z15V6sICZmpMPxotzMRD-WqbYacoOThmqe48zwVW3D-9ZhTtaxUZmTjcNloJyP1PRUm8M9BaaNC_ns3aOev18n9N5C1wD9oJh17HvQFEsDBIYSo5wOov5qOTbTBmnajJ99rEkoInEn71qYwWyXLLACdtfYimYqBoRRviy2PhaxrJdWA";

var conf = Configuration.NewDefault()
    .WithExternalAuthentication(token);

using(var api = HtmlApi(conf))
{
    // ... your code
}
```

{{</ tab >}}

{{</ tabs >}}

## **Initialize with Configuration Builder**

SDK API entry point can also be created with **Configuration** object initialized in the builder style. Using your Client Id and Client Secret, the SDK automatically gets API access token.

### **SDK Example**

{{< tabs tabTotal="10" tabID="3" tabName1="C#" >}}

{{< tab tabNum="1" >}}

```c#
var clientId = "aaaaaaaa-cccc-dddd-9999-1112222333dd";
var clientSecret = "60487a72d6325241191177e37ae5214";

using(var api = HtmlApi(confBuilder -> confBuilder
                        .WithClientId(clientId)
                        .WithClientSecret(clientSecret)))
{
    // ... your code
}
```

{{</ tab >}}

{{</ tabs >}}

{{% alert color="primary" %}} 

For more details about getting Credentials and Authentication, follow the links:

 - [Create an Account and Get Credentials](/html/create-an-account-and-get-credentials/)
 - [Authentication](/html/getting-started/authentication/) 

{{% /alert %}} 