window.onload = function() {
   let pilotOne= document.getElementById("pilotName");
   let pilotTwo = document.getElementById("copilotName");
   let fuelAmount = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let submitButton = document.getElementById("formSubmit");

   pilotOne.addEventListener("input", function() {

   })

   pilotTwo.addEventListener("input", function() {

   })

   fuelAmount.addEventListener("input", function() {

   })

   cargoMass.addEventListener("input", function() {
      
   })

   submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      let pilotsName = pilotOne.value;
      if (pilotsName === '') {
         alert("There is no pilots name entered!")
      }
      let copilotsName = pilotTwo.value;
      if (copilotsName === '') {
         alert("There is no copilots name entered!")
      }
      let fulltank = fuelAmount.value;
      if (fulltank < 10000) {
         alert("Not enough fuel to launch")
      }
      let cargoReady = cargoMass.value;
      if (cargoReady > 10000)   {
         alert("To heavy to launch")
      }
      let noGo = document.getElementById("launchStatus");
      noGo.innerText = "Shuttle not ready for launch";
      noGo.setAttribute("style", "color: red");
      
      let weRGo = document.getElementById("launchStatus");
      weRGo.innerText = "Shuttle is ready for launch";
      weRGo.setAttribute("style", "color: green");

      // let badLaunchData = document.getElementById("faultyItems");
      // badLaunchData.innerHTML = 
      // <ol>
      //    <li id="pilotStatus">Pilot ${pilotOne.value} is ready</li>
      //    <li id="copilotStatus">Co-pilot ${pilotTwo.value} iS ready</li>
      //    <li id="fuelStatus">Fuel level high enough for launch</li>
      //    <li id="cargoStatus">Cargo mass low enough for launch</li>
      // </ol>
   })

}

// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
