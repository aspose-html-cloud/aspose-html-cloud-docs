const code = {
  csharp: `
  var outputFile = "Output.{{FORMAT}}";
  
  var api = new HtmlApi("CLIENT_ID", "CLIENT_SECRET").ConvertApi;
  var result = await api.ConvertUrlAsync({{URL}}, outputFile, options);
  
  Assert.True(result.Status == ConvertResultStatus.Completed);
  Assert.True(!string.IsNullOrWhiteSpace(result.OutputFile));`,
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

  ConverterBuilder builder = new ConverterBuilder()
    .fromUrl(inputUrl)
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
  utility::string_t src = L"{{URL}};
  utility::string_t dst = w_cur_dir + _XPLATSTR("result.{{FORMAT}}");

  
  //Conversion
  auto result = api->convertLocalToLocal(src, dst);
  
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

  ConverterBuilder builder = new ConverterBuilder()
    .fromUrl(inputUrl)
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
  nodejs: `// Get keys from aspose site.
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

var callback = function(error, data, response) {
if (error) {
  console.error(error);
} else {
  console.log(data);  
}
};

conversionApi.convertUrlToLocal(src, dst, callback);`,
  php: `<?php
require_once(__DIR__ . '/vendor/autoload.php');

$conf = array(
"basePath" => "https://api.aspose.cloud/v4.0",
"authPath" => "https://api.aspose.cloud/connect/token",
"apiKey" => "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
"appSID" => "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
"defaultUserAgent" => "Webkit"
);

$apiInstance = new Client\Invoker\Api\HtmlApi($conf);

$src = '{{URL}}';
$dst = 'Output.{{FORMAT}}'

try {
  //Request to server Api
  $result = self::$api_html->convertUrlToLocal($src, $dst);
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

begin
result = api_instance.convert_url_to_local(src, dst)
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
const basePath = "https://api.aspose.cloud/v4.0";
const conversionUrl = basePath + '/html/conversion/'
const authPath =  "https://api.aspose.cloud/v4.0/html/account/token";
const pageSizes = {
  "letter": [8.5, 11.0],
  "tabloid": [11.0, 17.0],
  "legal": [8.5, 14.0],
  "statement": [5.5, 8.5],
  "executive": [7.0, 10.0],
  "a3": [11.7, 16.5],
  "a4": [8.3, 11.7],
  "a5": [5.8, 8.3],
  "b4": [9.8, 13.9]
};



function run() {

  let link = document.getElementById('url').value;
  if (!link) {
    return;
  }
  showLoader();
  runWithAuth(convert)
}

let targetFormat = "pdf";
function setOutputFormat(value) {
  this.targetFormat = value;
  changeCode(this.targetFormat);
}

function runWithAuth(onSuccess) {
  const xrs = new XMLHttpRequest(); 
  xrs.onload = () => {
    if(xrs.status == 200){
        let res = JSON.parse(xrs.response);
        let access_token = res.access_token;
        let token_type = res.token_type;
        let auth = token_type + ' ' + access_token;
        onSuccess(auth);
    } else {
        processError("Unable to get a token");
    }
  };

  xrs.onerror = () =>{
      processError("Authorization faulted");
  };
  xrs.open("GET", authPath);
  xrs.send();
}

function getOptions() {
  let width = document.getElementById('width').value;
  let height = document.getElementById('height').value;
  let top = document.getElementById('top').value;
  let bottom = document.getElementById('bottom').value;
  let left = document.getElementById('left').value;
  let right = document.getElementById('right').value;
  let result = {};
  if (width) result['width'] = width;
  if (height) result['height'] = height;
  if (top) result['topmargin'] = top;
  if (bottom) result['bottommargin'] = bottom;
  if (left) result['leftmargin'] = left;
  if (right) result['rightmargin'] = right;
  return result;
}

function switchInchPx(meters) {
  var x = document.getElementById("options").querySelectorAll("label");
  x.forEach(el => el.textContent = el.textContent.replace(/\(.*\)/, '(' + meters + ')'));
}


function changeCode(format) {
  let outputFormat = format;
  let pageSection = document.getElementById('pageSizeSection');
  let widthEl = document.getElementById('width');
  let hightEl = document.getElementById('height');

  if (['pdf', 'xps', 'docx'].includes(outputFormat)) {
    pageSection.hidden = false;
    let el = document.getElementById("pageSize");
    let pageSize = el.options[el.selectedIndex].text.toLowerCase();
    widthEl.value = pageSizes[pageSize][0];
    hightEl.value = pageSizes[pageSize][1];
    widthEl.readOnly = true;
    hightEl.readOnly = true;
    switchInchPx('inch');
  } else {
    pageSection.hidden = true;
    widthEl.value = "";
    hightEl.value = "";
    widthEl.readOnly = false;
    hightEl.readOnly = false;
    switchInchPx('px');
  }

  let url = document.getElementById('url').value;
  let width = document.getElementById('width').value || 800;
  let height = document.getElementById('height').value || 600;
  let topmargin = document.getElementById('top').value || 0;
  let bottommargin = document.getElementById('bottom').value || 0;
  let leftmargin = document.getElementById('left').value || 0;
  let rightmargin = document.getElementById('right').value || 0;
  for (const key in code) {
    let element = document.getElementById(key);
    if(!element) {
      console.log("Missing key:" + key);
      continue;
    }
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

function processError(err) {
  console.log(err);
  hideLoader();
  const alert = document.getElementById("alertMessage");
  if (alert) {
    alertstyle.display = 'block';
    setTimeout(function () {
      alert.style.display = 'none';
    }, 3000);
  }

}

function convert(auth) {
  let outputFormat = this.targetFormat; 
  const xrs = new XMLHttpRequest();
  xrs.open("POST", conversionUrl + 'html-' + outputFormat);
  xrs.setRequestHeader('Authorization', auth);
  xrs.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  let params = {
    'inputPath': document.getElementById('url').value,
    'outputFile': 'Output.' + outputFormat,
    'options': getOptions()
  };

  let strParams = JSON.stringify(params);

  xrs.send(strParams);
  console.log(strParams);
  xrs.onload = () => {
    console.log(xrs);
    if (xrs.status == 200) {
      let res = JSON.parse(xrs.response);
      let id = res.id;
      switch (res.status) {
        case "running":
        case "pending":
          setTimeout(function () {
            runWithAuth((auth)=> {
              checkStatus(id, auth);
            })       
          }, 3000);
          break;
        case 'completed':
          downloadResult(res.file);
          break;
        default:
          processError("Conversion faulted");
      }
    } else {
      processError("Conversion faulted");
    }
  };
  xrs.onerror = () => {
    processError("Conversion faulted");
  };
}

function checkStatus(id, auth) {
  const xrs = new XMLHttpRequest();
  xrs.open("GET", conversionUrl + id);
  xrs.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xrs.setRequestHeader('Authorization', auth);
  xrs.send();

  xrs.onload = () => {
    if (xrs.status == 200) {
      let res = JSON.parse(xrs.response);
      switch (res.status) {
        case "running":
        case "pending":
          setTimeout(function () {
            runWithAuth((auth)=>{
              checkStatus(id, auth);
            })           
          }, 3000);
          break;
        case 'completed':
          downloadResult(res.file, auth);
          break;
        default:
          processError("Conversion faulted");
      }
    } else {
      processError("Error");
    }
  };

  xrs.onerror = () => {
    processError("Conversion faulted");
  };
}

function downloadResult(f, auth) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', basePath + '/html/file' + '?path=' + f);
  xhr.setRequestHeader('Authorization', auth);
  xhr.responseType = 'blob';
  xhr.onload = function (e) {
    var blob = e.currentTarget.response;
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = f;
    a.dispatchEvent(new MouseEvent('click'));
    hideLoader();
  }
  xhr.send();
}

function showLoader() {
  document.body.style.cursor = 'wait';
  document.getElementById("roller").style.display = 'flex';
  let runBtn = document.getElementById('convert');
  let select = document.getElementById('selectOutputFormat');
  document.getElementById('url').disabled = true;;
  runBtn.classList.add('disabled');
  select.classList.add('disabled');
}

function hideLoader() {
  document.body.style.cursor = 'auto';
  document.getElementById("roller").style.display = 'none';
  let runBtn = document.getElementById('convert');
  let select = document.getElementById('selectOutputFormat');
  document.getElementById('url').disabled = false;
  runBtn.classList.remove('disabled');
  select.classList.remove('disabled');
}