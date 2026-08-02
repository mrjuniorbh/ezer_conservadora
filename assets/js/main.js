// ============================
// Menu Mobile
// ============================
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.header__toggle');
    const nav = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.nav__link');
  
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        nav.classList.toggle('open');
      });
  
      // Fechar menu ao clicar em um link (mobile)
      navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('open');
        });
      });

      // Fechar menu ao clicar fora dele
      document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
          nav.classList.remove('open');
        }
      });
    }
  
    // ============================
    // Formulário de Contato (simples)
    // ============================
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
  
    if (contactForm && formFeedback) {
      contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        // Validação simples
        const nome = contactForm.nome.value.trim();
        const email = contactForm.email.value.trim();
        const telefone = contactForm.telefone.value.trim();
        const empresa = contactForm.empresa.value.trim();
        const mensagem = contactForm.mensagem.value.trim();
  
        if (!nome || !email || !telefone || !empresa || !mensagem) {
          formFeedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
          formFeedback.style.color = '#c62828';
          return;
        }
  
        // Aqui você pode integrar com backend, envio de e-mail, API de CRM etc.
        // Por enquanto, apenas exibe mensagem de sucesso e limpa o formulário.
        formFeedback.textContent = 'Mensagem enviada com sucesso! Em breve nossa equipe entrará em contato.';
        formFeedback.style.color = '#2e7d32';
        contactForm.reset();
      });
    }
  });
