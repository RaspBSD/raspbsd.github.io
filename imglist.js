function fetchjson(item) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      parseimglist(myArr, item);
    }
  };
  var url = "http://download.raspbsd.org/" + item + ".json";
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function parseimglist(arr, item) {
  var out = "";
  var i;
  for(i = 0; i < arr.img.length; i++) {
    out += '<a href="http://download.raspbsd.org/' + arr.img[i] + '">' +
    arr.img[i] + '</a><br>';
  }
  document.getElementById(item).innerHTML = out;
}

imglist.forEach(
  function(item, index, array) {
    fetchjson(item);
  }
);
