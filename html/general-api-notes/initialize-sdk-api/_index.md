---
title: "Initialize SDK API"
type: docs
url: /initialize-sdk-api/
weight: 20
---

## Summary

Before starting to call the Aspose.HTML Cloud SDK functionality, you must create an HtmlApi class instance. This object is a main SDK entry point, it accepts user data needed for authentication and some optional parameters. 

## Initialize with constructor parameters

Classic way to initialize an SDK entry point object is to call HtmlApi constructor with user credentials parameters. 

### SDK Examples

{{< tabs tabTotal="10" tabID="1" tabName1="C#/.NET" >}}

{{< tab tabNum="1" >}}

**Example 1**. 

```c#
var appSid = "aaaaaaaa-cccc-dddd-9999-1112222333dd";
var appKey = "60487a72d6325241191177e37ae5214";

using(var api = HtmlApi(appSid, appKey))
{
    // ... your code
}
```



**Example 2**.  The same as example 1, but the REST API service URL is specified explicitly.

{{% alert color="primary" %}} 
Usually it's not necessary to specify the service URLs explicitly, this possibility is used mainly for development/testing purposes.
{{% /alert %}}  

```c#
var appSid = "aaaaaaaa-cccc-dddd-9999-1112222333dd";
var appKey = "60487a72d6325241191177e37ae5214";
var baseApiUrl = "https://api-qa.aspose.cloud/v4.0/html";

using(var api = HtmlApi(appSid, appKey, baseApiUrl))
{
    // ... your code
}
```

{{</ tab >}}

{{</ tabs >}}

## Initialize with Configuration object

Another way to setup SDK is to call HtmlApi with a Configuration class instance. This method looks more flexible, it provides more options, and it is more convenient to extend the SDK configuration with new options during the future development. 

### SDK Examples

{{< tabs tabTotal="10" tabID="1" tabName1="C#/.NET" >}}

{{< tab tabNum="1" >}}

**Example 1**. 

Create default configuration instance and specify the user credentials and HTTP connection timeout.

```c#
var appSid = "aaaaaaaa-cccc-dddd-9999-1112222333dd";
var appKey = "60487a72d6325241191177e37ae5214";

var conf = Configuration.NewDefault()
    .WithAppSid(appSid)
    .WithAppKey(appKey)
    .WithTimeout(new TimeSpan(0, 5, 0));

using(var api = HtmlApi(conf))
{
    // ... your code
}
```

**Example 2. **

Create default configuration instance and specify the authentication token obtained from some external source.

{{% alert color="primary" %}} 
NOTE: authentication with externally obtained token is available only using Configuration or ConfigurationBuilder 

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

## Initialize with Configuration builder

SDK API entry point can be created also with Configuration object initialized in the builder style.

### SDK Example

{{< tabs tabTotal="10" tabID="1" tabName1="C#/.NET" >}}

{{< tab tabNum="1" >}}

```c#
var appSid = "aaaaaaaa-cccc-dddd-9999-1112222333dd";
var appKey = "60487a72d6325241191177e37ae5214";

using(var api = HtmlApi(confBuilder -> confBuilder
                        .WithAppSid(appSid)
                        .WithAppKey(appKey)))
{
    // ... your code
}
```

{{</ tab >}}

{{</ tabs >}}