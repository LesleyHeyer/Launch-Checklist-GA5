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

window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget");
     
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">
            `;
         });
      }); // fetch end     
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      event.preventDefault();
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         
         let faultyItems = document.getElementById("faultyItems");
         let pilotStatus = document.getElementById("pilotStatus");
         let copilotStatus = document.getElementById("copilotStatus");
         let fuelStatus = document.getElementById("fuelStatus");
         let cargoStatus = document.getElementById("cargoStatus");
         let launchStatus = document.getElementById("launchStatus");

         launchStatus.innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color = "";

         let showAlerts = true;
         let showFaultyItems = true;
         let fuelLevelIsGood = true;
         let cargoMassIsGood = true;

         if (pilotName.value === "" ||
             copilotName.value === "" ||
             fuelLevel.value === "" ||
             cargoMass.value === "") {

            alert("All fields required!");
            showAlerts = false;
            showFaultyItems = false;
            
         }

         if (isNaN(Number(pilotName.value))) {
            pilotStatus.innerHTML = `
            Pilot ${pilotName.value} is ready for launch
            `;
         } else {
            showFaultyItems = false;
            if (showAlerts) {
               alert("Invalid Input. Pilot name should not be a number.");
            }
         }

         if (isNaN(Number(copilotName.value))) {
            copilotStatus.innerHTML = `
            Co-Pilot ${copilotName.value} is ready for launch
            `;
         } else {
            showFaultyItems = false;
            if (showAlerts) {
               alert("Invalid Input. Co-Pilot name should not be a number.");
            }
         }

         if (Number(fuelLevel.value) + 1) {
            if (Number(fuelLevel.value) > 10000) {
               fuelStatus.innerHTML = 'Fuel level high enough for launch';
            } else {
               fuelLevelIsGood = false;
               fuelStatus.innerHTML = 'Fuel level too low for launch';
            }
         } else {
            showFaultyItems = false;
            fuelStatus.innerHTML = `${typeof fuelLevel.value}`
            if (showAlerts) {
               alert("Invalid Input. Fuel Level must be a number.");
            }
         }

         if (Number(cargoMass.value) + 1) {
            if (Number(cargoMass.value) < 10000) {
               cargoStatus.innerHTML = 'Cargo Mass low enough for launch';
            } else {
               cargoMassIsGood = false;
               cargoStatus.innerHTML = 'Cargo Mass too high for launch';
            }
         } else {
            showFaultyItems = false;
            if (showAlerts) {
               alert("Invalid Input. Cargo Mass must be a number.");
            }
         }

      if (showFaultyItems) {
         faultyItems.style.visibility = "visible";

         if (fuelLevelIsGood && cargoMassIsGood) {

            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle ready for launch";
   
         } else {
   
            launchStatus.style.color = "red";
            launchStatus.innerHTML = `Shuttle not ready for launch`;
   
         }

      } else {
         faultyItems.style.visibility = "hidden";
      }
      

   }); //end form.addEventListener
}); //end window.addEventListener

