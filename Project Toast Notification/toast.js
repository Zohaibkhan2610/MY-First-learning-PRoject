let toastBox =  document.querySelector(".toastBox");
let SccuessMsg = 'Scuessfull Submited';
let errorMsg = 'Please fix the error!';
let InvaildMsg = "Invaild input, check again";

function change(msg){
     let toast = document.createElement('div');
     toast.classList.add('toast');
     toast.innerHTML = msg;
     console.log(toast);
     toastBox.appendChild(toast);
     setTimeout(() => {
          toast.remove();
     }, 4000);
}


