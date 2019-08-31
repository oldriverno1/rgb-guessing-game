var numSquares = 6;
var colors = generateRandomColors(numSquares);
var resetBtn = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modeBtns = document.querySelectorAll(".mode");

for(var i = 0 ; i < modeBtns.length ; i++){
	modeBtns[i].addEventListener("click",function(){
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent == "easy"){
			numSquares = 3;
		}
		else{
			numSquares = 6;
		}
		reset_();
	})
}



function reset_(){
	//generate new colors
	colors =generateRandomColors(numSquares);
	//pick new coor from array
	pickedColor = pickColor();
	//change color display to match
	colorDisplay.textContent = pickedColor;
	//reflect new color on squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background =colors[i];
		}
		else{
			squares[i].style.display ="none";
		}
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor ="steelblue";
	messageDisplay.textContent = "";
	resetBtn.textContent = "new colors"

}

// easyBtn.addEventListener("click",function(){
// 	numSquares = 3;
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	colors =generateRandomColors(numSquares);
// 	pickedColor =pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click",function(){
// 	numSquares = 6;
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	colors =generateRandomColors(numSquares);
// 	pickedColor =pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i<squares.length;i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 		}
// 	}
// )

colorDisplay.textContent = pickedColor;
resetBtn.addEventListener("click",function(){
	reset_();
})

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetBtn.textContent = "play again?"
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
