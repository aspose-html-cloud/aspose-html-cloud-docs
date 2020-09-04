---
title: "QuickStart"
type: docs
url: /quickstart/
weight: 20
---

It is quite easy to use Aspose.Html for Cloud in your projects. All you need to do is:
#### **1. Create a Free Account**
Please go to <https://dashboard.aspose.cloud/#/> to create a free account.
#### **2. Create New App and Get App Key and SID**
Before you can make any requests to Aspose for Cloud APIs you need to [create an API client app](https://docs.aspose.cloud/display/totalcloud/Create+New+App+and+Get+App+Key+and+SID). This will give you **App SID** and **App key (secret key)** which you can use to invoke Aspose for Cloud APIs.
#### **3. Install the SDK of your choice**
Aspose Html for Cloud SDK is written in 2 different languages, all you need to get started is to add our SDK to your existing project.

{{< tabs tabTotal="10" tabID="1" tabName1=".NET" tabName2="Python" tabName3="Java" tabName4="PHP" tabName5="Ruby" tabName6="Node.js" tabName7="C++" tabName8="Go" tabName9="Swift" tabName10="Android" >}}

{{< tab tabNum="1" >}}

```java

// Install Aspose.Html Cloud SDK via NuGet

PM> Install-Package Aspose.Html-Cloud              

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

pip install -r Aspose.Html-Cloud-SDK-for-Python/requirements.txt

python Aspose.Html-Cloud-SDK-for-Python/setup.py install

```

{{< /tab >}}

{{< tab tabNum="3" >}}

```java

To install the API client library to your local Maven repository, simply execute:

mvn install

```

{{< /tab >}}

{{< tab tabNum="4" >}}

```java

Composer:

To install the bindings via Composer, add the following to composer.json:

{

  "repositories": [

    {

      "type": "git",

      "url": "https://github.com/aspose-html-cloud/aspose-html-cloud-php.git"

    }

  ],

  "require": {

    "aspose-html-cloud/aspose-html-cloud-php": "\*@dev"

  }

}

Then run composer install

Manual Installation:



Download the files and include autoload.php:

require\_once('/path/to/aspose-html-cloud-php/vendor/autoload.php');


```

{{< /tab >}}

{{< tab tabNum="5" >}}

```java

bundle install --jobs 4

Build a gem:

To build the Ruby code into a gem:

gem build aspose\_html.gemspec

Then either install the gem locally:

gem install ./aspose\_html-1.0.0.gem

```

{{< /tab >}}

{{< tab tabNum="6" >}}

```java

,To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing package.json (and this README). Let's call this JAVASCRIPT\_CLIENT\_DIR. Then run:

npm install

Next, link it globally in npm with the following, also from JAVASCRIPT\_CLIENT\_DIR:

npm link

Finally, switch to the directory you want to use your asposehtmlcloud from, and run:

npm link /path/to/<JAVASCRIPT\_CLIENT\_DIR>

You should now be able to require('asposehtmlcloud') in javascript files from the directory you ran the last command above from.

```

{{< /tab >}}

{{< tab tabNum="7" >}}

```java

Loading from GIT



git clone https://github.com/aspose-html-cloud/aspose-html-cloud-cpp.git

cd aspose-html-cloud-cpp

```

{{< /tab >}}

{{< tab tabNum="8" >}}

```java

pip install -r Aspose.Html-Cloud-SDK-for-Python/requirements.txt

python Aspose.Html-Cloud-SDK-for-Python/setup.py install

```

{{< /tab >}}

{{< tab tabNum="9" >}}

```java

Clone the GitHub repository and import the project into your workspace

```

{{< /tab >}}

{{< tab tabNum="10" >}}

```java

Building the API client library requires Gradle Build Tool to be installed.

To build the API client library, simply execute:


gradlew.bat

```

{{< /tab >}}

{{< /tabs >}}
#### **4. Make an API request from the SDK of your choice**
Use the App SID and App key (secret key) from the API App Client you created in step one and replace in the corresponding code. Below is an example of translating HTML page from English to German, French and Russian languages.

{{% alert color="primary" %}} 

The [GitHub repository for Aspose.Html for Cloud](https://github.com/aspose-html-cloud) has a complete set of examples, demonstrating our API capabilities.

{{% /alert %}} 

**HTML to PDF Conversion**

{{< tabs tabTotal="2" tabID="12" tabName1="C#" tabName2="Python" >}}

{{< tab tabNum="1" >}}

```java

using System;

using System.IO;

using Aspose.Html.Cloud.Sdk.Api;

using Aspose.Html.Cloud.Sdk.Api.Model;

using Aspose.Html.Cloud.Sdk.Api.Interfaces;

using Aspose.HTML.Cloud.Examples.SDK;





namespace Aspose.Html.Cloud.Examples

{

    class Program

    {

        const string appSID = "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"; // apply user's appSID

        const string appKey = "xxxxxxxxxxxxxxxxxxxxxxxxx";           // apply user's key

        const string SERVICE\_API\_HOST = "https://api.aspose.cloud";

        const string SERVICE\_AUTH\_HOST = "https://api.aspose.cloud";

        const string LOCAL\_DATA\_FOLDER = @ "d:\testdata";

        const string STORAGE\_DATA\_FOLDER = "Html/TestData";

        const string LOCAL\_RESULT\_FOLDER = @ "d:\testout";



        static void Main(string[] args)

                {

            // setup HTML document name

            var name = "testpage4\_embcss.html";

            // setup local document path

            var srcPath = Path.Combine(LOCAL\_DATA\_FOLDER, name);

            // setup storage folder where the source document should be present

            string folder = STORAGE\_DATA\_FOLDER;

            // setup storage name (null for default storage)

            string storage = null;

            // setup resulting file parameters



            int width = 800;

            int height = 1200;

            int leftMargin = 15;

            int rightMargin = 15;

            int topMargin = 15;

            int bottomMargin = 15;



            try

            {

                var storagePath = Path.Combine(STORAGE\_DATA\_FOLDER, name).Replace('\\', '/');

                UploadToStorage(srcPath, storagePath);

                IConversionApi convApi = new HtmlApi(appSID, appKey, SERVICE\_API\_HOST);

                var response = convApi.GetConvertDocumentToPdf(

                    name, width, height, leftMargin, rightMargin, topMargin, bottomMargin, folder, storage);

                if (response != null && response.ContentStream != null && response.Status == "OK")

                {

                    Console.Out.WriteLine("Converted successfully");

                    // save result file

                    var respFileName = response.FileName;

                    Stream outStream = response.ContentStream;

                    var outPath = Path.Combine(LOCAL\_RESULT\_FOLDER, respFileName);

                    using(FileStream fstr = new FileStream(outPath, FileMode.Create, FileAccess.Write))

                    {

                         outStream.Position = 0;

                         outStream.CopyTo(fstr);

                         fstr.Flush();

                         Console.WriteLine(string.Format("\nResult file downloaded to: {0}", outPath));

                    }

                }

                                else

                    throw new Exception($ "Operation failed: status {response.Status}");

            }

            catch (Exception ex)

            {

                Console.Out.WriteLine(string.Format("Error: {0}", ex.Message));

            }

            Console.Out.WriteLine("Press any key to end:");

            Console.In.Read();

        }





        static void UploadToStorage(string localPath, string storagePath, string storage)

        {

            var name = Path.GetFileName(localPath);

            Configuration storageConf = new Configuration() {

            ApiBaseUrl = SERVICE\_API\_HOST,

            AppKey = appKey,

            AppSid = appSID,

            AuthUrl = SERVICE\_AUTH\_HOST,

            ApiVersion = "3.0"

            };



            StorageApi storageApi = new StorageApi(storageConf);

            try

            {

                            using(Stream fstr = new FileStream(localPath, FileMode.Open, FileAccess.Read)) {

                var response = storageApi.UploadFile(fstr, storagePath, storage);

                if (response.Code == 200)

                {

                    Console.Out.WriteLine($ "File {name} successfully uploaded with path {storagePath} .");

                }

                else

                    throw new Exception($ "File Upload failed: status {response.Status}");

            }

            catch (Exception ex)

            {

                Console.Out.WriteLine(ex.Message);

                throw;

            }

        }

    }

}

```

{{< /tab >}}

{{< tab tabNum="2" >}}

```java

from \_\_future\_\_ import absolute\_import 

from \_\_future\_\_ import print\_function 

from pprint import pprint  

import time  



import os 

from shutil import copy2

from asposehtmlcloud.configuration import Configuration

from asposehtmlcloud.api\_client import ApiClient as Client

from asposehtmlcloud.api.html\_api import HtmlApi

from asposehtmlcloud.api.storage\_api import StorageApi

from asposehtmlcloud.rest import ApiException



class Program:



    @classmethod

    def set\_configuration(cls):

        cls.config = Configuration(

            apiKey="xxxxxxxxxxxxxxxxxxxxxxxxx",

            appSid="xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",

            basePath="https://api.aspose.cloud",

            authPath="https://api.aspose.cloud",

            debug=True)



    @classmethod

    def move\_file(cls, src\_file, dst\_file):

        if os.path.isfile(src\_file):

            copy2(src\_file, dst\_file)

            os.remove(src\_file)





    def \_\_init\_\_(self):

        set\_configuration()

        self.\_client = Client(Program.config)

        self.\_html\_api = HtmlApi(self.\_client)

        self.\_storage\_api = StorageApi(self.\_client)

    def upload\_to\_storage(self, localPath: str, storagePath: str, storage: str = None) -> bool:

        api = self.\_storage\_api

        result = api.upload\_file(storagePath, localPath)



        return len(result.uploaded) == 1 and len(result.errors) == 0



    def run\_get\_convert\_html\_to\_pdf(): 

        name = "testpage1.html"

        folder = "/Html/TestData"

        storage = None



        localFolder = "d:\\testdata"

        destFolder = 'd:\\testresult'



        localPath = "{0}\\{1}".format(localFolder, name)

        storagePath = "{0}/{1}".format(folder, name)



        if self.upload\_to\_storage(localPath, storagePath, storage):

            api = self.\_html\_api

            try:

                res = api.get\_convert\_document\_to\_pdf(

                    name, width=800, height=1000, left\_margin=50, right\_margin=100, top\_margin=150, bottom\_margin=200,

                    folder=TestHelper.folder, storage="" )



                move\_file(str(res), destFolder)

            except ApiException as e:

                print("Operation failed: {0}".format(str(e)))

        else:

            print("Error uploading file to storage: ")

            return





if \_\_name\_\_ == '\_\_main\_\_':

    Program().run\_get\_convert\_html\_to\_pdf()

```

{{< /tab >}}

{{< /tabs >}}
