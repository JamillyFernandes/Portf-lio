
// Função para alternar a visibilidade da seção "Saiba mais sobre mim"
function toggleMoreInfo() {
    const moreInfo = document.getElementById("more-info");
    const button = document.querySelector(".contact-btn");

    if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none";
        button.textContent = "Saiba mais sobre mim";
    } else {
        moreInfo.style.display = "block";
        button.textContent = "Mostrar menos";
        moreInfo.scrollIntoView({ behavior: "smooth" });
    }
}

// Navegação entre as seções
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Oculta todas as seções
        document.querySelectorAll('.main > div').forEach(section => {
            section.style.display = 'none';
        });

        // Exibe a seção clicada
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Validação do formulário de contato
document.querySelector('.contatos form').addEventListener('submit', function (e) {
    const email = this.querySelector('input[name="email"]');
    const assunto = this.querySelector('input[name="assunto"]');
    const mensagem = this.querySelector('textarea[name="mensagem"]');

    if (!email.value || !assunto.value || !mensagem.value) {
        e.preventDefault();
        alert('Por favor, preencha todos os campos.');
    }
});

// Efeito de destaque ao passar o mouse sobre os projetos
document.querySelectorAll('.projeto').forEach(projeto => {
    projeto.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    projeto.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// Exibe a página inicial ao carregar o site
window.onload = function () {
    // Oculta todas as seções, exceto a página inicial
    document.querySelectorAll('.main > div').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('inicio').style.display = 'block';
};

// Verifica se a URL corresponde à página inicial
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    document.body.classList.add('home');
}

// Mostrar a seção de contatos ao clicar no link "Contatos"
document.querySelector('a[href="#contatos"]').addEventListener('click', function (e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    document.getElementById('contatos').style.display = 'block'; // Mostra a seção
});
