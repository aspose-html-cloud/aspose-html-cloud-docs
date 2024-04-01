function initAppSvgConverter(id, args) {
    var uploadUrl = 'https://api.products.aspose.app/svg/api/files';
    var convertUrl = 'https://api.products.aspose.app/svg/api/conversion';

    let fileInput = document.getElementById('fileInput_' + id);
    let fileNameLabel = document.getElementById('fileName_' + id);
    let runBtn = document.getElementById('run_' + id);
    let outputFormatSelect = document.getElementById('outputFormat_' + id);
    let errorBox = document.getElementById('error_' + id);
    let codeTemplate = document.getElementById('template_' + id).innerHTML;
    let codeBlock = document.getElementById('snippet_' + id);

    let handlebars = Handlebars.create();
    handlebars.registerHelper("input", function(...args) {
        var paramIndex = 0;
        var modifier = '';
        args.forEach(element => {
            if(typeof element == 'string')
            {
                var str = element;
                if(str.startsWith('param')){
                    paramIndex = Number.parseInt(str.substring('param'.length), 10) - 1;
                }
                if((str == 'camel' ||  str == 'lower' || str == 'upper') && modifier == '')
                {
                    modifier = str;
                }
            }    
        });

        var items = inputParam;
        if(paramIndex >= items.length)
            paramIndex = 0;
        
        var result = items[paramIndex];
        if(modifier == 'camel'){
            result = toCamelCase(result);
        }else if(modifier == 'lower'){
            result = result.toLowerCase();
        }
        else if(modifier == 'upper'){
            result = result.toUpperCase();
        }
        return result;
    });
    handlebars.registerHelper("output", function(...args) {

        var paramIndex = 0;
        var modifier = '';
        args.forEach(element => {
            if(typeof element == 'string')
            {
                var str = element;
                if(str.startsWith('param')){
                    paramIndex = Number.parseInt(str.substring('param'.length), 10) - 1;
                }
                if((str == 'camel' ||  str == 'lower' || str == 'upper') && modifier == '')
                {
                    modifier = str;
                }
            }    
        });

        var items = outputParams[outputFormatSelect.selectedIndex];
        if(paramIndex >= items.length)
            paramIndex = 0;
        
        var result = items[paramIndex];
        if(modifier == 'camel'){
            result = toCamelCase(result);
        }else if(modifier == 'lower'){
            result = result.toLowerCase();
        }
        else if(modifier == 'upper'){
            result = result.toUpperCase();
        }
        return result;
    });

    handlebars.registerHelper("if_output", function(...args) {

        let output = outputParams[outputFormatSelect.selectedIndex][0];
        let options = args[args.length - 1];
        
        for (let i = 0; i < args.length; i++) {
            if(output == args[i]){
                return options.fn(this);
            }
        }

        return options.inverse(this);
    });

    var template = handlebars.compile(codeTemplate);

    let inputParam = args[0].split('|').map(p => p.trim());
    let outputParams = args.slice(1).map(x => x.split('|').map(p => p.trim()));
    
    function postInit() {
        
        fileInput.onchange = () => {
            let selectedFile = fileInput.files[0];
            if (selectedFile && selectedFile.name != "") {
                fileNameLabel.innerText = selectedFile.name;
                runBtn.classList.remove('disabled');
            }
        }
        
        outputFormatSelect.onchange = renderCodeBlock;
        
        runBtn.onclick = run;

        renderCodeBlock();
    }

    function run() {
        showLoader();
        const data = fileInput.files[0];
        let xrs = new XMLHttpRequest();
        let outputFormat = outputFormatSelect.options[outputFormatSelect.selectedIndex].text;
        xrs.onload = () => {
            if (xrs.status == 200) {
                let files = JSON.parse(xrs.response);
                let requestParams = JSON.stringify({
                    'Files': files,
                    'InputFormat': inputParam[0],
                    'OutputFormat': outputFormat,
                    'BackgroundColor': '#FFFFFF'
                });
                convert(requestParams);
            } else {
                showError("Conversion failed :(");
            }
        };
        xrs.onerror = () => {
            showError("Conversion failed :(");
        };

        let formData = new FormData();
        formData.append("file", data);
        xrs.open("POST", uploadUrl);
        xrs.send(formData);
    }

    function convert(requestParams) {
        const xrs = new XMLHttpRequest();
        xrs.open("POST", convertUrl);
        xrs.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xrs.onload = () => {
            if (xrs.status == 200) {
                let res = JSON.parse(xrs.response);
                onResponse(res.id, xrs.response)
            } else {
                showError("Conversion failed :(");
            }
        };
        xrs.onerror = () => {
            showError(xrs);
        };

        xrs.send(requestParams);
    }

    function getStatus(id) {
        const xrs = new XMLHttpRequest();
        xrs.open("GET", convertUrl + "?id=" + id);
        xrs.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xrs.onload = () => {
            if (xrs.status == 200) {
                onResponse(id, xrs.response);
            } else {
                showError("Conversion failed :(");
            }
        };

        xrs.onerror = () => {
            showError("Conversion failed :(");
        };

        xrs.send();
    }

    function onResponse(requestId, response) {
        let res = JSON.parse(response);
        console.log(res);
        switch (res.status) {
            case "running":
            case "pending":
                setTimeout(function () { getStatus(requestId); }, 300);
                break;
            case 'completed':
                downloadResult(res.file.hRef);
                break;
            default:
                showError("Conversion failed :(");
        }
    }

    function downloadResult(f) {

        let link = document.createElement("a");
        let name = 'output.pdf';
        link.setAttribute('download', name);
        link.href = uploadUrl + '?uri=' + f;
        document.body.appendChild(link);
        link.click();
        link.remove();

        hideLoader();
    }

    function showLoader() {
        let loader = runBtn.firstElementChild;
        let btnText = runBtn.lastElementChild;

        runBtn.classList.add('disabled');
        loader.classList.remove('hidden');
        btnText.classList.add('hidden');
    }

    function hideLoader() {
        let loader = runBtn.firstElementChild;
        let btnText = runBtn.lastElementChild;

        runBtn.classList.remove('disabled');
        loader.classList.add('hidden');
        btnText.classList.remove('hidden');
    }

    function renderCodeBlock() {
        
        let max = Math.max(...args.map(x => x.split('|').length));
        var values = {
            camel: "camel",
            lower: "lower",
            upper: "upper",
        };
        for (let i = 0; i < max; i++) {
            values["param" + (i + 1)] = "param" + (i + 1);
        }

        var code = template(values);
        code = hljs.highlight(code, { language: 'csharp' }).value;
        codeBlock.innerHTML = code;
    }

    function showError(err) {
        hideLoader();

        errorBox.innerText = err;
        errorBox.classList.remove('hidden');
        setTimeout(function () {
            errorBox.classList.add('hidden');
        }, 3000);
    }

    function toCamelCase(str) {
        return str.split(' ').map(function (word, index) {
            // If it is not the first word only upper case the first char and lowercase the rest.
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
    }

    function copyCode() {
        window.navigator.clipboard.writeText(codeBlock.innerText);
    }

    postInit();

    return {
        template: template,
        input: inputParam,
        output: outputParams,
        copyCode: copyCode,
        run: run
    };
}