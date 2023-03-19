const abrir = document.querySelector(".abrir");
const cerrar = document.querySelector(".cerrar");
const elUl = document.querySelector(".el-ul");

abrir.addEventListener("click", () => {
  if (!elUl.classList.contains("mostrar")) {
    elUl.classList.add("mostrar");
    abrir.classList.add("hidden");
    cerrar.classList.remove("hidden");
  }
});
cerrar.addEventListener("click", () => {
  if (elUl.classList.contains("mostrar")) {
    elUl.classList.remove("mostrar");
    cerrar.classList.add("hidden");
    abrir.classList.remove("hidden");
  }
});
