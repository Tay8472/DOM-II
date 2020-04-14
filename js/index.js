// Your code goes here

//1

const colorNavTitleHover = document.querySelector(".logo-heading");

colorNavTitleHover.addEventListener("mouseenter", (touch) => {
    // touch.stopPropagation();
    if (touch.target.style.color === "black"){
        touch.target.style.color = "red";
    } else {
        touch.target.style.color = "black";}
})

colorNavTitleHover.addEventListener("mouseleave", function() {
    colorNavTitleHover.style.color = "black";
})

//2

const navListClick = document.querySelectorAll(".nav a");

navListClick.forEach((el) => {
    // el.preventDefault();
    el.addEventListener("click", function(){
        el.style.textDecoration = "underline";
        el.style.color = "red";
    })
})

navListClick.forEach((el1) => {
    el1.addEventListener("mouseleave", function(){
        el1.style.textDecoration = "none";
        el1.style.color = "blue";
    })
})

//3

const funBlast = document.querySelector(".intro h2");

funBlast.addEventListener("dblclick", function() {
    funBlast.style.color = "red";
    alert("WELCOME!");
})

//4

const funConfirm = document.querySelector(".text-content h2");

funConfirm.addEventListener("click", function(){
    funConfirm.style.color = "red";
    confirm("Are you sure you're ready to go!?");
})

//5

const imagePoof = document.querySelector("#bus");

imagePoof.addEventListener("wheel", function(){
    imagePoof.style.display = "none";
})

//6

const textEnlarge = document.querySelectorAll(".content-section p");

textEnlarge.forEach((el) => {
    el.addEventListener("mouseenter", function(){
        el.style.fontSize = "2rem";
        el.style.color = "green";
    })
})

//7

const imageFlip = document.querySelector("#map");

imageFlip.addEventListener("click", function(){
    imageFlip.style.transform = "scaleX(-1)";
})

//8

const imageTwirl = document.querySelector("#boat");

imageTwirl.addEventListener("mouseenter", function(){
    imageTwirl.style.transform = "rotateX(180deg)";
    imageTwirl.style.transition = "1s";
})

imageTwirl.addEventListener("mouseleave", function(){
    imageTwirl.style.transform = "rotateY(180deg)";
    imageTwirl.style.transition = "1s";
})

//9

const backgroundFooter = document.querySelector(".footer");

backgroundFooter.addEventListener("mouseover", function(){
    backgroundFooter.style.backgroundColor = "lightgrey";
})

backgroundFooter.addEventListener("mouseleave", function(){
    backgroundFooter.style.backgroundColor = "#FFEBCD";
})

//10

const inputText = document.querySelectorAll(".btn");

inputText.forEach((el) => {
    el.addEventListener("click", function(){
        let person = prompt("Type in 'poop':", "")
        if (person == null || person == ""){
            alert("Why would you cancel...?");
        } else {
            alert("Nice job typing poop in");
        }
    })
})