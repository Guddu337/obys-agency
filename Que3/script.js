//jab bhi form ke sath deal karo to yaad rakho ki submit hone parforms page ko 
//reload kar dete hai , aur tumhe khayal rakhana hai kipages reload na
//,nahi to agar page reload hua to js nahi chalegi kyoki js chal paye se phle hi page reload
//ho chuka hoga  

var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");

form.addEventListener("submit",function(ev){
        ev.preventDefault();
        for(var i=0;i<inps.length; i++){
            if(inps[i].value.trim() === ''){
                h4.textContent="Error, some fields are blank";
                h4.style.color="red";
                break;
            }
        }
})