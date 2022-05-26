
let generate = () => {
    let mytable = document.querySelector("table");
    mytable.innerHTML = "";
  let numRow = document.getElementById("number-row").value;
  let numCol = document.getElementById("number-col").value;
  
    if(numRow > 0 && numCol > 0){
        for(let i = 0 ; i<numRow; i++){
            let mytr = document.createElement("tr");
            mytable.appendChild(mytr);
        
            for(let i =0 ; i<numCol ; i++){
                let mytd = document.createElement("td");
                mytd.innerHTML = generateRandomNumber();
                mytable.appendChild(mytd);
              }
          }

          resetinput();
    }
    else{
        alert("Please enter valid number");
    }

   
};


let resetinput = () => {
    let numRow = document.getElementById("number-row").value=0;
    let numCol = document.getElementById("number-col").value=0;
}


let generateRandomNumber = () => {
    let min=0;
    let max=100;
    return Math.floor(Math.random()*(max-min +1))+min;
}