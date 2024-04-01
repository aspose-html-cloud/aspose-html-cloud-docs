const SDKS = [
    "net",
    "cpp",
    "php",
    "phpjava",
    "java",
    "sharepoint",
    "reportingservices",
    "androidjava",
    "pythonjava",
    "nodejsjava",
]

const SEARCH_LABELS = new Map();
SEARCH_LABELS.set('docs.aspose.com', 'asposedocs');
SEARCH_LABELS.set('docs.aspose.cloud', 'asposeclouddocs');

function clearSearchResult(searchResults, pfName, sdk) {
    return searchResults.filter((el) => 
        !el.host.includes("blog.aspose.com") 
        && !el.host.includes("apireference")
        && !el.host.includes("forum.aspose.com")
        && el.url.includes(`/${pfName}/`)
        && el.url.includes(`/${sdk}/`)
    )
}

function buildQuery(searchPage, q, pfName, sdkName) {
    return `https://${searchPage}?q=${q}&pf=${pfName}&sdk=${sdkName}`
}

function determineSearchLabel() {
   return SEARCH_LABELS.has(window.location.hostname) ? SEARCH_LABELS.get(window.location.hostname) : SEARCH_LABELS.get('docs.aspose.com');
}

function getSearchResults(query, pfName, sdk) {
    var label = determineSearchLabel();
    var domain = label == "asposedocs" ? "search.aspose.com" : "search.aspose.cloud";
    var category = `cat_aspose${pfName}`;
    $.ajax({
        url: `https://${domain}/json/?sort=&fields.label=${label}&fields.label=${category}&lang=en&q=${query}&num=1000`,
        crossDomain: true,
        dataType: 'jsonp',
        cache: false,
        type: "GET",
        success: function (response) {
            var resultArray = response.response.result;

            var result = clearSearchResult(resultArray, pfName, sdk);
            createSearchItems(result);
        },
        error: function (xhr) {
        }
    });
}

function buildSearchItem(searchResult) {
    var html = `
        <li>
            <h2 class="title text-truncate">
                <a class="link" href="${searchResult.url}" data-uri="${searchResult.url}" data-order="0">${searchResult.content_title}</a>
            </h2>
            <div class="body"> 
                <div class="description">
                    <h3>
                    ${searchResult.content_description}
                    </h3>
                </div>
            </div>
            <div class="site text-truncate">
                <cite>${searchResult.url}</cite>
            </div>
        </li>
    `;

    return html;
}

function createSearchItems(searchResults) {
    var searchResultsPlace = $(".search-results");
    if (searchResults.length == 0) {
        searchResultsPlace.append("<p>No Results</p>");
    }
    for (searchResult of searchResults) {
        var additionalElement = buildSearchItem(searchResult);
        searchResultsPlace.append(additionalElement);  
    }
}

function isSearchPage() {
    var getUrl = window.location;
    var paths = getUrl.pathname.split('/');
    paths = paths.filter((el) => el == "search");
    
    return paths.length > 0
}

function displaySearchResult() {
    if (!isSearchPage()) {
        return;
    }
    var urlParams = new URLSearchParams(window.location.search);
    var query = urlParams.get('q');
    var pfName = urlParams.get('pf');
    var sdk = urlParams.get('sdk');
    if (!SDKS.includes(sdk)) {
        sdk = ""
    }    
    
    getSearchResults(query, pfName, sdk);   
}

$(document).ready(function() {
    $(document).on('keypress', '.td-search-input', function(e) {
        if (e.keyCode !== 13) {
           return
        }

        var query = $(this).val();
        searchPage = `${$(this).attr('data-index')}/search/`;
        //searchPage = "http://localhost:1313/words/search/"

        var getUrl = window.location;
        var pfName = getUrl.pathname.split('/')[1];
        var sdkName = getUrl.pathname.split('/')[2];
        if (!SDKS.includes(sdkName)) {
            sdkName = ""
        }
        
        window.location.replace(buildQuery(searchPage, query, pfName, sdkName));

        return false;
     });

     displaySearchResult()
 });
