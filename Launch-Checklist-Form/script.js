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

         if (pilotName.value === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
            alert("All fields required!");
         } else {

            if (Number(pilotName.value) || Number(copilotName.value)){
               alert("invalid input.")
            }
            
            if (!Number(fuelLevel.value) || !Number(cargoMass.value)) {
               alert("Invalid input, must be a number");
            }
         } //conditionals for form

            let faultyItems = document.getElementById("faultyItems");
            let pilotStatus = document.getElementById("pilotStatus");
            let copilotStatus = document.getElementById("copilotStatus");
            let fuelStatus = document.getElementById("fuelStatus");
            let cargoStatus = document.getElementById("cargoStatus");

            if (fuelLevel.value <= 10000 || cargoMass.value >= 10000) {
               faultyItems.style.visibility = "visible";

               let launchStatus = document.getElementById("launchStatus");

               launchStatus.style.color = "red";
               launchStatus.innerHTML = `Shuttle not ready for launch`;

               pilotStatus.innerHTML = `
                  Pilot ${pilotName.value} is ready for launch
               `;

               copilotStatus.innerHTML = `
               Co-Pilot ${copilotName.value} is ready for launch
               `;

                  if (fuelLevel.value <= 10000) {
                  fuelStatus.innerHTML = `
                     Fuel level too low for launch
                  `;
                  } else {
                     fuelStatus.innerHTML = `
                     Fuel level high enough for launch
                  `;
                  }

                  if (cargoMass.value >= 10000) {
                     cargoStatus.innerHTML = `
                     Cargo mass too high for launch
                  `;
                  } else {
                     cargoStatus.innerHTML = `
                     Cargo mass low enough for launch
                  `;
                  }

                
            } else {

               launchStatus.style.color = "green";

               launchStatus.innerHTML = `
               Shuttle is ready for launch
               `;

            }//shuttle status conditionals

   }); //end form.addEventListener
}); //end window.addEventListener

