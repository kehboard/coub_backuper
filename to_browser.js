function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function getAllLikesFromCoubCom(){
coubjsons = []
console.log("staring dump coubs metadata")
console.log("downloading page: 1")
total_pages = ajax_get("https://coub.com/api/v2/timeline/likes?all=true&order_by=date&page=1")
console.log("total_pages:", total_pages["total_pages"])
coubjsons = coubjsons.concat(total_pages["coubs"])
console.log(coubjsons)
sleep(1000);
for (i=2;i<=total_pages["total_pages"];i++){
   console.log("downloading page:", i)
   coubs = ajax_get("https://coub.com/api/v2/timeline/likes?all=true&order_by=date&page="+i)
   coubjsons = coubjsons.concat(coubs["coubs"])
   sleep(1000);
}
console.log("script done! please copy object below and save it to file.json! Right click on object -> Copy object")
console.log(coubjsons)
saveMetadataToDownloads("coub_metadata.json", JSON.stringify(coubjsons))
}

function saveMetadataToDownloads(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

function ajax_get(url) {
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.open("GET", url, false);
    xmlhttp.send()
    if (xmlhttp.status == 200) {
            //console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
                return data;
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
    }
}

getAllLikesFromCoubCom()