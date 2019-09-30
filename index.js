window.onload =()=> {
	if (typeof(browser) == undefined){
		console.log("no storage mechanism")
		return
	}

	var input = document.getElementById("input")
	var setbtn = document.getElementById("setbtn")
	var getbtn = document.getElementById("getbtn")
	var clear = document.getElementById("clear")
	var history = document.getElementById("history")


	if (localStorage.getItem("hist_xxx") == null) {
		var empty_hist = document.createElement('div') 
		empty_hist.innerHTML = "no prev data"
		history.appendChild(empty_hist)
	} else {
		while (history.firstChild){
			history.removeChild(history.firstChild)
		}
		var hist =  localStorage.getItem("hist_xxx").split(",")
		for (var i=hist.length-1;i>0;i--){
			var div = document.createElement('div')
			div.innerHTML = "<a href=http://www.google.com/search?q="+hist[i]+">"+hist[i]+"</a>"
			history.appendChild(div)
		}
	}
	
	setbtn.onclick =()=>{	 
		var prev_hist = localStorage.getItem("hist_xxx")
		localStorage.setItem("hist_xxx",prev_hist +","+input.value)
		window.location = "http://www.google.com/search?q=" + input.value	 
	}

	getbtn.onclick =()=>{	 
		while (history.firstChild){
			history.removeChild(history.firstChild)
		}
		var hist =  localStorage.getItem("hist_xxx").split(",")
		for (var i=hist.length-1;i>0;i--){
			var div = document.createElement('div')
			div.innerHTML = "<a href=http://www.google.com/search?q="+hist[i]+">"+hist[i]+"</a>"
			history.appendChild(div)
		}
	}	
 
	clear.onclick =()=>{
		localStorage.removeItem("hist_xxx")
		getbtn.click()
	}
}

