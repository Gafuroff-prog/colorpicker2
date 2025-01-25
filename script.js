let counter = 0;


document.getElementById('sendButton').addEventListener('click', () => {
    const input = document.getElementById('numberInput').value; 
    const output = document.getElementById('output'); 


    if (!isNaN(input) && input.trim() !== "") { 
        counter = parseInt(input) || 0; 
        document.getElementById('counterValue').textContent = counter; 
        output.textContent = "";
    } else {
        output.textContent = "Iltimos, tori nomer kiriting."; 
    }
});


document.getElementById('incrementButton').addEventListener('click', () => {
    counter ++;
 
    document.getElementById('counterValue').textContent = counter;
   
});

document.getElementById('decrementButton').addEventListener('click',() => {
    counter --;
    
    document.getElementById('counterValue').textContent = counter;
  
});

document.getElementById('colorPicker').addEventListener('input', (color) => {
    document.getElementById('counterValue').style.color = color.target.value;
});

document.body.style.backgroundColor = "black"

//numberInput
document.getElementById('numberInput').style.borderRadius = "30px";
document.getElementById('numberInput').style.border = "30px";
document.getElementById('numberInput').style.height = "10px";
document.getElementById('numberInput').style.width = "230px";
document.getElementById('numberInput').style.padding = "20px";
document.getElementById('numberInput').style.boxSizing = "borderBox";


//sendButton
document.getElementById('sendButton').style.height = "50px"
document.getElementById('sendButton').style.width = "100px"
document.getElementById('sendButton').style.borderRadius = "30px"
document.getElementById('sendButton').style.color = "white"
document.getElementById('sendButton').style.backgroundColor = "#2A2A2A"
document.getElementById('sendButton').style.border = "none"

//counterValue
document.getElementById('counterValue').style.color = "white"
document.getElementById('counterValue').style.fontWeight = "900px"

//counter
document.getElementsById('counter').style.border = "none"
document.getElementsById('counter').style.borderRadius = "60px"
document.getElementsById('counter').style.width = "300px"
document.getElementsById('counter').style.backgroundColor = "#D9D9D980"
document.getElementsById('counter').style.padding = "1000px"
document.getElementById('counter').style.position = "relative"
document.getElementById('counter').style.left = "120px"

//selectColor
document.getElementById('colorPicker').style.color = "white";