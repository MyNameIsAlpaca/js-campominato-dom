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
                //seleziono tutti gli square
    
                let squareSelector = document.getElementsByClassName('square');
                
                if (bombArray.includes(parseInt(square.innerText))) {

                    square.classList.add("bomb");

                    for(ia = 0; ia < 16; ia++) {
                        
                        squareSelector[parseInt(bombArray[ia] - 1)].classList.add("bomb");

                    }

                } else {
                    square.classList.add("colorBackground");
                }
            }, {once : true});
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
                //seleziono tutti gli square
    
                let squareSelector = document.getElementsByClassName('square');
                
                if (bombArray.includes(parseInt(square.innerText))) {

                    square.classList.add("bomb");

                    for(ia = 0; ia < 16; ia++) {
                        
                        squareSelector[parseInt(bombArray[ia] - 1)].classList.add("bomb");

                    }

                } else {
                    square.classList.add("colorBackground");
                }
            }, {once : true});
        }
    } else if (difficultChoose == "easy") {

        document.getElementById("grid-container").style.display = "flex";

        //creo un array di numeri random equivalenti alle bombe

        let bombArray = [];

        while(bombArray.length < 16) {

            let randomNumber = randomNumberGenerator(1, 49);
        
            if(!bombArray.includes(randomNumber)) {
                bombArray.push(randomNumber);
            }
        }

        //creo le caselle
        
        for (let i = 0; i < 49; i++) {
    
            let square = document.createElement("div");
        
            square.classList.add("easy-square", "square");

            //aggiungo la classe al container

            gridContainer.classList.add("grid-container-easy",  "grid-container")

            gridContainer.classList.remove("grid-container-medium")

            gridContainer.classList.remove("grid-container-hard")
    
            //appendo le caselle al suo contenitore 
    
            gridContainer.append(square);
    
            //assegno ad ogni square un numero da uno a 100
    
            square.innerText = i + 1;

            
            //aggiungo background al click agli square
            
            square.addEventListener("click", function(){
                //seleziono tutti gli square
    
                let squareSelector = document.getElementsByClassName('square');
                
                if (bombArray.includes(parseInt(square.innerText))) {

                    square.classList.add("bomb");

                    for(ia = 0; ia < 16; ia++) {
                        
                        squareSelector[parseInt(bombArray[ia] - 1)].classList.add("bomb");

                    }

                } else {
                    square.classList.add("colorBackground");
                }
            }, {once : true});
            
        }


    } 

    //creo una funzione che mi genera un numero random
    
    function randomNumberGenerator(min, max) {
        
      let random = Math.floor(Math.random() * (max - min + 1) + min)

      return random;
    }

});