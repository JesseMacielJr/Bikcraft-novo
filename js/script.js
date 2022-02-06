// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
    if (location.href.includes(link.href)) {
        link.classList.add("ativo");
    }
})

// Ativar Itens do Orçamento
const parametros = new URLSearchParams(location.search)

parametros.forEach(parametro => {
    const elemento = document.getElementById(parametro)
    if (elemento) {
        elemento.setAttribute("checked", true)
    }
    console.log(parametro)
})


// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button")

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', e => {
        const controls = e.currentTarget.getAttribute("aria-controls")
        const resposta = document.getElementById(controls)
        resposta.classList.toggle("ativa");
        e.currentTarget.setAttribute('aria-expanded', resposta.classList.contains("ativa"))

    })
})