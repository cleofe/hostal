/* innHand 2012. All right reserved. http://www.innhand.com */
var prevhs;
function wbe_handler() {
	var hs = window.location.hash.slice(1)
	if (prevhs != hs) {
		if (parseInt(hs)) {
			document.getElementById('innhand_wbe').style.height=hs+'px';
		} else {
		  console.log("Can't parse height parameter");
		}
		prevhs = hs;
	}
	setTimeout(wbe_handler, 360);
}

function innhand_wbe_host_location() {
  var currentLocation = location.href;
  var hashIndex = currentLocation.indexOf('#');

  if (hashIndex > -1) {
    currentLocation = currentLocation.substring(0, hashIndex);
  }
  return currentLocation;
}

document.write("<iframe id='innhand_wbe' name='wbe' scrolling='no' width='70%' frameborder='0' style='visibility:hidden; min-height:60px;' onload='this.style.visibility=\"visible\";wbe_handler();'></iframe>");
document.getElementById('innhand_wbe').src = "http://app.innhand.com/wbe/accounts/1943?_innhand_session=16f3146e98a466d02f58b260feb56ed1&amp;f=1&ih_url="+escape(innhand_wbe_host_location());

