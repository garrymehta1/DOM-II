//COPY EVENT LISTENER
document.body.addEventListener("copy", function() {
	prompt("You copied something! Do you want to share it with me? 😍");
});
//PASTE EVENT LISTENER
document.body.addEventListener("paste", function() {
	alert("You pasted something! 🚀");
});

//MOUSEOVER EVENT LISTENER
document.querySelector("h1.logo-heading").addEventListener("mouseover", function(eventInfo) {
	const { target } = eventInfo;
	target.classList.add("animationClass");
	setTimeout(function() {
		target.classList.remove("animationClass");
	}, 2000);
});

//ANIMATION START EVENT LISTENER
document.querySelector("h1.logo-heading").addEventListener("animationstart", function() {
	console.log("bla");
	document.querySelectorAll(".nav-link")[0].style.color = "blue";
	document.querySelectorAll(".nav-link")[1].style.color = "yellow";
	document.querySelectorAll(".nav-link")[2].style.color = "red";
	document.querySelectorAll(".nav-link")[3].style.color = "green";
	setTimeout(function() {
		document.querySelectorAll(".nav-link").forEach(el => {
			el.style.color = "black";
		});
	}, 2000);
});

//MOUSEDOWN EVENT LISTENER
document.querySelector("header img").addEventListener("mousedown", function(eventInfo) {
	const { target } = eventInfo;
	target.classList.toggle("filterClass");
});

//KEYDOWN EVENT LISTENER
document.body.addEventListener("keydown", function() {
	document.querySelector("header").style.backgroundColor = "black";
	document.querySelector("header").style.color = "white";
	document.querySelectorAll(".nav-link").forEach(el => {
		el.style.color = "white";
	});
});

//DBLCLICK EVENT LISTENER
document.querySelectorAll("h4").forEach(el => {
	el.addEventListener("dblclick", function() {
		el.style.backgroundColor = "blue";
		el.style.color = "pink";
	});
});
