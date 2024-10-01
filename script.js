const imagemPrincipal = document.getElementById('imagem-principal');

const miniaturas = document.querySelectorAll('miniaturas');

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function() { 
        const novaImagem = this.getAttribute('data-imagem');

        imagemPrincipal.src = novaImagem;
    });
});