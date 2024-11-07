// function showHide() {
//      var div1 = document.getElementById("rom-box-login");
//      var div2 = document.getElementById("from-box-Register");
//      var div3 = document.getElementById("wrapper");
//      if (div1.style.display === "none") {
//           div1.style.display = 'block';
//           div2.style.display = 'none';
//           div3.style.display = 'flex';
//      }
//      else {
//           div1.style.display = 'none';
//           div2.style.display = 'block';
//           div3.style.display = 'flex';

//      }
     
// }
function hide() {
     let  btn = document.querySelector('.btnlogin-popup');
     var div1 = document.getElementById("rom-box-login");
     var div2 = document.getElementById("from-box-Register");
     var div3 = document.getElementById("wrapper");

     if (div1.style.display === "none") {
          div1.style.display = 'none';
          div2.style.display = 'none';
          div3.style.display = 'none';
          btn.innerHTML = "Login";
     }
     if (div2.style.display === "none") {
          div1.style.display = 'none';
          div2.style.display = 'none';
          div3.style.display = 'none';
          btn.innerHTML = "Login";

     }
     
}

// function register(){
//      var div1 = document.getElementById("rom-box-login");
//      var div2 = document.getElementById("from-box-Register");
//      var div3 = document.getElementById("wrapper");

//      if (div1.style.display === "block"){
//           div1.style.display = 'none';
//           div2.style.display = "block";
//           div3.style.display = "flex";
//      }
// }
// function login(){
//      var div1 = document.getElementById("rom-box-login");
//      var div2 = document.getElementById("from-box-Register");
//      var div3 = document.getElementById("wrapper");
     

//      if (div2.style.display === "block"){
//           div1.style.display = 'block';
//           div2.style.display = "none";
//           div3.style.display = "flex";
//      }
// }
function btnR (){
   let  btn = document.querySelector('.btnlogin-popup');
   
   var div1 = document.getElementById("rom-box-login");
   var div2 = document.getElementById("from-box-Register");
   var div3 = document.getElementById("wrapper");
   

   if (btn.innerHTML === "Login"){
        div1.style.display = 'block';
        div2.style.display = "none";
        div3.style.display = "flex";
        btn.innerHTML = "Register";
   }
  else if (btn.innerHTML === "Register"){
     div1.style.display = 'none';
        div2.style.display = "block";
        div3.style.display = "flex";
        btn.innerHTML = "Login";
   }
}
