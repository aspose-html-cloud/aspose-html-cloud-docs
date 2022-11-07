---
title: Initialize SDK API
type: docs
aliases: /getting-started/initialize-sdk-api/
keywords: SDK examples, SDK, credentials, client id, client secret, access token, JWT
  token, REST API, JWT authentication, initialize API, entry point, HTML
description: This article covers examples that explain what methods you can use
  to create an SDK API entry point. In SDK examples the Client Id and Client
  Secret are used for authentication; the SDK automatically gets API access
  token.
weight: 20
---
## **Summary**
This article covers examples that explain what methods you can use to create an SDK API entry point.


{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/). Complete source code of Aspose.HTML SDK for .NET is freely available on the [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet) repository.

{{% /alert %}}

## **Initialize**

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

A classic way to initialize an SDK entry point object is to call **HtmlApi()** constructor with [user Credentials](/html/overview/create-an-account-and-get-credentials/) parameters.

The **HtmlApi** (`ClientId`, `ClientSecret`) method initializes a class instance with user Credentials and default API server URL. We need to pass into the **HtmlApi()** constructor two required parameters: **Client Id** and **Client Secret**.

```c#
var clientId = "aaaaaaaa-cccc-dddd-9999-1112222333dd";
var clientSecret = "60487a72d6325241191177e37ae5214";

var api = new HtmlApi(clientId, clientSecret);

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

```

{{< /tab >}}

{{< tab tabNum="3" >}}

```c++

```

{{< /tab >}}

{{< tab tabNum="4" >}}


```python

```

{{< /tab >}}

{{< tab tabNum="5" >}}

```php

```

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby

```

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript

```

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift

```

{{< /tab >}}

{{< tab tabNum="9" >}}

```java

```

{{< /tab >}}

{{< /tabs >}}	


{{% alert color="primary" %}} 

For more details about getting Credentials and Authentication, follow the links:

* [Create an Account and Get Credentials](/html/overview/create-an-account-and-get-credentials/)
* [Authentication](/html/getting-started/authentication/) 

{{% /alert %}}