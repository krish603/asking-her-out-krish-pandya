const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const questions = document.querySelector(".questions");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
var s = document.querySelector(".muse");

s.addEventListener("click",function(){
    var Audiobe = new Audio("Khwab.mp3");
    Audiobe.play();
    s.style.display = "none";
    gif.src =
    "giphy2.gif";
  
  })

  

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yayyyy kal milte hainnnnnnnnn";
  questions.innerHTML = "I loooooove u sooooo much ";
  gif.src =
    "UMon0fuimoAN9ueUNP.webp";
});

noBtn.addEventListener("mouseover", () => {
  // const noBtnRect = noBtn.getBoundingClientRect();
  // const maxX = window.innerWidth - noBtnRect.width;
  // const maxY = window.innerHeight - noBtnRect.height;

  // const randomX = Math.floor(Math.random() * maxX);
  // const randomY = Math.floor(Math.random() * maxY);

  // noBtn.style.left = randomX + "px";
  // noBtn.style.top = randomY + "px";

  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

