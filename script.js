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

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

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

// Carregamento dinâmico de projetos
const projetos = [
    {
        titulo: 'Arquitetura Serverless',
        imagem: './projetos/site1.png',
        link: 'https://projeto-tcc-dun-delta.vercel.app/'
    },
    {
        titulo: 'Portologística',
        imagem: './projetos/site2.png',
        link: 'https://portologistica-pied.vercel.app/'
    }
];

const projetosContainer = document.querySelector('.projetos-container');

projetos.forEach(projeto => {
    const projetoDiv = document.createElement('div');
    projetoDiv.className = 'projeto';

    const link = document.createElement('a');
    link.href = projeto.link;
    link.target = '_blank';

    const img = document.createElement('img');
    img.src = projeto.imagem;
    img.alt = projeto.titulo;

    const p = document.createElement('p');
    p.textContent = projeto.titulo;

    link.appendChild(img);
    projetoDiv.appendChild(link);
    projetoDiv.appendChild(p);
    projetosContainer.appendChild(projetoDiv);
});

// Atualização dinâmica do ano no rodapé
document.getElementById('current-year').textContent = new Date().getFullYear();

// Botão de voltar ao topo
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Modal para detalhes dos projetos
function openModal(title, description) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('project-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

document.querySelectorAll('.projeto').forEach(projeto => {
    projeto.addEventListener('click', function () {
        const title = this.querySelector('p').textContent;
        const description = "Descrição detalhada do projeto..."; // Adicione a descrição do projeto aqui
        openModal(title, description);
    });
});

// Exibe a página inicial ao carregar o site
window.onload = function () {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
};