import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardarriba = document.querySelector ("#cardarriba")
  let cardcenter = document.querySelector ("#cardcenter")
let cardabajo = document.querySelector ("#cardabajo")
 let pintas = ["♦", "♥", "♠","♣"]
 let numbers = [ "A",2,3,4,5,6,7,8,9,"J","K","Q"]
 
 
  //let randomNumbers= Math.floor(Math.random()*numbers.length)
  //card-center.textContent = numbers [randomNumbers]
  let randompintas = Math.floor (Math.random()*pintas.length)
  cardarriba.textContent= pintas [randompintas]
  cardabajo.textContent= pintas [randompintas]
    
    let randomNumbers = Math.floor (Math.random ()*numbers.length)
    cardcenter.textContent= numbers [randomNumbers]
     
    if (pintas [randompintas] == "♦" || pintas.randompintas =="♥") {
      cardarriba.style.color= "red"
      cardcenter.style.color = "red"
      cardabajo.style.color = "red"
    }

  };
