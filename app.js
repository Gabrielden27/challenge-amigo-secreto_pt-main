let amigos = [];

function adicionar() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortear() {
    if (amigos.length === 0) {
        alert('Adicione nomes antes de sortear!');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <li class="result-item">
            <strong>Nome sorteado:</strong> ${nomeSorteado}
        </li>
    `;

    amigos = [];
    atualizarLista();
}