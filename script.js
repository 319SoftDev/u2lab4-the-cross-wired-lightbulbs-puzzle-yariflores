// YOUR CODE HERE
console.log("Script Running.");

// switch1: lightbulb3, lightbulb8
const switch1 = document.querySelector("#switch1");

const change38 = () => {
    const light3 = document.querySelector("#lightbulb3");
    const light8 = document.querySelector("#lightbulb8");
    light3.classList.toggle("active");
    light8.classList.toggle("active");
}
switch1.addEventListener('change',change38);



// switch2: lightbulb1, lightbulb7

const switch2 = document.querySelector("#switch2");

const change17= () => {
    const light1 = document.querySelector("#lightbulb1");
    const light7 = document.querySelector("#lightbulb7");
    light1.classList.toggle("active");
    light7.classList.toggle("active");
}
switch2.addEventListener('change',change17);



// switch3: lightbulb4, lightbulb6, lightbulb8

const switch3 = document.querySelector("#switch3");

const change468= () => {
    const light4 = document.querySelector("#lightbulb4");
    const light6 = document.querySelector("#lightbulb6");
    const light8 = document.querySelector("#lightbulb8");
    light4.classList.toggle("active");
    light6.classList.toggle("active");
    light8.classList.toggle("active");
}
switch3.addEventListener('change',change468);



// switch4: lightbulb2, lightbulb9

const switch4 = document.querySelector("#switch4");

const change29= () => {
    const light2 = document.querySelector("#lightbulb2");
    const light9 = document.querySelector("#lightbulb9");
    light2.classList.toggle("active");
    light9.classList.toggle("active");
}
switch4.addEventListener('change',change29);



// switch5: lightbulb5

const switch5 = document.querySelector("#switch5");

const change5= () => {
    const light9 = document.querySelector("#lightbulb9");
    light9.classList.toggle("active");
}
switch5.addEventListener('change',change5);



// switch6: lightbulb1, lightbulb4
const switch6 = document.querySelector("#switch6");

const change14= () => {
    const light1 = document.querySelector("#lightbulb1");
    const light4 = document.querySelector("#lightbulb4");
    light1.classList.toggle("active");
    light4.classList.toggle("active");
}
switch6.addEventListener('change',change14);



// switch7: lightbulb2, lightbulb3
const switch7 = document.querySelector("#switch7");

const change23= () => {
    const light2 = document.querySelector("#lightbulb2");
    const light3 = document.querySelector("#lightbulb3");
    light2.classList.toggle("active");
    light3.classList.toggle("active");
}
switch7.addEventListener('change',change23);



// switch8: lightbulb5, lightbulb9
const switch8 = document.querySelector("#switch8");

const change59= () => {
    const light5 = document.querySelector("#lightbulb5");
    const light9 = document.querySelector("#lightbulb9");
    light5.classList.toggle("active");
    light9.classList.toggle("active");
}
switch8.addEventListener('change',change59);



// switch9: lightbulb6, lightbulb7
const switch9 = document.querySelector("#switch9");

const change67= () => {
    const light6 = document.querySelector("#lightbulb6");
    const light7 = document.querySelector("#lightbulb7");
    light6.classList.toggle("active");
    light7.classList.toggle("active");
}
switch9.addEventListener('change', change67);

// master switch 
const masterswitch = document.querySelector("#switchMaster");

const master= () => {
    const light1 = document.querySelector("#lightbulb1");
    const light4 = document.querySelector("#lightbulb4");
    light1.classList.toggle("active");
    light4.classList.toggle("active");
    const light2 = document.querySelector("#lightbulb2");
    const light3 = document.querySelector("#lightbulb3");
    light2.classList.toggle("active");
    light3.classList.toggle("active");
    const light5 = document.querySelector("#lightbulb5");
    const light9 = document.querySelector("#lightbulb9");
    light5.classList.toggle("active");
    light9.classList.toggle("active");
    const light6 = document.querySelector("#lightbulb6");
    const light7 = document.querySelector("#lightbulb7");
    light6.classList.toggle("active");
    light7.classList.toggle("active");
    const light8 = document.querySelector("#lightbulb8");
    light8.classList.toggle("active");
}
masterswitch.addEventListener('change', master);
 

console.log("Script Running.");



// Add a restart
function restart() {
  // Turn all switches "on" 
  const allSwitches = document.querySelectorAll('input[type="checkbox"]');
  allSwitches.forEach(switchElement => {
    switchElement.checked = true; 
  });

  // Turn all lights off (gray)
  const allLights = document.querySelectorAll('.lightbulb');
  allLights.forEach(light => {
    light.classList.remove("active"); 
  });
}

document.querySelector("#restartBtn").addEventListener("click", restart);









