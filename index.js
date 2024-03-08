// put <script src="index.js"></script> just above closing </body> so 
//JavaScript runs after html fully loads in.



// Declare a variable to store the username
let Username;

// Assign an event handler to the onclick event of the element with the ID "mySubmit"
document.getElementById("mySubmit").onclick = function(){
    // Retrieve the value entered in the input field with the ID "myText" and store it in the Username variable
    Username = document.getElementById("myText").value;
    // Update the text content of the element with the ID "myH1" to display a greeting message including the entered username
    document.getElementById("myH1").textContent = `Hello ${Username}`;
}