const form = document.querySelector(".container-form");
const nameInput = document.querySelector("#fname");
const emailInput = document.querySelector("#email");


form.addEventListener("submit", (event) =>{
  event.preventDefault();

  //verifica o campo do nome vazio
  if (nameInput.value === ""){
    alert("Digite um nome valido!");
    return;
  }

  if(emailInput.value ==="" || !ValidaEmail(emailInput.value)){
    alert("Digite um email valido!")
  }

  form.submit();
});

function ValidaEmail(email){
  const emailvalid = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if(emailvalid.test(email)){
    return true;
  }else{
    return false;
  }
}