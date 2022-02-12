// Variáveis Globais
let form = document.querySelector("#formulario");
let tarefa = document.querySelector("#tarefaInput");
let lista = document.querySelector("#listaDeTarefas");
let marcarTodos = document.querySelector("#marcarTodos");
let removerTodos = document.querySelector("#removerTodos");
let submit = document.querySelector("#tarefaBotao");

// Prevençâo do Botão Submit
submit.addEventListener("click", (e) => {
  e.preventDefault();
});

// Função de Adicionar Tarefa
function adicionarNovaTarefa() {
  // Novos Elementos
  let novaTarefa = document.createElement("li");
  let textoDaTarefa = document.createElement("p");
  let containerIcons = document.createElement("div");
  let check = document.createElement("img");
  let remove = document.createElement("img");

  // Alterando atributo dos ícones
  textoDaTarefa.classList.add("textoDaTarefa");
  // Adicionando texto de entrada na tarefa
  textoDaTarefa.innerText = tarefa.value;
  containerIcons.classList.add("containerIcons");
  check.src = "./assets/img/checked-off.svg";
  check.classList.add("check");
  remove.src = "./assets/img/minus.svg";
  remove.classList.add("remove");

  // Tratar erro de  entrada
  if (textoDaTarefa.innerText.trim() === "") {
    document.querySelector("#mensagem").innerHTML =
      "Por favor preencha os campos";
  } else {
    // Adicionando Tarefa
    lista.appendChild(novaTarefa);
    lista.setAttribute("style", "padding:1rem");
    novaTarefa.appendChild(textoDaTarefa);
    novaTarefa.appendChild(containerIcons);
    containerIcons.appendChild(check);
    containerIcons.appendChild(remove);
    document.querySelector("#mensagem").innerHTML = "";


    // Resetando o Formulário
    form.reset();
    //Função de checado
    check.addEventListener("click", () => {
      if (check.getAttribute("src") == "./assets/img/checked-off.svg") {
        check.src = "./assets/img/checked-on.svg";
        textoDaTarefa.classList.add("checked");
      } else {
        check.src = "./assets/img/checked-off.svg";
        textoDaTarefa.classList.remove("checked");
      }
    });

    //Função de Remover
    remove.addEventListener("click", () => {
      lista.removeChild(novaTarefa);
    });
    //Função de Limpar Lista
    removerTodos.addEventListener("click", () => {
      novaTarefa.remove();
    });

    //Função de Marcar Todos
    marcarTodos.addEventListener("click", () => {
      let todasAsTarefas = document.querySelectorAll(".textoDaTarefa");
      let todosOsIconesChecados = document.querySelectorAll(".check");

      if (
        marcarTodos.innerText === "Marcar Todas" ||
        todosOsIconesChecados.src == "./assets/img/checked-off.svg"
      ) {
        todasAsTarefas.forEach((p) => p.classList.add("checked"));
        todosOsIconesChecados.forEach(
          (img) => (img.src = "./assets/img/checked-on.svg")
        );
        marcarTodos.innerText = "Desmarcar Todos";
      } else if (marcarTodos.innerText === "Desmarcar Todos") {
        todasAsTarefas.forEach((p) => p.classList.remove("checked"));
        todosOsIconesChecados.forEach(
          (img) => (img.src = "./assets/img/checked-off.svg")
        );
        marcarTodos.innerText = "Marcar Todas";
      }
    });
  }
}
