export function criarSpanPericulosidade(periculosidade) {
  const box_banner = document.querySelector(".banner");

  const divPericulosidade = document.createElement("div");
  const icon = document.createElement("img");
  const badge = document.createElement("span");

  divPericulosidade.className = "box-badge";
  icon.className = "icon-badge";
  badge.className = "card-badge";

  const nivel = periculosidade.trim().toLowerCase();
  switch (nivel) {
    case "vermelho":
      icon.src = "/frontend/assets/images/icons/periculosidade/perigo.svg";
      divPericulosidade.style.backgroundColor = "red";
      badge.textContent = "Perigo";
      break;
    case "laranja":
      icon.src = "/frontend/assets/images/icons/periculosidade/perigo.svg";
      divPericulosidade.style.backgroundColor = "red";
      badge.textContent = "Perigo";
      break;

    case "amarelo":
      icon.src = "/frontend/assets/images/icons/periculosidade/atencao.svg";
      divPericulosidade.style.backgroundColor = "yellow";
      badge.style.color = "black";
      badge.textContent = "Atenção";
      break;

    case "azul":
      icon.src = "/frontend/assets/images/icons/periculosidade/seguro.svg";
      divPericulosidade.style.backgroundColor = "green";
      badge.textContent = "Seguro";
      break;
    case "verde":
      icon.src = "/frontend/assets/images/icons/periculosidade/seguro.svg";
      divPericulosidade.style.backgroundColor = "green";
      badge.textContent = "Seguro";
      break;

    default:
      console.log("Erro na separação de cor dos badges");
      break;
  }

  divPericulosidade.appendChild(icon);
  divPericulosidade.appendChild(badge);
  box_banner.appendChild(divPericulosidade);
}