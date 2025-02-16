// Seleciona os elementos
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('nav.menu ul li a'); // Seleciona todos os links no menu

// Abre o menu ao clicar no botão hamburger
menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

// Fecha o menu ao clicar no botão de fechar
closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Fecha o menu ao clicar em um link de navegação (quando em telas pequenas)
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});



document.addEventListener("DOMContentLoaded", function() {
    var swiperAdvogados = new Swiper('.swiper-advogados', {
      loop: true,
      pagination: {
        el: '.swiper-pagination-adv',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next-adv',
        prevEl: '.swiper-button-prev-adv',
      },
    });
  });






function toggleArea(id) {
  const card = document.getElementById(id);
  const detalhes = card.querySelector('.detalhes');
  const miniResumo = card.querySelector('.mini-resumo');
  const btnExpand = card.querySelector('.btn-expand');
  const btnCollapse = card.querySelector('.btn-collapse');

  // Alterna a exibição dos detalhes e do resumo
  if (detalhes.style.display === 'block') {
    detalhes.style.display = 'none';
    miniResumo.style.display = 'block';
    btnExpand.style.display = 'inline-block';
    btnCollapse.style.display = 'none';
    card.style.height = 'auto';
  } else {
    detalhes.style.display = 'block';
    miniResumo.style.display = 'none';
    btnExpand.style.display = 'none';
    btnCollapse.style.display = 'inline-block';
    card.style.height = 'auto';
  }
}







// Selecione todos os links de ancoragem
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Realize a rolagem suave até a seção, com um ajuste de deslocamento
    const targetId = this.getAttribute('href').substring(1); // Remove o '#' do link
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 100, // Ajuste a posição do "respiro"
      behavior: 'smooth'
    });
  });
});


let advogados = [
  {
    nome: "Antonio Trajano da Silva Filho",
    cargo: "Sócio/Advogado",
    imagem: "../imagens/advogado.jpg",
    info: `
      <li>Formação Acadêmica: Universidade Paulista – UNIP, Campus Ribeirão Preto - SP</li>
      <li>Inscrição na OAB: Estados de São Paulo e Minas Gerais</li>
      <li>Curso Técnico: Transações Imobiliárias pela EBRADI – Campus São Paulo - SP</li>
      <li>Especialização: Direito Imobiliário pela Faculdade Getúlio Vargas</li>
      <li>Início da Carreira: 2008 como estagiário</li>
      <li>Experiência Profissional: Mais de 17 anos atuando nas áreas empresarial e imobiliária</li>`
  },
  {
    nome: "Ariane de Souza Godinho",
    cargo: "Advogada",
    imagem: "../imagens/ariane.jpeg",
    info: `
      <li>Formação Acadêmica: Universidade de Franca </li>
      <li>Inscrição na OAB: Estado de Minas Gerais </li>
      <li>Especialização: Pós-graduação em Direito do Trabalho, Processo Civil e Direito Previdenciário pela FGV</li>
      <li>Especialização: Pós-graduação em Direito do Trabalho, Processo Civil e Direito Previdenciário pela FGV</li>
      `
  },

  {
    nome: "Gabriel Moraes",
    cargo: "Advogada",
    imagem: "../imagens/gabriel.jpeg",
    info: `
      <li>Formação Acadêmica: Universidade Paulista </li>
      <li>Inscrição na OAB: Estado de São Paulo </li>
      <li>Especialista em Direito do Trabalho</li>
     
      `
  }
];

let atual = 0;

function trocarAdvogado() {
  atual = (atual + 1) % advogados.length;
  atualizarExibicao();
}

function voltarAdvogado() {
  atual = (atual - 1 + advogados.length) % advogados.length;
  atualizarExibicao();
}

function atualizarExibicao() {
  document.getElementById("advogado-nome").innerText = advogados[atual].nome;
  document.getElementById("advogado-cargo").innerText = advogados[atual].cargo;
  document.getElementById("ft-advogado").style.backgroundImage = `url(${advogados[atual].imagem})`;
  document.getElementById("advogado-info").innerHTML = advogados[atual].info;
}


  //ativação de animações
  document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com as classes de animação
    const elements = document.querySelectorAll('.surge-bottom, .surge-right, .surge-left');
  
    // Configura o IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe 'visible' quando o elemento entra na visualização
          entry.target.classList.add('visible');
          // Para observar uma vez e parar, economizando recursos
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Ajusta para que o elemento seja considerado visível quando 10% dele estiver na viewport
    });
  
    // Observa todos os elementos
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  



