// var home = document.querySelector("#Home");
// var about = document.querySelector("#About");
// var contact = document.querySelector("#Contact");

// var hometext = document.querySelector("#Hometext");
// var abouttext = document.querySelector("#Abouttext");
// var contacttext = document.querySelector("#Contacttext");

// hometext.style.displaye = "block";
// hometext.style.width = "50%";

// home.addEventListener("click" , function(){
//     saaretexthatao();
//     hometext.style.displaye = "block";
//     hometext.style.width = "50%";
// })
// about.addEventListener("click" , function(){
//     saaretexthatao();
//     abouttext.style.displaye = "block";
//     abouttext.style.width = "50%";
// })
// contact.addEventListener("click" , function(){
//     saaretexthatao();
//     contacttext.style.displaye = "block";
//     contacttext.style.width = "50%";
// })
// function saaretexthatao(){
//     document.querySelectorAll("h3").forEach(function(h3){
//         h3.style.display = "none";

//     })
// }

var divs = document.querySelectorAll('.tab');
var texts = document.querySelectorAll('h3');
texts[0].style.display = "block";
texts[0].style.width = "50%";
divs.forEach(function(div, index){
    div.addEventListener("click", function(){
        hideAllText();
        texts[index].style.display = "block";
        texts[index].style.width = "50%";
    })
})
function hideAllText(){
    texts.forEach(fun(text){
        text.style.display = "none";
    });
}