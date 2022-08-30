var title = document.querySelector("#dilicia");
var filmes = ["Parasita","Ilha do medo","Django Livre","Whiplash","Wall-E"];
var botoes = document.getElementById("butao");
var caixa = document.querySelector(".caixa").value;
var title2 = window.document.getElementsByTagName("h2")[0]
var lista = document.getElementById("lista");

console.log(title2);


function butao(){

  lista.innerHTML="";


 caixa = document.querySelector(".caixa").value;
 title.innerHTML="Bem vindo "+caixa;
 document.querySelector(".caixa").value=" ";


 title2.innerHTML="Lista de filmes: ";

 filmes.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    lista.appendChild(li);
  })

}

function apagar(){

  title2.innerHTML="";
  lista.innerHTML="";

}

