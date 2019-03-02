var click_counter = 0;
var audio = document.getElementById("audio");

function changeimg(el){ //This makes the images cycle for the 1st image
	if (el.src.match("images/alien_x.png")){
		el.src = "images/big_chill.png";
	} else if (el.src.match("images/big_chill.png")){
		el.src = "images/brainstorm.png";
	} else if (el.src.match("images/brainstorm.png")){
		el.src = "images/cannonbolt.png";
	} else if (el.src.match("images/cannonbolt.png")){
		el.src = "images/chromastone.png";
	} else if (el.src.match("images/chromastone.png")){
		el.src = "images/diamondhead.png";
	} else if (el.src.match("images/diamondhead.png")){
		el.src = "images/echo_echo.png";
	} else if (el.src.match("images/echo_echo")){
		el.src = "images/ghostfreak.png";
	} else if (el.src.match("images/ghostfreak.png")){
		el.src = "images/goop.png";
	} else if (el.src.match("images/goop.png")){
		el.src = "images/humungosaur.png";
	} else if (el.src.match("images/humungosaur.png")){
		el.src = "images/jetray.png";
	} else if (el.src.match("images/jetray.png")){
		el.src = "images/lodestar.png";
	} else if (el.src.match("images/lodestar.png")){
		el.src = "images/nanomech.png";
	} else if (el.src.match("images/nanomech.png")){
		el.src = "images/rath.png";
	} else if (el.src.match("images/rath.png")){
		el.src = "images/spider_monkey.png";
	} else if (el.src.match("images/spider_monkey.png")){
		el.src = "images/swampfire.png";
	} else if (el.src.match("images/swampfire.png")){
		el.src = "images/upchuck.png";
	} else if (el.src.match("images/upchuck.png")){
		el.src = "images/way_big.png";
	} else if (el.src.match("images/way_big.png")){
		el.src = "images/alien_x.png";
	} else {
		//do nothing
	}
}
function changeimg1(el){ //This makes the images cycle for the 2nd image
	if (el.src.match("images/alien_x.png")){
		el.src = "images/big_chill.png";
	} else if (el.src.match("images/big_chill.png")){
		el.src = "images/brainstorm.png";
	} else if (el.src.match("images/brainstorm.png")){
		el.src = "images/cannonbolt.png";
	} else if (el.src.match("images/cannonbolt.png")){
		el.src = "images/chromastone.png";
	} else if (el.src.match("images/chromastone.png")){
		el.src = "images/diamondhead.png";
	} else if (el.src.match("images/diamondhead.png")){
		el.src = "images/echo_echo.png";
	} else if (el.src.match("images/echo_echo")){
		el.src = "images/ghostfreak.png";
	} else if (el.src.match("images/ghostfreak.png")){
		el.src = "images/goop.png";
	} else if (el.src.match("images/goop.png")){
		el.src = "images/humungosaur.png";
	} else if (el.src.match("images/humungosaur.png")){
		el.src = "images/jetray.png";
	} else if (el.src.match("images/jetray.png")){
		el.src = "images/lodestar.png";
	} else if (el.src.match("images/lodestar.png")){
		el.src = "images/nanomech.png";
	} else if (el.src.match("images/nanomech.png")){
		el.src = "images/rath.png";
	} else if (el.src.match("images/rath.png")){
		el.src = "images/spider_monkey.png";
	} else if (el.src.match("images/spider_monkey.png")){
		el.src = "images/swampfire.png";
	} else if (el.src.match("images/swampfire.png")){
		el.src = "images/upchuck.png";
	} else if (el.src.match("images/upchuck.png")){
		el.src = "images/way_big.png";
	} else if (el.src.match("images/way_big.png")){
		el.src = "images/alien_x.png";
	} else {
		//do nothing
	}
}
function changeimg2(el){ //This makes the images cycle for the 3rd image
	if (document.getElementById("change3").src.match("images/alien_x.png") && document.getElementById("placeholder2").innerHTML == "Alien X"){
		el.src = "images/big_chill.png";
		document.getElementById("placeholder2").innerHTML = "Big Chill";
	} else if (el.src.match("images/big_chill.png") && document.getElementById("placeholder2").innerHTML == "Big Chill"){
		el.src = "images/brainstorm.png";
		document.getElementById("placeholder2").innerHTML = "Brainstorm";
	} else if (el.src.match("images/brainstorm.png") && document.getElementById("placeholder2").innerHTML == "Brainstorm"){
		el.src = "images/cannonbolt.png";
		document.getElementById("placeholder2").innerHTML = "Cannonbolt";
	} else if (el.src.match("images/cannonbolt.png") && document.getElementById("placeholder2").innerHTML == "Cannonbolt"){
		el.src = "images/chromastone.png";
		document.getElementById("placeholder2").innerHTML = "Chromastone";
	} else if (el.src.match("images/chromastone.png") && document.getElementById("placeholder2").innerHTML == "Chromastone"){
		el.src = "images/diamondhead.png";
		document.getElementById("placeholder2").innerHTML = "Diamondhead";
	} else if (el.src.match("images/diamondhead.png") && document.getElementById("placeholder2").innerHTML == "Diamondhead"){
		el.src = "images/echo_echo.png";
		document.getElementById("placeholder2").innerHTML = "Echo Echo";
	} else if (el.src.match("images/echo_echo") && document.getElementById("placeholder2").innerHTML == "Echo Echo"){
		el.src = "images/ghostfreak.png";
		document.getElementById("placeholder2").innerHTML = "Ghostfreak";
	} else if (el.src.match("images/ghostfreak.png") && document.getElementById("placeholder2").innerHTML == "Ghostfreak"){
		el.src = "images/goop.png";
		document.getElementById("placeholder2").innerHTML = "Goop";
	} else if (el.src.match("images/goop.png") && document.getElementById("placeholder2").innerHTML == "Goop"){
		el.src = "images/humungosaur.png";
		document.getElementById("placeholder2").innerHTML = "Humungosaur";
	} else if (el.src.match("images/humungosaur.png") && document.getElementById("placeholder2").innerHTML == "Humungosaur"){
		el.src = "images/jetray.png";
		document.getElementById("placeholder2").innerHTML = "Jetray";
	} else if (el.src.match("images/jetray.png") && document.getElementById("placeholder2").innerHTML == "Jetray"){
		el.src = "images/lodestar.png";
		document.getElementById("placeholder2").innerHTML = "Lodestar";
	} else if (el.src.match("images/lodestar.png") && document.getElementById("placeholder2").innerHTML == "Lodestar"){
		el.src = "images/nanomech.png";
		document.getElementById("placeholder2").innerHTML = "Nanomech";
	} else if (el.src.match("images/nanomech.png") && document.getElementById("placeholder2").innerHTML == "Nanomech"){
		el.src = "images/rath.png";
		document.getElementById("placeholder2").innerHTML = "Rath";
	} else if (el.src.match("images/rath.png") && document.getElementById("placeholder2").innerHTML == "Rath"){
		el.src = "images/spider_monkey.png";
		document.getElementById("placeholder2").innerHTML = "Spider Monkey";
	} else if (el.src.match("images/spider_monkey.png") && document.getElementById("placeholder2").innerHTML == "Spider Monkey"){
		el.src = "images/swampfire.png";
		document.getElementById("placeholder2").innerHTML = "Swampfire";
	} else if (el.src.match("images/swampfire.png") && document.getElementById("placeholder2").innerHTML == "Swampfire"){
		el.src = "images/upchuck.png";
		document.getElementById("placeholder2").innerHTML = "Upchuck";
	} else if (el.src.match("images/upchuck.png") && document.getElementById("placeholder2").innerHTML == "Upchuck"){
		el.src = "images/way_big.png";
		document.getElementById("placeholder2").innerHTML = "Way Big";
	} else if (el.src.match("images/way_big.png") && document.getElementById("placeholder2").innerHTML == "Way Big"){
		el.src = "images/alien_x.png";
		document.getElementById("placeholder2").innerHTML = "Alien X";
	} else {
		//do nothing
	}
}

function checkConfig(el){
	if (document.getElementById("change1").src.match("images/big_chill.png") && document.getElementById("change2").src.match("images/echo_echo.png") && document.getElementById("change3").src.match("images/nanomech.png")){
		   document.getElementById("input1").classList.remove("hide");
		   document.getElementById("input").classList.add("hide");
		   document.getElementById("key").classList.remove("hide");
	   } else if (document.getElementById("change1").src.match("images/brainstorm.png") && document.getElementById("change2").src.match("images/echo_echo.png") && document.getElementById("change3").src.match("images/nanomech.png")){
		  document.getElementById("input1").classList.remove("hide");
		  document.getElementById("input").classList.add("hide");
		  document.getElementById("key").classList.remove("hide");
	   } else {
		   
	   }
}

function earRape(el){
	document.getElementById("audio").play();
}

function hideMe (el){
	el.classList.add("hide");
	click_counter++;
	checkCounter();
}

function checkCounter(){
	if (click_counter == 4){
		document.getElementById("ear-rape").classList.remove("hide");
	} else{
		
	}
}