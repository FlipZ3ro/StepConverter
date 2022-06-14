// The fun part :)

    // Event Listener to trigger the function
    document.querySelector(".calculate").addEventListener("click", function() {

    // hide output
    document.getElementById("km").style.display = "none";
    document.getElementById("calories").style.display = "none";

    // Show Loader animation
    document.querySelector(".loader").style.display = "block";
    setTimeout(step_conv, 2000)
});

// Event Listener for clear button
document.querySelector(".clear").addEventListener("click", clear)


// Calculate function
function step_conv() {
    // declaring step variable
    const step = document.getElementById('step').value;
    // conversion form step to Km
    let index = (step * 0.0008045).toFixed(2);
    // conversion from Km to calories burned
    let index1 = (index *55).toFixed(2)
    // console.Log("Your Step in Km: " + index)
    // console.Log("Your calories burned : " + index1)

    //condition to check if step field == 0 or not
if (step != 0) {
        const km = document.getElementById("km");
        const calories = document.getElementById("calories")

        //displaying results on the screen
        km.innerHTML = "KM walked 🏃 = " + index + "km";
        calories.innerHTML = "Calories burned 🔥 = " + index1 + "Cal";
        
        // Hiding the loader and output
        document.getElementById("km").style.display = "block";
        document.getElementById("calories").style.display = "block";
        document.querySelector(".loader").style.display = "none";
} else {
    // Error Message
    // Call the error function
    error()
    function error() {
            document.getElementById("km").style.display = "block"
            document.getElementById("calories").style.display = "block";
            document.querySelector(".loader").style.display = "none";
            // displaying an error message
            document.getElementById("km").innerHTML = 
            "<span style='color:black; background-color:pink; border-radius:10px; padding:3px;'>⚠ Error: Enter Number of step first!"
            // Settimout method to hide the message after 5 second
            setTimeout(() => {
                document.getElementById("km").innerHTML ="";
                document.getElementById("calories").innerHTML ="";
            }, 5000);
            
        }
    } 
}

// Clear function - for the clear button
function clear() {
    document.getElementById('step').value="";
    document.getElementById('km').innerHTML="";
    document.getElementById('calories').innerHTML="";
}
