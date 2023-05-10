// Definindo uma chave para o armazenamento no localStorage
const STORAGE_KEY  = "Listadetarefas"

let Listadetarefa = {
  data: [
  { desc: "Pagar contas" }, 
  { desc: "Programar aquela lista de tarefas" }, 
  { desc: "Comprar salgados" },
  { desc: "Abastecer o carro" }, 
  { desc: "Fazer o trabalho da facul" }
 ]
};

// Função para carregar os dados no localStorage, caso adicione
if (localStorage.getItem(STORAGE_KEY)) {
  Listadetarefa = JSON.parse(localStorage.getItem(STORAGE_KEY));
}

// Função para saçvar os dados no navegador/localStorage
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Listadetarefa));
}

function carregarLista() {
  for (var i = 0; i < Listadetarefa.data.length; i++) {
    document.querySelector("#myUL").innerHTML +=
      ` 
    <li>
      ${Listadetarefa.data[i].desc} 
      <button onclick="remover()" class="close">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </li>
    `
  }
}

function adicionar() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue != '') { 
    Listadetarefa.data.push({ desc: inputValue});
    save();
    document.querySelector("#myUL").innerHTML +=
      ` 
    <li>
      ${inputValue} 
      <button onclick="remover()" class="close">
       <i class="fa-regular fa-trash-can"></i>
      </button>
    </li>
    `
  }
}

function remover() {
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      var taskIndex = Array.prototype.indexOf.call(
        document.querySelectorAll("#myUL li"),
        div
      );
      Listadetarefa.data.splice(taskIndex, 1);
      save();
    }
  }
}

carregarLista()
