function oldremove(el){
	var pn = el.parentNode;
	pn.removeChild(el);
	return pn;
}
if (window.innerHeight==176 && window.innerWidth==240){
	//alert("ds user");
	const DAMN = {Home: "/", Games: "/games/", Gallery: "/gallery/", Contact: "/contact/"}
	var j = document.getElementById("styleshot");
	var pn = oldremove(j);
	var newstyle = document.createElement("link");
	newstyle.rel = "stylesheet";
	newstyle.href = "/style2.css";
	pn.appendChild(newstyle);
	window.onload = function() {
		var joe = document.getElementById("navba");
		pn = oldremove(joe);
		var newnav = document.createElement("table");
		pn.appendChild(newnav);
		var ftr = document.createElement("tr");
		newnav.appendChild(ftr);
		for (var key in DAMN) {
			var link = document.createElement("td");
			ftr.appendChild(link);
			var a = document.createElement("a");
			a.innerHTML = key;
			a.href = DAMN[key];
			link.appendChild(a);
		}
		if (document.getElementById("renders")){
			document.getElementById("renders").childNodes.forEach(function(hi){
				hi.firstElementChild.childNodes[0].width = 100;
				hi.firstElementChild.childNodes[0].height = 100;
			})
			var vb = document.getElementById("videobox");
			pn = oldremove(vb);
			var lv = document.createElement("img");
			lv.src = "/media/lowvid.gif";
			pn.appendChild(lv);
		}
	};
}