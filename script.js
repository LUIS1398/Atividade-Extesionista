// ========================================
// MENU MOBILE
// ========================================

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("menu-aberto");
  });
}

// ========================================
// EFEITO NO CABEÇALHO AO ROLAR
// ========================================

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (header) {
    if (window.scrollY > 50) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }
  }
});

// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";
botaoTopo.classList.add("botao-topo");

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botaoTopo.classList.add("mostrar");
  } else {
    botaoTopo.classList.remove("mostrar");
  }
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ========================================
// FORMULÁRIO DE CONTATO
// ========================================

const formularioContato = document.querySelector(".contato-form");

if (formularioContato) {
  formularioContato.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const assunto = document.querySelector("#assunto");
    const mensagem = document.querySelector("#mensagem");

    if (
      nome.value.trim() === "" ||
      email.value.trim() === "" ||
      assunto.value.trim() === "" ||
      mensagem.value.trim() === ""
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert(
      "Mensagem enviada com sucesso!\n\n" +
        "Obrigado pelo contato, " +
        nome.value +
        "!",
    );

    formularioContato.reset();
  });
}

// ========================================
// FORMULÁRIO DE VOLUNTÁRIO
// ========================================

const formularioVoluntario = document.querySelector(".cadastro-form");

if (formularioVoluntario) {
  formularioVoluntario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const telefone = document.querySelector("#telefone");
    const interesse = document.querySelector("#interesse");

    if (
      nome.value.trim() === "" ||
      email.value.trim() === "" ||
      telefone.value.trim() === "" ||
      interesse.value === ""
    ) {
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }

    alert(
      "Cadastro realizado com sucesso!\n\n" +
        "Obrigado por querer fazer parte do Instituto Conecta Futuro, " +
        nome.value +
        "!",
    );

    formularioVoluntario.reset();
  });
}

// ========================================
// ANIMAÇÃO DOS ELEMENTOS
// ========================================

const elementos = document.querySelectorAll(
  ".projeto-card, .evento-card, .ajuda-card, .card-info",
);

const observar = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("aparecer");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

elementos.forEach((elemento) => {
  observar.observe(elemento);
});
