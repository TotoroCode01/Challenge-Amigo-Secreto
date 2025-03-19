const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado")

function agregarAmigo() {

  if (inputAmigo.value == ""){
    alert("Debes ingresar un nombre") ; return
  }
  if (!isNaN(inputAmigo.value.trim())) {
    alert("El valor ingresado no puede ser un número.") ; return};

  if (listaAmigos.includes(inputAmigo.value.trim())) {
    alert("Este nombre ya está registrado."); return};
    
  console.log(typeof inputAmigo.value)
  listaAmigos.push(inputAmigo.value);
  //lo de abajo es la version resumida y convertida en lista con HTML: ulListaAmigos.innerHTML += ulListaAmigos.innerHTML + inputAmigo.value; 
  ulListaAmigos.innerHTML +=`<li>${inputAmigo.value}</li>`
};

function sortearAmigo() {
  const random = Math.floor((Math.random()*listaAmigos.length));
  const amigoSecreto = listaAmigos[random]
  ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}


