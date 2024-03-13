let rejouerButton = document.createElement("button");
let score = 0;
let toWin = 0;

document.getElementById("play").addEventListener("click", function game() {
	const scoreDisplay = document.getElementById("score");
	const width = 28; // 28*28 = 784 cases
	const grid = document.querySelector(".grid")
	const layout = [
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,
		1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,
		1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,
		1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,
		1,1,1,1,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1,1,1,1,1,
		1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,
		1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,
		1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,
		1,1,1,1,1,0,3,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,
		1,1,1,1,1,0,0,0,0,1,1,0,2,2,0,0,0,0,0,0,0,0,0,1,1,1,1,1,
		1,1,1,1,1,0,0,0,0,1,1,0,2,2,3,0,0,0,0,0,0,0,0,1,1,1,1,1,
		1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,
		1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,
		1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,3,0,1,1,1,1,1,1,
		1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,
		1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,
		1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,
		1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,
		1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,
		1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,
		1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
			];      


	// 0 = pac-dot ; 1 = mur ; 2 = ghost-spawn ; 3 = framboise ; 4 = empty;
	const squares = [];


// Dessine le grid
	function createBoard() {
		for (let i = 0; i < layout.length ; i++){
			const square = document.createElement("div");
			grid.appendChild(square);
			squares.push(square);

		// Ajout des classes au plateau
			if (layout[i] === 0) {
				squares[i].classList.add("pac-dot");
			} else if (layout[i] === 1) {
				squares[i].classList.add("mur");
			} else if (layout[i] === 2) {
				squares[i].classList.add("ghost-spawn");
			} else if (layout[i] === 3) {
				squares[i].classList.add("framboise");
			} else if (layout[i] === 4) {
				squares[i].classList.add("empty");
			}
		}
	}
	createBoard();
	
// Meilleur score joueur
	function bestScoreCount () {
		let higher;
		let bestScore = window.localStorage.getItem(higher);
		window.localStorage.setItem(bestScore, higher);
		const bestScoreDisplay = document.getElementById("bestScore");
		if (bestScore == null) {
			bestScore = score;
			window.localStorage.setItem(higher, bestScore);
		} else if (score < Number(window.localStorage.getItem(higher))) {
			bestScore = score;	
		} else if (score > Number(window.localStorage.getItem(higher))) {
			window.localStorage.clear();
			bestScore = score;
			window.localStorage.setItem(higher, bestScore);
		}
		bestScoreDisplay.innerHTML = window.localStorage.getItem(higher);
	}
	bestScoreCount();
	
// Position de départ de Pac-Man
	let pacmanCurrentIndex = 518;
	squares[pacmanCurrentIndex].classList.add("pac-man");

// Mouvements de Pac-Man
	function movePacman (e) {
		squares[pacmanCurrentIndex].classList.remove("pac-man");
		switch(e.keyCode){
			case 37:
				if (pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex -1].classList.contains("mur") && !squares[pacmanCurrentIndex -1].classList.contains("ghost-spawn")) {
					pacmanCurrentIndex -=1;
					squares[pacmanCurrentIndex].style.transform = "scaleX(-1) rotate(95deg)";
					// Si Pac-Man est sur la sortie de gauche
					if (pacmanCurrentIndex - 1 === 363) {
						pacmanCurrentIndex = 391;
				}}
				break;
			case 38:
				if (pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - width].classList.contains("mur") && !squares[pacmanCurrentIndex - width].classList.contains("ghost-spawn")) { 
          pacmanCurrentIndex -= width;
					squares[pacmanCurrentIndex].style.transform = "scaleY(1)";
				}
				break;
			case 39:
				if (pacmanCurrentIndex % width < width - 1 && !squares[pacmanCurrentIndex +1].classList.contains("mur") && !squares[pacmanCurrentIndex +1].classList.contains("ghost-spawn")){ 
          pacmanCurrentIndex += 1;
					squares[pacmanCurrentIndex].style.transform = "scaleY(1) rotate(95deg)";
					// Si Pac-Man est sur la sortie de droite
					if(pacmanCurrentIndex + 1 === 392) {
						pacmanCurrentIndex = 364;
				}}
				break;
			case 40:
				if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + width].classList.contains("mur") && !squares[pacmanCurrentIndex + width].classList.contains("ghost-spawn")) {
					pacmanCurrentIndex += width;
					squares[pacmanCurrentIndex].style.transform = "rotate(190deg)";
				}
				break;
		}

		squares[pacmanCurrentIndex].classList.add("pac-man");

		pacDotMangee();
		framboiseMangee();
		checkForGameOver();
		checkForWin();
	}

	document.addEventListener("keydown", movePacman);
  
//   Mouvements de Pac-Man sur mobile
  var initialX = null;
	var initialY = null;

	function startTouch (e) {
		initialX = e.touches[0].clientX;
		initialY = e.touches[0].clientY;
	} 
	
	function moveTouch (e) {
		
		if (initialX === null){
			return;
		}
		if (initialY === null){
			return;
		}
		
		var currentX = e.touches[0].clientX;
		var currentY = e.touches[0].clientY;
		var diffX = initialX - currentX;
		var diffY = initialY - currentY;
    
		squares[pacmanCurrentIndex].classList.remove("pac-man");
    
		if (Math.abs(diffX) > Math.abs(diffY)){
			if (diffX > 0) {
				// Swipe gauche
        if (pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex -1].classList.contains("mur") && !squares[pacmanCurrentIndex -1].classList.contains("ghost-spawn")) {
					pacmanCurrentIndex -=1;
					squares[pacmanCurrentIndex].style.transform = "scaleX(-1) rotate(95deg)";
					// Si Pac-Man est sur la sortie de gauche
					if (pacmanCurrentIndex - 1 === 363) {
						pacmanCurrentIndex = 391;
				}}
			} else {
				// Swipe Droite
				if (pacmanCurrentIndex % width < width - 1 && !squares[pacmanCurrentIndex +1].classList.contains("mur") && !squares[pacmanCurrentIndex +1].classList.contains("ghost-spawn")){ pacmanCurrentIndex += 1;
					squares[pacmanCurrentIndex].style.transform = "scaleY(1) rotate(95deg)";
					// Si Pac-Man est sur la sortie de droite
					if(pacmanCurrentIndex + 1 === 392) {
						pacmanCurrentIndex = 364;
				}}
			}
		} else {
			if (diffY > 0){
				// Swipe Up
				if (pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - width].classList.contains("mur") && !squares[pacmanCurrentIndex - width].classList.contains("ghost-spawn")) { pacmanCurrentIndex -= width;
					squares[pacmanCurrentIndex].style.transform = "scaleY(1)";
				}
			} else {
				// Swipe Down
				if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + width].classList.contains("mur") && !squares[pacmanCurrentIndex + width].classList.contains("ghost-spawn")) {
					pacmanCurrentIndex += width;
					squares[pacmanCurrentIndex].style.transform = "rotate(190deg)";
				}
			}
		}
			squares[pacmanCurrentIndex].classList.add("pac-man");
		initialX = null;
		initialY = null;
		
		e.preventDefault();
	

		pacDotMangee();
		framboiseMangee();
		checkForGameOver();
		checkForWin();
		
	}
	
	document.querySelector(".grid").addEventListener("touchstart", startTouch, false);
	document.querySelector(".grid").addEventListener("touchmove", moveTouch, false);
  
  

// Quand Pac-Man mange un Pac-dot
	function pacDotMangee() {
		if (squares[pacmanCurrentIndex].classList.contains("pac-dot")){
			score++;
			toWin++;
			squares[pacmanCurrentIndex].classList.remove("pac-dot");
		}
		scoreDisplay.innerHTML = score;
	}

// Quand Pac-Man mange une framboise
		function framboiseMangee () {
			if (squares[pacmanCurrentIndex].classList.contains("framboise")) {
				score += 10;
				toWin += 10;
				ghosts.forEach(ghost => ghost.isScared = true);
				setTimeout(unScareGhosts, 7000);
				squares[pacmanCurrentIndex].classList.remove("framboise");
			}
			scoreDisplay.innerHTML = score;
		}


// Classe Ghost
	class Ghost {
		constructor(className, startIndex, speed){
			this.className = className;
			this.startIndex = startIndex;
			this.speed = speed;
			this.currentIndex = startIndex;
			this.timerId = NaN;
			this.isScared = false;
		}
	}

	const ghosts = [
		new Ghost("blinky", 348, 290),
		new Ghost("pinky", 376, 380),
		new Ghost("inky", 351, 200),
		new Ghost("clyde", 379, 250)
	]
		
// Redonne la couleur aux fantômes
	function unScareGhosts () {ghosts.forEach(ghost => ghost.isScared = false)}
	
		
// Dessine les fantômes sur le grid
	ghosts.forEach(ghost => {
		squares[ghost.currentIndex].classList.add(ghost.className);
		squares[ghost.currentIndex].classList.add("ghost");
	})

// Mouvements des fantômes
	ghosts.forEach(ghost => moveGhost(ghost));

	function moveGhost (ghost) {
		const directions = [-1, +1, width, -width];
		let direction = directions[Math.floor(Math.random() * directions.length)];
		ghost.timerId = setInterval(function () {
			if (!squares[ghost.currentIndex + direction].classList.contains("ghost") && !squares[ghost.currentIndex + direction].classList.contains("mur")) {
				squares[ghost.currentIndex].classList.remove(ghost.className);
				squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
				ghost.currentIndex += direction;
				squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
			} else if (ghost.currentIndex - 1 === 363) {
				squares[ghost.currentIndex].classList.remove(ghost.className, "ghost");
				ghost.currentIndex = 391;
				squares[ghost.currentIndex].classList.add("ghost");
			} else if (ghost.currentIndex + 1 === 392) {
				squares[ghost.currentIndex].classList.remove(ghost.className, "ghost");
				ghost.currentIndex = 364;
				squares[ghost.currentIndex].classList.add("ghost");
			} else {
				direction = directions[Math.floor(Math.random() * directions.length)]
			}

			
			if (ghost.isScared) {
				squares[ghost.currentIndex].classList.add("scared-ghost");
			}

			if (squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
				squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost");
				ghost.currentIndex = ghost.startIndex;
				score += 100;
				scoreDisplay.innerHTML = score;
				squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
			}
				
			checkForGameOver();
			
		}, ghost.speed)
	}

// Check si la partie est game over
	function checkForGameOver () {
		if (squares[pacmanCurrentIndex].classList.contains("ghost") && !squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
			ghosts.forEach(ghost => clearInterval(ghost.timerId));
			document.removeEventListener("keydown", movePacman);
			bestScoreCount();
			scoreDisplay.innerHTML = score;
			let gameOver = document.createElement("div");
			gameOver.classList.add("gameOver");
			document.body.append(gameOver);
			rejouerButton.classList.add("rejouer");
			document.body.append(rejouerButton);
			document.getElementById("play").removeEventListener("click", game);
			rejouerButton.addEventListener("click", () => {window.location.reload(false)})				
		}	
	}

// Check si la partie est win
function checkForWin () {
		if (toWin === 372) {
			ghosts.forEach(ghost => clearInterval(ghost.timerId));
			document.removeEventListener("keydown", movePacman);
			bestScoreCount();
			scoreDisplay.innerHTML = score;
			let youWon = document.createElement("div");
			youWon.classList.add("won");
			document.body.append(youWon);
			rejouerButton.classList.add("rejouer");
			document.body.append(rejouerButton);
			document.getElementById("play").removeEventListener("click", game);
			rejouerButton.addEventListener("click", () => {window.location.reload(false)})
		}
	}
}) 