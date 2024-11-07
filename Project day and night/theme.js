let themeImg = document.querySelector("#icon");

themeImg.addEventListener('click',
     function(){
          document.body.classList.toggle('dark-theme');
          if(document.body.classList.contains("dark-theme")){
               themeImg.src = "theme img/day.png";
          }else{
               themeImg.src = "theme img/night.png";

          }
     }
)