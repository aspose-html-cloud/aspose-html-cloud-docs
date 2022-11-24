---
title: Initialize SDK - Aspose.HTML Cloud Documentation
linktitle: Initialize SDK
type: docs
keywords: initialize sdk, sdk examples, sdk, rest api, credentials, client id, client secret, access token, entry point
description: This article covers examples that explain what methods you can use to create an SDK API entry point.
weight: 20
url: /getting-started/initialize-sdk/
lastmod: 2022-11-07
---

## **Summary**
This article covers examples that explain what methods you can use to create an SDK API entry point. In SDK examples the Client Id and Client Secret are used for authentication; the SDK automatically gets API access token.

{{% alert color="primary" %}} 
Install Aspose.HTML Cloud SDK for .NET via [NuGet](https://www.nuget.org/packages/Aspose.HTML-Cloud/). Complete source code of Aspose.HTML SDK for .NET is freely available on the [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet) repository.

{{% /alert %}}

## **How to Initialize SDK**

{{< tabs tabTotal="10" tabID="1" tabName1="C#"  tabName2="Java" tabName3="C++"  tabName4="Python" tabName5="PHP"  tabName6="Ruby" tabName7="Node.js" tabName8="Swift"  tabName9="Java/Android" tabName10="CURL" >}}

{{< tab tabNum="1" >}}

A classic way to initialize an SDK entry point object is to call **HtmlApi()** constructor with [user Credentials](/html/create-an-account-and-get-credentials/) parameters.

The **HtmlApi** (`clientId`, `clientSecret`) method initializes a class instance with user Credentials and default API server URL. We need to pass into the **HtmlApi()** constructor two required parameters: **Client Id** and **Client Secret**.

```c#
var clientId = "aaaaaaaa-cccc-dddd-9999-1112222333dd";
var clientSecret = "60487a72d6325241191177e37ae5214";

var api = new HtmlApi(clientId, clientSecret);

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");
Configuration.setUserAgent("WebKit");
Configuration.setDebug(true);

HtmlApi api = new HtmlApi("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
```

{{< /tab >}}

{{< tab tabNum="3" >}}

```c++
#include "AsposeHtmlCloud.h"

const utility::string_t clientId = L"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const utility::string_t clientSecret = L"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const utility::string_t basePath = L"https://api.aspose.cloud/v4.0";
const utility::string_t authPath = L"https://api.aspose.cloud/connect/token";

// Create configuration for authorization
std::shared_ptr<ApiConfiguration> apiConfig(new ApiConfiguration(clientId, clientSecret, basePath, authPath));

// Create client from configuration
std::shared_ptr<ApiClient> apiClient(new ApiClient(apiConfig));

// Create ConversionApi
std::shared_ptr<ConversionApi> api = std::make_shared<ConversionApi>(apiClient);
```

{{< /tab >}}

{{< tab tabNum="4" >}}


```python
from asposehtmlcloud.configuration import Configuration
from asposehtmlcloud.api.html_api import HtmlApi
from asposehtmlcloud.api_client import ApiClient as Client

# Get keys from aspose site.
# There is free quota available. 
# For more details, see https://purchase.aspose.cloud/pricing

configuration = Configuration(apiKey="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                              appSid="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
                              basePath="https://api.aspose.cloud/v4.0",
                              authPath="https://api.aspose.cloud/connect/token",
                              debug=True)

client = Client(configuration)
html_api = HtmlApi(client)
```

{{< /tab >}}

{{< tab tabNum="5" >}}

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$conf = array(
	"basePath" => "https://api.aspose.cloud/v4.0",
	"authPath" => "https://api.aspose.cloud/connect/token",
	"apiKey" => "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	"appSID" => "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
	"defaultUserAgent" => "Webkit"
);

$api_html = new Client\Invoker\Api\HtmlApi($conf);
```

{{< /tab >}}

{{< tab tabNum="6" >}}

```ruby
# load the gem
require 'aspose_html_cloud'

# Get keys from aspose site.
# There is free quota available. 
# For more details, see https://purchase.aspose.cloud/pricing


CONFIG = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "debug":true
}

api_instance = AsposeHtml::HtmlApi.new CONFIG
```

{{< /tab >}}

{{< tab tabNum="7" >}}

```javascript
var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"NodeJsWebkit"
};

var api = require('@asposecloud/aspose-html-cloud');

// Create Conversion Api object
var conversionApi = new api.ConversionApi(conf);
```

{{< /tab >}}

{{< tab tabNum="8" >}}

```swift
import AsposeHtmlCloud

ClientAPI.setConfig(
            basePath: "https://api.aspose.cloud/v4.0",
            authPath: "https://api.aspose.cloud/connect/token",
            apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            appSID: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
            debugging: true)
```

{{< /tab >}}

{{< tab tabNum="9" >}}

```java
Configuration.setBasePath("https://api.aspose.cloud");
Configuration.setAuthPath("https://api.aspose.cloud/connect/token");
Configuration.setUserAgent("WebKit");
Configuration.setDebug(true);

HtmlApi api = new HtmlApi("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
```

{{< /tab >}}

{{< /tabs >}}	


{{% alert color="primary" %}} 

For more details about getting Credentials and Authentication, follow the links:

* [Create an Account and Get Credentials](/html/create-an-account-and-get-credentials/)
* [Authentication](/html/getting-started/authentication/) 

{{% /alert %}}