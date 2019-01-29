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

//KEYDOWN EVENT LISTENER
document.body.addEventListener("keydown", function() {
	document.querySelector("header").style.backgroundColor = "black";
	document.querySelector("header").style.color = "white";
	document.querySelectorAll(".nav-link").forEach(el => {
		el.style.color = "white";
	});
});

//SELECT EVENT LISTENER
document.querySelectorAll("h4").forEach(el => {
	el.addEventListener("dblclick", function() {
		el.style.backgroundColor = "blue";
		el.style.color = "pink";
	});
});
