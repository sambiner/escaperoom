var click_counter = 0;
var audio = document.getElementById("audio");
function changeimg(el){ //This makes the images cycle for the 1st image
	if (el.src.match("images/alien_x.png") && document.getElementById("placeholder").innerHTML == "Alien X"){
		el.src = "images/big_chill.png"; //Changes the image to the next alien
		document.getElementById("placeholder").innerHTML = "Big Chill"; //Changes the text to signify the alien's name
	} else if (el.src.match("images/big_chill.png") && document.getElementById("placeholder").innerHTML == "Big Chill"){
		el.src = "images/brainstorm.png";
		document.getElementById("placeholder").innerHTML = "Brainstorm";
	} else if (el.src.match("images/brainstorm.png") && document.getElementById("placeholder").innerHTML == "Brainstorm"){
		el.src = "images/cannonbolt.png";
		document.getElementById("placeholder").innerHTML = "Cannonbolt";
	} else if (el.src.match("images/cannonbolt.png") && document.getElementById("placeholder").innerHTML == "Cannonbolt"){
		el.src = "images/chromastone.png";
		document.getElementById("placeholder").innerHTML = "Chromastone";
	} else if (el.src.match("images/chromastone.png") && document.getElementById("placeholder").innerHTML == "Chromastone"){
		el.src = "images/diamondhead.png";
		document.getElementById("placeholder").innerHTML = "Diamondhead";
	} else if (el.src.match("images/diamondhead.png") && document.getElementById("placeholder").innerHTML == "Diamondhead"){
		el.src = "images/echo_echo.png";
		document.getElementById("placeholder").innerHTML = "Echo Echo";
	} else if (el.src.match("images/echo_echo") && document.getElementById("placeholder").innerHTML == "Echo Echo"){
		el.src = "images/ghostfreak.png";
		document.getElementById("placeholder").innerHTML = "Ghostfreak";
	} else if (el.src.match("images/ghostfreak.png") && document.getElementById("placeholder").innerHTML == "Ghostfreak"){
		el.src = "images/goop.png";
		document.getElementById("placeholder").innerHTML = "Goop";
	} else if (el.src.match("images/goop.png") && document.getElementById("placeholder").innerHTML == "Goop"){
		el.src = "images/humungosaur.png";
		document.getElementById("placeholder").innerHTML = "Humungosaur";
	} else if (el.src.match("images/humungosaur.png") && document.getElementById("placeholder").innerHTML == "Humungosaur"){
		el.src = "images/jetray.png";
		document.getElementById("placeholder").innerHTML = "Jetray";
	} else if (el.src.match("images/jetray.png") && document.getElementById("placeholder").innerHTML == "Jetray"){
		el.src = "images/lodestar.png";
		document.getElementById("placeholder").innerHTML = "Lodestar";
	} else if (el.src.match("images/lodestar.png") && document.getElementById("placeholder").innerHTML == "Lodestar"){
		el.src = "images/nanomech.png";
		document.getElementById("placeholder").innerHTML = "Nanomech";
	} else if (el.src.match("images/nanomech.png") && document.getElementById("placeholder").innerHTML == "Nanomech"){
		el.src = "images/rath.png";
		document.getElementById("placeholder").innerHTML = "Rath";
	} else if (el.src.match("images/rath.png") && document.getElementById("placeholder").innerHTML == "Rath"){
		el.src = "images/spider_monkey.png";
		document.getElementById("placeholder").innerHTML = "Spider Monkey";
	} else if (el.src.match("images/spider_monkey.png") && document.getElementById("placeholder").innerHTML == "Spider Monkey"){
		el.src = "images/swampfire.png";
		document.getElementById("placeholder").innerHTML = "Swampfire";
	} else if (el.src.match("images/swampfire.png") && document.getElementById("placeholder").innerHTML == "Swampfire"){
		el.src = "images/upchuck.png";
		document.getElementById("placeholder").innerHTML = "Upchuck";
	} else if (el.src.match("images/upchuck.png") && document.getElementById("placeholder").innerHTML == "Upchuck"){
		el.src = "images/way_big.png";
		document.getElementById("placeholder").innerHTML = "Way Big";
	} else if (el.src.match("images/way_big.png") && document.getElementById("placeholder").innerHTML == "Way Big"){
		el.src = "images/alien_x.png";
		document.getElementById("placeholder").innerHTML = "Alien X";
	} else {
		//If none of the above terms apply then do nothing
	}
}
function changeimg1(el){ //This makes the images cycle for the 2nd image
	if (el.src.match("images/alien_x.png") && document.getElementById("placeholder1").innerHTML == "Alien X"){
		el.src = "images/big_chill.png"; //Changes the image to the next alien
		document.getElementById("placeholder1").innerHTML = "Big Chill"; //Changes the text to signify the alien's name
	} else if (el.src.match("images/big_chill.png") && document.getElementById("placeholder1").innerHTML == "Big Chill"){
		el.src = "images/brainstorm.png";
		document.getElementById("placeholder1").innerHTML = "Brainstorm";
	} else if (el.src.match("images/brainstorm.png") && document.getElementById("placeholder1").innerHTML == "Brainstorm"){
		el.src = "images/cannonbolt.png";
		document.getElementById("placeholder1").innerHTML = "Cannonbolt";
	} else if (el.src.match("images/cannonbolt.png") && document.getElementById("placeholder1").innerHTML == "Cannonbolt"){
		el.src = "images/chromastone.png";
		document.getElementById("placeholder1").innerHTML = "Chromastone";
	} else if (el.src.match("images/chromastone.png") && document.getElementById("placeholder1").innerHTML == "Chromastone"){
		el.src = "images/diamondhead.png";
		document.getElementById("placeholder1").innerHTML = "Diamondhead";
	} else if (el.src.match("images/diamondhead.png") && document.getElementById("placeholder1").innerHTML == "Diamondhead"){
		el.src = "images/echo_echo.png";
		document.getElementById("placeholder1").innerHTML = "Echo Echo";
	} else if (el.src.match("images/echo_echo") && document.getElementById("placeholder1").innerHTML == "Echo Echo"){
		el.src = "images/ghostfreak.png";
		document.getElementById("placeholder1").innerHTML = "Ghostfreak";
	} else if (el.src.match("images/ghostfreak.png") && document.getElementById("placeholder1").innerHTML == "Ghostfreak"){
		el.src = "images/goop.png";
		document.getElementById("placeholder1").innerHTML = "Goop";
	} else if (el.src.match("images/goop.png") && document.getElementById("placeholder1").innerHTML == "Goop"){
		el.src = "images/humungosaur.png";
		document.getElementById("placeholder1").innerHTML = "Humungosaur";
	} else if (el.src.match("images/humungosaur.png") && document.getElementById("placeholder1").innerHTML == "Humungosaur"){
		el.src = "images/jetray.png";
		document.getElementById("placeholder1").innerHTML = "Jetray";
	} else if (el.src.match("images/jetray.png") && document.getElementById("placeholder1").innerHTML == "Jetray"){
		el.src = "images/lodestar.png";
		document.getElementById("placeholder1").innerHTML = "Lodestar";
	} else if (el.src.match("images/lodestar.png") && document.getElementById("placeholder1").innerHTML == "Lodestar"){
		el.src = "images/nanomech.png";
		document.getElementById("placeholder1").innerHTML = "Nanomech";
	} else if (el.src.match("images/nanomech.png") && document.getElementById("placeholder1").innerHTML == "Nanomech"){
		el.src = "images/rath.png";
		document.getElementById("placeholder1").innerHTML = "Rath";
	} else if (el.src.match("images/rath.png") && document.getElementById("placeholder1").innerHTML == "Rath"){
		el.src = "images/spider_monkey.png";
		document.getElementById("placeholder1").innerHTML = "Spider Monkey";
	} else if (el.src.match("images/spider_monkey.png") && document.getElementById("placeholder1").innerHTML == "Spider Monkey"){
		el.src = "images/swampfire.png";
		document.getElementById("placeholder1").innerHTML = "Swampfire";
	} else if (el.src.match("images/swampfire.png") && document.getElementById("placeholder1").innerHTML == "Swampfire"){
		el.src = "images/upchuck.png";
		document.getElementById("placeholder1").innerHTML = "Upchuck";
	} else if (el.src.match("images/upchuck.png") && document.getElementById("placeholder1").innerHTML == "Upchuck"){
		el.src = "images/way_big.png";
		document.getElementById("placeholder1").innerHTML = "Way Big";
	} else if (el.src.match("images/way_big.png") && document.getElementById("placeholder1").innerHTML == "Way Big"){
		el.src = "images/alien_x.png";
		document.getElementById("placeholder1").innerHTML = "Alien X";
	} else {
		//If none of the above terms apply then do nothing
	}
}
function changeimg2(el){ //This makes the images cycle for the 3rd image
	if (document.getElementById("change3").src.match("images/alien_x.png") && document.getElementById("placeholder2").innerHTML == "Alien X"){
		el.src = "images/big_chill.png"; //Changes the image to the next alien
		document.getElementById("placeholder2").innerHTML = "Big Chill"; //Changes the text to signify the alien's name
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
		//If none of the above terms apply then do nothing
	}
}
function checkConfig(el){ //This check the configuration of the three main images to determine if you win
	if (document.getElementById("change1").src.match("images/big_chill.png") && document.getElementById("change2").src.match("images/echo_echo.png") && document.getElementById("change3").src.match("images/nanomech.png")){ //Gives one stipulation for the check configuration button 
		   document.getElementById("input1").classList.remove("hide");
		   document.getElementById("input").classList.add("hide");
		   document.getElementById("key").classList.remove("hide");
		   document.getElementById("input2").classList.add("hide");
	   } else if (document.getElementById("change1").src.match("images/brainstorm.png") && document.getElementById("change2").src.match("images/echo_echo.png") && document.getElementById("change3").src.match("images/nanomech.png")){ //Give another stipulation for the button
		  document.getElementById("input1").classList.remove("hide");
		  document.getElementById("input").classList.add("hide");
		  document.getElementById("key").classList.remove("hide");
		  document.getElementById("input2").classList.add("hide");
	   } else {
		   document.getElementById("input").classList.add("hide");
		   document.getElementById("input2").classList.remove("hide");
	   }
}
function earRape(el){ //This plays an extremely loud sound
	document.getElementById("audio").play();
}
function hideMe (el){ //This hides the corner pictures
	el.classList.add("hide"); //Adds hide class to each element this attribute is in
	click_counter++; //Adds number to click counter
	checkCounter(); //Checks click counter and automatically executes the checkCounter function if the requirements are met
}
function checkCounter(){ //This makes a button appear when all the corner images are clicked and hidden
	if (click_counter == 4){ //If the click counter is equal to 4 then remove the hide class on a specific button
		document.getElementById("ear-rape").classList.remove("hide");
	} else{
		//If none of the above terms apply then do nothing
	}
}
function winGame(el){ //This is what clicking the key does when you win
	document.getElementById("small-square1").classList.remove("black"); //These get specific elements so the function can target certain CSS classes inside those HTML elements
	document.getElementById("image").classList.add("hide");
	document.getElementById("filler1").classList.remove("black");
	document.getElementById("small-rectangle1").classList.remove("green");
	document.getElementById("key").classList.add("hide");
	document.getElementById("input1").classList.add("hide");
	document.getElementById("filler2").classList.remove("black");
	document.getElementById("check").classList.add("hide");
	document.getElementById("small-square2").classList.remove("black");
	document.getElementById("image1").classList.add("hide");
	document.getElementById("big-square1").classList.remove("black");
	document.getElementById("change1").classList.add("hide");
	document.getElementById("square1").classList.remove("black");
	document.getElementById("placeholder").classList.add("hide");
	document.getElementById("big-square2").classList.remove("black");
	document.getElementById("change2").classList.add("display");
	document.getElementById("square2").classList.remove("black");
	document.getElementById("placeholder1").classList.add("hide");
	document.getElementById("big-square3").classList.remove("black");
	document.getElementById("change3").classList.add("hide");
	document.getElementById("square3").classList.remove("black");
	document.getElementById("placeholder2").classList.add("hide");
	document.getElementById("small-square3").classList.remove("black");
	document.getElementById("image2").classList.add("hide");
	document.getElementById("filler3").classList.remove("black");
	document.getElementById("small-rectangle").classList.remove("green");
	document.getElementById("filler4").classList.remove("black");
	document.getElementById("small-square4").classList.remove("black");
	document.getElementById("image3").classList.add("hide");
	document.getElementById("blurb1").classList.add("hide");
	document.getElementById("remember").classList.remove("display");
	document.getElementById("theme").play();
	document.getElementById("ear-rape").classList.add("hide");
}