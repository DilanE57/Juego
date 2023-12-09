const $botones = document.querySelectorAll("button");
const apodo = document.getElementById("apodo");

$botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    switch (boton.textContent) {
      case "Dilan":
        apodo.innerHTML = `El apodo para ${boton.textContent} será: Nucita`;
        break;

      case "Shirley":
        apodo.innerHTML = `El apodo para ${boton.textContent} será: Shishi`;
        break;

      case "Lilian":
        apodo.innerHTML = `El apodo para ${boton.textContent} será: Mini elfo`;
        break;

      case "Marlyn":
        apodo.innerHTML = `El apodo para ${boton.textContent} será: Sebitass guapo :)`;
        break;

      case "Emerson":
        apodo.innerHTML = `El apodo para ${boton.textContent} será: Camisa de botones `;
        break;
    }
  });
});
