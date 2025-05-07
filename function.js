document.getElementById("ok").onclick = function(){
    const userInput = Number(document.getElementById("userInput").value);
    document.getElementById("num1").textContent = `${userInput}`;
    if(userInput >=1 && userInput <= 10){
        document.getElementById("randomGen").onclick = function(){
            let random = Math.floor((Math.random() * 10) + 1);
            document.getElementById("num2").textContent = random;
            if(userInput === random){
                document.getElementById("p_result").textContent = `Status : You Won !!`
            }
            else{
                document.getElementById("p_result").textContent = `Status : You Loss !!`
            }
        }
    }
    else{
        document.getElementById("p_result").textContent = `Status : Number between 1-10`
    }
}