const form = document.getElementById('form')
const telefone = [];
const nome = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizaTabela();
})

function adicionalinha() {
    const inputNome = document.getElementById('nome-cadastro');
    const inputTelefone = document.getElementById('telefone-cadastro');

    if (telefone.includes(inputTelefone.value)) {
        alert(`O número de telefone: ${inputTelefone.value} já foi inserido`);
    } else {
        telefone.push(inputTelefone.value);
        nome.push(parseFloat(inputNome.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}