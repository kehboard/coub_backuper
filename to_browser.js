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
console.save(coubjsons,"coubs.json")
}

function getAllCoubsFromChannel(channel_name, add_recoubs){
coubjsons = []
console.log("staring dump coubs metadata")
console.log("downloading page: 1")
var channel_api_url="https://coub.com/api/v2/timeline/channel/" + channel_name
total_pages = ajax_get(channel_api_url + "?all=true&order_by=date&page=1")
console.log("total_pages:", total_pages["total_pages"])
console.log(coubjsons)
sleep(1000);
for (i=1;i<=total_pages["total_pages"];i++){
   console.log("downloading page:", i)
   coubs = ajax_get(channel_api_url + "?all=true&order_by=date&page="+i)
   for (coub of coubs["coubs"]) {
     //console.log("coub=" + coub)
     //console.log("recoub=" + coubs["coubs"][1]["recoub"])
     console.log("type=" + coub["type"])
     if (coub["type"] == "Coub::Simple" || add_recoubs == true) {
       console.log("add coub " + coub["title"])
       coubjsons = coubjsons.concat(coub)
     }
   }
   sleep(1000);
}
console.log("script done! please copy object below and save it to file.json! Right click on object -> Copy object")
console.log(coubjsons)
console.save(coubjsons,"coubs.json")
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

(function (console) {
    console.save = function (data, filename) {
        if (!data) {
            console.error('Console.save: No data')
            return;
        }
        if (!filename) filename = 'console.json'
        if (typeof data === "object") {
            data = JSON.stringify(data, undefined, 4)
        }
        var blob = new Blob([data], { type: 'text/json' }),
            a = document.createElement('a')
        var e = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: false
        });

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        a.dispatchEvent(e)
    }
})(console)
//getAllLikesFromCoubCom()
add_recoubs=true
getAllCoubsFromChannel("official", add_recoubs)