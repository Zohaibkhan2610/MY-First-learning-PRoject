let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let btn = document.getElementById("calbtn");
let para = document.getElementsByClassName("agepara")[0];

function ageCalutor(){
     let birthday = new Date(userInput.value);

     let d1 = birthday.getDate();
     let m1 = birthday.getMonth() +1;
     let y1 = birthday.getFullYear();

     let today = new Date();
     let d2 = today.getDate();
     let m2 = today.getMonth() + 1;
     let y2 = today.getFullYear();

     let d3,m3,y3;
// --------------------years-----------
     y3 = y2 -y1;
// -------------------days------------
     if(d2>=d1){
          d3 = d2 - d1;
     }else{
          y2--;
          d3 = 12 + d2 - d1
     }

     // ------month------
     m3 = m2 - m1;
     if (m3 < 0) {
       m3 += 12; // Adjust for months after current month
       y2--;
     }
     console.log("days",d3,'years',y3,'months',m3)
     para.innerText = `Your age is ${y3} years ${m3} months and ${d3} days`;
}

function mday(year,month){
     return new Date(year,month,0).getDate();
}

btn.addEventListener("click",ageCalutor);
btn.addEventListener('click',
     function(){
          para.style.display = "flex"
     }
)