window.onload = function() {
   // Declare your variabldes at the top!
   let pilotOne= document.getElementById("pilotName");
   let pilotTwo = document.getElementById("copilotName");
   let fuelAmount = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let submitButton = document.getElementById("formSubmit");

   // Do on the Window Load Event: 
   // 1. Fetch the planet data
   fetch('https://handlers.education.launchcode.org/static/planets.json')
   // Kyle placed this in here to get the response back as json
   .then((response) => { return response.json(); })
   .then((planetaryData) => {
      // 2. Choose a planet from the JSON (planetaryData) and get the data (the object from the array)
      console.log('THIS IS OUR JSON', planetaryData)
      let myPlanet = planetaryData[0]// Let myPlanet be equal to an object in the planetaryData array
      // 3. Set the innerHTML of the missionTarget div
      let missionDestinationElement = document.getElementById("missionTarget");
      missionDestinationElement.innerHTML = `
      <ol>
         <li>Name: ${myPlanet.name}</li>
         <li>Diameter: ${myPlanet.diameter}</li>
         <li>Star: ${myPlanet.star}</li>
         <li>Distance from Earth: ${myPlanet.distance}</li>
         <li>Number of Moons: ${myPlanet.moons}</li>
      </ol>
      <img src="${myPlanet.image}">
      `;
   })


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
      let copilotsName = pilotTwo.value;
      let fulltank = fuelAmount.value;
      let cargoReady = cargoMass.value;
      let launchStatusElement = document.getElementById("launchStatus");
      let badLaunchData = document.getElementById("faultyItems")

      
      if (pilotsName === '') { // If there is no pilots name -> there is an error!

         // If there is an error we tell them that no name has been entered
         alert("There is no pilots name entered!")

         // At this point, the shuttle is not ready for launch
         launchStatusElement.innerText = "Shuttle not ready for launch";
         launchStatusElement.setAttribute("style", "color: red");

         // Change the faultyItem HTML to show there is no pilots name
         badLaunchData.style.visibility = 'visible';
      
         badLaunchData.innerHTML = `
         <ol>
            <li id="pilotStatus">Pilot ${pilotsName} is ready</li>
            <li id="copilotStatus">Co-pilot ${copilotsName} is ready</li>
            <li id="fuelStatus">Fuel level is ${fulltank} and must be greater than 10000</li>
            <li id="cargoStatus">Cargo mass is ${cargoReady} and must be less than 10000</li>
         </ol>
         `
   
         // Then get the heck out of here
         return;
      } else if (isNaN(pilotsName)  === false) {
         alert('Enter pilot name composed of letters')
      }
      if (copilotsName === '') {
         alert("There is no copilots name entered!")

         // At this point, the shuttle is not ready for launch
         launchStatusElement.innerText = "Shuttle not ready for launch";
         launchStatusElement.setAttribute("style", "color: red");

         // Then get the heck out of here
         return;
      } else if (isNaN(copilotsName)  === false) {
         alert('Enter pilot name composed of letters')
      }
      if (fulltank < 10000) {
         alert("Not enough fuel to launch")
         // At this point, the shuttle is not ready for launch
         launchStatusElement.innerText = "Shuttle not ready for launch";
         launchStatusElement.setAttribute("style", "color: red");

         // Then get the heck out of here
         return;
      }
      if (cargoReady > 10000)   {
         alert("To heavy to launch");

         launchStatusElement.innerText = "Shuttle not ready for launch";
         launchStatusElement.setAttribute("style", "color: red");
 
      
         // Then get the heck out of here
         return;
      }
       if (pilotsName === '' || copilotsName === '' || fulltank === '' || cargoReady === '') {
         alert('All fields are required')
         return;
      }
      launchStatusElement.innerText = "Shuttle is ready for launch";
      launchStatusElement.style.color = 'green';
      
      // let pilotStatElemeent = document.getElementById("pilotStatus")
      // pilotStatElemeent.innerHTML = `${pilotsName} is ready`
      // let copilotStatElement = document.getElementById("copilotStatus")
      // copilotStatElement.innerHTML = `${copilotsName} is ready`
      // let fuelStatElemnnt = document.getElementById("fuelStatus")
      // fuelStatElemnnt.innerHTML = 'Fuel level must be above 10000'
      // let cargoStatElement = document.getElementById("cargoStatus")
      // cargoStatElement.innerHTML = 'Cargo mass must be below 10000'


      
      badLaunchData.style.visibility = 'visible';
      
      badLaunchData.innerHTML = `
      <ol>
         <li id="pilotStatus">Pilot ${pilotsName} is ready</li>
         <li id="copilotStatus">Co-pilot ${copilotsName} is ready</li>
         <li id="fuelStatus">Fuel level is ${fulltank} and is launch ready</li>
         <li id="cargoStatus">Cargo mass is ${cargoReady} and is launch ready</li>
      </ol>
      `
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
