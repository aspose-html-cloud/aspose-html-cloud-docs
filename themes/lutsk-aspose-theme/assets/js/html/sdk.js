const code = {
    android: `package com.aspose.test_package;

import com.aspose.html.Configuration;
import com.aspose.html.ConverterBuilder;
import com.aspose.html.model.ConversionResult;
import java.io.File;

public class App {

    public static void main(String[] args) {

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

    Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
    Configuration.setBasePath("https://api.aspose.cloud");
    Configuration.setAuthPath("https://api.aspose.cloud/connect/token");
    Configuration.setUserAgent("WebKit");
    Configuration.setDebug(true);

    String inputUrl = "{{URL}}";
    String outputFile = "Output.{{FORMAT}}";

    File f = new File(outputFile);
    if(f.exists()) f.delete();

    ImageConversionOptions opt = new ImageConversionOptions()
      .setWidth({{WIDTH}})
      .setHeight({{HEIGHT}})
      .setTopMargin({{TOPMARGIN}})
      .setBottomMargin({{BOTTOMMARGIN}})
      .setLeftMargin({{LEFTMARGIN}})
      .setRightMargin({{RIGHTMARGIN}});

    ConverterBuilder builder = new ConverterBuilder()
      .fromUrl(inputUrl)
      .useOptions(opt)
      .saveToLocal(outputFile);

    ConversionResult result = api.convert(builder);

    String f = result.getFile();

    File dst = new File(result.getFile());

    if(dst.exists()) {
      System.out.println("Result file is " + dst);
    } else {
      System.out.println("Error conversion");
    }
  }
}`,
    cpp: `#include <AsposeHtmlCloud.h>;

using namespace com::aspose::api;


int main(int argc, char* argv[])
{
    // Get current directory
    std::string cur_dir(argv[0]);
    int pos = cur_dir.find_last_of("/\\");
    cur_dir = cur_dir.substr(0, pos + 1); // Include the last slash
    std::wstring w_cur_dir(cur_dir.begin(), cur_dir.end());

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

    const utility::string_t clientId = _XPLATSTR("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
    const utility::string_t clientSecret = _XPLATSTR("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    const utility::string_t basePath = _XPLATSTR("https://api.aspose.cloud/v4.0");
    const utility::string_t authPath = _XPLATSTR("https://api.aspose.cloud/connect/token");

    // Create configuration for authorization
    std::shared_ptr<ApiConfiguration> apiConfig(new ApiConfiguration(clientId, clientSecret, basePath, authPath));

    // Create client from configuration
    std::shared_ptr<ApiClient> apiClient(new ApiClient(apiConfig));

    // Create ConversionApi
    std::shared_ptr<ConversionApi> api = std::make_shared<ConversionApi>(apiClient);
  
    // File name for conversion
    utility::string_t src = w_cur_dir + _XPLATSTR("test.html");
    utility::string_t dst = w_cur_dir + _XPLATSTR("result.{{FORMAT}}");
    
    // Set options for conversion
    std::shared_ptr<ConversionOptions> opts = std::make_shared<ConversionOptions>();
    opts->setWidth({{WIDTH}})
        ->setHeight({{HEIGHT}})
        ->setLeftMargin({{LEFTMARGIN}})
        ->setRightMargin({{RIGHTMARGIN}})
        ->setTopMargin({{TOPMARGIN}})
        ->setBottomMargin({{BOOTOMMARGIN}});
    
    //Conversion
    auto result = api->convertLocalToLocal(src, dst, opts);
    
    // Check the result file
    auto re = result->getFile();
    std::ifstream f(re.c_str());
    if(!f.good())
    {
        throw std::runtime_error("Conversion failed");
    }
}`,
    java: `package com.aspose.test_package;

import com.aspose.html.Configuration;
import com.aspose.html.ConverterBuilder;
import com.aspose.html.model.ConversionResult;
import java.io.File;

public class App {
    

    public static void main(String[] args) {

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

    Configuration.setAPI_KEY("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    Configuration.setAPP_SID("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
    Configuration.setBasePath("https://api.aspose.cloud");
    Configuration.setAuthPath("https://api.aspose.cloud/connect/token");
    Configuration.setUserAgent("WebKit");
    Configuration.setDebug(true);

    String inputUrl = "{{URL}}";
    String outputFile = "Output.{{FORMAT}}";

    File f = new File(outputFile);
    if(f.exists()) f.delete();
    
    ImageConversionOptions opt = new ImageConversionOptions()
      .setWidth({{WIDTH}})
      .setHeight({{HEIGHT}})
      .setTopMargin({{TOPMARGIN}})
      .setBottomMargin({{BOTTOMMARGIN}})
      .setLeftMargin({{LEFTMARGIN}})
      .setRightMargin({{RIGHTMARGIN}});

    ConverterBuilder builder = new ConverterBuilder()
      .fromUrl(inputUrl)
      .useOptions(opt)
      .saveToLocal(outputFile);

    ConversionResult result = api.convert(builder);

    String f = result.getFile();

    File dst = new File(result.getFile());

    if(dst.exists()) {
      System.out.println("Result file is " + dst);
    } else {
      System.out.println("Error conversion");
    }
  }
}`,
    csharp: `
var inputFile = "{{URL}}";
var outputFile = "Output.{{FORMAT}}";

var api = new HtmlApi("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX").ConvertApi;

var options = new ImageConversionOptions()
                  .SetHeight({{HEIGHT}})
                  .SetWidth({{WIDTH}})
                  .SetLeftMargin({{LEFTMARGIN}})
                  .SetRightMargin({{RIGHTMARGIN}})
                  .SetBottomMargin({{BOTTOMMARGIN}})
                  .SetTopMargin({{TOPMARGIN}});

var result = await api.ConvertAsync(inputFile, outputFile, options);

Assert.True(result.Status == ConvertResultStatus.Completed);
Assert.True(!string.IsNullOrWhiteSpace(result.OutputFile));`,
    nodejs:`// Get keys from aspose site.
// There is free quota available. 
// For more details, see https://purchase.aspose.cloud/pricing
  
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

var src = "{{URL}}";
var dst = "Output.{{FORMAT}}";

var opts = {
  'width': {{WIDTH}}, // {Number} Resulting image width in pixels.
  'height': {{HEIGHT}}, // {Number} Resulting image height in pixels.
  'leftMargin': {{LEFTMARGIN}}, // {Number} Left resulting image margin in pixels.
  'rightMargin': {{RIGHTMARGIN}}, // {Number} Right resulting image margin in pixels.
  'topMargin': {{TOPMARGIN}}, // {Number} Top resulting image margin in pixels.
  'bottomMargin': {{BOTTOMMARGIN}} // {Number} Bottom resulting image margin in pixels.

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);  
  }
};

conversionApi.convertUrlToLocal(src, dst, opts, callback);`,
    php:`<?php
require_once(__DIR__ . '/vendor/autoload.php');

$conf = array(
  "basePath" => "https://api.aspose.cloud/v4.0",
  "authPath" => "https://api.aspose.cloud/connect/token",
  "apiKey" => "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "appSID" => "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
  "defaultUserAgent" => "Webkit"
);

$apiInstance = new Client\Invoker\Api\HtmlApi($conf);

$options = [
    'width' => {{WIDTH}},
    'height' => {{HEIGHT}},
    'left_margin' => {{LEFTMARGIN}},
    'right_margin' => {{RIGHTMARGIN}},
    'top_margin' => {{TOPMARGIN}},
    'bottom_margin' => {{BOTTOMMARGIN}}
];

$src = '{{URL}}';
$dst = 'Output.{{FORMAT}}'

try {
    //Request to server Api
    $result = self::$api_html->convertUrlToLocal($src, $dst, $options);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HtmlApi->convertUrlToLocal: ', $e->getMessage(), PHP_EOL;
}
?>`,
    python: `import os
from asposehtmlcloud.configuration import Configuration
from asposehtmlcloud.api.html_api import HtmlApi
from asposehtmlcloud.api.storage_api import StorageApi
from asposehtmlcloud.api_client import ApiClient as Client
from asposehtmlcloud.rest import ApiException

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

source_url = "{{URL}}"
try:
    res = html_api.convert_url_to_local(input_file=source_url, output_file="result.{{FORMAT}}")
    if not os.path.exists(res.file):
        print('conversion failed')
except ApiException as ex:
    print("Exception")
    print("Info: " + str(ex))
    raise ex`,
    ruby: `# Load the gem
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

src = "{{URL}}"
dst = "Output.{{FORMAT}}"

opts = { 
  width: {{WIDTH}}, # Integer | Resulting image width. 
  height: {{HEIGHT}}, # Integer | Resulting image height. 
  left_margin: {{LEFTMARGIN}}, # Integer | Left resulting image margin.
  right_margin: {{RIGHTMARGIN}}, # Integer | Right resulting image margin.
  top_margin: {{TOPMARGIN}}, # Integer | Top resulting image margin.
  bottom_margin: {{BOTTOMMARGIN}} # Integer | Bottom resulting image margin.
}

begin
  result = api_instance.convert_url_to_local(src, dst, opts)
  p result
rescue AsposeHtml::ApiError => e
  puts "Exception when calling api_instance.convert_url_to_local: #{e}"
end`,
    swift: `import Alamofire
import Foundation
import XCTest
import AsposeHtmlCloud
static let fm = FileManager.default
let resourceDir = fm.homeDirectoryForCurrentUser.appendingPathComponent("Documents/Aspose.HTML.Cloud.SDK.Swift/Tests/AsposeHtmlCloudTests/Resources")
let resultDir = fm.homeDirectoryForCurrentUser.appendingPathComponent("Documents/Aspose.HTML.Cloud.SDK.Swift/Tests/AsposeHtmlCloudTests/TestResult")

func fileExist(name: String) -> Bool {
  return FileManager.default.fileExists(atPath: name)
}

ClientAPI.setConfig(
  basePath: "https://api.aspose.cloud/v4.0", 
  authPath: "https://api.aspose.cloud/connect/token", 
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", 
  appSID: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", 
  debugging: true
)

let src = "{{URL}}"
let expectation = self.expectation(description: "testConvert to {{FORMAT}}")
let dst = resultDir.appendingPathComponent("Output.{{FORMAT}}").absoluteString

HtmlAPI.convertUrlToLocal(src: src, dst: dst, options: nil) { (data, error) in
  guard error == nil else {
    XCTFail("Error get convert html to {{FORMAT}}. Error=\\(error!.localizedDescription)")
    return
  }
  let resultPath = data!.file!
  XCTAssertTrue(fileExist(name: resultPath))
  expectation.fulfill()
}
self.waitForExpectations(timeout: testTimeout, handler: nil)`
  };

const convertUrl = 'https://api.products.aspose.app/html/api/conversion';
const uploadUrl = 'https://api.products.aspose.app/html/api/files';

function changeCode(){
  let e = document.getElementById("selectOutputFormat");
  let outputFormat = e.options[e.selectedIndex].text.toLowerCase();
  let url = document.getElementById('url').value;
  let width = document.getElementById('width').value || 800;
  let height = document.getElementById('height').value || 600;
  let topmargin = document.getElementById('top').value || 10;
  let bottommargin = document.getElementById('bottom').value || 10;
  let leftmargin = document.getElementById('left').value || 10;
  let rightmargin = document.getElementById('right').value || 10;
  for (const key in code) {
    let element = document.getElementById(key);
    element.innerHTML = "";
    let snippet = code[key]
      .replace(new RegExp("\{\{URL\}\}", 'g'), url)
      .replace(new RegExp("\{\{FORMAT\}\}", 'g'), outputFormat)
      .replace(new RegExp("\{\{WIDTH\}\}", 'g'), width)
      .replace(new RegExp("\{\{HEIGHT\}\}", 'g'), height)
      .replace(new RegExp("\{\{TOPMARGIN\}\}", 'g'), topmargin)
      .replace(new RegExp("\{\{BOTTOMMARGIN\}\}", 'g'), bottommargin)
      .replace(new RegExp("\{\{LEFTMARGIN\}\}", 'g'), leftmargin)
      .replace(new RegExp("\{\{RIGHTMARGIN\}\}", 'g'), rightmargin);
    let text = document.createTextNode(snippet);
    element.appendChild(text);
    hljs.highlightElement(element);
  }
}

function processError(err){
  console.log(err);
  hideLoader();

  document.getElementById("alertMessage").style.display = 'block';
  setTimeout(function () {
      document.getElementById("alertMessage").style.display = 'none';
  }, 3000);
}

function run(){

  let link = document.getElementById('url').value;
  if(!link) return;

  showLoader();
  let e = document.getElementById("selectOutputFormat");
  let outputFormat = e.options[e.selectedIndex].text.toLowerCase();

  let params = JSON.stringify({
    'files': [{ 
      "links": null,
      "hRef": document.getElementById('url').value
    }],
    'inputFormat': "HTML",
    'outputFormat': outputFormat
  });

  convert(params);
}

function convert(params){
  
  const xrs = new XMLHttpRequest();
  xrs.open("POST", convertUrl);
  xrs.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xrs.send(params);

  xrs.onload = () => {
      if(xrs.status == 200){
          let res = JSON.parse(xrs.response);
          let id = res.id;
          switch (res.status) {
              case "running":
              case "pending":
                  setTimeout(function () {
                      checkStatus(id);
                  }, 3000);
                  break;
              case 'completed':
                  downloadResult(res.file.hRef);
                  break;
              default:
                  processError("Conversion faulted");
          }
      } else {
          processError("Conversion faulted");
      }
  };
  xrs.onerror = () =>{
      processError("Conversion faulted");
  };
}

function checkStatus(id) {
  const xrs = new XMLHttpRequest();
  xrs.open("GET", convertUrl + "?id=" + id);
  xrs.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xrs.send();

  xrs.onload = () => {
      if (xrs.status == 200) {
          let res = JSON.parse(xrs.response);
          switch (res.status) {
              case "running":
              case "pending":
                  setTimeout(function () {
                      checkStatus(id);
                  }, 3000);
                  break;
              case 'completed':
                  downloadResult(res.file.hRef);
                  break;
              default:
                  processError("Conversion faulted");
          }
      } else {
          processError("Error");
      }
  };

  xrs.onerror = () =>{
      processError("Conversion faulted");
  };
}

function downloadResult(f){
  let link = document.createElement("a");
  let name = 'output.pdf';
  link.setAttribute('download', name);
  link.href = uploadUrl + '?uri=' + f;
  document.body.appendChild(link);
  link.click();
  link.remove();
  hideLoader();
}

function showLoader(){
  document.body.style.cursor = 'wait'; 
  document.getElementById("roller").style.display = 'flex';
  let runBtn = document.getElementById('convert');
  let select = document.getElementById('selectOutputFormat');
  document.getElementById('url').disabled = true;;
  runBtn.classList.add('disabled');
  select.classList.add('disabled');
}

function hideLoader(){
  document.body.style.cursor = 'auto';
  document.getElementById("roller").style.display = 'none';
  let runBtn = document.getElementById('convert');
  let select = document.getElementById('selectOutputFormat');
  document.getElementById('url').disabled = false;
  runBtn.classList.remove('disabled');
  select.classList.remove('disabled');
}
changeCode();
