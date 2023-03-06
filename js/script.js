//collego gli elementi html con javascript

let startGame = document.getElementById("start-game");

let gridContainer = document.getElementById("grid-container");

let difficultChoose; 


//memorizzo numero totale square


//creo il funzionamento del tasto start

startGame.addEventListener("click", function(){

    difficultChoose = document.getElementById("difficult-choose").value;

    gridContainer.innerHTML = "";

    if(difficultChoose == "choose") {
        alert("Scegli una difficoltà!")
    } else if (difficultChoose == "hard") {

        document.getElementById("grid-container").style.display = "flex";
        
        //creo un array di numeri random equivalenti alle bombe

        let bombArray = [];

        while(bombArray.length < 16) {

            let randomNumber = randomNumberGenerator(1, 100);
        
            if(!bombArray.includes(randomNumber)) {
                bombArray.push(randomNumber);
            }
        }

        //creo le caselle
    
        for (let i = 1; i < 101; i++) {
            
            let square = document.createElement("div");
        
            square.classList.add("hard-square", "square");


            //aggiungo la classe al container

            gridContainer.classList.add("grid-container-hard", "grid-container")

            gridContainer.classList.remove("grid-container-easy")

            gridContainer.classList.remove("grid-container-medium")
    
            //appendo le caselle al suo contenitore 
    
            gridContainer.append(square);
    
            //assegno ad ogni square un numero da uno a 100
    
            square.innerText = i;
    
            //aggiungo background al click agli square
            
            square.addEventListener("click", function(){
                if (bombArray.includes(parseInt(square.innerText))) {
                    square.classList.add("bomb");
                } else {
                    square.classList.add("colorBackground");
                }
            })
        }
    }  else if (difficultChoose == "medium") {

        document.getElementById("grid-container").style.display = "flex";

        
        //creo un array di numeri random equivalenti alle bombe

        let bombArray = [];

        while(bombArray.length < 16) {

            let randomNumber = randomNumberGenerator(1, 81);
        
            if(!bombArray.includes(randomNumber)) {
                bombArray.push(randomNumber);
            }
        }

        //creo le caselle
    
        for (let i = 1; i < 82; i++) {
            
            let square = document.createElement("div");
        
            square.classList.add("medium-square", "square");

            //aggiungo la classe al container

            gridContainer.classList.remove("grid-container-easy")

            gridContainer.classList.add("grid-container-medium",  "grid-container")

            gridContainer.classList.remove("grid-container-hard")
    
            //appendo le caselle al suo contenitore 
    
            gridContainer.append(square);
    
            //assegno ad ogni square un numero da uno a 100
    
            square.innerText = i;
    
            //aggiungo background al click agli square
            
            square.addEventListener("click", function(){
                if (bombArray.includes(parseInt(square.innerText))) {
                    square.classList.add("bomb");
                } else {
                    square.classList.add("colorBackground");
                }
                console.log(square.innerText)
            })
        }
    } else if (difficultChoose == "easy") {

        document.getElementById("grid-container").style.display = "flex";

        //creo un array di numeri random equivalenti alle bombe

        let bombArray = [];

        while(bombArray.length < 16) {

            let randomNumber = randomNumberGenerator(1, 50);
        
            if(!bombArray.includes(randomNumber)) {
                bombArray.push(randomNumber);
            }
        }
        console.log(bombArray);
         
        //creo le caselle
    
        for (let i = 1; i < 50; i++) {
            
            let square = document.createElement("div");
        
            square.classList.add("easy-square", "square");

            //aggiungo la classe al container

            gridContainer.classList.add("grid-container-easy",  "grid-container")

            gridContainer.classList.remove("grid-container-medium")

            gridContainer.classList.remove("grid-container-hard")
    
            //appendo le caselle al suo contenitore 
    
            gridContainer.append(square);
    
            //assegno ad ogni square un numero da uno a 100
    
            square.innerText = i;
    
            //aggiungo background al click agli square
            
            square.addEventListener("click", function(){

                if (bombArray.includes(parseInt(square.innerText))) {
                    square.classList.add("bomb");
                } else {
                    square.classList.add("colorBackground");
                }
                console.log(square.innerText)
            });
        }

    } 

    //creo una funzione che mi genera un numero random
    
    function randomNumberGenerator(min, max) {
        
      let random = Math.floor(Math.random() * (max - min + 1) + min)

      return random;
    }

});