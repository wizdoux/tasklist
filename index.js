const data = [
  // { desc: "Pagar contas" }, { desc: "Programar aquela lista de tarefas" }, { desc: "Comprar salgados" },
  // { desc: "Abastecer o carro" }, { desc: "Fazer o trabalho da facul" }
];

function carregarLista() {
  for (var i = 0; i < data.length; i++) {
    document.querySelector("#myUL").innerHTML +=
      ` 
    <li>
      ${data[i].desc} 
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
    }
  }
}

carregarLista()
