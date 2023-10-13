var searchDB;
XMLParser();

function openSearchBar() {
    if(window.getComputedStyle(document.getElementsByClassName('search-bar-container')[0], null).getPropertyValue("display") == 'none') {
        document.getElementsByClassName('search-bar-container')[0].style.setProperty('display', 'block', 'important');
        document.getElementsByClassName('search-input')[0].focus();
    }
    else {
        // 处理重复点击
    }
    if(document.getElementsByClassName('search-input')[0].value != "") {
        exportSearchContent();
    }
    else {

    }
}

function clickHandler(event) {
    if (document.getElementsByClassName('search-bar-container')[0].contains(event.target)) {
        // console.log("点击容器内部");
        document.removeEventListener('click', clickHandler);    
    } 
    else {
        document.getElementsByClassName('search-bar-container')[0].style.setProperty('display', 'none', 'important');
        document.getElementById('search-input').value = "";
        document.getElementsByClassName('search-output-list')[0].innerHTML = "<li class=\"Searching\"><div class=\"content\">Searching...</div></li>";
        document.removeEventListener('click', clickHandler);
    }
}

function hideSearchBar() {
    document.addEventListener('click', clickHandler);
}

function stripeCode(str) { // 去除代码
    return str.replace(/<figure class="highlight.*?<\/figure>/ig, '');
}

function stripe(str) { // 去除html标签
    return str.replace(/(<([^>]+)>)/ig, '');
}

function allToOne(str) { // 压缩成一行
    return str.trim().replace(/\n/g, ' ').replace(/\s+/g, ' ');
}

function minify(str) {
    return allToOne(stripe(stripeCode(str)))
}

function XMLParser() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", searchXMLPath, false);
    // TODO 通过配置文件获取链接
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    // console.log(xmlDoc.getElementsByTagName('title').length);
    searchDB = new Array(xmlDoc.getElementsByTagName('title').length);
    for(i = 0; i < xmlDoc.getElementsByTagName('title').length; i++) {
        searchDB[i] = new Array(3);
        try {
            searchDB[i][0] = xmlDoc.getElementsByTagName('title')[i].childNodes[0].nodeValue;
        }
        catch(e) {
            searchDB[i][0] = "Untitled";
        }
        searchDB[i][1] = minify(String(xmlDoc.getElementsByTagName('content')[i].childNodes[0].nodeValue));
        searchDB[i][2] = xmlDoc.getElementsByTagName('url')[i].childNodes[0].nodeValue;
    }
    console.log("searchDB 加载完毕");
}

function exportSearchContent() {
    var searchOutputIndex = new Array();
    var searchParams = String(document.getElementById('search-input').value);
    var pattern = new RegExp(searchParams, 'i');
    for(i = 0; i < searchDB.length; i++) {
        if(pattern.test(String(searchDB[i][0])) || pattern.test(String(searchDB[i][1]))) {
            searchOutputIndex.push(i);
        }
        else {
            // console.log("??")
        }
    }
    getSearchOutput(searchOutputIndex);
}

function getSearchOutput(searchOutputIndex) {
    var str = "";
    for(i = 0; i < searchOutputIndex.length; i++) {
        str = str + "<li>" + "<div><a href=\"" + searchDB[searchOutputIndex[i]][2] + "\">" + "<div class=\"title\">" + searchDB[searchOutputIndex[i]][0] + "</div><div class=\"content\">" + searchDB[searchOutputIndex[i]][1] + "</div></a></div></li>";
    }
    if(str === "") {
        str =  "<li class=\"Searching\"><div class=\"content\">No data~~~</div></li>";
    }
    // console.log(searchOutputIndex)
    document.getElementsByClassName('search-output-list')[0].innerHTML = str;
}

function goToLink(id) {
    event.preventDefault();
    const targetURL = id.getElementsByClassName('li-link')[0].getAttribute('href');
    window.open(targetURL, '_blank');
    document.getElementsByClassName('search-bar-container')[0].style.setProperty('display', 'none', 'important');
    console.log(targetURL)
}
