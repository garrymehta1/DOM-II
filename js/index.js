// 1. COPY EVENT LISTENER
document.body.addEventListener("copy", function() {
	prompt("You copied something! Do you want to share it with me? 😍");
});
//2. PASTE EVENT LISTENER
document.body.addEventListener("paste", function() {
	alert("You pasted something! 🚀");
});

//3. MOUSEOVER EVENT LISTENER
document.querySelector("h1.logo-heading").addEventListener("mouseover", function(event) {
	const { target } = event;
	target.classList.add("animationClass");
	setTimeout(function() {
		target.classList.remove("animationClass");
	}, 2000);
});

//4. ANIMATION START EVENT LISTENER
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

//5. MOUSEDOWN EVENT LISTENER
document.querySelector("header img").addEventListener("mousedown", function(event) {
	const { target } = event;
	target.classList.toggle("filterClass");
});

//6. KEYDOWN EVENT LISTENER
document.body.addEventListener("keydown", function() {
	document.querySelector("header").style.backgroundColor = "black";
	document.querySelector("header").style.color = "white";
	document.querySelectorAll(".nav-link").forEach(el => {
		el.style.color = "white";
	});
});

//7. DBLCLICK EVENT LISTENER
document.querySelectorAll("h4").forEach(el => {
	el.addEventListener("dblclick", function() {
		el.style.backgroundColor = "blue";
		el.style.color = "pink";
	});
});

//8. RESIZE EVENT LISTENER
document.defaultView.addEventListener("resize", function() {
	document.querySelectorAll(".btn").forEach(el => {
		el.style.backgroundColor = "green";
	});
});

//9. DRAG EVENT LISTENER

document.querySelectorAll("img").forEach(el => {
	el.addEventListener("drag", function(event) {
		const { target } = event;
		target.style.display = "none";
	});
});

//10. CLICK EVENT
document.querySelectorAll(".nav-link").forEach(el => {
	el.addEventListener("click", function(event) {
		const { target } = event;
		target.style.fontWeight = "bold";
	});
});

//PREVENT DEFAULT
document.querySelectorAll(".nav-link").forEach(el => {
	el.addEventListener("click", function(event) {
		event.preventDefault();
	});
});

//PROPAGATION
document.querySelector(".footer p").addEventListener("click", function(event) {
	const { target } = event;
	target.style.color = "green";
	event.stopPropagation();
});

document.querySelector("footer").addEventListener("click", function(event) {
	const { target } = event;
	target.style.backgroundColor = "yellow";
});

//STRETCH GOAL ANIMATION
document.querySelector("h1.logo-heading").addEventListener("click", function() {
	TweenMax.to("#littleImg", 8, { right: 2000 });
});
