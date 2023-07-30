#########################################
//Javascript Code to Prevent Colab from 
//timing out while rendering Blender scenes
#########################################

#########################################
//Press "Control + Shift + I" while in the browser
//and paste the following code into the console tab. 
//the 60,000 is how many milliseconds to wait before clicking
#########################################

function ClickConnect(){
console.log("Working"); 
document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
}
var clicker = setInterval(ClickConnect,60000);

##########################################
//and then type the following code to stop
//the clicker code
#########################################

clearInterval(clicker);
